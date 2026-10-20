import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { APP_URL, TRIAL_LINK } from '../constants';
import { useScrollFrame } from '../hooks/useScrollFrame';
import { Logo } from './Logo';
import styles from './Navbar.module.css';

const LINKS = [
  { label: 'Recursos', href: '#recursos' },
  { label: 'Como começar', href: '#comecar' },
  { label: 'Planos', href: '#planos' },
  { label: 'Dúvidas', href: '#duvidas' },
];

type Tone = 'top' | 'forest' | 'paper';

export function Navbar() {
  const [tone, setTone] = useState<Tone>('top');
  const [open, setOpen] = useState(false);

  // O hero marca onde o verde termina; a barra troca de cor quando passa dali.
  useScrollFrame(() => {
    const forestEnd = document.getElementById('hero-forest-end');
    const navHeight = 68;
    let next: Tone = window.scrollY < 8 ? 'top' : 'forest';
    if (forestEnd && forestEnd.getBoundingClientRect().top <= navHeight) next = 'paper';
    setTone((prev) => (prev === next ? prev : next));
  });

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const dark = tone !== 'paper' && !open;

  return (
    <header className={styles.nav} data-tone={open ? 'paper' : tone}>
      <div className={`container ${styles.inner}`}>
        <a href="#topo" className={styles.brand} aria-label="Altar Chat, voltar ao início">
          <Logo tone={dark ? 'dark' : 'light'} />
        </a>

        <nav className={styles.links} aria-label="Seções">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={APP_URL} className={styles.login}>
            Entrar
          </a>
          <a href={TRIAL_LINK} target="_blank" rel="noopener noreferrer" className={`btn btn--primary ${styles.cta}`}>
            Testar grátis
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="menu-movel"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div id="menu-movel" className={styles.sheet} data-open={open} hidden={!open}>
        <nav aria-label="Seções" className="container">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <div className={styles.sheetActions}>
            <a href={TRIAL_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
              Testar grátis por 7 dias
            </a>
            <a href={APP_URL} className="btn btn--ghost btn--lg">
              Entrar no Altar Chat
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
