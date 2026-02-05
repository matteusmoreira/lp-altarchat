import { useEffect, useRef, useState } from 'react';
import { Star, Quote, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'Diretora',
    company: 'Loja Virtual ModaStyle',
    content: 'Aumentamos nossa taxa de resposta em 300%. O chatbot qualifica leads automaticamente e nossa equipe foca apenas nos clientes realmente interessados.',
    rating: 5,
    avatar: 'MS',
    color: 'bg-pink-500',
  },
  {
    name: 'Carlos Eduardo',
    role: 'CEO',
    company: 'TechSupport Brasil',
    content: 'Conseguimos organizar o atendimento de 15 atendentes em uma única plataforma. A visibilidade dos relatórios mudou nossa forma de gerenciar.',
    rating: 5,
    avatar: 'CE',
    color: 'bg-blue-500',
  },
  {
    name: 'Ana Paula',
    role: 'Gerente de CX',
    company: 'E-commerce Plus',
    content: 'A integração com nosso CRM foi super simples. Em 2 dias estávamos operando com todo histórico do cliente disponível para os atendentes.',
    rating: 5,
    avatar: 'AP',
    color: 'bg-purple-500',
  },
  {
    name: 'Roberto Mendes',
    role: 'Proprietário',
    company: 'Clínica Saúde Total',
    content: 'Reduzimos o tempo de espera dos pacientes em 60%. O agendamento automático pelo WhatsApp revolucionou nossa recepção.',
    rating: 5,
    avatar: 'RM',
    color: 'bg-green-500',
  },
  {
    name: 'Fernanda Lima',
    role: 'Marketing Director',
    company: 'BeautyCos',
    content: 'As campanhas de disparo têm taxa de abertura 5x maior que email. É incrível o engajamento que conseguimos pelo WhatsApp.',
    rating: 5,
    avatar: 'FL',
    color: 'bg-rose-500',
  },
  {
    name: 'João Pedro',
    role: 'COO',
    company: 'Logística Rápida',
    content: 'De 50 atendimentos diários passamos para 500 sem perder qualidade. A plataforma escala perfeitamente com nosso crescimento.',
    rating: 5,
    avatar: 'JP',
    color: 'bg-orange-500',
  },
];

export function Testimonials() {
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

  // Duplicate testimonials for infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />

      {/* Decorative Elements */}
      <div className="absolute top-10 sm:top-20 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-whatsapp-green/5 rounded-full blur-[60px] sm:blur-[100px]" />
      <div className="absolute bottom-10 sm:bottom-20 right-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-whatsapp-dark/5 rounded-full blur-[50px] sm:blur-[80px]" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14 lg:mb-20">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-whatsapp-green/10 rounded-full mb-4 sm:mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-whatsapp-green" />
            <span className="text-xs sm:text-sm font-medium text-whatsapp-dark">DEPOIMENTOS</span>
          </div>

          <h2
            className={`font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            O que nossos{' '}
            <span className="text-gradient">clientes dizem</span>
          </h2>

          <p
            className={`text-base sm:text-lg text-gray-600 px-2 sm:px-0 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            Mais de 2.500 empresas transformaram seu atendimento conosco
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 lg:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 lg:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          {/* Single Row Marquee */}
          <div
            className={`flex gap-4 sm:gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div className="flex gap-4 sm:gap-6 animate-marquee hover:[animation-play-state:paused]">
              {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`testimonial-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`max-w-4xl mx-auto mt-10 sm:mt-14 lg:mt-16 px-4 sm:px-6 lg:px-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { value: '2.500+', label: 'Empresas' },
              { value: '50M+', label: 'Mensagens' },
              { value: '98%', label: 'Satisfação' },
              { value: '24/7', label: 'Suporte' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-poppins font-bold text-2xl sm:text-3xl lg:text-4xl text-gradient mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: typeof testimonials[0];
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[380px] lg:w-[400px] group">
      <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 border border-gray-100 transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-whatsapp-green/5 hover:-translate-y-1 sm:hover:-translate-y-2">
        {/* Quote Icon */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-10 group-hover:opacity-30 transition-opacity">
          <Quote className="w-6 h-6 sm:w-8 sm:w-10 text-whatsapp-green" />
        </div>

        {/* Rating */}
        <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400"
            />
          ))}
        </div>

        {/* Content */}
        <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed line-clamp-4 sm:line-clamp-none">
          "{testimonial.content}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div
            className={`w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full ${testimonial.color} flex items-center justify-center text-white text-xs sm:text-sm font-semibold flex-shrink-0`}
          >
            {testimonial.avatar}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">{testimonial.name}</p>
            <p className="text-xs sm:text-sm text-gray-500 truncate">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
