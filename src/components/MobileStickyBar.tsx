import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { businessConfig, getWhatsAppLink, trackConversion } from '../business.config';

export const MobileStickyBar: React.FC = () => {
  const handleCall = () => {
    trackConversion('click_llamar', { source: 'mobile_sticky_bar' });
  };

  const handleWhatsApp = () => {
    trackConversion('click_whatsapp', { source_card: 'mobile_sticky_bar' });
  };

  return (
    <aside
      aria-label="Acciones rápidas de contacto móvil"
      className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-[#12151C]/98 backdrop-blur-lg border-t border-white/10 px-3 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.3)]"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        {/* Call Now button (Gold) */}
        <a
          href={`tel:${businessConfig.phoneClean}`}
          onClick={handleCall}
          data-track="click_llamar"
          className="min-h-[50px] px-3 py-2.5 rounded-xl bg-[#F2B632] hover:bg-[#e2a829] active:scale-[0.97] text-[#12151C] font-extrabold text-sm flex items-center justify-center gap-2 shadow-md transition-all"
          aria-label={`Llamar ahora al ${businessConfig.phoneDisplay}`}
        >
          <Phone className="w-4 h-4 text-[#12151C] shrink-0" aria-hidden="true" />
          <span className="truncate">Llamar ahora</span>
        </a>

        {/* WhatsApp button (Green) */}
        <a
          href={getWhatsAppLink(businessConfig.whatsappMessages.generalInquiry)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsApp}
          data-track="click_whatsapp"
          className="min-h-[50px] px-3 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.97] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md transition-all"
          aria-label="Escribir por WhatsApp a Cerrajería París"
        >
          <MessageCircle className="w-4 h-4 fill-current shrink-0" aria-hidden="true" />
          <span className="truncate">WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};
