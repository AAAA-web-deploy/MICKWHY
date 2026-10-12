import { Art } from './Art';

const CUES = ['HE HAS THE MIC.', 'HE PICKS THE DUO.', 'YOU QUESTION EVERYTHING.'];

export function Scout() {
  return (
    <section className="block scout reveal" id="show">
      <div className="curtain-edge" aria-hidden="true" />
      <div className="wrap scout-layout">
        <figure className="scout-figure">
          <Art
            src="/assets/identity/mick-approved-master.webp"
            alt="Mick, the approved grinning vintage microphone mascot, leaning in and pointing across an orange stage."
            width={1254}
            height={1254}
          />
        </figure>
        <div className="scout-copy">
          <p className="kicker">ACT II</p>
          <h2>THE WORLD'S WORST TALENT SHOW.</h2>
          <ol className="cues">
            {CUES.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ol>
          <p className="punch">
            Mick: <q>YOU'RE WELCOME.</q>
          </p>
        </div>
      </div>
    </section>
  );
}
