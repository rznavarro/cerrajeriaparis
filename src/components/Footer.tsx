import React from 'react';
import { MapPin, Phone, MessageCircle, ExternalLink, Video } from 'lucide-react';
import { businessConfig } from '../business.config';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handlePrivacyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/aviso-de-privacidad');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B0D12] text-neutral-400 text-sm border-t border-white/5 py-12 pb-28 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-white/10">
          
          {/* Col 1: Identity & Services */}
          <div>
            <a
              href="/"
              onClick={handleHomeClick}
              className="flex items-center gap-2 mb-3 group"
            >
              {businessConfig.logoUrl && (
                <div className="w-9 h-9 rounded-lg bg-white p-1 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                  <img
                    src={businessConfig.logoUrl}
                    alt="Logotipo Cerrajería París"
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <span className="font-display text-2xl font-black tracking-tight text-white group-hover:text-[#F2B632] transition-colors">
                CERRAJERÍA PARÍS
              </span>
            </a>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Servicio de cerrajería automotriz y residencial a domicilio en Zapopan y Guadalajara. Apertura de autos sin daño, llaves con chip, controles y cerraduras.
            </p>
          </div>

          {/* Col 2: Dirección y Contacto */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-3">
              Ubicación y Contacto
            </h4>
            <div className="space-y-2 text-xs text-neutral-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F2B632] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{businessConfig.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F2B632] shrink-0" aria-hidden="true" />
                <a href={`tel:${businessConfig.phoneClean}`} className="hover:text-white transition-colors">
                  {businessConfig.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" aria-hidden="true" />
                <a 
                  href={businessConfig.whatsappUrl}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {businessConfig.phoneDisplay}
                </a>
              </p>
            </div>
          </div>

          {/* Col 3: Enlaces y Redes */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-3">
              Redes y Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={businessConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-neutral-500" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={businessConfig.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span className="font-bold text-xs text-blue-400">f</span>
                  <span>Facebook</span>
                  <ExternalLink className="w-3 h-3 text-neutral-500" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={businessConfig.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Video className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>TikTok</span>
                  <ExternalLink className="w-3 h-3 text-neutral-500" aria-hidden="true" />
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="/aviso-de-privacidad"
                  onClick={handlePrivacyClick}
                  className="text-neutral-400 hover:text-[#F2B632] underline underline-offset-4 transition-colors"
                >
                  Aviso de Privacidad
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {currentYear} Cerrajería París. Zapopan y Guadalajara, Jalisco, México.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/aviso-de-privacidad"
              onClick={handlePrivacyClick}
              className="hover:text-neutral-300 transition-colors"
            >
              Aviso de Privacidad
            </a>
            <span>·</span>
            <a
              href="#contacto"
              className="hover:text-neutral-300 transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
