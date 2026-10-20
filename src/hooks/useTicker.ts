import { useEffect, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

/**
 * Passo atual de um roteiro em loop (0 … steps-1), avançando a cada `ms` enquanto `active`.
 * Com movimento reduzido fica parado em `restStep`, o quadro que melhor resume a cena.
 */
export function useTicker({
  active,
  ms,
  steps,
  restStep,
}: {
  active: boolean;
  ms: number;
  steps: number;
  restStep: number;
}) {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!active || reduced) return;
    const id = window.setInterval(() => setStep((s) => (s + 1) % steps), ms);
    return () => window.clearInterval(id);
  }, [active, reduced, ms, steps]);

  return reduced ? restStep : step;
}
