import React from 'react';
import { Phone, MessageCircle, MapPin, Car, Key, Home, Calendar, ArrowRight } from 'lucide-react';
import { businessConfig, getBusinessStatus, getWhatsAppLink, trackConversion } from '../business.config';

export const Hero: React.FC = () => {
  const status = getBusinessStatus(businessConfig);

  const handleCall = (source: string) => {
    trackConversion('click_llamar', { source });
  };

  const handleWhatsApp = (sourceCard: string) => {
    trackConversion('click_whatsapp', { source_card: sourceCard });
  };

  const handleMaps = () => {
    trackConversion('click_maps', { source: 'hero' });
  };

  // 4 Selector situations from Section 7.1 & Section 8
  const situations = [
    {
      id: 'car_lockout',
      title: 'Me quedé fuera de mi auto',
      description: 'Apertura sin dañar la chapa ni el vehículo.',
      icon: Car,
      whatsappText: businessConfig.whatsappMessages.lockedOutOfCar,
      ctaLabel: 'Pedir cerrajero para auto',
      analyticsId: 'me_quede_fuera_auto'
    },
    {
      id: 'lost_car_key',
      title: 'Perdí o se me rompió la llave del auto',
      description: 'Llave nueva desde cero y programación con chip.',
      icon: Key,
      whatsappText: businessConfig.whatsappMessages.lostOrBrokenCarKey,
      ctaLabel: 'Pedir llave de auto nueva',
      analyticsId: 'perdi_rompi_llave_auto'
    },
    {
      id: 'home_lockout',
      title: 'No puedo entrar a mi casa o negocio',
      description: 'Apertura residencial, ajuste o cambio de cerradura.',
      icon: Home,
      whatsappText: businessConfig.whatsappMessages.lockedOutOfHome,
      ctaLabel: 'Pedir cerrajero para casa',
      analyticsId: 'no_puedo_entrar_casa'
    },
    {
      id: 'duplicate_appointment',
      title: 'Quiero duplicar una llave o control',
      description: 'Atención en local físico (de preferencia con cita).',
      icon: Calendar,
      whatsappText: businessConfig.whatsappMessages.appointmentDuplicate,
      ctaLabel: 'Agendar cita en taller',
      analyticsId: 'duplicar_llave_control_cita'
    }
  ];

  return (
    <section className="relative bg-[#12151C] text-white pt-6 pb-14 sm:pt-10 sm:pb-20 border-b border-white/10">
      {/* Background subtle geometric texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero Area */}
        <div className="max-w-3xl mx-auto text-center">
          {/* Status chip: ONLY rendered if weekly schedule is confirmed */}
          {status && (
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium">
              <span
                className={`w-2 h-2 rounded-full ${
                  status.isOpen ? 'bg-[#25D366]' : 'bg-amber-400'
                }`}
                aria-hidden="true"
              />
              <span className={status.isOpen ? 'text-[#25D366]' : 'text-neutral-300'}>
                {status.text}
              </span>
            </div>
          )}

          {/* Main H1 - Exactly as requested */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase text-balance leading-[1.08]">
            Cerrajero a domicilio en Zapopan y Guadalajara
          </h1>

          {/* Subtitle - Exactly as requested */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
            Abrimos tu auto o tu casa, hacemos llaves nuevas y programamos llaves con chip. Llámanos o escríbenos y dinos dónde estás.
          </p>

          {/* Primary Action Row */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            {/* Primary Gold Call CTA */}
            <a
              href={`tel:${businessConfig.phoneClean}`}
              onClick={() => handleCall('hero_primary')}
              data-track="click_llamar"
              className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 rounded-xl bg-[#F2B632] hover:bg-[#e2a829] active:scale-[0.98] text-[#12151C] font-bold text-base sm:text-lg flex items-center justify-center gap-3 shadow-lg shadow-[#F2B632]/20 transition-all cursor-pointer"
            >
              <Phone className="w-5 h-5 text-[#12151C] shrink-0" aria-hidden="true" />
              <span>Llamar ahora</span>
              <span className="text-sm font-extrabold text-[#12151C]/80">· 33 1324 0714</span>
            </a>

            {/* Secondary WhatsApp CTA */}
            <a
              href={getWhatsAppLink(businessConfig.whatsappMessages.generalInquiry)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsApp('hero_primary')}
              data-track="click_whatsapp"
              className="w-full sm:w-auto min-h-[52px] px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white font-bold text-base sm:text-lg flex items-center justify-center gap-3 shadow-lg shadow-[#25D366]/20 transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current shrink-0" aria-hidden="true" />
              <span>Escribir por WhatsApp</span>
            </a>
          </div>

          {/* Low-priority discreet Maps text link (Must NOT compete with primary CTAs) */}
          <div className="mt-3.5 text-center">
            <a
              href={businessConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleMaps}
              data-track="click_maps"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-neutral-400 hover:text-white underline underline-offset-4 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#F2B632]" aria-hidden="true" />
              <span>Cómo llegar a nuestro local en Av. Inglaterra 3484 (Maps)</span>
            </a>
          </div>
        </div>

        {/* SITUATION SELECTOR: "¿Qué te pasó?" */}
        <div id="urgencias" className="mt-12 sm:mt-16 pt-10 border-t border-white/10">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
              ¿Qué te pasó?
            </h2>
            <p className="mt-1 text-sm sm:text-base text-neutral-400">
              Selecciona tu situación para enviarnos un WhatsApp con los datos necesarios o llamarnos de inmediato:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 max-w-5xl mx-auto">
            {situations.map((item) => {
              const IconComponent = item.icon;
              const waUrl = getWhatsAppLink(item.whatsappText);

              return (
                <div
                  key={item.id}
                  className="bg-[#1A1E27] border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-[#F2B632]/50 transition-colors shadow-md group"
                >
                  <div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F2B632] shrink-0 group-hover:scale-105 transition-transform">
                        <IconComponent className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-neutral-300 leading-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    {/* Action button opens WhatsApp with preloaded URL encoded message */}
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleWhatsApp(item.analyticsId)}
                      data-track="click_whatsapp"
                      data-card-source={item.analyticsId}
                      className="min-h-[48px] px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-current shrink-0" aria-hidden="true" />
                      <span className="truncate">{item.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </a>

                    {/* Side link "o llama" */}
                    <a
                      href={`tel:${businessConfig.phoneClean}`}
                      onClick={() => handleCall(`selector_${item.analyticsId}`)}
                      data-track="click_llamar"
                      data-card-source={item.analyticsId}
                      className="text-xs sm:text-sm text-neutral-300 hover:text-[#F2B632] flex items-center justify-center sm:justify-start gap-1.5 py-1 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#F2B632]" aria-hidden="true" />
                      <span>o llama al 33 1324 0714</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
