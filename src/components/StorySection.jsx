import React from 'react';

/**
 * StorySection Component
 * Three-card impact story grid highlighting core values (Access, Clarity, Momentum)
 * and the closing site footer with a back-to-top anchor.
 */
export default function StorySection() {
  return (
    <section className="story" id="story">
      {/* Section Header */}
      <div className="story-head">
        <span>02 / THE IMPACT</span>
        <h2>
          Good things
          <br />
          are <em>in motion.</em>
        </h2>
      </div>

      {/* Story Cards Grid */}
      <div className="story-grid">
        <article className="story-card orange">
          <span>01 — ACCESS</span>
          <div className="card-icon">↗</div>
          <h3>
            Closer to
            <br />
            what matters.
          </h3>
          <p>Convenience that meets people where they are.</p>
        </article>

        <article className="story-card dark">
          <span>02 — CLARITY</span>
          <div className="card-icon">✳</div>
          <h3>
            Less noise.
            <br />
            More flow.
          </h3>
          <p>Thoughtful experiences that make the everyday easier.</p>
        </article>

        <article className="story-card pale">
          <span>03 — MOMENTUM</span>
          <div className="card-icon">＋</div>
          <h3>
            Built for
            <br />
            what&apos;s next.
          </h3>
          <p>Better systems create better journeys for everyone.</p>
        </article>
      </div>

      {/* Site Footer */}
      <footer>
        <a className="brand" href="#top" aria-label="Back to top">
          <span className="brand-mark">✳</span> ITZ FIZZ
        </a>
        <span>MAKE ROOM FOR MORE.</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </section>
  );
}
