import type { CSSProperties } from 'react';
import { Check, CheckCheck, Clock } from 'lucide-react';
import { Avatar, type Tint } from '../../components/Avatar';
import { useTicker } from '../../hooks/useTicker';
import v from './Vignette.module.css';
import styles from './CampaignVignette.module.css';

const RECIPIENTS: { name: string; tint: Tint; at: string }[] = [
  { name: 'Aline Barros', tint: 1, at: '14:00:00' },
  { name: 'Marcos Vieira', tint: 2, at: '14:00:09' },
  { name: 'Sueli Prado', tint: 3, at: '14:00:21' },
  { name: 'Otávio Reis', tint: 5, at: '14:00:29' },
  { name: 'Larissa Melo', tint: 4, at: '14:00:43' },
  { name: 'Hugo Fontes', tint: 6, at: '14:00:54' },
];

const TOTAL = 480;

/** Um contato por vez, no horário previsto, com status de cada envio. */
export function CampaignVignette({ active }: { active: boolean }) {
  const step = useTicker({ active, ms: 1100, steps: RECIPIENTS.length + 4, restStep: 5 });
  const sent = Math.min(step, RECIPIENTS.length);

  return (
    <div className={v.frame}>
      <div className={v.head}>
        <span className={v.who}>
          <strong>Aviso de feriado</strong>
          <span>Disparo · {TOTAL} contatos da etiqueta Clientes</span>
        </span>
        <span className={`${v.pill} ${v.pillGreen}`}>
          <span className={styles.liveDot} /> Enviando
        </span>
      </div>

      <div className={styles.body}>
        <div className={styles.rules}>
          <span className={v.pill}>Intervalo de 8 a 15 s</span>
          <span className={v.pill}>Até 6 por minuto</span>
          <span className={v.pill}>3 variações da mensagem</span>
        </div>

        <div className={styles.progress}>
          <span className={styles.progressLabel}>
            <strong>{sent}</strong> de {TOTAL} enviados
          </span>
          <span className={styles.bar}>
            <span style={{ '--p': sent / RECIPIENTS.length } as CSSProperties} />
          </span>
        </div>

        <ul className={styles.list}>
          {RECIPIENTS.map((r, i) => {
            const state = i < sent - 2 ? 'read' : i < sent ? 'sent' : 'queued';
            return (
              <li key={r.name} className={styles.row} data-state={state}>
                <Avatar name={r.name} tint={r.tint} size={30} />
                <span className={styles.name}>{r.name}</span>
                <span className={styles.at}>{r.at}</span>
                <span className={styles.status}>
                  {state === 'queued' && (
                    <>
                      <Clock size={14} /> Previsto
                    </>
                  )}
                  {state === 'sent' && (
                    <>
                      <Check size={14} /> Enviado
                    </>
                  )}
                  {state === 'read' && (
                    <>
                      <CheckCheck size={14} className={v.read} /> Lido
                    </>
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
