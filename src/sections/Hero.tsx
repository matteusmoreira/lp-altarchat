import { useRef, type CSSProperties } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { TRIAL_LINK } from '../constants';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { clamp01, useScrollFrame } from '../hooks/useScrollFrame';
import { InboxDemo } from './hero/InboxDemo';
import styles from './Hero.module.css';

const LINES = ['Um número de WhatsApp.', 'A equipe inteira atendendo.'];

export function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  // A janela começa inclinada e fica de frente conforme a página desce.
  useScrollFrame(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const t = clamp01(window.scrollY / (window.innerHeight * 0.65));
    const eased = 1 - Math.pow(1 - t, 3);
    stage.style.transform = `perspective(1800px) rotateX(${(1 - eased) * 14}deg) scale(${0.93 + 0.07 * eased})`;
  }, !reduced);

  return (
    <section id="topo" className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />

      <div className={`container ${styles.copy}`}>
        <p className={styles.eyebrow}>
          <span className={styles.live} aria-hidden="true" />
          Multiatendimento para WhatsApp
        </p>

        <h1 className={styles.title}>
          {LINES.map((line, i) => (
            <span key={line} className={styles.line}>
              <span style={{ '--i': i } as CSSProperties}>{line}</span>
            </span>
          ))}
        </h1>

        <p className={styles.lead}>
          Conecte seus números, distribua as conversas por setor e acompanhe cada atendimento numa tela igual ao
          WhatsApp Web. Sua equipe começa a usar no mesmo dia.
        </p>

        <div className={styles.actions}>
          <a href={TRIAL_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
            Testar grátis por 7 dias
            <ArrowRight size={20} aria-hidden="true" />
          </a>
          <a href="#do-caos-a-ordem" className="btn btn--ghost-dark btn--lg">
            Ver como funciona
          </a>
        </div>

        <ul className={styles.proof}>
          {['Sem cartão de crédito', 'Configuração em minutos', 'Cancele quando quiser'].map((item) => (
            <li key={item}>
              <Check size={16} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={`container ${styles.stageWrap}`}>
        <div id="hero-forest-end" className={styles.forestEnd} aria-hidden="true" />
        <div ref={stageRef} className={styles.stage}>
          <div className={styles.stageInner}>
            <InboxDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
