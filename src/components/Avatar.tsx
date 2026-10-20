import type { CSSProperties } from 'react';

export type Tint = 1 | 2 | 3 | 4 | 5 | 6;

type Props = {
  name: string;
  tint: Tint;
  size?: number;
  className?: string;
};

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] ?? '') + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
}

/** Avatar de iniciais usado nos mockups do produto. */
export function Avatar({ name, tint, size = 40, className = '' }: Props) {
  const style: CSSProperties = {
    width: size,
    height: size,
    flex: 'none',
    display: 'inline-grid',
    placeItems: 'center',
    borderRadius: '50%',
    background: `var(--tint-${tint})`,
    color: `var(--tint-${tint}-ink)`,
    fontSize: Math.round(size * 0.36),
    fontWeight: 500,
    letterSpacing: '0.01em',
    lineHeight: 1,
  };
  return (
    <span className={className} style={style} aria-hidden="true">
      {initials(name)}
    </span>
  );
}
