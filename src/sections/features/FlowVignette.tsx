import { Clock, MessageSquareText, Moon, Zap, type LucideIcon } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useTicker } from '../../hooks/useTicker';
import v from './Vignette.module.css';
import styles from './FlowVignette.module.css';

type Node = { x: number; y: number; title: string; sub: string; Icon: LucideIcon; on: number };

// Canvas de 600 × 368 (viewBox); o SVG escala inteiro em telas menores.
const W = 170;
const H = 64;
const NODES: Node[] = [
  { x: 8, y: 152, title: 'Mensagem recebida', sub: 'Primeira do contato', Icon: Zap, on: 1 },
  { x: 204, y: 152, title: 'Horário comercial?', sub: 'Seg a sex, 8h às 18h', Icon: Clock, on: 3 },
  { x: 404, y: 44, title: 'Menu de setores', sub: '3 opções de fila', Icon: MessageSquareText, on: 5 },
  { x: 404, y: 260, title: 'Fora do horário', sub: 'Aviso: voltamos às 8h', Icon: Moon, on: 99 },
];

const EDGES = [
  { d: 'M178 184 L204 184', on: 2 },
  { d: 'M374 184 C392 184 386 76 404 76', on: 4 },
  { d: 'M374 184 C392 184 386 292 404 292', on: 4 },
];

const DOT_PATH = 'M178 184 L204 184 M374 184 C392 184 386 76 404 76';

/** Construtor de fluxos: os blocos acendem e as ligações se desenham em sequência. */
export function FlowVignette({ active }: { active: boolean }) {
  const reduced = useReducedMotion();
  const step = useTicker({ active, ms: 800, steps: 11, restStep: 10 });

  return (
    <div className={v.frame}>
      <div className={v.head}>
        <span className={v.who}>
          <strong>Boas-vindas</strong>
          <span>Automação · editado agora</span>
        </span>
        <span className={`${v.pill} ${v.pillGreen}`}>Ativa</span>
      </div>

      <svg className={styles.canvas} viewBox="0 0 600 368" preserveAspectRatio="xMidYMid meet">
        <defs>
          <pattern id="flow-dots" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" className={styles.dot} />
          </pattern>
        </defs>
        <rect width="600" height="368" fill="url(#flow-dots)" />

        {EDGES.map((edge) => (
          <path
            key={edge.d}
            d={edge.d}
            pathLength={1}
            className={`${styles.edge} ${step >= edge.on ? styles.edgeOn : ''}`}
          />
        ))}

        <text x="384" y="118" className={styles.branch}>
          Sim
        </text>
        <text x="384" y="262" className={styles.branch}>
          Não
        </text>

        {NODES.map(({ x, y, title, sub, Icon, on }) => (
          <g key={title} className={`${styles.node} ${step >= on ? styles.nodeOn : ''}`}>
            <rect x={x} y={y} width={W} height={H} rx="12" className={styles.box} />
            <circle cx={x + 22} cy={y + 32} r="14" className={styles.iconBg} />
            <Icon x={x + 14} y={y + 24} width={16} height={16} className={styles.icon} />
            <text x={x + 43} y={y + 28} className={styles.title}>
              {title}
            </text>
            <text x={x + 43} y={y + 45} className={styles.sub}>
              {sub}
            </text>
          </g>
        ))}

        {!reduced && active && step >= 6 && (
          <circle r="4.5" className={styles.pulse}>
            <animateMotion dur="1.6s" repeatCount="indefinite" path={DOT_PATH} />
          </circle>
        )}
      </svg>
    </div>
  );
}
