import {
  ChartColumnBig,
  CircleUserRound,
  Megaphone,
  MessageCircle,
  Settings,
  Sparkles,
  SquareKanban,
  Users,
  Workflow,
} from 'lucide-react';
import { Avatar } from '../../components/Avatar';
import { useInView } from '../../hooks/useInView';
import { useTicker } from '../../hooks/useTicker';
import { ChatThread, CHAT_REST_STEP, CHAT_STEPS } from './ChatThread';
import { ConversationList } from './ConversationList';
import { AGENTS, INCOMING, READ_AFTER, TICKS_PER_ARRIVAL, VISIBLE_ROWS } from './demoData';
import styles from './InboxDemo.module.css';

const RAIL = [Users, SquareKanban, Megaphone, Workflow, Sparkles, ChartColumnBig];

/** O produto funcionando sozinho: conversas chegam, ganham fila e responsável. */
export function InboxDemo() {
  const [ref, inView] = useInView<HTMLDivElement>({ rootMargin: '120px' });
  const tick = useTicker({ active: inView, ms: 1000, steps: Number.MAX_SAFE_INTEGER, restStep: 20 });
  const chatStep = useTicker({ active: inView, ms: 1300, steps: CHAT_STEPS, restStep: CHAT_REST_STEP });

  const newest = Math.floor(tick / TICKS_PER_ARRIVAL);
  const unread = Array.from({ length: VISIBLE_ROWS }, (_, slot) => tick - (newest - slot) * TICKS_PER_ARRIVAL).filter(
    (age) => age < READ_AFTER,
  ).length;
  // Conversa que acabou de ganhar responsável (a idade 2 é quando o avatar do atendente aparece).
  const assigned = Math.floor((tick - 2) / TICKS_PER_ARRIVAL);
  const assignedEvent = INCOMING[((assigned % INCOMING.length) + INCOMING.length) % INCOMING.length];
  const assignedAgent = AGENTS[assignedEvent.queue];

  return (
    <div
      ref={ref}
      className={styles.demo}
      role="img"
      aria-label="Demonstração do Altar Chat: conversas chegando no mesmo número e sendo distribuídas para Vendas, Suporte e Financeiro."
    >
      <div className={styles.window} aria-hidden="true">
        <div className={styles.chrome}>
          <span className={styles.dots}>
            <span />
            <span />
            <span />
          </span>
          <span className={styles.url}>app.altarchat.com.br/conversas</span>
        </div>

        <div className={styles.body}>
          <nav className={styles.rail}>
            <span className={`${styles.railItem} ${styles.railActive}`}>
              <MessageCircle size={22} />
              <span className={styles.railBadge}>{unread}</span>
            </span>
            {RAIL.map((Icon, i) => (
              <span key={i} className={styles.railItem}>
                <Icon size={22} />
              </span>
            ))}
            <span className={styles.railSpacer} />
            <span className={styles.railItem}>
              <Settings size={22} />
            </span>
            <span className={styles.railItem}>
              <CircleUserRound size={24} />
            </span>
          </nav>

          <ConversationList tick={tick} />
          <ChatThread step={chatStep} />
        </div>
      </div>

      <div key={assigned} className={styles.toast} aria-hidden="true">
        <Avatar name={assignedAgent.name} tint={assignedAgent.tint} size={34} />
        <span>
          <span className={styles.toastLabel}>Distribuição automática · {assignedEvent.queue}</span>
          <strong>
            {assignedEvent.name.split(' ')[0]} → {assignedAgent.name}
          </strong>
        </span>
      </div>
    </div>
  );
}
