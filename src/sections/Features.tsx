import { useEffect, useRef, useState, type ComponentType } from 'react';
import { Check } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { AiVignette } from './features/AiVignette';
import { CampaignVignette } from './features/CampaignVignette';
import { FlowVignette } from './features/FlowVignette';
import { ReportsVignette } from './features/ReportsVignette';
import { TeamVignette } from './features/TeamVignette';
import styles from './Features.module.css';

type Chapter = {
  id: string;
  label: string;
  title: string;
  text: string;
  points: string[];
  Vignette: ComponentType<{ active: boolean }>;
};

const CHAPTERS: Chapter[] = [
  {
    id: 'atendimento',
    label: 'Atendimento em equipe',
    title: 'Várias pessoas no mesmo número, cada uma no que é dela.',
    text: 'As conversas caem na fila do setor e o atendente vê o histórico inteiro. Precisa de ajuda? Deixa uma nota que o cliente não vê ou transfere sem perder nada.',
    points: [
      'Filas por setor e distribuição automática',
      'Notas internas e transferência com histórico',
      'Respostas rápidas com /',
      'Etiquetas, Kanban e permissões por atendente',
    ],
    Vignette: TeamVignette,
  },
  {
    id: 'automacoes',
    label: 'Automações',
    title: 'O que se repete, o fluxo resolve sozinho.',
    text: 'Monte o caminho da conversa arrastando blocos: boas-vindas, horário de atendimento, menu de setores e encaminhamento para a fila certa. Sem programar.',
    points: [
      'Gatilho por primeira mensagem ou palavra-chave',
      'Condições, menus e esperas',
      'Follow-up e mensagens agendadas',
    ],
    Vignette: FlowVignette,
  },
  {
    id: 'disparos',
    label: 'Disparos',
    title: 'Campanhas com ritmo controlado, contato por contato.',
    text: 'Você define o intervalo entre os envios e o limite por minuto. Cada contato mostra o horário previsto e o que aconteceu com a mensagem.',
    points: [
      'Intervalo aleatório e limite por minuto',
      'Variações da mensagem com o nome de cada contato',
      'Agendamento, recorrência e status de cada envio',
    ],
    Vignette: CampaignVignette,
  },
  {
    id: 'ia',
    label: 'Inteligência artificial',
    title: 'Uma IA que responde com os documentos da sua empresa.',
    text: 'Envie horários, políticas e catálogos. A IA responde sozinha ou sugere a resposta para o atendente aprovar, e pausa quando alguém da equipe assume.',
    points: [
      'Base de conhecimento com seus arquivos',
      'Modo automático ou com aprovação',
      'Pausa quando um humano entra na conversa',
    ],
    Vignette: AiVignette,
  },
  {
    id: 'relatorios',
    label: 'Relatórios',
    title: 'Decida olhando número, não impressão.',
    text: 'Tempo de primeira resposta, volume por atendente e por fila, conversas abertas e resolvidas. Tudo exportável em planilha.',
    points: ['Tempo de resposta e de atendimento', 'Desempenho por atendente e por fila', 'Exportação em planilha'],
    Vignette: ReportsVignette,
  },
];

const MORE = [
  'Vários números na mesma conta',
  'Kanban de contatos',
  'Comunidades e grupos',
  'Status agendado',
  'Chat para o seu site',
  'API e webhooks',
  'Ferramentas de LGPD',
  'Tema claro e escuro',
];

export function Features() {
  const [active, setActive] = useState(0);
  const chapterRefs = useRef<(HTMLElement | null)[]>([]);

  // O capítulo ativo é o que cruza a faixa central da tela.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        });
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    chapterRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="recursos" className={styles.section}>
      <div className="container">
        <Reveal className={styles.header}>
          <p className="eyebrow">Recursos</p>
          <h2 className="section-title">Tudo o que a operação precisa, numa tela que a equipe já conhece.</h2>
        </Reveal>

        <div className={styles.layout}>
          <nav className={styles.nav} aria-label="Recursos">
            <ol>
              {CHAPTERS.map((c, i) => (
                <li key={c.id}>
                  <a href={`#${c.id}`} className={styles.navLink} aria-current={i === active ? 'true' : undefined}>
                    <span className={styles.navNum}>{String(i + 1).padStart(2, '0')}</span>
                    {c.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className={styles.chapters}>
            {CHAPTERS.map(({ id, label, title, text, points, Vignette }, i) => (
              <article
                key={id}
                id={id}
                data-index={i}
                ref={(el) => {
                  chapterRefs.current[i] = el;
                }}
                className={styles.chapter}
                data-active={i === active}
              >
                <div className={styles.copy}>
                  <p className={styles.kicker}>
                    {String(i + 1).padStart(2, '0')} · {label}
                  </p>
                  <h3 className={styles.title}>{title}</h3>
                  <p className={styles.text}>{text}</p>
                  <ul className={styles.points}>
                    {points.map((p) => (
                      <li key={p}>
                        <Check size={16} aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.visual} aria-hidden="true">
                  <Vignette active={i === active} />
                </div>
              </article>
            ))}
          </div>
        </div>

        <Reveal className={styles.more}>
          <span className={styles.moreLabel}>E ainda</span>
          <ul>
            {MORE.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
