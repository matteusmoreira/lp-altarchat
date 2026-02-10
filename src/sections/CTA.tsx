import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, Users } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export function CTA() {
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
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-whatsapp-green via-whatsapp-dark to-whatsapp-darker" />

      {/* Animated Wave Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-20 sm:h-24 lg:h-32 animate-wave"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C300,120 600,0 900,60 C1200,120 1200,60 1200,60 L1200,120 L0,120 Z"
            fill="rgba(255,255,255,0.05)"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-16 sm:h-20 lg:h-24 animate-wave"
          style={{ animationDelay: '-2s' }}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C300,100 600,20 900,80 C1200,100 1200,40 1200,40 L1200,120 L0,120 Z"
            fill="rgba(255,255,255,0.03)"
          />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 sm:mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          <span className="text-xs sm:text-sm font-medium text-white">TESTE GRÁTIS POR 7 DIAS</span>
        </div>

        {/* Headline */}
        <h2
          className={`font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          Pronto para transformar seu atendimento?
        </h2>

        {/* Subheadline */}
        <p
          className={`text-base sm:text-lg text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto px-2 sm:px-0 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          Comece seu teste gratuito de 7 dias. Não precisa de cartão de crédito.
        </p>

        {/* CTA Button */}
        <div
          className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 sm:px-12 py-5 sm:py-6 bg-white text-whatsapp-dark font-black text-lg sm:text-xl rounded-2xl transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] shadow-2xl"
          >
            Começar Teste Grátis
            <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
          </a>
        </div>

        {/* Trust Indicators */}
        <div
          className={`flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="flex items-center gap-1.5 sm:gap-2 text-white/70">
            <Users className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm">+2.500 empresas já escolheram nossa plataforma</span>
          </div>
        </div>

        {/* Feature Pills */}
        <div
          className={`flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {['Setup em 5 min', 'Sem cartão', 'Cancele quando quiser'].map((item) => (
            <span
              key={item}
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md text-white/90 text-xs sm:text-sm rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
