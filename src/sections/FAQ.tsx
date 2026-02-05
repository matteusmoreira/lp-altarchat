import { useEffect, useRef, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Preciso ter WhatsApp Business?',
    answer: 'Não é obrigatório, mas recomendamos. Nossa plataforma funciona com qualquer número de WhatsApp, mas o WhatsApp Business oferece recursos adicionais que complementam nossa solução.',
  },
  {
    question: 'Posso usar mais de um número?',
    answer: 'Sim! Dependendo do seu plano, você pode conectar múltiplos números de WhatsApp e gerenciar todos em um único dashboard. O plano Profissional permite 3 números e o Empresarial oferece números ilimitados.',
  },
  {
    question: 'Como funciona o chatbot?',
    answer: 'Nosso construtor de chatbot é visual e intuitivo. Você cria fluxos de conversa arrastando e soltando elementos, sem precisar de conhecimento em programação. É possível criar respostas automáticas, qualificar leads e encaminhar para atendentes.',
  },
  {
    question: 'É seguro? Meus dados estão protegidos?',
    answer: 'Totalmente. Utilizamos criptografia de ponta a ponta, servidores seguros e estamos em conformidade com a LGPD. Seus dados nunca são compartilhados com terceiros e realizamos backups automáticos diários.',
  },
  {
    question: 'Posso cancelar quando quiser?',
    answer: 'Sim, sem multa ou taxa de cancelamento. Você tem controle total sobre sua assinatura. Ao cancelar, você mantém acesso até o final do período pago.',
  },
  {
    question: 'Tem suporte técnico?',
    answer: 'Oferecemos suporte por email para todos os planos. Nos planos Profissional e Empresarial, você tem acesso a suporte prioritário via chat e, no plano Empresarial, atendimento 24/7 com gerente de conta dedicado.',
  },
];

export function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-whatsapp-green/5 rounded-full blur-[50px] sm:blur-[80px]" />
      <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-whatsapp-dark/5 rounded-full blur-[60px] sm:blur-[100px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-whatsapp-green/10 rounded-full mb-4 sm:mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-whatsapp-green" />
            <span className="text-xs sm:text-sm font-medium text-whatsapp-dark">DÚVIDAS FREQUENTES</span>
          </div>

          <h2
            className={`font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Tire suas{' '}
            <span className="text-gradient">dúvidas</span>
          </h2>

          <p
            className={`text-base sm:text-lg text-gray-600 px-2 sm:px-0 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Ainda tem perguntas? Nossa equipe está pronta para ajudar
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div
                className={`bg-white rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                  openIndex === index
                    ? 'border-whatsapp-green/30 shadow-lg shadow-whatsapp-green/5'
                    : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left"
                >
                  <span className="font-poppins font-semibold text-base sm:text-lg text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 ${
                      openIndex === index
                        ? 'bg-whatsapp-green text-white rotate-180'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-400 ${
                    openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed pt-3 sm:pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div
          className={`text-center mt-10 sm:mt-14 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Não encontrou sua resposta?</p>
          <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-whatsapp-green/10 text-whatsapp-dark font-semibold rounded-xl transition-all duration-300 hover:bg-whatsapp-green hover:text-white hover:shadow-glow text-sm sm:text-base">
            Falar com Suporte
          </button>
        </div>
      </div>
    </section>
  );
}
