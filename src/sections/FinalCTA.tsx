import { CheckCheck, SendHorizontal } from 'lucide-react';
import { APP_URL, TRIAL_LINK, TRIAL_MESSAGE } from '../constants';
import { useInView } from '../hooks/useInView';
import styles from './FinalCTA.module.css';

/** O fechamento é uma conversa: o botão de enviar abre o WhatsApp com a mensagem pronta. */
export function FinalCTA() {
  const [ref, inView] = useInView<HTMLDivElement>({ once: true, threshold: 0.35 });

  return (
    <section className={styles.section} aria-labelledby="cta-title">
      <div className={`container ${styles.inner}`}>
        <h2 id="cta-title" className={styles.title}>
          Seu WhatsApp organizado ainda esta semana.
        </h2>

        <div ref={ref} className={styles.chat} data-in={inView}>
          <div className={styles.incoming}>
            <img src="/icon-192.png" alt="" width={36} height={36} className={styles.avatar} />
            <span className={styles.typing} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <p className={styles.bubble}>
              Oi! Quer ver o Altar Chat funcionando com o seu número? Manda a mensagem aqui embaixo que a gente libera o
              teste.
              <span className={styles.meta}>agora</span>
            </p>
          </div>

          <a href={TRIAL_LINK} target="_blank" rel="noopener noreferrer" className={styles.composer}>
            <span className={styles.draft}>
              {TRIAL_MESSAGE}
              <span className={styles.caret} aria-hidden="true" />
            </span>
            <span className={styles.send} aria-hidden="true">
              <SendHorizontal size={22} />
            </span>
            <span className="sr-only">Enviar no WhatsApp</span>
          </a>

          <p className={styles.note}>
            <CheckCheck size={16} aria-hidden="true" />
            Abre o WhatsApp com a mensagem pronta para o nosso time.
          </p>
        </div>

        <p className={styles.login}>
          Já é cliente? <a href={APP_URL}>Entrar no Altar Chat</a>
        </p>
      </div>
    </section>
  );
}
