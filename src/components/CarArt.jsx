import React from 'react';

/**
 * CarArt Component
 * Pure inline vector SVG illustration of the ITZ FIZZ performance car.
 * Self-contained with custom radial/linear gradients and drop-shadow filter.
 * Reused in both the Hero section and the Journey diagonal highway.
 */
export default function CarArt() {
  return (
    <svg
      className="car-art"
      viewBox="0 0 900 430"
      role="img"
      aria-label="Illustration of a vivid orange performance car"
    >
      <defs>
        {/* Exterior body paint gradient: gold to warm orange to deep crimson */}
        <linearGradient id="paint" x1="0" y1="0" x2=".8" y2="1">
          <stop stopColor="#ffbd58" />
          <stop offset=".45" stopColor="#f36b27" />
          <stop offset="1" stopColor="#b93618" />
        </linearGradient>

        {/* Cockpit glass gradient: subtle deep tint */}
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#263b43" />
          <stop offset="1" stopColor="#101b20" />
        </linearGradient>

        {/* Ground shadow filter */}
        <filter id="shadow">
          <feGaussianBlur stdDeviation="13" />
        </filter>
      </defs>

      {/* Ground contact shadow */}
      <ellipse
        cx="464"
        cy="350"
        rx="350"
        ry="35"
        fill="#202326"
        opacity=".22"
        filter="url(#shadow)"
      />

      {/* Aerodynamic chassis, canopy glass, and highlights */}
      <g className="car-body">
        <path
          d="M92 292 Q117 267 174 257 L258 237 Q315 167 394 147 L554 145 Q607 152 660 211 L746 237 Q789 247 814 278 L829 314 Q827 333 805 338 L112 338 Q83 331 82 313Z"
          fill="url(#paint)"
          stroke="#a83a1b"
          strokeWidth="5"
        />
        <path
          d="M279 231 Q331 166 397 161 L548 160 Q590 166 637 222Z"
          fill="url(#glass)"
          stroke="#f7a34e"
          strokeWidth="7"
        />
        <path
          d="M450 163 L445 226 M556 164 L603 224"
          stroke="#91a4a7"
          strokeWidth="4"
          opacity=".65"
        />
        <path d="M102 286 Q148 271 192 274 L205 295 L111 305Z" fill="#ffe7ac" />
        <path d="M722 265 L795 281 L807 299 L733 294Z" fill="#ffe6ad" />
        <path
          d="M254 258 Q420 247 671 257"
          fill="none"
          stroke="#ffcf83"
          strokeWidth="5"
          opacity=".8"
        />
        <path d="M358 282 L520 282" stroke="#9e351b" strokeWidth="5" />
        <path d="M174 315 L742 315" stroke="#8e2c18" strokeWidth="6" />
        <path d="M126 336 L780 336" stroke="#25282a" strokeWidth="13" />
      </g>

      {/* Front wheel assembly */}
      <g className="wheel">
        <circle cx="248" cy="329" r="62" fill="#17191b" />
        <circle cx="248" cy="329" r="39" fill="#aab0af" />
        <circle cx="248" cy="329" r="27" fill="#343b3d" />
        <circle cx="248" cy="329" r="9" fill="#e7e7e2" />
        <path
          d="M248 292V366 M211 329H285 M222 303L274 355 M274 303L222 355"
          stroke="#d4d8d5"
          strokeWidth="6"
        />
      </g>

      {/* Rear wheel assembly */}
      <g className="wheel">
        <circle cx="680" cy="329" r="62" fill="#17191b" />
        <circle cx="680" cy="329" r="39" fill="#aab0af" />
        <circle cx="680" cy="329" r="27" fill="#343b3d" />
        <circle cx="680" cy="329" r="9" fill="#e7e7e2" />
        <path
          d="M680 292V366 M643 329H717 M654 303L706 355 M706 303L654 355"
          stroke="#d4d8d5"
          strokeWidth="6"
        />
      </g>
    </svg>
  );
}
