import { site } from '../config/site';
import { Art } from './Art';

const PHRASES = ['MICK, WHYYYY?!', "YOU'RE WELCOME.", 'WRONG DUO. GREAT SHOW.'];

export function Hero() {
  return (
    <section className="hero" aria-label="Grand opening">
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
          src="/assets/stage/hero-stage-3x1.webp"
          alt="Mick the silver microphone presents two mismatched guests on an orange talent-show stage, leaving the center open."
          width={2000}
          height={667}
        />
        <div className="bulb-row" aria-hidden="true">
          {Array.from({ length: 16 }, (_, index) => (
            <span className="bulb" key={`bottom-${index}`} />
          ))}
        </div>
      </div>

      <div className="hero-copy">
        <h1>{site.tokenName}</h1>
        <p className="token-line">${site.ticker}</p>
        <p className="standards">ONE MIC. ZERO STANDARDS.</p>
      </div>

      <p className="bubble">BE THE MY GUEST!</p>

      <div className="mobile-stage">
        <Art
          eager
          className="mobile-mick"
          src="/assets/identity/mick-fullbody-cutout.webp"
          alt="Mick, a grinning vintage silver microphone with black shoes, white gloves, and a curling cable tail, pointing from the spotlight."
          width={1040}
          height={1300}
        />
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
