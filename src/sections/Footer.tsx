import { useEffect, useRef, useState } from 'react';
import {
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react';

const productLinks = [
  { label: 'Funcionalidades', href: '#features' },
  { label: 'Planos e Preços', href: '#pricing' },
  { label: 'Integrações', href: '#' },
  { label: 'API Documentation', href: '#' },
  { label: 'Status', href: '#' },
];

const companyLinks = [
  { label: 'Sobre Nós', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Carreiras', href: '#' },
  { label: 'Termos de Uso', href: '#' },
  { label: 'Privacidade', href: '#' },
];

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const footerRef = useRef<HTMLDivElement>(null);

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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Obrigado por se inscrever!');
    setEmail('');
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer
      ref={footerRef}
      className="relative bg-gray-900 text-white overflow-hidden"
    >
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-whatsapp-green/10 rounded-full blur-[100px] sm:blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-whatsapp-dark/10 rounded-full blur-[80px] sm:blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Brand Column */}
          <div
            className={`col-span-2 md:col-span-2 lg:col-span-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-whatsapp-green rounded-xl flex items-center justify-center">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="font-poppins font-bold text-base sm:text-lg">
                Altar <span className="text-whatsapp-green">Chat</span>
              </span>
            </a>

            <p className="text-gray-400 text-sm leading-relaxed mb-5 sm:mb-6 max-w-xs">
              A plataforma completa para gerenciar seu atendimento no WhatsApp.
              Escale seu negócio com eficiência.
            </p>

            {/* Social Links */}
            <div className="flex gap-2 sm:gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Youtube, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white/5 rounded-lg sm:rounded-xl flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-whatsapp-green hover:text-white hover:scale-110"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div
            className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <h4 className="font-poppins font-semibold text-base sm:text-lg mb-4 sm:mb-6">Produto</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 text-sm transition-all duration-300 hover:text-whatsapp-green hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <h4 className="font-poppins font-semibold text-base sm:text-lg mb-4 sm:mb-6">Empresa</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 text-sm transition-all duration-300 hover:text-whatsapp-green hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div
            className={`col-span-2 md:col-span-2 lg:col-span-1 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <h4 className="font-poppins font-semibold text-base sm:text-lg mb-4 sm:mb-6">Contato</h4>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-2.5 sm:gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-whatsapp-green flex-shrink-0" />
                <span className="break-all">contato@altartech.com.br</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-whatsapp-green flex-shrink-0" />
                <span>(22) 99902-1889</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-whatsapp-green flex-shrink-0" />
                <span>Brasil/RJ</span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-sm text-gray-400 mb-2 sm:mb-3">Assine nossa newsletter</p>
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu email"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-whatsapp-green transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 bg-whatsapp-green rounded-md sm:rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                >
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`mt-10 sm:mt-14 lg:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
            © 2026 Altar Chat MultiAtendimento. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <button className="text-gray-500 text-xs sm:text-sm hover:text-whatsapp-green transition-colors">
              Termos de Serviço
            </button>
            <button className="text-gray-500 text-xs sm:text-sm hover:text-whatsapp-green transition-colors">
              Política de Privacidade
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
