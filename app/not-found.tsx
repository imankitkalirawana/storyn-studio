"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Crosshair, MousePointer2, Zap } from "lucide-react";
import { useRouter } from "nextjs-toploader/app";

export default function NotFound() {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  // Game Configuration
  const PLAYER_RADIUS = 12;
  const BULLET_SPEED = 12;
  const ENEMY_SPAWN_RATE = 1500; // ms
  const FRICTION = 0.92;
  const MAX_SPEED = 8;

  // Game State Refs (for performance)
  const gameState = useRef({
    player: { x: 0, y: 0, vx: 0, vy: 0, angle: 0 },
    mouse: { x: 0, y: 0, down: false },
    bullets: [] as {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
    }[],
    particles: [] as {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      color: string;
      size: number;
    }[],
    enemies: [] as {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      sides: number;
      hp: number;
      angle: number;
      spin: number;
    }[],
    lastShot: 0,
    lastSpawn: 0,
    cameraShake: 0,
  });

  const requestRef = useRef<number>(0);

  // --- Core Game Logic ---

  const initGame = () => {
    if (!canvasRef.current) return;
    const { width, height } = canvasRef.current;

    gameState.current.player = {
      x: width / 2,
      y: height / 2,
      vx: 0,
      vy: 0,
      angle: 0,
    };
    gameState.current.bullets = [];
    gameState.current.enemies = [];
    gameState.current.particles = [];
    setScore(0);
    setGameOver(false);
    setGameStarted(true);
  };

  const spawnEnemy = (width: number, height: number) => {
    // Spawn from edges
    let x, y;
    if (Math.random() < 0.5) {
      x = Math.random() < 0.5 ? -50 : width + 50;
      y = Math.random() * height;
    } else {
      x = Math.random() * width;
      y = Math.random() < 0.5 ? -50 : height + 50;
    }

    const sizeTier = Math.random();
    let radius = 20;
    let hp = 1;
    let sides = 3; // Triangle

    if (sizeTier > 0.6) {
      radius = 35;
      hp = 3;
      sides = 4; // Square
    }
    if (sizeTier > 0.9) {
      radius = 50;
      hp = 5;
      sides = 5; // Pentagon
    }

    // Velocity towards player (mostly)
    const angleToCenter = Math.atan2(height / 2 - y, width / 2 - x);
    const speed = 1 + Math.random() * 1.5;

    gameState.current.enemies.push({
      x,
      y,
      vx: Math.cos(angleToCenter) * speed,
      vy: Math.sin(angleToCenter) * speed,
      radius,
      sides,
      hp,
      angle: 0,
      spin: (Math.random() - 0.5) * 0.1,
    });
  };

  const createExplosion = (
    x: number,
    y: number,
    count: number,
    color: string = "#000",
  ) => {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5 + 2;
      gameState.current.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1.0,
        color,
        size: Math.random() * 3 + 1,
      });
    }
  };

  const update = (time: number) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const { width, height } = canvas;
    const state = gameState.current;

    if (!gameStarted || gameOver) {
      // Just drift the background enemies if game over
      return;
    }

    // 1. Player Movement (Smooth Follow Mouse)
    const dx = state.mouse.x - state.player.x;
    const dy = state.mouse.y - state.player.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // Accelerate towards mouse
    if (dist > 5) {
      state.player.vx += (dx / dist) * 0.8;
      state.player.vy += (dy / dist) * 0.8;
    }

    // Apply Friction & Cap Speed
    state.player.vx *= FRICTION;
    state.player.vy *= FRICTION;

    const currentSpeed = Math.sqrt(state.player.vx ** 2 + state.player.vy ** 2);
    if (currentSpeed > MAX_SPEED) {
      state.player.vx = (state.player.vx / currentSpeed) * MAX_SPEED;
      state.player.vy = (state.player.vy / currentSpeed) * MAX_SPEED;
    }

    state.player.x += state.player.vx;
    state.player.y += state.player.vy;

    // Keep player in bounds
    if (state.player.x < PLAYER_RADIUS) {
      state.player.x = PLAYER_RADIUS;
      state.player.vx *= -0.5;
    }
    if (state.player.x > width - PLAYER_RADIUS) {
      state.player.x = width - PLAYER_RADIUS;
      state.player.vx *= -0.5;
    }
    if (state.player.y < PLAYER_RADIUS) {
      state.player.y = PLAYER_RADIUS;
      state.player.vy *= -0.5;
    }
    if (state.player.y > height - PLAYER_RADIUS) {
      state.player.y = height - PLAYER_RADIUS;
      state.player.vy *= -0.5;
    }

    // 2. Shooting
    if (state.mouse.down && time - state.lastShot > 100) {
      const angle = Math.atan2(
        state.mouse.y - state.player.y,
        state.mouse.x - state.player.x,
      );
      state.bullets.push({
        x: state.player.x + Math.cos(angle) * 20,
        y: state.player.y + Math.sin(angle) * 20,
        vx: Math.cos(angle) * BULLET_SPEED,
        vy: Math.sin(angle) * BULLET_SPEED,
        life: 60, // frames
      });
      state.lastShot = time;

      // Recoil
      state.player.vx -= Math.cos(angle) * 2;
      state.player.vy -= Math.sin(angle) * 2;
    }

    // 3. Update Bullets
    for (let i = state.bullets.length - 1; i >= 0; i--) {
      const b = state.bullets[i];
      b.x += b.vx;
      b.y += b.vy;
      b.life--;
      if (b.life <= 0 || b.x < 0 || b.x > width || b.y < 0 || b.y > height) {
        state.bullets.splice(i, 1);
      }
    }

    // 4. Update Enemies
    if (time - state.lastSpawn > ENEMY_SPAWN_RATE) {
      spawnEnemy(width, height);
      state.lastSpawn = time;
    }

    for (let i = state.enemies.length - 1; i >= 0; i--) {
      const e = state.enemies[i];
      e.x += e.vx;
      e.y += e.vy;
      e.angle += e.spin;

      // Player Collision (Game Over)
      const pdx = e.x - state.player.x;
      const pdy = e.y - state.player.y;
      const pdist = Math.sqrt(pdx * pdx + pdy * pdy);

      if (pdist < e.radius + PLAYER_RADIUS) {
        setGameOver(true);
        state.cameraShake = 20;
        createExplosion(state.player.x, state.player.y, 50, "#FF0000");
      }

      // Bullet Collision
      for (let j = state.bullets.length - 1; j >= 0; j--) {
        const b = state.bullets[j];
        const bdx = e.x - b.x;
        const bdy = e.y - b.y;
        const bdist = Math.sqrt(bdx * bdx + bdy * bdy);

        if (bdist < e.radius + 5) {
          e.hp--;
          state.bullets.splice(j, 1); // Remove bullet

          // Hit effect
          createExplosion(b.x, b.y, 5);
          state.cameraShake = 2;

          if (e.hp <= 0) {
            // Destroy Enemy
            createExplosion(e.x, e.y, 20);
            state.enemies.splice(i, 1);
            state.cameraShake = 5;
            setScore((s) => s + e.sides * 100); // Score based on size

            // Split large enemies? (Complexity feature)
            if (e.radius > 30) {
              // Spawn 2 smaller ones
              for (let k = 0; k < 2; k++) {
                state.enemies.push({
                  ...e,
                  radius: e.radius / 1.5,
                  hp: 1,
                  sides: e.sides - 1,
                  vx: (Math.random() - 0.5) * 5,
                  vy: (Math.random() - 0.5) * 5,
                });
              }
            }
          }
          break; // Bullet hit this enemy, stop checking other enemies for this bullet
        }
      }
    }

    // 5. Update Particles
    for (let i = state.particles.length - 1; i >= 0; i--) {
      const p = state.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 0.05;
      if (p.life <= 0) state.particles.splice(i, 1);
    }

    // 6. Camera Shake Decay
    if (state.cameraShake > 0) state.cameraShake *= 0.9;
    if (state.cameraShake < 0.5) state.cameraShake = 0;
  };

  const draw = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const state = gameState.current;

    // Handle Resize
    if (
      canvas.width !== window.innerWidth ||
      canvas.height !== window.innerHeight
    ) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    // Clear Screen
    ctx.fillStyle = "#FAFAFA"; // bg-neutral-50
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.save();

    // Apply Camera Shake
    if (state.cameraShake > 0) {
      // eslint-disable-next-line react-hooks/purity
      const dx = (Math.random() - 0.5) * state.cameraShake;
      // eslint-disable-next-line react-hooks/purity
      const dy = (Math.random() - 0.5) * state.cameraShake;
      ctx.translate(dx, dy);
    }

    // Draw Grid (Subtle)
    ctx.strokeStyle = "#E5E5E5";
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 0; x < canvas.width; x += 50) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
    }
    for (let y = 0; y < canvas.height; y += 50) {
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
    }
    ctx.stroke();

    // Draw Player
    if (!gameOver && gameStarted) {
      ctx.beginPath();
      ctx.arc(state.player.x, state.player.y, PLAYER_RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = "#171717"; // Neutral-900
      ctx.fill();

      // Aim Line
      ctx.beginPath();
      ctx.moveTo(state.player.x, state.player.y);
      ctx.lineTo(
        state.player.x + (state.mouse.x - state.player.x) * 0.05,
        state.player.y + (state.mouse.y - state.player.y) * 0.05,
      );
      ctx.strokeStyle = "#000";
      ctx.stroke();
    }

    // Draw Bullets
    ctx.fillStyle = "#000";
    state.bullets.forEach((b) => {
      ctx.beginPath();
      ctx.arc(b.x, b.y, 4, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw Enemies
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    state.enemies.forEach((e) => {
      ctx.save();
      ctx.translate(e.x, e.y);
      ctx.rotate(e.angle);
      ctx.beginPath();
      for (let i = 0; i < e.sides; i++) {
        const theta = (i / e.sides) * Math.PI * 2;
        const px = Math.cos(theta) * e.radius;
        const py = Math.sin(theta) * e.radius;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fillStyle = "#FFF"; // Fill white to hide grid behind
      ctx.fill();
      ctx.stroke();

      // Inner Shape if tough
      if (e.hp > 1) {
        ctx.beginPath();
        ctx.arc(0, 0, e.radius * 0.4, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();
    });

    // Draw Particles
    state.particles.forEach((p) => {
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.rect(p.x, p.y, p.size, p.size);
      ctx.fill();
      ctx.globalAlpha = 1.0;
    });

    ctx.restore();

    requestRef.current = requestAnimationFrame(draw);
  };

  const loop = (time: number) => {
    update(time);
    draw();
    requestRef.current = requestAnimationFrame(loop);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(loop);

    const handleMouseMove = (e: MouseEvent) => {
      gameState.current.mouse.x = e.clientX;
      gameState.current.mouse.y = e.clientY;
    };
    const handleMouseDown = () => {
      gameState.current.mouse.down = true;
    };
    const handleMouseUp = () => {
      gameState.current.mouse.down = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [gameStarted, gameOver]);

  return (
    <div className="fixed inset-0 z-[100] bg-neutral-50 text-black font-sans cursor-crosshair overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />

      {/* UI Overlay */}
      <div className="absolute inset-0 pointer-events-none p-8 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="pointer-events-auto">
            <button
              onClick={() => router.push("/")}
              className="flex items-center gap-2 font-bold uppercase tracking-widest hover:opacity-50 transition-opacity"
            >
              <ArrowLeft size={20} /> Exit to Reality
            </button>
          </div>
          <div className="text-right">
            <h1 className="text-6xl font-black tracking-tighter">
              {score.toString().padStart(5, "0")}
            </h1>
            <p className="text-sm font-bold uppercase tracking-widest text-neutral-400">
              Complexity Reduced
            </p>
          </div>
        </div>

        {!gameStarted && !gameOver && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm pointer-events-auto">
            <div className="text-center space-y-8 max-w-xl">
              <h2 className="text-8xl font-black tracking-tighter mb-4">
                404 ERROR
              </h2>
              <p className="text-xl font-medium text-neutral-600 whitespace-pre-line">
                A system malfunction has occurred. While we restore the page,
                reduce the chaos and stabilize the interface in the mini-game
                below.
              </p>

              <div className="flex justify-center gap-12 py-8">
                <div className="flex flex-col items-center gap-2 text-neutral-600">
                  <MousePointer2 className="animate-bounce" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Aim & Move
                  </span>
                  <span className="text-xs text-neutral-500">
                    Drag to navigate
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 text-neutral-600">
                  <Crosshair className="animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Hold to Fire
                  </span>
                  <span className="text-xs text-neutral-500">
                    Press and hold to neutralize fragments
                  </span>
                </div>
              </div>

              <button
                onClick={initGame}
                className="bg-black text-white px-12 py-6 rounded-full text-lg font-bold uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Play While We Fix This
              </button>
            </div>
          </div>
        )}

        {gameOver && (
          <div className="absolute inset-0 flex items-center justify-center bg-red-500/10 backdrop-blur-md pointer-events-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl text-center space-y-8 border-4 border-black"
            >
              <div>
                <h2 className="text-6xl font-black tracking-tighter mb-2">
                  SYSTEM FAILURE
                </h2>
                <p className="text-neutral-500 font-bold uppercase tracking-widest">
                  Complexity Level Critical
                </p>
              </div>

              <div className="py-8 border-y-2 border-neutral-100">
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">
                  Final Score
                </p>
                <p className="text-7xl font-mono font-bold">{score}</p>
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button
                  onClick={initGame}
                  className="flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
                >
                  <Zap size={18} /> Reboot System
                </button>
                <button
                  onClick={() => router.push("/")}
                  className="flex items-center justify-center gap-2 border-2 border-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-neutral-100 transition-colors"
                >
                  Return Home
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
