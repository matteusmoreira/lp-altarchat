import { useId, useState } from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { whatsappWithText } from '../constants';
import styles from './FAQ.module.css';

const QUESTIONS = [
  {
    q: 'Preciso ter WhatsApp Business?',
    a: 'Não é obrigatório, mas recomendamos. O Altar Chat funciona com qualquer número de WhatsApp, e o WhatsApp Business traz recursos que complementam a plataforma.',
  },
  {
    q: 'Posso usar mais de um número?',
    a: 'Sim. Dependendo do plano, você conecta vários números e atende todos na mesma tela. O Profissional permite 3 números e o Empresarial não tem limite.',
  },
  {
    q: 'Meu número corre risco de bloqueio?',
    a: 'O bloqueio depende de como o número é usado, e nenhuma ferramenta elimina esse risco. O Altar Chat ajuda no que está ao seu alcance: disparos com intervalo aleatório, limite por minuto, variações da mensagem e horário previsto de cada envio. Envie para quem conhece a sua empresa.',
  },
  {
    q: 'Como funcionam as automações?',
    a: 'Você monta o fluxo arrastando blocos: mensagem de boas-vindas, horário de atendimento, menu de setores e encaminhamento para a fila certa. Não precisa programar.',
  },
  {
    q: 'A IA responde sozinha?',
    a: 'Você escolhe. Ela pode responder sozinha ou só sugerir a resposta para o atendente aprovar. Em qualquer modo, usa os documentos que você enviar e pausa quando alguém da equipe assume a conversa.',
  },
  {
    q: 'Meus dados ficam protegidos?',
    a: 'Cada empresa tem os seus dados separados, cada atendente vê só o que a permissão dele libera, e há ferramentas de LGPD para exportar ou apagar os dados de um contato.',
  },
  {
    q: 'Posso cancelar quando quiser?',
    a: 'Sim, sem multa nem taxa de cancelamento. Ao cancelar, o acesso continua até o fim do período pago.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <section id="duvidas" className={styles.section}>
      <div className={`container ${styles.layout}`}>
        <Reveal className={styles.aside}>
          <p className="eyebrow">Dúvidas</p>
          <h2 className="section-title">Perguntas que todo mundo faz antes de começar.</h2>
          <p className={styles.help}>Não achou a sua? A gente responde pelo WhatsApp, com gente de verdade.</p>
          <a
            href={whatsappWithText('Olá! Tenho uma dúvida sobre o Altar Chat.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            Perguntar no WhatsApp
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </Reveal>

        <div className={styles.list}>
          {QUESTIONS.map(({ q, a }, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-${i}`;
            return (
              <div key={q} className={styles.item} data-open={isOpen}>
                <h3 className={styles.q}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    {q}
                    <Plus size={20} aria-hidden="true" className={styles.icon} />
                  </button>
                </h3>
                <div id={panelId} role="region" className={styles.panel} aria-hidden={!isOpen}>
                  <div>
                    <p>{a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
