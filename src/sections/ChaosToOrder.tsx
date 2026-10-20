import { useCallback, useEffect, useRef, type CSSProperties } from 'react';
import { Avatar } from '../components/Avatar';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { clamp01, easeInOutCubic, useScrollFrame } from '../hooks/useScrollFrame';
import { CHIPS, LANES, SLOTS_PER_LANE } from './chaos/chaosData';
import styles from './ChaosToOrder.module.css';

type Box = { x: number; y: number; w: number; h: number };

/**
 * Seção presa na rolagem: as conversas soltas voam até a fila do setor certo.
 * As posições finais vêm dos espaços que o CSS desenha em cada fila; o JS só mede e interpola.
 */
export function ChaosToOrder() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLElement>(null);
  const chipRefs = useRef<(HTMLDivElement | null)[]>([]);
  const slotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const layout = useRef<{ w: number; h: number; targets: Box[] } | null>(null);
  const reduced = useReducedMotion();

  const paint = useCallback(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const box = layout.current;
    if (!section || !sticky || !box) return;

    let progress = 1;
    if (!reduced) {
      const rect = section.getBoundingClientRect();
      const navH = 68;
      progress = clamp01((navH - rect.top) / Math.max(1, rect.height - (window.innerHeight - navH)));
    }

    let waiting = 0;
    CHIPS.forEach((chip, i) => {
      const el = chipRefs.current[i];
      const target = box.targets[i];
      if (!el || !target) return;
      const local = clamp01((progress - 0.1 - chip.order * 0.03) / 0.4);
      const eased = easeInOutCubic(local);
      const fromX = chip.chaos[0] * (box.w - target.w);
      const fromY = chip.chaos[1] * (box.h - target.h);
      const x = fromX + (target.x - fromX) * eased;
      const y = fromY + (target.y - fromY) * eased - Math.sin(Math.PI * eased) * 40;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${chip.chaos[2] * (1 - eased)}deg)`;
      const landed = local >= 1 ? 'true' : 'false';
      if (el.dataset.landed !== landed) el.dataset.landed = landed;
      if (local < 0.5) waiting++;
    });

    const phase = progress > 0.55 ? 'order' : 'chaos';
    if (sticky.dataset.phase !== phase) sticky.dataset.phase = phase;
    sticky.style.setProperty('--lanes', String(clamp01((progress - 0.06) / 0.25)));
    if (counterRef.current) counterRef.current.textContent = String(waiting);
  }, [reduced]);

  const measure = useCallback(() => {
    const stage = stageRef.current;
    if (!stage) return;
    // offset* ignora o transform das filas (que entram deslizando); o palco é o offsetParent.
    const sizes = slotRefs.current.map((slot) =>
      slot
        ? { x: slot.offsetLeft, y: slot.offsetTop, w: slot.offsetWidth, h: slot.offsetHeight }
        : { x: 0, y: 0, w: 0, h: 0 },
    );
    const targets = CHIPS.map((chip) => sizes[chip.lane * SLOTS_PER_LANE + chip.slot]);
    targets.forEach((target, i) => {
      const el = chipRefs.current[i];
      if (!el) return;
      el.style.width = `${target.w}px`;
      el.style.height = `${target.h}px`;
    });
    layout.current = { w: stage.offsetWidth, h: stage.offsetHeight, targets };
    paint();
  }, [paint]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new ResizeObserver(measure);
    observer.observe(stage);
    return () => observer.disconnect();
  }, [measure]);

  useScrollFrame(paint);

  return (
    <section ref={sectionRef} id="do-caos-a-ordem" className={styles.section}>
      <div ref={stickyRef} className={styles.sticky} data-phase="chaos">
        <div className={`container ${styles.inner}`}>
          <div className={styles.heads}>
            <div className={styles.head} data-for="chaos">
              <p className="eyebrow">Sem o Altar Chat</p>
              <h2 className={styles.title}>Um celular no balcão, cinco pessoas revezando e cliente esperando.</h2>
              <p className={styles.lead}>Ninguém sabe quem já respondeu, quem está esperando ou quem foi esquecido.</p>
            </div>
            <div className={styles.head} data-for="order">
              <p className="eyebrow">Com o Altar Chat</p>
              <h2 className={styles.title}>Cada conversa com fila, dono e histórico.</h2>
              <p className={styles.lead}>
                As mensagens continuam chegando no mesmo número. O Altar Chat entrega cada uma para quem cuida do
                assunto.
              </p>
            </div>
          </div>

          <div className={styles.status} aria-hidden="true">
            <span className={styles.counter}>
              <span className={styles.counterDot} />
              Sem responsável: <strong ref={counterRef}>{CHIPS.length}</strong>
            </span>
            <span className={styles.hint}>Role para organizar</span>
          </div>

          <div ref={stageRef} className={styles.stage} aria-hidden="true">
            <div className={styles.lanes}>
              {LANES.map((lane, l) => (
                <div key={lane.queue} className={styles.lane}>
                  <div className={styles.laneHead}>
                    <Avatar name={lane.agent} tint={lane.tint} size={36} />
                    <span className={styles.laneWho}>
                      <strong>{lane.agent}</strong>
                      <span>Fila {lane.queue}</span>
                    </span>
                  </div>
                  <div className={styles.slots}>
                    {Array.from({ length: SLOTS_PER_LANE }, (_, s) => (
                      <span
                        key={s}
                        ref={(el) => {
                          slotRefs.current[l * SLOTS_PER_LANE + s] = el;
                        }}
                        className={styles.slot}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {CHIPS.map((chip, i) => (
              <div
                key={chip.name}
                ref={(el) => {
                  chipRefs.current[i] = el;
                }}
                className={styles.chip}
                data-landed="false"
                style={{ '--i': i } as CSSProperties}
              >
                <Avatar name={chip.name} tint={chip.tint} size={36} />
                <span className={styles.chipBody}>
                  <strong>{chip.name}</strong>
                  <span>{chip.text}</span>
                </span>
                <span className={styles.chipMeta}>
                  <span className={styles.wait}>{chip.waiting} min</span>
                  <span className={styles.owner}>{LANES[chip.lane].agent.split(' ')[0]}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
