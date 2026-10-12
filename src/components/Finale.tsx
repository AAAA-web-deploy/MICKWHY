import { site } from '../config/site';
import { isEthAddress, safeHttpUrl } from '../lib/links';
import { Art } from './Art';
import { CopyButton, SocialLinks } from './Actions';

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
    ['Ownership status', site.ownershipStatus.trim() ? site.ownershipStatus : 'Not announced'],
  ] as const;
}

export function Finale() {
  const contract = site.contractAddress.trim();
  const validContract = isEthAddress(contract);
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
            <SocialLinks />
          </div>

          <div id="buy" className="buy-card">
            <div className="token-head">
              <Art
                className="token-badge"
                src="/assets/identity/mick-circle-logo.webp"
                alt="Circular Mick token badge."
                width={950}
                height={950}
              />
              <h2>TOKENOMICS</h2>
            </div>
            <dl className="facts">
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
                <dd className="contract-line">
                  <span>{validContract ? <code>{contract}</code> : 'Coming soon'}</span>
                  <CopyButton address={site.contractAddress} compact />
                </dd>
              </div>
              {statusRows().map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
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
        <div className="wrap footer-line">
          <p className="footer-mark">
            {site.tokenName} · ${site.ticker} · {site.chain}
          </p>
          <SocialLinks compact />
        </div>
      </footer>
    </>
  );
}
