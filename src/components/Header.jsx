import React, { useState } from 'react';

/**
 * Header Component
 * Persistent topbar with brand identity, desktop anchor navigation,
 * and responsive mobile menu toggle.
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="ITZ FIZZ home">
        <span className="brand-mark">✳</span> ITZ FIZZ
      </a>

      <nav className={menuOpen ? 'nav open' : 'nav'}>
        <a href="#impact" onClick={() => setMenuOpen(false)}>
          Impact
        </a>
        <a href="#story" onClick={() => setMenuOpen(false)}>
          Our drive
        </a>
        <a className="nav-cta" href="#story" onClick={() => setMenuOpen(false)}>
          Explore <span>↗</span>
        </a>
      </nav>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? '×' : '☰'}
      </button>
    </header>
  );
}
