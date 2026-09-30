import React from 'react';
import CarArt from './CarArt';

/**
 * JourneySection Component
 * Dark-themed section with the original diagonal highway road (-8deg),
 * parallax dashed center line, "KEEP GOING →" road label, animated passing road car,
 * and narrative statement.
 */
export default function JourneySection() {
  return (
    <section className="journey">
      {/* Section Header */}
      <div className="journey-top">
        <span>01 / THE JOURNEY</span>
        <span>MOVE WITH PURPOSE</span>
      </div>

      {/* Diagonal Highway Road */}
      <div className="road">
        <div className="road-line" />
        <div className="road-label">
          KEEP GOING <span>→</span>
        </div>
        <div className="road-car" aria-hidden="true">
          <CarArt />
        </div>
      </div>

      {/* Narrative Caption */}
      <div className="journey-caption">
        <h2>
          Make every
          <br />
          <em>move</em> matter.
        </h2>
        <p>
          We believe the best journeys feel simple. Less friction, more freedom,
          and a little more joy in every mile.
        </p>
      </div>
    </section>
  );
}
