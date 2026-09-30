// Top-down supercar drawn as inline SVG (front of the car points down,
// the direction it travels while scrolling). Swap for an <img> of a
// top-view PNG if you prefer a photographic look.
export default function CarSvg({ className = "" }) {
  return (
    <svg viewBox="0 0 200 420" className={className} role="img" aria-label="Top view of a sports car">
      <defs>
        <linearGradient id="body" x1="0" x2="1">
          <stop offset="0" stopColor="#c2410c" />
          <stop offset="0.5" stopColor="#ff5a1f" />
          <stop offset="1" stopColor="#c2410c" />
        </linearGradient>
        <linearGradient id="glass" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#1c1c22" />
          <stop offset="1" stopColor="#3b3b46" />
        </linearGradient>
      </defs>

      {/* wheels */}
      <g fill="#050506">
        <rect x="8" y="70" width="26" height="62" rx="9" />
        <rect x="166" y="70" width="26" height="62" rx="9" />
        <rect x="6" y="272" width="30" height="70" rx="10" />
        <rect x="164" y="272" width="30" height="70" rx="10" />
      </g>

      {/* body */}
      <path
        d="M100 8 C150 8 168 60 170 120 L173 300 C173 380 140 412 100 412 C60 412 27 380 27 300 L30 120 C32 60 50 8 100 8Z"
        fill="url(#body)"
      />
      {/* centre stripe + intakes */}
      <path d="M92 20 H108 V400 H92Z" fill="#00000022" />
      <path d="M40 200 Q52 170 58 150 L58 250 Q48 240 40 200Z M160 200 Q148 170 142 150 L142 250 Q152 240 160 200Z" fill="#00000040" />

      {/* cabin: rear glass (top), roof, windscreen (bottom) */}
      <path d="M62 118 Q100 104 138 118 L132 150 Q100 142 68 150Z" fill="url(#glass)" />
      <path d="M68 150 Q100 142 132 150 L134 226 Q100 232 66 226Z" fill="#141418" />
      <path d="M66 226 Q100 232 134 226 L146 278 Q100 296 54 278Z" fill="url(#glass)" />

      {/* lights */}
      <path d="M48 386 Q62 396 82 392 L80 384 Q62 384 48 376Z M152 386 Q138 396 118 392 L120 384 Q138 384 152 376Z" fill="#fef3c7" />
      <rect x="52" y="22" width="34" height="6" rx="3" fill="#7f1d1d" />
      <rect x="114" y="22" width="34" height="6" rx="3" fill="#7f1d1d" />
    </svg>
  );
}
