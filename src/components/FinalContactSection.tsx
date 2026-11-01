import React from 'react';
import { Phone, MessageCircle, MapPin, ExternalLink, Video } from 'lucide-react';
import { businessConfig, getWhatsAppLink, trackConversion } from '../business.config';

export const FinalContactSection: React.FC = () => {
  const handleCall = () => {
    trackConversion('click_llamar', { source: 'final_contact' });
  };

  const handleWhatsApp = () => {
    trackConversion('click_whatsapp', { source_card: 'final_contact' });
  };

  const handleMaps = () => {
    trackConversion('click_maps', { source: 'final_contact' });
  };

  return (
    <section id="contacto" className="py-14 sm:py-20 bg-[#12151C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-[#F2B632] mb-2">
            Contacto Directo
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.1]">
            Cuéntanos qué necesitas y te decimos cómo ayudarte
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto">
            Llámanos o envíanos un mensaje por WhatsApp con tu ubicación o problema. Estamos listos para acudir a tu auto o casa en Zapopan y Guadalajara.
          </p>

          {/* Contact Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${businessConfig.phoneClean}`}
              onClick={handleCall}
              data-track="click_llamar"
              className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 rounded-xl bg-[#F2B632] hover:bg-[#e2a829] active:scale-[0.98] text-[#12151C] font-bold text-base sm:text-lg flex items-center justify-center gap-3 shadow-lg shadow-[#F2B632]/20 transition-all cursor-pointer"
            >
              <Phone className="w-5 h-5 text-[#12151C] shrink-0" aria-hidden="true" />
              <span>Llamar al {businessConfig.phoneDisplay}</span>
            </a>

            <a
              href={getWhatsAppLink(businessConfig.whatsappMessages.generalInquiry)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsApp}
              data-track="click_whatsapp"
              className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white font-bold text-base sm:text-lg flex items-center justify-center gap-3 shadow-lg shadow-[#25D366]/20 transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current shrink-0" aria-hidden="true" />
              <span>Escribir por WhatsApp</span>
            </a>
          </div>

          {/* Quick Info Grid */}
          <div className="mt-12 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {/* Address */}
            <div className="p-5 rounded-2xl bg-[#1A1E27] border border-white/10 flex items-start gap-4">
              <MapPin className="w-5 h-5 text-[#F2B632] shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight">
                  Local Físico
                </h3>
                <p className="text-sm text-neutral-300 mt-1">
                  {businessConfig.address}
                </p>
                <a
                  href={businessConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleMaps}
                  className="inline-flex items-center gap-1.5 text-xs text-[#F2B632] hover:underline mt-2 font-medium"
                >
                  <span>Abrir en Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-5 rounded-2xl bg-[#1A1E27] border border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight">
                  Canales Oficiales
                </h3>
                <p className="text-sm text-neutral-300 mt-1">
                  Sigue nuestras demostraciones y novedades de servicio en video.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={businessConfig.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white flex items-center gap-2 transition-colors"
                >
                  <Video className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>TikTok</span>
                </a>
                <a
                  href={businessConfig.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white flex items-center gap-2 transition-colors"
                >
                  <span className="font-bold text-blue-400">f</span>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
