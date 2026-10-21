import { CheckCheck, Mic, MoreVertical, Plus, Search, Sparkles, StickyNote } from 'lucide-react';
import { Avatar } from '../../components/Avatar';
import styles from './InboxDemo.module.css';

/** Roteiro da conversa aberta; `step` vem de um ticker em loop (0 … CHAT_STEPS-1). */
export const CHAT_STEPS = 12;
export const CHAT_REST_STEP = 9;

const SUGGESTION = 'Temos sim! O M está disponível no azul-marinho e no azul-claro. Quer que eu separe uma para você?';

export function ChatThread({ step }: { step: number }) {
  const aiVisible = step >= 2 && step <= 4;
  const aiReady = step >= 3;
  const sent = step >= 5;

  return (
    <div className={styles.chat}>
      <div className={styles.chatHeader}>
        <Avatar name="Mariana Souza" tint={4} size={40} />
        <span className={styles.chatWho}>
          <strong>Mariana Souza</strong>
          <span>Vendas · com Ana Ribeiro</span>
        </span>
        <span className={styles.finish}>Finalizar</span>
        <Search size={19} className={styles.chatIcon} />
        <MoreVertical size={19} className={styles.chatIcon} />
      </div>

      <div className={styles.thread}>
        <span className={styles.dateChip}>Hoje</span>

        {step >= 1 && (
          <div className={`${styles.bubble} ${styles.bubbleIn}`}>
            Oi! Vocês têm a camisa azul no tamanho M?
            <span className={styles.meta}>09:12</span>
          </div>
        )}

        {sent && (
          <div className={`${styles.bubble} ${styles.bubbleOut}`}>
            {SUGGESTION}
            <span className={styles.meta}>
              09:13
              <CheckCheck size={15} className={step >= 6 ? styles.ticksRead : styles.ticks} />
            </span>
          </div>
        )}

        {step >= 7 && (
          <div className={`${styles.bubble} ${styles.bubbleIn}`}>
            Quero a azul-marinho! Passo na loja hoje.
            <span className={styles.meta}>09:14</span>
          </div>
        )}

        {step >= 8 && (
          <div className={styles.note}>
            <span className={styles.noteLabel}>
              <StickyNote size={13} /> Nota interna · só a equipe vê
            </span>
            Ana: separar 1 camisa M azul-marinho na loja Centro.
          </div>
        )}

        {step >= 9 && <span className={styles.system}>Ana finalizou o atendimento em 3 min</span>}
      </div>

      {aiVisible && (
        <div className={styles.ai}>
          <span className={styles.aiLabel}>
            <Sparkles size={14} /> {aiReady ? 'Sugestão da IA' : 'IA consultando o catálogo…'}
          </span>
          {aiReady ? (
            <>
              <p className={styles.aiText}>{SUGGESTION}</p>
              <span className={styles.aiActions}>
                <span className={`${styles.aiUse} ${step === 4 ? styles.aiPressed : ''}`}>Usar resposta</span>
                <span className={styles.aiEdit}>Editar</span>
              </span>
            </>
          ) : (
            <span className={styles.shimmer} />
          )}
        </div>
      )}

      <div className={styles.composer}>
        <Plus size={22} className={styles.chatIcon} />
        <span className={styles.composerInput}>Digite uma mensagem</span>
        <Mic size={22} className={styles.chatIcon} />
      </div>
    </div>
  );
}
