import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import JourneySection from './components/JourneySection';
import StorySection from './components/StorySection';

// Register GSAP ScrollTrigger plugin once at application root
gsap.registerPlugin(ScrollTrigger);

/**
 * App Component
 * Top-level application coordinator managing GSAP context, ScrollTrigger timelines,
 * and semantic page sections.
 */
export default function App() {
  const root = useRef(null);
  const car = useRef(null);

  useLayoutEffect(() => {
    // Scope all GSAP animations and element selectors within the root container
    const ctx = gsap.context(() => {
      // -------------------------------------------------------------
      // 1. Initial Page Load Reveal Animations
      // -------------------------------------------------------------
      // Eyebrow tag and headline lines slide up smoothly
      gsap.from('.eyebrow, .headline-line', {
        y: 36,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.12,
        delay: 0.15,
      });

      // 4 impact metrics cards stagger entrance
      gsap.from('.metric', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.13,
        delay: 0.55,
      });

      // Subtitle narrative note fade in
      gsap.from('.hero-note', {
        opacity: 0,
        y: 12,
        duration: 0.8,
        delay: 0.8,
      });

      // -------------------------------------------------------------
      // 2. Hero Pinned Scroll-Driven Drive Timeline
      // -------------------------------------------------------------
      // Pins the hero viewport for 260% of scroll distance.
      // As the user scrolls down, the hero car drives toward the left,
      // the sun orb descends toward the horizon, and copy fades out.
      const drive = gsap.timeline({
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: '+=260%',
          pin: true,
          scrub: 0.7,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      drive
        .to(
          car.current,
          {
            x: () => -window.innerWidth * 1.32,
            y: () => (window.innerWidth < 700 ? 190 : 205),
            rotate: -2,
            scale: () => (window.innerWidth < 700 ? 0.7 : 0.78),
            ease: 'none',
          },
          0.08
        )
        .to('.sun-orb', { y: 260, scale: 0.58, ease: 'none' }, 0)
        .to('.hero-copy', { y: -45, opacity: 0.18, ease: 'none' }, 0.08)
        .to('.metrics', { y: 35, opacity: 0.12, ease: 'none' }, 0.12);

      // -------------------------------------------------------------
      // 3. Journey Diagonal Road Car Animation Timeline
      // -------------------------------------------------------------
      // As the journey section enters the viewport, the passing car
      // transitions onto the diagonal highway from the left (opacity 0 -> 1),
      // speeds across to the right, and disappears.
      const roadDrive = gsap.timeline({
        scrollTrigger: {
          trigger: '.journey',
          start: 'top 82%',
          end: 'bottom 18%',
          scrub: 0.55,
          invalidateOnRefresh: true,
        },
      });

      roadDrive
        .fromTo(
          '.road-car',
          {
            x: () => -document.querySelector('.road-car').offsetWidth,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.28,
            ease: 'none',
          },
          0
        )
        .to(
          '.road-car',
          {
            x: () => document.querySelector('.road').clientWidth + 40,
            duration: 0.68,
            ease: 'none',
          },
          0.28
        )
        .to(
          '.road-car',
          {
            opacity: 0,
            duration: 0.08,
            ease: 'none',
          },
          0.88
        );

      // -------------------------------------------------------------
      // 4. Parallax Dashed Highway Divider Line Movement
      // -------------------------------------------------------------
      // Continuously translates the dashed highway center line during scroll
      gsap.to('.road-line', {
        xPercent: -35,
        ease: 'none',
        scrollTrigger: {
          trigger: '.journey',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      });

      // -------------------------------------------------------------
      // 5. Impact Story Cards Stagger Reveal
      // -------------------------------------------------------------
      gsap.from('.story-card', {
        y: 70,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.story',
          start: 'top 72%',
        },
      });
    }, root);

    // Clean up all ScrollTriggers and GSAP timelines on component unmount
    return () => ctx.revert();
  }, []);

  return (
    <main ref={root}>
      <Header />
      <HeroSection carRef={car} />
      <JourneySection />
      <StorySection />
    </main>
  );
}
