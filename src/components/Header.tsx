import { site } from '../config/site';
import { BuyLink } from './Actions';

const NAV = [
  { href: '#show', label: 'The Show' },
  { href: '#picks', label: 'Bad Picks' },
  { href: '#performance', label: 'Performance' },
  { href: '#buy', label: 'How to Buy' },
];

export function Header() {
  return (
    <header className="mast" id="top">
      <div className="mast-inner">
        <a className="brand" href="#top">
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
          <BuyLink href={site.dexUrl} ticker={site.ticker} />
        </div>
      </div>
    </header>
  );
}
