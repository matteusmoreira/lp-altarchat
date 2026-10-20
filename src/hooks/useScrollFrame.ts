import { useEffect, useLayoutEffect, useRef } from 'react';

/**
 * Chama `onFrame` no máximo uma vez por quadro enquanto a página rola ou muda de tamanho.
 * Quem usa grava estilo direto no DOM: a rolagem não passa pelo React.
 */
export function useScrollFrame(onFrame: () => void, enabled = true) {
  const callback = useRef(onFrame);

  useLayoutEffect(() => {
    callback.current = onFrame;
  });

  useEffect(() => {
    if (!enabled) return;
    let frame = 0;
    const run = () => {
      frame = 0;
      callback.current();
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(run);
    };
    run();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [enabled]);
}

export const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

export const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
