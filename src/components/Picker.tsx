import { useState } from 'react';

const GUESTS = [
  'Panic Cat',
  'Overqualified Bot',
  'Paper Hands',
  'Diamond Hands',
  'Sleepy Dog',
  'Frog Who Bought the Top',
  'The Guy with 37 Wallets',
  'The Confused Duck',
] as const;

function pickDuo(current: readonly [string, string] | null): [string, string] {
  let next: [string, string] = [GUESTS[0], GUESTS[1]];
  for (let attempt = 0; attempt < 8; attempt += 1) {
    const first = Math.floor(Math.random() * GUESTS.length);
    let second = Math.floor(Math.random() * (GUESTS.length - 1));
    if (second >= first) second += 1;
    next = [GUESTS[first], GUESTS[second]];
    if (!current || next[0] !== current[0] || next[1] !== current[1]) break;
  }
  return next;
}

export function Picker() {
  const [pair, setPair] = useState<[string, string] | null>(null);
  const [round, setRound] = useState(0);
  const [wiggle, setWiggle] = useState(false);

  function onPick() {
    setPair((current) => pickDuo(current));
    setRound((value) => value + 1);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) setWiggle(true);
  }

  return (
    <section className="block picker reveal" id="let-mick-pick" aria-labelledby="picker-title">
      <div
        className={wiggle ? 'curtain-edge is-on' : 'curtain-edge'}
        aria-hidden="true"
        onAnimationEnd={() => setWiggle(false)}
      />
      <div className="wrap picker-inner">
        <p className="kicker">ACT IV</p>
        <h2 id="picker-title">LET MICK PICK</h2>
        <p className="lede dark">TALENT? OPTIONAL. CONFIDENCE? UNLIMITED.</p>
        <button type="button" className="btn btn-dark btn-giant" onClick={onPick}>
          LET MICK PICK 🎤
        </button>

        <div className="spotlights" key={round}>
          <div className="spot left">
            <p className={`placard${pair ? ' pop' : ''}`}>{pair ? pair[0] : '???'}</p>
          </div>
          <div className="spot right">
            <p className={`placard alt${pair ? ' pop' : ''}`}>{pair ? pair[1] : '???'}</p>
          </div>
        </div>

        {pair ? (
          <div className="pick-result">
            <p className="picked-title">MIC PICKED WHO?!</p>
            <p className="reaction-yell">MICK, WHYYYY?!</p>
            <p className="too-late">TOO LATE. HE ALREADY PICKED.</p>
          </div>
        ) : (
          <p className="stage-set">THE STAGE IS SET.</p>
        )}

        <p className="sr-only" aria-live="polite">
          {pair ? `Mick picked ${pair[0]} and ${pair[1]}. MICK, WHYYYY?!` : ''}
        </p>
      </div>
    </section>
  );
}
