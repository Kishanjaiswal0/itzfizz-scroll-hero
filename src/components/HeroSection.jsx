import React from 'react';
import CarArt from './CarArt';

/**
 * HeroSection Component
 * Pinned hero section featuring headline typography, 4 performance metrics,
 * animated sun orb, scroll prompt, and the hero car art layer.
 *
 * @param {Object} props
 * @param {React.RefObject} props.carRef - Ref attached to .hero-art for GSAP translation
 */
export default function HeroSection({ carRef }) {
  return (
    <section className="hero" id="top">
      {/* Intro Headline & Copy */}
      <div className="hero-copy">
        <p className="eyebrow">
          A brighter way to move <span>— 2026</span>
        </p>
        <h1>
          <span className="headline-line">W E L C O M E</span>
          <span className="headline-line second">
            I T Z <i>F I Z Z</i>
          </span>
        </h1>
        <p className="hero-note">
          Small shifts. Big momentum.
          <br />
          A new kind of everyday journey.
        </p>
      </div>

      {/* Impact Metrics & Scroll Prompt */}
      <div className="hero-bottom" id="impact">
        <div className="metrics">
          <div className="metric">
            <strong>
              58<span>%</span>
            </strong>
            <p>
              Increase in pick-up
              <br />
              point usage
            </p>
          </div>
          <div className="metric">
            <strong>
              23<span>%</span>
            </strong>
            <p>
              Fewer customer
              <br />
              phone calls
            </p>
          </div>
          <div className="metric">
            <strong>
              27<span>%</span>
            </strong>
            <p>
              More journeys
              <br />
              made effortless
            </p>
          </div>
          <div className="metric">
            <strong>
              40<span>%</span>
            </strong>
            <p>
              Less time spent
              <br />
              waiting around
            </p>
          </div>
        </div>

        <span className="scroll-cue">
          <span className="scroll-dot" /> SCROLL TO FEEL THE DRIVE
        </span>
      </div>

      {/* Radiant Sun Orb */}
      <div className="sun-orb" />

      {/* Hero Car Artwork Layer (Pinned GSAP Target) */}
      <div className="hero-art" ref={carRef}>
        <CarArt />
      </div>

      {/* Side Decorative Vertical Label */}
      <div className="vertical-label">DESIGNED FOR THE WAY AHEAD</div>
    </section>
  );
}
