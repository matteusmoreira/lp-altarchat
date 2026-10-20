import type { CSSProperties } from 'react';
import { MoreVertical, Search, SquarePen } from 'lucide-react';
import { Avatar } from '../../components/Avatar';
import { AGENTS, INCOMING, READ_AFTER, TICKS_PER_ARRIVAL, VISIBLE_ROWS, clockFor } from './demoData';
import styles from './InboxDemo.module.css';

const ROW_H = 76;
const QUEUE_TINT = { Vendas: 1, Suporte: 2, Financeiro: 3 } as const;

/** Lista de conversas: a mais nova entra no topo e as outras descem (só transform). */
export function ConversationList({ tick }: { tick: number }) {
  const newest = Math.floor(tick / TICKS_PER_ARRIVAL);
  const total = INCOMING.length;

  const rows = Array.from({ length: VISIBLE_ROWS + 1 }, (_, slot) => {
    const index = newest - slot;
    const event = INCOMING[((index % total) + total) % total];
    return { index, slot, event, age: tick - index * TICKS_PER_ARRIVAL };
  });

  return (
    <div className={styles.list}>
      <div className={styles.listHeader}>
        <span className={styles.listTitle}>Conversas</span>
        <span className={styles.listIcons}>
          <SquarePen size={19} />
          <MoreVertical size={19} />
        </span>
      </div>
      <div className={styles.search}>
        <Search size={16} />
        Pesquisar ou começar uma conversa
      </div>
      <div className={styles.chips}>
        <span className={styles.chipActive}>Tudo</span>
        <span>Não lidas</span>
        <span>Minhas</span>
        <span>Filas</span>
      </div>

      <div className={styles.rows} style={{ height: VISIBLE_ROWS * ROW_H }}>
        {rows.map(({ index, slot, event, age }) => {
          const agent = AGENTS[event.queue];
          const unread = age < READ_AFTER;
          return (
            <div key={index} className={styles.row} style={{ transform: `translateY(${slot * ROW_H}px)` }}>
              <div
                className={`${styles.rowInner} ${age === 0 ? styles.rowFresh : ''}`}
                style={{ '--enter-delay': tick === 0 ? `${slot * 70}ms` : '0ms' } as CSSProperties}
              >
                <span className={styles.avatarWrap}>
                  <Avatar name={event.name} tint={event.tint} size={48} />
                  {age >= 2 && (
                    <span className={styles.assignee}>
                      <Avatar name={agent.name} tint={agent.tint} size={22} />
                    </span>
                  )}
                </span>
                <span className={styles.rowBody}>
                  <span className={styles.rowTop}>
                    <span className={styles.rowName}>{event.name}</span>
                    {age >= 1 && (
                      <span className={styles.queue} data-tint={QUEUE_TINT[event.queue]}>
                        {event.queue}
                      </span>
                    )}
                    <span className={`${styles.time} ${unread ? styles.timeUnread : ''}`}>
                      {age === 0 ? 'agora' : clockFor(index)}
                    </span>
                  </span>
                  <span className={styles.rowBottom}>
                    <span className={styles.preview}>{event.text}</span>
                    {unread && <span className={styles.badge}>1</span>}
                  </span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
