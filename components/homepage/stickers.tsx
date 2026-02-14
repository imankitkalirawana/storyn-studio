export const Starburst = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M50 0L58 15L75 5L75 22L92 20L85 35L100 42L88 55L100 68L85 75L92 90L75 88L75 100L58 90L50 100L42 90L25 100L25 88L8 90L15 75L0 68L12 55L0 42L15 35L8 20L25 22L25 5L42 15L50 0Z" />
  </svg>
);

export const SpikyCircle = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    stroke="currentColor"
    fill="none"
  >
    <path
      d="M50 0 L53 15 L65 5 L62 20 L78 15 L70 28 L88 28 L75 38 L93 45 L78 52 L93 62 L75 65 L88 78 L70 75 L78 90 L62 82 L65 98 L53 85 L50 100 L47 85 L35 98 L38 82 L22 90 L30 75 L12 78 L25 65 L7 62 L22 52 L7 45 L25 38 L12 28 L30 28 L22 15 L38 20 L35 5 L47 15 L50 0 Z"
      strokeWidth="1"
    />
  </svg>
);

export const Flower = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <defs>
      <linearGradient id="holo" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff9a9e" />
        <stop offset="25%" stopColor="#fad0c4" />
        <stop offset="50%" stopColor="#a18cd1" />
        <stop offset="75%" stopColor="#fbc2eb" />
        <stop offset="100%" stopColor="#8fd3f4" />
      </linearGradient>
    </defs>
    <path
      fill="url(#holo)"
      d="M50 20C55 5 70 5 75 20C90 15 95 30 85 40C100 50 95 65 80 70C85 85 70 90 60 80C50 95 35 90 30 75C15 80 10 65 20 55C5 45 10 30 25 25C20 10 35 5 45 15C46.6667 16.6667 48.3333 18.3333 50 20Z"
    />
    <circle cx="50" cy="50" r="15" fill="black" />
    <path d="M45 50L58 58V42L45 50Z" fill="white" />
  </svg>
);

export const PlayIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M8 5v14l11-7z" />
  </svg>
);
