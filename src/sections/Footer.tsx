import { Logo } from '../components/Logo';
import { APP_URL, CONTACT_EMAIL, TRIAL_LINK, WHATSAPP_LINK, WHATSAPP_NUMBER } from '../constants';
import styles from './Footer.module.css';

type FooterLink = { label: string; href: string; external?: boolean };

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Produto',
    links: [
      { label: 'Recursos', href: '#recursos' },
      { label: 'Como começar', href: '#comecar' },
      { label: 'Planos', href: '#planos' },
      { label: 'Dúvidas', href: '#duvidas' },
    ],
  },
  {
    title: 'Acesso',
    links: [
      { label: 'Entrar', href: APP_URL },
      { label: 'Testar grátis', href: TRIAL_LINK, external: true },
    ],
  },
  {
    title: 'Contato',
    links: [
      { label: `WhatsApp ${WHATSAPP_NUMBER}`, href: WHATSAPP_LINK, external: true },
      { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    ],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <Logo tone="dark" />
          <p>Atendimento que conecta. Multiatendimento no WhatsApp para equipes brasileiras.</p>
        </div>
        {COLUMNS.map((col) => (
          <nav key={col.title} aria-label={col.title} className={styles.col}>
            <h3>{col.title}</h3>
            <ul>
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className={`container ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} Altar Chat MultiAtendimento. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}
