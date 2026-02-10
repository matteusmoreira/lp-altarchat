import { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const navLinks = [
  { label: 'Funcionalidades', href: '#features' },
  { label: 'Como Funciona', href: '#how-it-works' },
  { label: 'Planos', href: '#pricing' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-whatsapp-green rounded-xl flex items-center justify-center transition-all duration-500 group-hover:rotate-[360deg] group-hover:shadow-glow">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="font-poppins font-bold text-base sm:text-lg text-gray-900">
                Altar <span className="text-whatsapp-green">Chat</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="relative font-medium text-sm text-gray-700 hover:text-whatsapp-green transition-colors duration-300 underline-animation py-2"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 xl:px-6 py-2.5 bg-whatsapp-green text-white font-semibold text-sm rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-glow inline-block"
              >
                Começar Agora
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${isMobileMenuOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-16 sm:top-20 left-0 right-0 bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ${isMobileMenuOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-4 opacity-0'
            }`}
        >
          <div className="px-4 py-6 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3.5 text-gray-700 font-medium rounded-xl hover:bg-whatsapp-green/10 hover:text-whatsapp-green transition-colors text-base"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-100">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-4 bg-whatsapp-green text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-glow text-base text-center block"
              >
                Começar Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
