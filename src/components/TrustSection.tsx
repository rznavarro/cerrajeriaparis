import React from 'react';
import { MapPin, ExternalLink, Video, Star } from 'lucide-react';
import { businessConfig, trackConversion } from '../business.config';

export const TrustSection: React.FC = () => {
  const handleMaps = () => {
    trackConversion('click_maps', { source: 'trust_section' });
  };

  return (
    <section className="py-14 sm:py-20 bg-[#F7F5F0] text-[#12151C] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
            Transparencia y Evidencia
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#12151C]">
            Ubicación Verificable y Trabajos Reales
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-700">
            Comprueba nuestra ubicación física en Zapopan y conoce nuestro trabajo diario a través de nuestras redes sociales oficiales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Dirección Verificable en Google Maps */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm flex flex-col justify-between hover:border-[#F2B632] transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-rose-600 mb-4">
                <MapPin className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-bold text-neutral-900 uppercase tracking-tight">
                Local Físico en Zapopan
              </h3>
              <p className="mt-2 text-sm text-neutral-600 leading-normal">
                Ubicados en {businessConfig.addressDetail.street}, {businessConfig.addressDetail.neighborhood}, {businessConfig.addressDetail.city}, Jalisco.
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-neutral-100">
              <a
                href={businessConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleMaps}
                data-track="click_maps"
                className="inline-flex items-center gap-2 text-sm font-bold text-neutral-900 hover:text-[#F2B632] transition-colors"
              >
                <span>Ver ficha en Google Maps</span>
                <ExternalLink className="w-4 h-4 text-neutral-400" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Card 2: Videos en TikTok */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm flex flex-col justify-between hover:border-[#F2B632] transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-[#12151C] mb-4">
                <Video className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-bold text-neutral-900 uppercase tracking-tight">
                TikTok: Trabajos en Video
              </h3>
              <p className="mt-2 text-sm text-neutral-600 leading-normal">
                Mira demostraciones en video de aperturas automotrices, programación de llaves con chip y duplicados.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100">
              <a
                href={businessConfig.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-neutral-900 hover:text-[#F2B632] transition-colors"
              >
                <span>@cerrajero.auto.paris en TikTok</span>
                <ExternalLink className="w-4 h-4 text-neutral-400" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Card 3: Facebook Oficial */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm flex flex-col justify-between hover:border-[#F2B632] transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-blue-600 mb-4">
                <span className="font-black text-xl leading-none">f</span>
              </div>
              <h3 className="font-display text-xl font-bold text-neutral-900 uppercase tracking-tight">
                Página Oficial de Facebook
              </h3>
              <p className="mt-2 text-sm text-neutral-600 leading-normal">
                Comunícate o revisa nuestras publicaciones y actualizaciones de servicio en Facebook.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100">
              <a
                href={businessConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-neutral-900 hover:text-[#F2B632] transition-colors"
              >
                <span>Ver página en Facebook</span>
                <ExternalLink className="w-4 h-4 text-neutral-400" aria-hidden="true" />
              </a>
            </div>
          </div>

        </div>

        {/* Conditional Items: Rendered ONLY if confirmed */}
        
        {/* Años de experiencia: SOLO si existe cifra real */}
        {businessConfig.yearsExperience !== null && (
          <div className="mt-6 p-6 bg-white rounded-2xl border border-neutral-200">
            <span className="font-display text-3xl font-extrabold text-[#12151C]">
              {businessConfig.yearsExperience} años
            </span>
            <span className="ml-2 text-neutral-700 text-sm">de trayectoria cerrajera en la región.</span>
          </div>
        )}

        {/* Google Reviews Link: SOLO si el cliente da el enlace */}
        {businessConfig.googleReviewsUrl && (
          <div className="mt-6 p-6 bg-white rounded-2xl border border-neutral-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span className="text-sm font-bold text-neutral-900">Opiniones de clientes en Google</span>
            </div>
            <a
              href={businessConfig.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#12151C] hover:underline inline-flex items-center gap-1"
            >
              <span>Ver reseñas</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Real Photos: Trabajos reales en taller y sitio */}
        {businessConfig.realPhotos && businessConfig.realPhotos.length > 0 && (
          <div className="mt-12 pt-10 border-t border-neutral-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Evidencia en Fotografía
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#12151C] mt-1">
                  Trabajos Reales y Equipamiento
                </h3>
              </div>
              <p className="text-xs text-neutral-500 mt-1 sm:mt-0">
                Imágenes de trabajos automotrices, residenciales y taller en Zapopan
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  url: businessConfig.realPhotos[0],
                  title: 'Llave y control con chip',
                  desc: 'Programación automotriz en vehículo'
                },
                {
                  url: businessConfig.realPhotos[1],
                  title: 'Maquinaria de corte láser',
                  desc: 'Duplicado de precisión en taller'
                },
                {
                  url: businessConfig.realPhotos[2],
                  title: 'Apertura técnica de auto',
                  desc: 'Método no destructivo sin daño'
                },
                {
                  url: businessConfig.realPhotos[3],
                  title: 'Cerraduras residenciales',
                  desc: 'Instalación de cerrojo de seguridad'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group rounded-2xl overflow-hidden bg-white border border-neutral-200/90 shadow-sm flex flex-col hover:border-[#F2B632] hover:shadow-md transition-all"
                >
                  <div className="aspect-4/3 w-full overflow-hidden bg-neutral-100 relative">
                    <img
                      src={item.url}
                      alt={item.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3.5 bg-white">
                    <h4 className="text-sm font-bold text-neutral-900 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
