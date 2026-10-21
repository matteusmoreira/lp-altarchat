import { useEffect, useRef, useState } from 'react';

type Options = {
  /** Para de observar depois da primeira entrada (animações de entrada). */
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
};

export function useInView<T extends Element>({ once = false, rootMargin = '0px', threshold = 0 }: Options = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin, threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return [ref, inView] as const;
}
