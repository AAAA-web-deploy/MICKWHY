import { site } from '../config/site';
import { isEthAddress, safeHttpUrl } from '../lib/links';
import { Art } from './Art';
import { BuyLink, CopyButton, ExternalOrSoon } from './Actions';

const STEPS = [
  'Have ETH and gas in an Ethereum wallet.',
  'Verify the token contract from official sources.',
  'Use a trusted Ethereum DEX to swap if you choose.',
];

function statusRows() {
  return [
    ['Total supply', site.totalSupply == null ? 'Not announced' : site.totalSupply.toLocaleString('en-US')],
    ['Buy tax', site.buyTax == null ? 'Not announced' : `${site.buyTax}%`],
    ['Sell tax', site.sellTax == null ? 'Not announced' : `${site.sellTax}%`],
    ['LP status', site.lpStatus.trim() ? site.lpStatus : 'Not announced'],
  ] as const;
}

export function Finale() {
  const contract = site.contractAddress.trim();
  const validContract = isEthAddress(contract);
  const explorer = safeHttpUrl(site.explorerUrl);
  const dex = safeHttpUrl(site.dexUrl);

  return (
    <>
      <section className="block finale reveal">
        <div className="curtain-edge" aria-hidden="true" />
        <div className="wrap finale-grid">
          <div id="performance">
            <p className="kicker">ACT VI</p>
            <h2>PERFORMANCE</h2>
            <p className="theme">THE STAGE BELONGS TO EVERYBODY.</p>
            <div className="cta-row">
              <ExternalOrSoon href={site.xUrl} label="JOIN THE PERFORMANCE" />
              <ExternalOrSoon href={site.telegramUrl} label="SUGGEST A TERRIBLE DUO" />
            </div>
          </div>

          <div id="buy" className="buy-card">
            <Art
              className="token-badge"
              src="/assets/identity/mick-circle-logo.webp"
              alt="Circular Mick token badge."
              width={950}
              height={950}
            />
            <h2>HOW TO BUY</h2>
            <dl className="facts">
              <div>
                <dt>Chain</dt>
                <dd>{site.chain}</dd>
              </div>
              <div>
                <dt>Token</dt>
                <dd>{site.tokenName}</dd>
              </div>
              <div>
                <dt>Ticker</dt>
                <dd>${site.ticker}</dd>
              </div>
              <div>
                <dt>Contract</dt>
                <dd>{validContract ? <code>{contract}</code> : 'Coming soon'}</dd>
              </div>
              {statusRows().map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <div className="cta-row">
              <CopyButton address={site.contractAddress} />
              <BuyLink href={site.dexUrl} ticker={site.ticker} />
              {explorer && validContract ? (
                <a className="btn" href={explorer} target="_blank" rel="noopener noreferrer">
                  VIEW CONTRACT
                </a>
              ) : null}
            </div>
            <ol className="steps">
              {STEPS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            {dex ? (
              <p className="dex-note">
                Configured swap link:{' '}
                <a href={dex} target="_blank" rel="noopener noreferrer">
                  open DEX
                </a>
              </p>
            ) : null}
          </div>
        </div>
      </section>
      <footer className="colophon">
        <div className="wrap">
          <p>
            Independent parody/meme project. Satirical depictions do not imply endorsement by or
            affiliation with public figures, companies, original performers or related IP owners.
            Crypto assets are risky; no returns are promised.
          </p>
          <p className="footer-mark">
            {site.tokenName} · ${site.ticker} · {site.chain}
          </p>
        </div>
      </footer>
    </>
  );
}
