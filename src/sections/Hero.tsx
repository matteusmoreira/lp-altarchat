import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, CheckCircle2, MessageCircle, Users, Zap, BarChart3 } from 'lucide-react';
import { ParticlesBackground } from '../components/ParticlesBackground';
import { WHATSAPP_LINK } from '../constants';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-whatsapp-light/20"
    >
      {/* Particles Background - Hidden on mobile */}
      <div className="hidden lg:block">
        <ParticlesBackground />
      </div>

      {/* Gradient Orbs - Adjusted for mobile */}
      <div className="absolute top-10 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-whatsapp-green/10 rounded-full blur-[80px] lg:blur-[100px] animate-pulse" />
      <div className="absolute bottom-10 left-0 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-whatsapp-dark/10 rounded-full blur-[60px] lg:blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-whatsapp-light/20 rounded-full blur-[80px] lg:blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Floating WhatsApp Icons - Hidden on small mobile */}
      <div className="hidden sm:block absolute top-32 left-[5%] lg:left-[10%] animate-float opacity-20">
        <MessageCircle className="w-8 h-8 lg:w-12 lg:h-12 text-whatsapp-green" />
      </div>
      <div className="hidden sm:block absolute top-[15%] right-[5%] lg:right-[15%] animate-float-slow opacity-15" style={{ animationDelay: '1s' }}>
        <Users className="w-8 h-8 lg:w-10 lg:h-10 text-whatsapp-dark" />
      </div>
      <div className="hidden md:block absolute bottom-[25%] left-[3%] lg:left-[8%] animate-float opacity-20" style={{ animationDelay: '2s' }}>
        <Zap className="w-6 h-6 lg:w-8 lg:h-8 text-whatsapp-green" />
      </div>
      <div className="hidden md:block absolute bottom-[15%] right-[5%] lg:right-[12%] animate-float-slow opacity-15" style={{ animationDelay: '0.5s' }}>
        <BarChart3 className="w-10 h-10 lg:w-14 lg:h-14 text-whatsapp-dark" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-5 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-whatsapp-green/10 rounded-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              <span className="w-2 h-2 bg-whatsapp-green rounded-full animate-pulse flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-whatsapp-dark">Nova Versão 3.0</span>
            </div>

            {/* Headline */}
            <div className="space-y-1 sm:space-y-2">
              <h1
                className={`font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              >
                Multiatendimento
              </h1>
              <h1
                className={`font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              >
                <span className="text-gradient">WhatsApp</span> que
              </h1>
              <h1
                className={`font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              >
                escala seu negócio
              </h1>
            </div>

            {/* Subheadline */}
            <p
              className={`text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              Gerencie múltiplos atendentes, automatize respostas e acompanhe métricas em tempo real.
              A plataforma completa para empresas que levam o atendimento a sério.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-whatsapp-green text-white font-bold rounded-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-whatsapp-green/40 text-sm sm:text-lg shadow-xl"
              >
                Teste Grátis por 7 Dias
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/80 backdrop-blur-md text-gray-700 font-semibold rounded-xl border border-gray-200 transition-all duration-300 hover:bg-white hover:scale-105 hover:border-whatsapp-green/30 text-sm sm:text-base inline-block"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 text-whatsapp-green" />
                Ver Demonstração
              </a>
            </div>

            {/* Trust Badges */}
            <div
              className={`flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 pt-2 sm:pt-4 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-whatsapp-green flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-600">Setup em 5 minutos</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-whatsapp-green flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-600">Sem cartão</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-whatsapp-green flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-600">Cancele quando quiser</span>
              </div>
            </div>

            {/* Social Proof */}
            <div
              className={`flex items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <div className="flex -space-x-2 sm:-space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-gradient-to-br from-whatsapp-green to-whatsapp-dark flex items-center justify-center text-white text-[10px] sm:text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-xs sm:text-sm font-semibold text-gray-900">+2.500 empresas</p>
                <p className="text-[10px] sm:text-xs text-gray-500">já transformaram seu atendimento</p>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div
            className={`relative perspective-1000 mt-8 lg:mt-0 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
          >
            <div className="relative preserve-3d transform lg:rotate-y-[-5deg] lg:rotate-x-[5deg] lg:hover:rotate-y-0 lg:hover:rotate-x-0 transition-transform duration-700">
              {/* Phone Frame */}
              <div className="relative mx-auto w-[240px] sm:w-[280px] lg:w-[320px] bg-gray-900 rounded-[2rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-5 sm:h-7 bg-gray-900 rounded-b-xl sm:rounded-b-2xl z-10" />

                {/* Screen */}
                <div className="relative bg-whatsapp-bg rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-6 sm:h-8 bg-whatsapp-darker flex items-center justify-between px-4 sm:px-6 pt-1 sm:pt-2 z-10">
                    <span className="text-white text-[10px] sm:text-xs">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-1.5 sm:w-4 sm:h-2 bg-white rounded-sm" />
                      <div className="w-3 h-1.5 sm:w-4 sm:h-2 bg-white rounded-sm" />
                    </div>
                  </div>

                  {/* Chat Header */}
                  <div className="absolute top-6 sm:top-8 left-0 right-0 h-10 sm:h-14 bg-whatsapp-darker flex items-center px-3 sm:px-4 gap-2 sm:gap-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-400" />
                    <div className="flex-1">
                      <p className="text-white text-xs sm:text-sm font-medium">Loja Virtual</p>
                      <p className="text-green-300 text-[10px] sm:text-xs">online</p>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="absolute top-16 sm:top-22 left-0 right-0 bottom-0 p-2 sm:p-4 space-y-2 sm:space-y-3 overflow-hidden">
                    {/* Received Message */}
                    <div className="flex justify-start">
                      <div className="bg-white rounded-lg rounded-tl-none px-2 sm:px-3 py-1.5 sm:py-2 max-w-[85%] sm:max-w-[80%] shadow-sm">
                        <p className="text-xs sm:text-sm text-gray-800">Olá! Gostaria de saber sobre os produtos</p>
                        <span className="text-[8px] sm:text-[10px] text-gray-400 float-right ml-1 sm:ml-2">09:30</span>
                      </div>
                    </div>

                    {/* Sent Message */}
                    <div className="flex justify-end">
                      <div className="bg-whatsapp-light rounded-lg rounded-tr-none px-2 sm:px-3 py-1.5 sm:py-2 max-w-[85%] sm:max-w-[80%] shadow-sm">
                        <p className="text-xs sm:text-sm text-gray-800">Olá! Claro, posso ajudar. Qual produto te interessa?</p>
                        <span className="text-[8px] sm:text-[10px] text-gray-500 float-right ml-1 sm:ml-2">09:31 ✓✓</span>
                      </div>
                    </div>

                    {/* Received Message */}
                    <div className="flex justify-start">
                      <div className="bg-white rounded-lg rounded-tl-none px-2 sm:px-3 py-1.5 sm:py-2 max-w-[85%] sm:max-w-[80%] shadow-sm">
                        <p className="text-xs sm:text-sm text-gray-800">Queria saber se tem o tamanho M da camiseta azul</p>
                        <span className="text-[8px] sm:text-[10px] text-gray-400 float-right ml-1 sm:ml-2">09:32</span>
                      </div>
                    </div>

                    {/* Sent Message with Image */}
                    <div className="flex justify-end">
                      <div className="bg-whatsapp-light rounded-lg rounded-tr-none px-2 sm:px-3 py-1.5 sm:py-2 max-w-[85%] sm:max-w-[80%] shadow-sm">
                        <div className="w-full h-16 sm:h-24 bg-whatsapp-green/20 rounded mb-1 flex items-center justify-center">
                          <span className="text-whatsapp-green text-xl sm:text-2xl">👕</span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-800">Temos sim! Posso reservar para você</p>
                        <span className="text-[8px] sm:text-[10px] text-gray-500 float-right ml-1 sm:ml-2">09:33 ✓✓</span>
                      </div>
                    </div>

                    {/* Typing Indicator */}
                    <div className="flex justify-start">
                      <div className="bg-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm">
                        <div className="flex gap-1">
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" />
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chat Input */}
                  <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-14 bg-whatsapp-bg flex items-center px-2 sm:px-3 gap-1.5 sm:gap-2">
                    <div className="flex-1 h-7 sm:h-10 bg-white rounded-full flex items-center px-3 sm:px-4">
                      <span className="text-gray-400 text-xs sm:text-sm">Mensagem</span>
                    </div>
                    <div className="w-7 h-7 sm:w-10 sm:h-10 bg-whatsapp-green rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card - Hidden on small mobile */}
              <div className="hidden sm:block absolute -right-2 lg:-right-4 top-10 lg:top-20 bg-white/90 backdrop-blur-xl rounded-xl lg:rounded-2xl p-2.5 lg:p-4 shadow-xl animate-float">
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-whatsapp-green/20 rounded-lg lg:rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 lg:w-5 lg:h-5 text-whatsapp-green" />
                  </div>
                  <div>
                    <p className="text-lg lg:text-2xl font-bold text-gray-900">+147%</p>
                    <p className="text-[10px] lg:text-xs text-gray-500">Conversões</p>
                  </div>
                </div>
              </div>

              {/* Floating Users Card - Hidden on small mobile */}
              <div className="hidden sm:block absolute -left-4 lg:-left-8 bottom-20 lg:bottom-32 bg-white/90 backdrop-blur-xl rounded-xl lg:rounded-2xl p-2.5 lg:p-4 shadow-xl animate-float-slow">
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-whatsapp-dark/20 rounded-lg lg:rounded-xl flex items-center justify-center">
                    <Users className="w-4 h-4 lg:w-5 lg:h-5 text-whatsapp-dark" />
                  </div>
                  <div>
                    <p className="text-lg lg:text-2xl font-bold text-gray-900">12</p>
                    <p className="text-[10px] lg:text-xs text-gray-500">Atendentes Online</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
