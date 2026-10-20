import { useRef } from 'react';
import { MessageCircle, QrCode, Send, Users } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { clamp01, useScrollFrame } from '../hooks/useScrollFrame';
import styles from './Steps.module.css';

const STEPS = [
  {
    Icon: MessageCircle,
    title: 'Fale com a gente',
    text: 'Chame no WhatsApp e liberamos o seu teste de 7 dias.',
  },
  {
    Icon: QrCode,
    title: 'Conecte o seu número',
    text: 'Leia o QR Code com o celular da empresa. O número continua o mesmo.',
  },
  {
    Icon: Users,
    title: 'Monte a equipe',
    text: 'Convide os atendentes, crie as filas e defina quem vê o quê.',
  },
  {
    Icon: Send,
    title: 'Comece a atender',
    text: 'As conversas já chegam distribuídas. Ajuste automações e respostas no caminho.',
  },
];

export function Steps() {
  const sectionRef = useRef<HTMLElement>(null);

  // A linha se desenha conforme a seção atravessa a tela; cada passo acende quando ela chega.
  useScrollFrame(() => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const progress = clamp01((window.innerHeight * 0.75 - rect.top) / (rect.height * 0.8));
    section.style.setProperty('--line', String(progress));
    section.querySelectorAll<HTMLElement>('[data-step]').forEach((el) => {
      const on = progress >= Number(el.dataset.step) / (STEPS.length - 1) - 0.02 ? 'true' : 'false';
      if (el.dataset.on !== on) el.dataset.on = on;
    });
  });

  return (
    <section ref={sectionRef} id="comecar" className={styles.section}>
      <div className="container">
        <Reveal className={styles.header}>
          <p className="eyebrow">Como começar</p>
          <h2 className="section-title">Pronto para atender no mesmo dia.</h2>
        </Reveal>

        <div className={styles.wrap}>
          <span className={styles.track} aria-hidden="true">
            <span className={styles.fill} />
          </span>
          <ol className={styles.steps}>
            {STEPS.map(({ Icon, title, text }, i) => (
              <li key={title} className={styles.step} data-step={i} data-on="false">
                <span className={styles.badge} aria-hidden="true">
                  <Icon size={22} />
                </span>
                <span className={styles.num}>Passo {i + 1}</span>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
