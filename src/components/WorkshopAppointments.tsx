import React from 'react';
import { Calendar, MapPin, Clock, MessageCircle, Check, Phone } from 'lucide-react';
import { businessConfig, getWhatsAppLink, trackConversion } from '../business.config';

export const WorkshopAppointments: React.FC = () => {
  const handleAppointmentClick = () => {
    trackConversion('click_cita', { source: 'workshop_section' });
    trackConversion('click_whatsapp', { source_card: 'appointment_workshop' });
  };

  const handleCall = () => {
    trackConversion('click_llamar', { source: 'workshop_section' });
  };

  const waAppointmentUrl = getWhatsAppLink(businessConfig.whatsappMessages.appointmentDuplicate);

  return (
    <section id="taller" className="py-14 sm:py-20 bg-[#12151C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#1A1E27] border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div 
            className="absolute -top-24 -right-24 w-80 h-80 bg-[#F2B632]/5 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#F2B632] mb-3">
                <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Atención en Local con Cita Previa</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.1]">
                Duplicados y controles: ven a nuestro local
              </h2>

              <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
                Los duplicados de llaves de auto, la programación y la reparación de controles se atienden <strong className="text-white font-semibold">de preferencia con cita previa</strong> en nuestro taller, en el día y horario que mejor te acomode.
              </p>

              {/* Confirmed Key benefits */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 text-sm text-neutral-200">
                  <div className="w-5 h-5 rounded-full bg-[#F2B632]/20 text-[#F2B632] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <span>Atención dedicada sin esperas</span>
                </div>

                <div className="flex items-center gap-2.5 text-sm text-neutral-200">
                  <div className="w-5 h-5 rounded-full bg-[#F2B632]/20 text-[#F2B632] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <span>Corte y calibración de precisión</span>
                </div>

                <div className="flex items-center gap-2.5 text-sm text-neutral-200">
                  <div className="w-5 h-5 rounded-full bg-[#F2B632]/20 text-[#F2B632] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <span>Diagnóstico de controles y pilas</span>
                </div>

                <div className="flex items-center gap-2.5 text-sm text-neutral-200">
                  <div className="w-5 h-5 rounded-full bg-[#F2B632]/20 text-[#F2B632] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <span>Fácil acceso en Zapopan</span>
                </div>
              </div>

              {/* Address bar */}
              <div className="mt-7 p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#F2B632] shrink-0" aria-hidden="true" />
                  <span className="text-neutral-300">
                    {businessConfig.address}
                  </span>
                </div>
                <a
                  href={businessConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F2B632] hover:underline whitespace-nowrap self-start sm:self-center font-semibold"
                >
                  Ver en Google Maps
                </a>
              </div>

              {/* CTA Button Row */}
              <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={waAppointmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleAppointmentClick}
                  data-track="click_cita"
                  className="min-h-[50px] px-7 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-[#25D366]/20 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current shrink-0" aria-hidden="true" />
                  <span>Agendar mi cita por WhatsApp</span>
                </a>

                <a
                  href={`tel:${businessConfig.phoneClean}`}
                  onClick={handleCall}
                  className="min-h-[50px] px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 active:scale-[0.98] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#F2B632]" aria-hidden="true" />
                  <span>o llamar al 33 1324 0714</span>
                </a>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#12151C] shadow-xl group">
                <div className="aspect-4/3 overflow-hidden relative">
                  <img
                    src="/src/assets/images/maquinaria_llaves_chip_1793488686225.jpg"
                    alt="Maquinaria y banco de trabajo para duplicado de llaves y controles en Cerrajería París"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#12151C]/90 backdrop-blur-sm text-[11px] font-bold text-[#F2B632] border border-white/10">
                    Equipamiento de Taller
                  </div>
                </div>
                <div className="p-4 bg-white/5 border-t border-white/10 text-xs text-neutral-300">
                  <p className="font-semibold text-white">Corte y programación computarizada</p>
                  <p className="mt-0.5 text-neutral-400">Duplicados de llaves con chip, regata y programación de controles en taller.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
