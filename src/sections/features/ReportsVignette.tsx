import { useEffect, useState, type CSSProperties } from 'react';
import { Download } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import v from './Vignette.module.css';
import styles from './ReportsVignette.module.css';

const AGENTS = [
  { name: 'Ana', value: 42 },
  { name: 'Diego', value: 35 },
  { name: 'Beatriz', value: 28 },
  { name: 'Rui', value: 21 },
];

const HOURLY = 'M0 52 C 20 48, 30 30, 50 34 S 80 12, 100 18 S 140 40, 160 26 S 200 6, 220 10 S 260 30, 280 22';

/** Sobe de 0 até `target` em ~900ms quando `active` liga. */
function useCountUp(target: number, active: boolean) {
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active || reduced) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 900);
      setValue(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, reduced, target]);

  return reduced ? target : value;
}

export function ReportsVignette({ active }: { active: boolean }) {
  const seconds = useCountUp(108, active);
  const total = useCountUp(126, active);
  const resolved = useCountUp(92, active);
  const max = Math.max(...AGENTS.map((a) => a.value));

  return (
    <div className={`${v.frame} ${styles.frame}`} data-active={active}>
      <div className={v.head}>
        <span className={v.who}>
          <strong>Relatórios</strong>
          <span>Hoje · todas as filas</span>
        </span>
        <span className={v.pill}>
          <Download size={13} /> Exportar planilha
        </span>
      </div>

      <div className={styles.body}>
        <div className={styles.kpis}>
          <span className={styles.kpi}>
            <span>Primeira resposta</span>
            <strong>
              {Math.floor(seconds / 60)}m {String(seconds % 60).padStart(2, '0')}s
            </strong>
          </span>
          <span className={styles.kpi}>
            <span>Atendimentos</span>
            <strong>{total}</strong>
          </span>
          <span className={styles.kpi}>
            <span>Resolvidos</span>
            <strong>{resolved}%</strong>
          </span>
        </div>

        <div className={styles.panels}>
          <div className={styles.panel}>
            <span className={styles.panelTitle}>Por atendente</span>
            {AGENTS.map((a, i) => (
              <span key={a.name} className={styles.barRow}>
                <span className={styles.barName}>{a.name}</span>
                <span className={styles.barTrack}>
                  <span style={{ '--w': a.value / max, '--d': `${i * 90}ms` } as CSSProperties} />
                </span>
                <span className={styles.barValue}>{a.value}</span>
              </span>
            ))}
          </div>
          <div className={styles.panel}>
            <span className={styles.panelTitle}>Conversas por hora</span>
            <svg viewBox="0 0 280 60" className={styles.spark} preserveAspectRatio="none">
              <path d={HOURLY} pathLength={1} className={styles.sparkLine} />
            </svg>
            <span className={styles.axis}>
              <span>8h</span>
              <span>12h</span>
              <span>18h</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
