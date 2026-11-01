import React from 'react';
import { 
  Car, 
  Key, 
  Home, 
  Wrench, 
  ShieldCheck, 
  Cpu, 
  Sliders, 
  Layers, 
  AlertCircle,
  MessageCircle,
  Phone
} from 'lucide-react';
import { businessConfig, getWhatsAppLink, trackConversion } from '../business.config';

export const ServicesSection: React.FC = () => {
  const handleWhatsApp = (serviceCategory: string) => {
    trackConversion('click_whatsapp', { category: serviceCategory });
  };

  const handleCall = (serviceCategory: string) => {
    trackConversion('click_llamar', { category: serviceCategory });
  };

  return (
    <section id="servicios" className="py-14 sm:py-20 bg-[#F7F5F0] text-[#12151C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
            Nuestros Trabajos Confirmados
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#12151C] leading-[1.1]">
            Servicios de Cerrajería por Situación
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-700 max-w-2xl">
            Especialistas en cerrajería automotriz y cerrajería residencial en Zapopan y Guadalajara. Soluciones directas y cuidadosas para tu vehículo, casa o negocio.
          </p>
        </div>

        {/* 3 Main Situation Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* BLOCK 1: Urgencias de Auto */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/90 shadow-sm flex flex-col justify-between hover:border-[#F2B632] transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#12151C] text-[#F2B632] flex items-center justify-center mb-5">
                <Car className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#12151C]">
                Urgencias de Auto
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Atención rápida para cuando te quedas afuera o tienes una falla con la llave.
              </p>

              {/* Foto ilustrativa técnica real */}
              <div className="mt-4 rounded-xl overflow-hidden border border-neutral-200 aspect-16/9 relative group">
                <img
                  src="/src/assets/images/apertura_auto_sin_dano_1793488686903.jpg"
                  alt="Apertura técnica de auto sin daño en cerradura"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-2.5 text-[11px] font-semibold text-white">
                  Apertura técnica profesional sin daño
                </div>
              </div>

              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">Apertura sin daño</h4>
                    <p className="text-xs text-neutral-600 mt-0.5">Apertura de cualquier tipo de auto sin dañar la cerradura.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">Llaves perdidas</h4>
                    <p className="text-xs text-neutral-600 mt-0.5">Elaboración de llave nueva cuando no tienes ninguna copia.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-neutral-100 text-neutral-700 flex items-center justify-center shrink-0">
                    <Wrench className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">Llaves rotas o atoradas</h4>
                    <p className="text-xs text-neutral-600 mt-0.5">Extracción limpia de llave partida en el cilindro o encendido.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Car className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">Cerrajero a domicilio</h4>
                    <p className="text-xs text-neutral-600 mt-0.5">Vamos directo hasta la ubicación de tu automóvil.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-neutral-100">
              <a
                href={getWhatsAppLink(businessConfig.whatsappMessages.carUrgency)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWhatsApp('urgencias_auto')}
                data-track="click_whatsapp"
                data-card-source="urgencias_auto"
                className="w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" aria-hidden="true" />
                <span>Pedir apertura de auto por WhatsApp</span>
              </a>
              <div className="mt-2 text-center">
                <a
                  href={`tel:${businessConfig.phoneClean}`}
                  onClick={() => handleCall('urgencias_auto')}
                  className="text-xs text-neutral-600 hover:text-neutral-900 underline underline-offset-2"
                >
                  o llama al 33 1324 0714
                </a>
              </div>
            </div>
          </div>

          {/* BLOCK 2: Llaves y Controles de Auto */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/90 shadow-sm flex flex-col justify-between hover:border-[#F2B632] transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#12151C] text-[#F2B632] flex items-center justify-center mb-5">
                <Key className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#12151C]">
                Llaves y Controles de Auto
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Duplicados, programación electrónica y refacciones para tu llave o alarma.
              </p>

              {/* Foto ilustrativa maquinaria de corte */}
              <div className="mt-4 rounded-xl overflow-hidden border border-neutral-200 aspect-16/9 relative group">
                <img
                  src="/src/assets/images/maquinaria_llaves_chip_1793488686225.jpg"
                  alt="Corte y programación computarizada de llave con chip"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-2.5 text-[11px] font-semibold text-white">
                  Corte computarizado y codificación de transponder
                </div>
              </div>

              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Cpu className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">Programación de chip y control</h4>
                    <p className="text-xs text-neutral-600 mt-0.5">Programación y codificación con equipos automotrices especializados.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Key className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">Duplicado de llaves de auto</h4>
                    <p className="text-xs text-neutral-600 mt-0.5">Copia exacta y corte de precisión para tus llaves de repuesto.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Sliders className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">Duplicado de controles</h4>
                    <p className="text-xs text-neutral-600 mt-0.5">Controles de presencia, navaja o botones para apertura y alarma.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-neutral-100 text-neutral-700 flex items-center justify-center shrink-0">
                    <Wrench className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">Reparación de controles</h4>
                    <p className="text-xs text-neutral-600 mt-0.5">Cambio de carcasas, microswitches, botones dañados y revisión.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-neutral-100">
              <a
                href={getWhatsAppLink(businessConfig.whatsappMessages.carKeys)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWhatsApp('llaves_auto')}
                data-track="click_whatsapp"
                data-card-source="llaves_auto"
                className="w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" aria-hidden="true" />
                <span>Pedir una llave nueva por WhatsApp</span>
              </a>
              <div className="mt-2 text-center">
                <a
                  href="#taller"
                  className="text-xs text-neutral-600 hover:text-neutral-900 underline underline-offset-2"
                >
                  atención de preferencia con cita en taller
                </a>
              </div>
            </div>
          </div>

          {/* BLOCK 3: Casa y Negocio */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/90 shadow-sm flex flex-col justify-between hover:border-[#F2B632] transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#12151C] text-[#F2B632] flex items-center justify-center mb-5">
                <Home className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#12151C]">
                Casa y Negocio
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Seguridad, cerraduras e instalaciones residenciales y comerciales.
              </p>

              {/* Foto ilustrativa cerraduras residenciales */}
              <div className="mt-4 rounded-xl overflow-hidden border border-neutral-200 aspect-16/9 relative group">
                <img
                  src="/src/assets/images/cerradura_seguridad_residencial_1793488686898.jpg"
                  alt="Instalación de cerradura de seguridad residencial"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-2.5 text-[11px] font-semibold text-white">
                  Instalación y cerrajería residencial de alta seguridad
                </div>
              </div>

              <ul className="mt-5 space-y-3.5">
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F2B632] mt-2 shrink-0" aria-hidden="true" />
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">Duplicado de llaves sencillas y de seguridad</h4>
                    <p className="text-xs text-neutral-600">Llaves de punto, multipunto, cruz y cilindros residenciales.</p>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F2B632] mt-2 shrink-0" aria-hidden="true" />
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">Cerraduras electrónicas y digitales</h4>
                    <p className="text-xs text-neutral-600">Duplicado de llaves y chips para cerraduras digitales.</p>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F2B632] mt-2 shrink-0" aria-hidden="true" />
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">Instalación y reinstalación de cerraduras</h4>
                    <p className="text-xs text-neutral-600">Colocación en puertas principales, de madera, metal y cancelería.</p>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F2B632] mt-2 shrink-0" aria-hidden="true" />
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">Reparación, ajuste y destrabación</h4>
                    <p className="text-xs text-neutral-600">Corrección de chapas forzadas, atoradas o desalineadas.</p>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F2B632] mt-2 shrink-0" aria-hidden="true" />
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">Cambio de combinación y amaestramiento</h4>
                    <p className="text-xs text-neutral-600">Nueva combinación de llaves y amaestramiento (una misma llave para varias puertas).</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-neutral-100">
              <a
                href={getWhatsAppLink(businessConfig.whatsappMessages.homeLock)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWhatsApp('casa_negocio')}
                data-track="click_whatsapp"
                data-card-source="casa_negocio"
                className="w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" aria-hidden="true" />
                <span>Pedir cerrajero para mi casa por WhatsApp</span>
              </a>
              <div className="mt-2 text-center">
                <a
                  href={`tel:${businessConfig.phoneClean}`}
                  onClick={() => handleCall('casa_negocio')}
                  className="text-xs text-neutral-600 hover:text-neutral-900 underline underline-offset-2"
                >
                  o llama al 33 1324 0714
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MARCAS SECTION: Strictly rendered ONLY if customer provided carBrands list */}
        {businessConfig.carBrands && businessConfig.carBrands.length > 0 && (
          <div className="mt-12 p-6 bg-white rounded-2xl border border-neutral-200">
            <h3 className="font-display text-xl font-bold uppercase tracking-tight text-[#12151C] mb-4">
              Marcas Automotrices Atendidas
            </h3>
            <div className="flex flex-wrap gap-2">
              {businessConfig.carBrands.map((brand, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-neutral-100 text-neutral-800 text-xs font-semibold rounded-lg"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
