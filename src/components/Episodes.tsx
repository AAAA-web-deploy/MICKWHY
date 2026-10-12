import { useEffect, useRef, useState } from 'react';
import { Art } from './Art';

type Shot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  wide?: boolean;
};

const SHOTS: Shot[] = [
  {
    src: '/assets/stage/bonus-crypto-guests-banner.webp',
    alt: 'Bonus lineup banner of Mick and a row of satirical crypto guests.',
    width: 1800,
    height: 600,
    caption: 'Guest lineup',
  },
  {
    src: '/assets/stage/bonus-meme-cast-banner.webp',
    alt: 'Bonus banner of the crowd reacting to Mick’s latest pairing.',
    width: 1800,
    height: 600,
    caption: 'Crowd reaction',
  },
  {
    src: '/assets/meta/optional-promotional-poster.webp',
    alt: 'Promotional poster for the Mick talent show.',
    width: 1800,
    height: 600,
    caption: 'Promotional poster',
    wide: true,
  },
];

export function Episodes() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active == null) {
      if (dialog.open) dialog.close();
      return;
    }
    if (!dialog.open) dialog.showModal();
  }, [active]);

  function openAt(index: number, trigger: HTMLElement) {
    openerRef.current = trigger;
    setActive(index);
  }

  function close() {
    dialogRef.current?.close();
  }

  function step(direction: -1 | 1) {
    setActive((current) => {
      if (current == null) return current;
      return (current + direction + SHOTS.length) % SHOTS.length;
    });
  }

  const shot = active == null ? null : SHOTS[active];

  return (
    <section className="block episodes reveal" id="picks">
      <div className="curtain-edge" aria-hidden="true" />
      <div className="wrap-wide">
        <p className="kicker">ACT III</p>
        <h2>BAD PICKS</h2>
        <p className="lede">EVERY DUO IS A BAD IDEA. THAT'S THE POINT.</p>

        <article className="episode">
          <div className="episode-media">
            <Art
              src="/assets/stage/episode-01-cat-vs-bot.webp"
              alt="Mick presents a panic cat and a terrified AI bot as the first act."
              width={1440}
              height={960}
            />
          </div>
          <div className="episode-caption">
            <p className="ep-num">001</p>
            <h3>A PANIC CAT + AN AI GENIUS.</h3>
            <p>One predicts the market. One ate the keyboard.</p>
          </div>
        </article>

        <article className="episode">
          <div className="episode-media">
            <Art
              src="/assets/stage/episode-02-tech-titans-parody.webp"
              alt="Mick presents caricatured tech personalities in an unofficial satire sketch."
              width={1440}
              height={810}
            />
            <p className="ribbon">SATIRE / UNOFFICIAL</p>
          </div>
          <div className="episode-caption">
            <p className="ep-num">002</p>
            <h3>THE TECH TITANS.</h3>
            <p>Absolutely nobody approved this collaboration.</p>
          </div>
        </article>

        <div className="gallery">
          {SHOTS.map((item, index) => (
            <button
              key={item.src}
              type="button"
              className={item.wide ? 'shot span-2' : 'shot'}
              aria-haspopup="dialog"
              aria-label={`Enlarge ${item.caption}`}
              onClick={(event) => openAt(index, event.currentTarget)}
            >
              <Art src={item.src} alt={item.alt} width={item.width} height={item.height} />
              <span className="shot-label">{item.caption}</span>
            </button>
          ))}
        </div>
      </div>

      <dialog
        className="lightbox"
        ref={dialogRef}
        aria-labelledby="lightbox-title"
        onClose={() => {
          setActive(null);
          openerRef.current?.focus();
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') step(1);
          if (event.key === 'ArrowLeft') step(-1);
        }}
      >
        {shot ? (
          <>
            <div className="lightbox-bar">
              <h3 id="lightbox-title">{shot.caption}</h3>
              <button type="button" className="btn btn-dark" onClick={close}>
                Close
              </button>
            </div>
            <img src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} />
            <div className="lightbox-bar">
              <button type="button" className="btn btn-dark" onClick={() => step(-1)}>
                Previous
              </button>
              <button type="button" className="btn btn-dark" onClick={() => step(1)}>
                Next
              </button>
            </div>
          </>
        ) : null}
      </dialog>
    </section>
  );
}
