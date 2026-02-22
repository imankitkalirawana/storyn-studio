const STRIP_ITEMS = [
  "UX Design",
  "App Design",
  "Branding",
  "Logo Design",
  "User Research",
  "UX Design",
  "App Design",
  "Web Development",
];

// Match animation translateX(-50%): use 2 copies so the loop is seamless
const REPEAT_COUNT = 10;

function StripItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 whitespace-nowrap" aria-hidden>
      <span className="text-xl md:text-3xl mx-2 md:mx-4">{text}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 35 35"
        fill="none"
      >
        <path
          d="M16.3832 0.783373L21.6154 12.8665L34.1086 17.0257L22.0254 22.2578L17.8663 34.751L12.6341 22.6679L0.140944 18.5087L12.2241 13.2765L16.3832 0.783373Z"
          fill="var(--accent)"
        />
      </svg>
    </div>
  );
}

export default function MovingStrip() {
  // Repeat items REPEAT_COUNT times so the strip is long enough for infinite scroll
  const repeatedItems = Array.from({ length: REPEAT_COUNT }, (_, repeatIndex) =>
    STRIP_ITEMS.map((text, i) => (
      <StripItem key={`${repeatIndex}-${i}`} text={text} />
    )),
  ).flat();

  return (
    <div className="bg-accent py-3 md:py-7 ">
      <div className="relative -rotate-2 overflow-hidden flex w-full h-[24px] md:h-[48px] bg-background items-center justify-center group">
        <div className="h-fit">
          <div
            className="flex animate-moving-horizontal w-max"
            role="marquee"
            aria-label="Scrolling services"
          >
            {repeatedItems}
          </div>
        </div>
      </div>
    </div>
  );
}
