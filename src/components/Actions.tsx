import { useState } from 'react';
import { isEthAddress, safeHttpUrl } from '../lib/links';

export function ExternalOrSoon({ href, label }: { href: string; label: string }) {
  const url = safeHttpUrl(href);
  if (!url) {
    return (
      <button type="button" className="btn" disabled>
        <span>{label}</span>
        <span className="soon">LINK COMING SOON</span>
      </button>
    );
  }
  return (
    <a className="btn" href={url} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}

export function BuyLink({ href, ticker }: { href: string; ticker: string }) {
  const url = safeHttpUrl(href);
  if (!url) {
    return (
      <button type="button" className="btn btn-buy" disabled>
        <span>BUY ${ticker}</span>
        <span className="soon">COMING SOON</span>
      </button>
    );
  }
  return (
    <a className="btn btn-buy" href={url} target="_blank" rel="noopener noreferrer">
      BUY ${ticker}
    </a>
  );
}

export function CopyButton({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);
  if (!isEthAddress(address)) {
    return <span className="chip">CONTRACT COMING SOON</span>;
  }

  return (
    <button
      type="button"
      className="btn btn-buy"
      onClick={() => {
        navigator.clipboard
          .writeText(address.trim())
          .then(() => {
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1800);
          })
          .catch(() => setCopied(false));
      }}
    >
      {copied ? 'COPIED' : 'COPY CA'}
    </button>
  );
}
