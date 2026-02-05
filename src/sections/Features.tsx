import { useEffect, useRef, useState } from 'react';
import { 
  Users, 
  Bot, 
  BarChart3, 
  Code, 
  Tags, 
  Send,
  Sparkles
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Múltiplos Atendentes',
    description: 'Adicione quantos atendentes precisar. Cada um com seu próprio acesso e fila de atendimento organizada.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Bot,
    title: 'Chatbot Inteligente',
    description: 'Automatize respostas frequentes com nosso construtor de chatbot visual. Economize tempo e padronize o atendimento.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: BarChart3,
    title: 'Relatórios Detalhados',
    description: 'Acompanhe métricas em tempo real. Tempo de resposta, satisfação do cliente, conversões e muito mais.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Code,
    title: 'Integração API',
    description: 'Conecte com seus sistemas existentes. CRM, ERP, e-commerce e outras ferramentas via API completa.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Tags,
    title: 'Segmentação de Contatos',
    description: 'Organize seus contatos com etiquetas personalizadas. Filtre, segmente e personalize suas campanhas.',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Send,
    title: 'Campanhas de Disparo',
    description: 'Envie mensagens em massa de forma inteligente. Agendamento, personalização e relatórios completos.',
    color: 'from-cyan-500 to-cyan-600',
  },
];

export function Features() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-whatsapp-green/5 rounded-full blur-[80px] lg:blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-whatsapp-dark/5 rounded-full blur-[60px] lg:blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-20">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-whatsapp-green/10 rounded-full mb-4 sm:mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-whatsapp-green" />
            <span className="text-xs sm:text-sm font-medium text-whatsapp-dark">FUNCIONALIDADES</span>
          </div>

          <h2
            className={`font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Tudo que você precisa para um{' '}
            <span className="text-gradient">atendimento de excelência</span>
          </h2>

          <p
            className={`text-base sm:text-lg text-gray-600 px-2 sm:px-0 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Uma plataforma completa com ferramentas poderosas para gerenciar seu WhatsApp empresarial
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="relative h-full bg-white/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-gray-100 transition-all duration-500 group-hover:bg-white group-hover:border-whatsapp-green/30 group-hover:shadow-xl group-hover:shadow-whatsapp-green/10 group-hover:-translate-y-1 sm:group-hover:-translate-y-2">
                {/* Icon */}
                <div className={`w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-poppins font-semibold text-lg sm:text-xl text-gray-900 mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-whatsapp-green/0 to-whatsapp-dark/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-10 sm:mt-14 lg:mt-16 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">E muito mais...</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {['Agendamento', 'Notas Internas', 'Transferência', 'Blacklist', 'Respostas Rápidas'].map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-whatsapp-green/10 text-whatsapp-dark text-xs sm:text-sm font-medium rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
