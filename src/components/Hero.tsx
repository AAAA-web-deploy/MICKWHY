import { site } from '../config/site';
import { Art } from './Art';

const PHRASES = ['MICK, WHYYYY?!', "YOU'RE WELCOME.", 'WRONG DUO. GREAT SHOW.'];

export function Hero() {
  return (
    <section className="hero" aria-label="Grand opening">
      <h1 className="sr-only">{site.tokenName}</h1>
      <p className="live-pill live-banner">
        <span className="live-dot" aria-hidden="true" />
        LIVE FROM THE WORST TALENT SHOW
      </p>

      <div className="stage-frame">
        <div className="bulb-row" aria-hidden="true">
          {Array.from({ length: 16 }, (_, index) => (
            <span className="bulb" key={`top-${index}`} />
          ))}
        </div>
        <Art
          eager
          className="hero-art"
          src="/assets/stage/hero-banner.webp"
          alt="Mick the microphone welcomes a mismatched guest lineup. The banner reads MIC PICKED WHO?!, $MICKWHY, one mic, zero standards."
          width={3072}
          height={1023}
        />
        <div className="bulb-row" aria-hidden="true">
          {Array.from({ length: 16 }, (_, index) => (
            <span className="bulb" key={`bottom-${index}`} />
          ))}
        </div>
      </div>

      <div className="hero-foot">
        <a className="scroll-cta" href="#show">
          SEE WHO MICK PICKED ↓
        </a>
      </div>

      <p className="ticker-static">MICK, WHYYYY?! · YOU'RE WELCOME. · WRONG DUO. GREAT SHOW.</p>
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1, 2, 3].map((copy) =>
            PHRASES.map((phrase) => <span key={`${copy}-${phrase}`}>{phrase}</span>),
          )}
        </div>
      </div>
    </section>
  );
}
