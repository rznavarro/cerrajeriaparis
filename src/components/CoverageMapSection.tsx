import React from 'react';
import { MapPin, Navigation, Phone, ExternalLink, CheckCircle2 } from 'lucide-react';
import { businessConfig, trackConversion } from '../business.config';

export const CoverageMapSection: React.FC = () => {
  const handleMaps = () => {
    trackConversion('click_maps', { source: 'coverage_section' });
  };

  const handleCall = () => {
    trackConversion('click_llamar', { source: 'coverage_section' });
  };

  return (
    <section id="cobertura" className="py-14 sm:py-20 bg-white text-[#12151C] border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Cobertura a Domicilio */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#F2B632] mb-2">
                Zona de Atención
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#12151C] leading-[1.1]">
                Vamos a domicilio en Zapopan y Guadalajara
              </h2>
              <p className="mt-4 text-base sm:text-lg text-neutral-700 leading-relaxed">
                Si te quedaste fuera de tu vehículo o necesitas cerrajero en tu casa o negocio, nos desplazamos directamente al punto donde te encuentres en la zona metropolitana de Zapopan y Guadalajara.
              </p>

              {/* Service Features */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-neutral-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span className="font-medium">Servicio móvil a domicilio para aperturas y llaves perdidas</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span className="font-medium">Equipo especializado para trabajo automotriz en sitio</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span className="font-medium">Atención residencial y comercial</span>
                </div>
              </div>

              {/* Colonias: Strictly rendered ONLY if customer provides them */}
              {businessConfig.colonies && businessConfig.colonies.length > 0 && (
                <div className="mt-8 p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                    Colonias principales con cobertura frecuente:
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {businessConfig.colonies.map((colonia, i) => (
                      <span key={i} className="px-2.5 py-1 bg-white text-neutral-700 text-xs rounded border border-neutral-200">
                        {colonia}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Action */}
            <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${businessConfig.phoneClean}`}
                onClick={handleCall}
                data-track="click_llamar"
                className="min-h-[48px] px-6 py-2.5 rounded-xl bg-[#F2B632] hover:bg-[#e0a628] active:scale-[0.98] text-[#12151C] font-bold text-sm flex items-center gap-2 shadow-sm transition-all"
              >
                <Phone className="w-4 h-4 text-[#12151C]" aria-hidden="true" />
                <span>Pedir cerrajero a domicilio ahora</span>
              </a>
            </div>
          </div>

          {/* Right Column: Local Físico & Cómo Llegar */}
          <div className="lg:col-span-6 bg-[#12151C] text-white rounded-2xl p-6 sm:p-8 border border-neutral-800 shadow-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#F2B632] mb-4">
              <Navigation className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Taller Físico en Zapopan</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
              Cerrajería París en Zapopan
            </h3>

            <p className="mt-2 text-sm text-neutral-300">
              Contamos con local físico para duplicados de alta precisión, programación de controles y servicio de taller.
            </p>

            {/* Foto de la fachada del local físico */}
            <div className="mt-5 rounded-xl overflow-hidden border border-white/10 relative group">
              <img
                src="/src/assets/images/fachada_taller_paris_1793488687383.jpg"
                alt="Fachada del local Cerrajería París en Av. Inglaterra 3484, Zapopan"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full aspect-16/9 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 text-xs text-white flex items-center justify-between">
                <span className="font-semibold">Local en Av. Inglaterra 3484, Zapopan</span>
                <span className="text-[#F2B632] text-[11px] font-bold">Atención en taller</span>
              </div>
            </div>

            {/* Dirección verificada */}
            <div className="mt-5 p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3.5">
              <MapPin className="w-5 h-5 text-[#F2B632] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-neutral-400">Dirección:</span>
                <p className="text-base font-semibold text-white mt-0.5">
                  {businessConfig.address}
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  Villas de San Javier, Zapopan, Jalisco.
                </p>
              </div>
            </div>

            {/* Google Maps CTA Button */}
            <div className="mt-6">
              <a
                href={businessConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleMaps}
                data-track="click_maps"
                className="w-full min-h-[52px] px-6 py-3.5 rounded-xl bg-white hover:bg-neutral-100 active:scale-[0.98] text-[#12151C] font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow transition-all cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-rose-600" aria-hidden="true" />
                <span>Abrir en Google Maps</span>
                <ExternalLink className="w-4 h-4 text-neutral-500" aria-hidden="true" />
              </a>
              <p className="mt-2 text-center text-xs text-neutral-400">
                Abre la ruta directa en tu aplicación de mapas preferida
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
