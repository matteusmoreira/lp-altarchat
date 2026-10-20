import type { CSSProperties, ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

type Props = {
  children: ReactNode;
  className?: string;
  /** Atraso em ms, para escalonar irmãos. */
  delay?: number;
};

/** Sobe e aparece uma vez, quando entra na tela. */
export function Reveal({ children, className = '', delay = 0 }: Props) {
  const [ref, inView] = useInView<HTMLDivElement>({ once: true, rootMargin: '0px 0px -12% 0px' });
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'is-in' : ''} ${className}`}
      style={{ '--delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
