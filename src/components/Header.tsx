import type { MouseEvent } from 'react';
import { site } from '../config/site';
import { BuyLink } from './Actions';

const NAV = [
  { href: '#show', label: 'The Show' },
  { href: '#picks', label: 'Bad Picks' },
  { href: '#performance', label: 'Performance' },
];

function scrollToTop(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
}

export function Header() {
  return (
    <header className="mast" id="top">
      <div className="mast-inner">
        <a className="brand" href="#top" onClick={scrollToTop}>
          <img
            src="/assets/identity/mick-face-badge.webp"
            alt=""
            width="750"
            height="750"
          />
          <span>{site.tokenName}</span>
        </a>
        <nav className="nav-links" aria-label="Show">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mast-actions">
          <BuyLink ticker={site.ticker} address={site.contractAddress} />
        </div>
      </div>
    </header>
  );
}
