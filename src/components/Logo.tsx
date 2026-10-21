import styles from './Logo.module.css';

type Props = {
  /** `dark` para fundo verde-floresta. */
  tone?: 'light' | 'dark';
};

export function Logo({ tone = 'light' }: Props) {
  return (
    <span className={`${styles.logo} ${tone === 'dark' ? styles.dark : ''}`}>
      <img src="/logo-mark.png" alt="" width={32} height={32} className={styles.icon} />
      <span className={styles.word}>
        altar<span className={styles.accent}>chat</span>
      </span>
    </span>
  );
}
