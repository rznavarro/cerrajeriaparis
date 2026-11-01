import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { businessConfig, trackConversion } from '../business.config';

interface HeaderProps {
  onNavigate?: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const handleCall = () => {
    trackConversion('click_llamar', { source: 'header' });
  };

  const handleWhatsApp = () => {
    trackConversion('click_whatsapp', { source: 'header' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/');
    }
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = targetId;
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#12151C]/95 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-18 flex items-center justify-between gap-3 sm:gap-6">
        {/* Zone 1: Brand wordmark (single line, no subtitle clutter) */}
        <a
          href="/"
          onClick={(e) => {
            if (onNavigate) {
              e.preventDefault();
              onNavigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center gap-2 group whitespace-nowrap min-w-0"
          aria-label="Cerrajería París - Inicio"
        >
          {businessConfig.logoUrl ? (
            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg bg-white p-1 flex items-center justify-center shrink-0 shadow-sm border border-white/10 group-hover:border-[#F2B632] transition-colors overflow-hidden">
              <img
                src={businessConfig.logoUrl}
                alt="Logotipo Cerrajería París"
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#F2B632] flex items-center justify-center text-[#12151C] font-black text-base sm:text-xl shadow-sm shrink-0">
              P
            </div>
          )}
          <span className="font-display text-lg sm:text-2xl font-extrabold tracking-tight text-white group-hover:text-[#F2B632] transition-colors truncate">
            CERRAJERÍA PARÍS
          </span>
        </a>

        {/* Zone 2: 4-5 concise single-line navigation links */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-neutral-300"
        >
          <a
            href="#urgencias"
            onClick={(e) => handleNavClick(e, 'urgencias')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Urgencias
          </a>
          <a
            href="#servicios"
            onClick={(e) => handleNavClick(e, 'servicios')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Servicios
          </a>
          <a
            href="#cobertura"
            onClick={(e) => handleNavClick(e, 'cobertura')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Ubicación
          </a>
          <a
            href="#taller"
            onClick={(e) => handleNavClick(e, 'taller')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Citas de Taller
          </a>
          <a
            href="#preguntas"
            onClick={(e) => handleNavClick(e, 'preguntas')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Preguntas
          </a>
        </nav>

        {/* Zone 3: Direct contact action triggers */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={`tel:${businessConfig.phoneClean}`}
            onClick={handleCall}
            data-track="click_llamar"
            className="flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-lg bg-[#F2B632] text-[#12151C] font-bold text-xs sm:text-sm shadow hover:bg-[#e0a628] active:scale-95 transition-all whitespace-nowrap"
            aria-label={`Llamar al teléfono ${businessConfig.phoneDisplay}`}
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#12151C]" aria-hidden="true" />
            <span className="sm:hidden font-bold">Llamar</span>
            <span className="hidden sm:inline">Llamar: 33 1324 0714</span>
          </a>

          <a
            href={businessConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsApp}
            data-track="click_whatsapp"
            className="hidden sm:flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-[#25D366] text-white font-semibold text-xs sm:text-sm shadow hover:bg-[#20ba59] active:scale-95 transition-all whitespace-nowrap"
            aria-label="Escribir por WhatsApp a Cerrajería París"
          >
            <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};
