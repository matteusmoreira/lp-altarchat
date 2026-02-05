import { useEffect, useRef, useState } from 'react';
import { Check, Sparkles, Zap, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Básico',
    icon: Zap,
    price: 150,
    description: 'Essencial para pequenos times começarem',
    features: [
      '2 atendentes',
      '1 número WhatsApp',
      'Chatbot básico',
      'Relatórios simples',
      'Suporte por email',
    ],
    cta: 'Começar Teste Grátis',
    popular: false,
  },
  {
    name: 'Profissional',
    icon: Sparkles,
    price: 350,
    description: 'A escolha ideal para times em crescimento',
    features: [
      'Até 5 atendentes',
      '3 números WhatsApp',
      'Chatbot avançado',
      'Relatórios completos',
      'API de integração',
      'Suporte prioritário',
    ],
    cta: 'Começar Teste Grátis',
    popular: true,
  },
  {
    name: 'Empresarial',
    icon: Crown,
    price: 500,
    description: 'Escalabilidade total para sua operação',
    features: [
      'Até 10 atendentes',
      'Números ilimitados',
      'Chatbot com IA',
      'Business Intelligence',
      'API dedicada',
      'Suporte 24/7',
      'Gerente de conta',
    ],
    cta: 'Começar Teste Grátis',
    popular: false,
  },
];

export function Pricing() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
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
      id="pricing"
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

      {/* Animated Gradient Mesh */}
      <div className="absolute inset-0 opacity-50">
        <div
          className="absolute top-0 left-1/4 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-whatsapp-green/10 rounded-full blur-[80px] lg:blur-[120px] animate-gradient-shift"
          style={{ backgroundSize: '200% 200%' }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-whatsapp-dark/10 rounded-full blur-[60px] lg:blur-[100px] animate-gradient-shift"
          style={{ backgroundSize: '200% 200%', animationDelay: '2s' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-20">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-whatsapp-green/10 rounded-full mb-4 sm:mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-whatsapp-green" />
            <span className="text-xs sm:text-sm font-medium text-whatsapp-dark">PLANOS E PREÇOS</span>
          </div>

          <h2
            className={`font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            Escolha o plano ideal para{' '}
            <span className="text-gradient">seu negócio</span>
          </h2>

          <p
            className={`text-base sm:text-lg text-gray-600 px-2 sm:px-0 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            Comece gratuitamente e escale conforme sua necessidade. Sem taxa de setup, cancele quando quiser.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 perspective-1000">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              style={{
                transitionDelay: `${400 + index * 150}ms`,
              }}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-3 py-1 sm:px-4 sm:py-1.5 bg-gradient-to-r from-whatsapp-green to-whatsapp-dark text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg animate-pulse-glow whitespace-nowrap">
                    MAIS POPULAR
                  </div>
                </div>
              )}

              <div
                className={`relative h-full rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 transition-all duration-500 ${plan.popular
                  ? 'bg-gradient-to-b from-whatsapp-green/10 to-white border-2 border-whatsapp-green/40 shadow-xl shadow-whatsapp-green/10'
                  : 'bg-white/80 backdrop-blur-xl border border-gray-100 hover:border-whatsapp-green/30 hover:shadow-xl'
                  } ${hoveredPlan === index ? 'shadow-2xl scale-[1.02]' : ''}`}
              >
                {/* Icon */}
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 transition-all duration-500 ${plan.popular
                    ? 'bg-whatsapp-green text-white'
                    : 'bg-gray-100 text-gray-600'
                    } ${hoveredPlan === index ? 'scale-110 rotate-3' : ''}`}
                >
                  <plan.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                </div>

                {/* Plan Name */}
                <h3 className="font-poppins font-semibold text-xl sm:text-2xl text-gray-900 mb-1 sm:mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-5 sm:mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-gray-500 text-base sm:text-lg">R$</span>
                    <span className="font-poppins font-bold text-4xl sm:text-5xl text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 text-sm sm:text-base">/mês</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 sm:gap-3"
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular ? 'bg-whatsapp-green/20' : 'bg-gray-100'
                          }`}
                      >
                        <Check
                          className={`w-3 h-3 ${plan.popular ? 'text-whatsapp-green' : 'text-gray-500'
                            }`}
                        />
                      </div>
                      <span className="text-gray-600 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="https://chat.altartech.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 sm:py-5 rounded-2xl font-bold text-center text-sm sm:text-base transition-all duration-300 shadow-lg block ${plan.popular
                      ? 'bg-whatsapp-green text-white hover:shadow-whatsapp-green/40 hover:scale-[1.03]'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-whatsapp-green/50 hover:text-whatsapp-green hover:shadow-gray-200/50 hover:scale-[1.03]'
                    }`}
                >
                  {plan.cta}
                </a>

                {/* Glow Effect */}
                {plan.popular && (
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-whatsapp-green/20 to-whatsapp-dark/20 opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div
          className={`text-center mt-8 sm:mt-12 lg:mt-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <p className="text-gray-500 text-sm sm:text-base px-4 sm:px-0">
            Todos os planos incluem{' '}
            <span className="text-whatsapp-green font-medium">7 dias de teste grátis</span>.
            {' '}Cancele a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
}
