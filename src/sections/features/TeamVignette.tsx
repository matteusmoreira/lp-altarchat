import { ArrowRightLeft, CheckCheck, StickyNote } from 'lucide-react';
import { Avatar } from '../../components/Avatar';
import { useTicker } from '../../hooks/useTicker';
import v from './Vignette.module.css';
import styles from './TeamVignette.module.css';

/** Nota interna, transferência com histórico e resposta rápida com "/". */
export function TeamVignette({ active }: { active: boolean }) {
  const step = useTicker({ active, ms: 1400, steps: 9, restStep: 7 });
  const transferred = step >= 2;

  return (
    <div className={v.frame}>
      <div className={v.head}>
        <Avatar name="Bruno Costa" tint={1} size={38} />
        <span className={v.who}>
          <strong>Bruno Costa</strong>
          <span key={String(transferred)} className={v.swap}>
            {transferred ? 'Financeiro · com Beatriz Lopes' : 'Suporte · com Diego Martins'}
          </span>
        </span>
        <span className={`${v.pill} ${transferred ? v.pillGreen : ''}`}>{transferred ? 'Financeiro' : 'Suporte'}</span>
      </div>

      <div className={v.wallpaper}>
        <div className={`${v.bubble} ${v.in}`}>
          Recebi o produto com defeito. E agora?
          <span className={v.meta}>10:02</span>
        </div>

        {step >= 1 && (
          <div className={v.note}>
            <span className={v.noteLabel}>
              <StickyNote size={12} /> Nota interna · só a equipe vê
            </span>
            Diego: Beatriz, consegue liberar o reembolso?
          </div>
        )}

        {transferred && (
          <span className={v.system}>
            <ArrowRightLeft size={12} className={styles.inline} /> Diego transferiu para Financeiro com o histórico
          </span>
        )}

        {step >= 5 && (
          <div className={`${v.bubble} ${v.out}`}>
            Pronto, Bruno! O reembolso cai em até 5 dias úteis, na mesma forma de pagamento.
            <span className={v.meta}>
              10:06 <CheckCheck size={14} className={step >= 6 ? v.read : ''} />
            </span>
          </div>
        )}

        <div className={styles.composerWrap}>
          {(step === 3 || step === 4) && (
            <div className={styles.quick}>
              <span className={styles.quickTitle}>Respostas rápidas</span>
              <span className={`${styles.quickItem} ${styles.quickActive} ${step === 4 ? styles.quickPressed : ''}`}>
                <strong>/reembolso</strong> Prazo e forma do reembolso
              </span>
              <span className={styles.quickItem}>
                <strong>/troca</strong> Política de troca
              </span>
            </div>
          )}
          <div className={v.composer}>
            {step === 3 || step === 4 ? (
              <span className={styles.typed}>
                /reem
                <span className={v.caret} />
              </span>
            ) : (
              'Digite uma mensagem'
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
