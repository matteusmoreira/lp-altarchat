import { CheckCheck, FileText, PauseCircle, Sparkles } from 'lucide-react';
import { Avatar } from '../../components/Avatar';
import { useTicker } from '../../hooks/useTicker';
import v from './Vignette.module.css';
import styles from './AiVignette.module.css';

const DOCS = ['Horários e feriados.pdf', 'Política de trocas.pdf', 'Cardápio 2026.pdf'];
const ANSWER = 'Abrimos, sim! Na sexta de feriado o horário é das 9h às 14h.';

/** A IA lê os documentos da empresa, sugere a resposta e pausa quando um humano assume. */
export function AiVignette({ active }: { active: boolean }) {
  const step = useTicker({ active, ms: 1300, steps: 9, restStep: 6 });

  return (
    <div className={`${v.frame} ${styles.frame}`}>
      <aside className={styles.docs}>
        <span className={styles.docsTitle}>Base de conhecimento</span>
        {DOCS.map((doc, i) => (
          <span key={doc} className={`${styles.doc} ${step >= 2 && step <= 3 && i === 0 ? styles.docReading : ''}`}>
            <FileText size={15} />
            <span>{doc}</span>
          </span>
        ))}
        <span className={styles.mode}>
          <span>Modo</span>
          <span className={styles.segment}>
            <span>Automático</span>
            <span className={styles.segmentOn}>Com aprovação</span>
          </span>
        </span>
      </aside>

      <div className={styles.chat}>
        <div className={v.head}>
          <Avatar name="Paula Neves" tint={5} size={34} />
          <span className={v.who}>
            <strong>Paula Neves</strong>
            <span>Atendimento · IA ativa</span>
          </span>
        </div>
        <div className={v.wallpaper}>
          {step >= 1 && (
            <div className={`${v.bubble} ${v.in}`}>
              Vocês abrem no feriado de sexta?
              <span className={v.meta}>16:20</span>
            </div>
          )}

          {step >= 2 && step <= 4 && (
            <div className={styles.suggest}>
              <span className={styles.suggestLabel}>
                <Sparkles size={13} /> {step === 2 ? 'Lendo Horários e feriados.pdf…' : 'Sugestão da IA'}
              </span>
              {step === 2 ? (
                <span className={styles.shimmer} />
              ) : (
                <>
                  <span className={styles.suggestText}>{ANSWER}</span>
                  <span className={`${styles.use} ${step === 4 ? styles.usePressed : ''}`}>Enviar</span>
                </>
              )}
            </div>
          )}

          {step >= 5 && (
            <div className={`${v.bubble} ${v.out}`}>
              {ANSWER}
              <span className={v.meta}>
                16:20 <CheckCheck size={14} className={v.read} />
              </span>
            </div>
          )}

          {step >= 6 && (
            <span className={v.system}>
              <PauseCircle size={12} className={styles.inline} /> Ana assumiu a conversa e a IA pausou
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
