import { Art } from './Art';

const FACES = [
  {
    src: '/assets/memes/mick-gleeful.webp',
    alt: 'Mick grinning, delighted with a terrible booking.',
    width: 800,
    height: 847,
    caption: 'I PICKED THEM.',
  },
  {
    src: '/assets/memes/mick-smug.webp',
    alt: 'Mick looking smug, fully convinced the duo will work.',
    width: 800,
    height: 879,
    caption: 'TRUST MY VISION.',
  },
  {
    src: '/assets/memes/mick-oh-no.webp',
    alt: 'Mick horrified, realizing who he just booked.',
    width: 800,
    height: 792,
    caption: 'WAIT. I PICKED WHO?!',
  },
];

export function Reactions() {
  return (
    <section className="block reactions reveal" aria-labelledby="booth-title">
      <div className="curtain-edge" aria-hidden="true" />
      <div className="wrap-wide">
        <p className="kicker">ACT V</p>
        <h2 id="booth-title">REACTION BOOTH</h2>
        <div className="reaction-wall">
          {FACES.map((face) => (
            <article key={face.src} className="meme">
              <Art src={face.src} alt={face.alt} width={face.width} height={face.height} />
              <h3>{face.caption}</h3>
              <a className="save-meme" href={face.src} download>
                Save meme
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
