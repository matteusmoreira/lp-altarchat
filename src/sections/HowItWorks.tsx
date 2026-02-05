import { useEffect, useRef, useState } from 'react';
import { Smartphone, Users, Bot, BarChart3, Workflow } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Smartphone,
    title: 'Conecte seu WhatsApp',
    description: 'Faça a leitura do QR Code e conecte seu número em segundos. Processo seguro e criptografado.',
    color: 'bg-blue-500',
  },
  {
    number: '02',
    icon: Users,
    title: 'Configure sua Equipe',
    description: 'Adicione atendentes, defina permissões e organize filas de atendimento por departamento.',
    color: 'bg-purple-500',
  },
  {
    number: '03',
    icon: Bot,
    title: 'Automatize com Chatbot',
    description: 'Crie fluxos de conversa automáticos para respostas rápidas e qualificação de leads.',
    color: 'bg-green-500',
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Acompanhe Resultados',
    description: 'Monitore métricas em tempo real e tome decisões baseadas em dados concretos.',
    color: 'bg-orange-500',
  },
];

export function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 sm:top-20 right-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-whatsapp-green/5 rounded-full blur-[60px] sm:blur-[100px]" />
      <div className="absolute bottom-10 sm:bottom-20 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-whatsapp-dark/5 rounded-full blur-[50px] sm:blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-20">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-whatsapp-green/10 rounded-full mb-4 sm:mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Workflow className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-whatsapp-green" />
            <span className="text-xs sm:text-sm font-medium text-whatsapp-dark">COMO FUNCIONA</span>
          </div>

          <h2
            className={`font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Comece a atender em{' '}
            <span className="text-gradient">4 passos simples</span>
          </h2>

          <p
            className={`text-base sm:text-lg text-gray-600 px-2 sm:px-0 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Deixe a tecnologia com a gente e foque no que realmente importa: seus clientes
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop Only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2">
            <div className="relative h-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-whatsapp-green to-whatsapp-dark rounded-full transition-all duration-1000"
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <div
                  className={`relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border-2 transition-all duration-500 ${
                    activeStep === index
                      ? 'border-whatsapp-green shadow-lg shadow-whatsapp-green/10'
                      : 'border-gray-100 hover:border-gray-200'
                  }`}
                >
                  {/* Step Number */}
                  <div className="absolute -top-3 sm:-top-4 left-4 sm:left-6 lg:left-8">
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg sm:rounded-xl flex items-center justify-center font-poppins font-bold text-white text-sm sm:text-base transition-all duration-500 ${
                        activeStep === index ? 'bg-whatsapp-green scale-110' : 'bg-gray-300'
                      }`}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl ${step.color} flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 mt-3 sm:mt-4 transition-all duration-500 ${
                      activeStep === index ? 'scale-110 rotate-3' : ''
                    }`}
                  >
                    <step.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-poppins font-semibold text-lg sm:text-xl text-gray-900 mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Active Indicator */}
                  {activeStep === index && (
                    <div className="absolute -bottom-1.5 sm:-bottom-2 left-1/2 -translate-x-1/2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-whatsapp-green rounded-full animate-ping" />
                    </div>
                  )}
                </div>

                {/* Mobile Connection Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-3 sm:py-4">
                    <div className="w-0.5 sm:w-1 h-6 sm:h-8 bg-gray-200 rounded-full">
                      <div
                        className={`w-full rounded-full transition-all duration-500 ${
                          activeStep > index ? 'h-full bg-whatsapp-green' : 'h-0'
                        }`}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-8 sm:mt-12">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                activeStep === index
                  ? 'w-6 sm:w-8 bg-whatsapp-green'
                  : 'w-2 sm:w-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir para passo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
