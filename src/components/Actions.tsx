import { useState } from 'react';
import { site } from '../config/site';
import { isEthAddress, safeHttpUrl } from '../lib/links';

function SocialIcon({ kind }: { kind: 'telegram' | 'x' }) {
  if (kind === 'x') {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          fill="currentColor"
          d="M14.7 10.3 22.4 2h-1.8l-6.7 7.2L8.4 2H2l8.1 11.1L2 22h1.8l7.1-7.6L15.6 22H22l-7.3-11.7Zm-2.5 2.7-.8-1.1L4.5 3.3h2.8l5.3 7.1.8 1.1 6.9 9.2h-2.8l-5.3-7.7Z"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M21.9 4.3 2.8 11.6c-1.3.5-1.3 1.2-.2 1.5l4.9 1.5 11.4-7.2c.5-.3 1-.1.6.2l-9.2 8.3-.4 4.6c.5 0 .8-.2 1.1-.6l2.6-2.5 5.4 4c1 .5 1.7.3 1.9-.9l3.5-16.4c.4-1.4-.5-2-1.5-1.6Z"
      />
    </svg>
  );
}

function SocialLink({
  href,
  label,
  kind,
  compact = false,
}: {
  href: string;
  label: string;
  kind: 'telegram' | 'x';
  compact?: boolean;
}) {
  const url = safeHttpUrl(href);
  const className = compact ? 'btn btn-social btn-social-icon' : 'btn btn-social';
  const content = compact ? (
    <SocialIcon kind={kind} />
  ) : (
    <>
      <SocialIcon kind={kind} />
      <span>{label}</span>
    </>
  );
  if (!url) {
    return (
      <button type="button" className={className} aria-label={label}>
        {content}
      </button>
    );
  }
  return (
    <a className={className} href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {content}
    </a>
  );
}

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? 'social-row social-row-compact' : 'cta-row social-row'}>
      <SocialLink href={site.telegramUrl} label="TELEGRAM" kind="telegram" compact={compact} />
      <SocialLink href={site.xUrl} label="X" kind="x" compact={compact} />
    </div>
  );
}

export function BuyLink({ ticker, address }: { ticker: string; address: string }) {
  const [copied, setCopied] = useState(false);
  const contract = address.trim();
  const canCopy = isEthAddress(contract);

  return (
    <button
      type="button"
      className="btn btn-buy"
      onClick={() => {
        if (!canCopy) return;
        navigator.clipboard
          .writeText(contract)
          .then(() => {
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1800);
          })
          .catch(() => setCopied(false));
      }}
    >
      {copied ? 'COPIED' : `BUY $${ticker}`}
    </button>
  );
}

export function CopyButton({ address, compact = false }: { address: string; compact?: boolean }) {
  const [copied, setCopied] = useState(false);
  const contract = address.trim();
  const canCopy = isEthAddress(contract);

  return (
    <button
      type="button"
      className={compact ? 'btn btn-buy btn-copy' : 'btn btn-buy'}
      onClick={() => {
        if (!canCopy) return;
        navigator.clipboard
          .writeText(contract)
          .then(() => {
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1800);
          })
          .catch(() => setCopied(false));
      }}
    >
      {copied ? 'COPIED' : 'COPY'}
    </button>
  );
}
