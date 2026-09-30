"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CarSvg from "./CarSvg";

gsap.registerPlugin(ScrollTrigger);

const HEADLINE = ["WELCOME", "ITZFIZZ"];

const STATS = [
  { value: 58, label: "Increase in pick up point use" },
  { value: 23, label: "Decreased in customer phone calls" },
  { value: 27, label: "Increase in pick up point use" },
  { value: 40, label: "Decreased in customer phone calls" },
];

export default function Hero() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ---------- 1. Intro (plays once on load) ----------
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".car-in", { opacity: 0, y: -60, scale: 0.92, duration: 1.4 })
        .from(".letter", { opacity: 0, y: 40, duration: 1, stagger: 0.06 }, 0.2)
        .from(".stat", { opacity: 0, y: 36, duration: 0.9, stagger: 0.18 }, 0.9);

      // count-up numbers, staggered with the cards
      gsap.utils.toArray(".num").forEach((el, i) => {
        const target = Number(el.dataset.value);
        const counter = { v: 0 };
        gsap.to(counter, {
          v: target,
          duration: 1.6,
          delay: 1 + i * 0.18,
          ease: "power2.out",
          onUpdate: () => (el.textContent = `${Math.round(counter.v)}%`),
        });
      });

      // ---------- 2. Scroll-driven animation ----------
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const travel = () => window.innerHeight * 0.62; // re-evaluated on resize

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "+=250%",
            pin: true,
            scrub: 1, // 1s of smoothing = eased interpolation toward scroll position
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(".car", { y: travel, scale: 1.3, rotate: 0.001 }, 0) // drives down the screen
          .to(
            ".letter",
            { x: (i, _t, all) => (i - (all.length - 1) / 2) * 10, ease: "power1.in" },
            0
          ) // headline spreads outward
          .to(".headline", { y: -70, opacity: 0.1 }, 0)
          .to(".stats", { y: 40, opacity: 0, ease: "power1.in" }, 0.45)
          .to(".hint", { opacity: 0, duration: 0.1 }, 0);
      });

      // thin page progress bar (scaleX only, no layout)
      gsap.to(".bar", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: true },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="bar fixed left-0 top-0 z-50 h-[3px] w-full origin-left scale-x-0 bg-fizz" />

      <section ref={root} className="relative h-screen overflow-hidden bg-ink">
        {/* soft floor glow behind the car */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(255,90,31,0.14),transparent_60%)]" />

        {/* headline */}
        <h1 className="headline absolute inset-x-0 top-[9%] flex flex-wrap justify-center gap-x-[1.6em] px-4 text-[clamp(1.1rem,3.6vw,2.8rem)] font-light text-zinc-100">
          {HEADLINE.map((word) => (
            <span key={word} className="flex" aria-label={word}>
              {word.split("").map((ch, i) => (
                <span key={i} aria-hidden="true" className="letter inline-block tracking-[0.45em]">
                  {ch}
                </span>
              ))}
            </span>
          ))}
        </h1>

        {/* car */}
        <div className="car pointer-events-none absolute inset-x-0 top-[20%] z-10 flex justify-center">
          <div className="car-in">
            <CarSvg className="h-[44vh] w-auto drop-shadow-[0_30px_40px_rgba(0,0,0,0.65)]" />
          </div>
        </div>

        {/* stats */}
        <div className="stats absolute inset-x-0 bottom-0 px-6 pb-10 md:px-16">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
            {STATS.map((s, i) => (
              <div key={i} className="stat border-l border-fizz/60 pl-4">
                <div className="num text-4xl font-bold text-fizz md:text-6xl" data-value={s.value}>
                  {s.value}%
                </div>
                <p className="mt-2 max-w-[16ch] text-sm font-light text-zinc-400 md:text-base">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="hint absolute bottom-3 left-1/2 -translate-x-1/2 text-xs font-light text-zinc-500">
          Scroll to drive
        </p>
      </section>
    </>
  );
}
