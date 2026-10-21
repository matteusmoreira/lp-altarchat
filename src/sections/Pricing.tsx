import { ArrowRight, Check } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { PLANS, whatsappWithText } from '../constants';
import styles from './Pricing.module.css';

export function Pricing() {
  return (
    <section id="planos" className={styles.section}>
      <div className="container">
        <Reveal className={styles.header}>
          <p className="eyebrow">Planos</p>
          <h2 className="section-title">Preço fixo por mês, sem taxa de implantação.</h2>
          <p className="section-lead">Todos os planos começam com 7 dias grátis. Cancele quando quiser, sem multa.</p>
        </Reveal>

        <div className={styles.grid}>
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 90} className={styles.cell}>
              <article className={`${styles.plan} ${plan.featured ? styles.featured : ''}`}>
                <header className={styles.planHead}>
                  <h3 className={styles.name}>{plan.name}</h3>
                  {plan.featured && <span className={styles.tag}>Recomendado</span>}
                </header>
                <p className={styles.desc}>{plan.description}</p>
                <p className={styles.price}>
                  <span className={styles.currency}>R$</span>
                  <span className={styles.amount}>{plan.price}</span>
                  <span className={styles.period}>/mês</span>
                </p>
                <a
                  href={whatsappWithText(`Olá! Quero testar o plano ${plan.name} do Altar Chat.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn--lg ${plan.featured ? 'btn--primary' : 'btn--dark'} ${styles.cta}`}
                >
                  Testar 7 dias grátis
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <ul className={styles.features}>
                  {plan.features.map((f) => (
                    <li key={f}>
                      <Check size={16} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
