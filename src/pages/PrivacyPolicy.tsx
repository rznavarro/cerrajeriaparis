import React, { useEffect } from 'react';
import { ArrowLeft, Shield, MapPin, Phone, MessageCircle } from 'lucide-react';
import { businessConfig } from '../business.config';

interface PrivacyPolicyProps {
  onNavigateHome: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigateHome }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Aviso de Privacidad | Cerrajería París';
  }, []);

  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#12151C] py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button
          type="button"
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-neutral-200 text-sm font-semibold text-neutral-800 hover:bg-neutral-100 hover:text-black transition-colors mb-8 cursor-pointer shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a la página principal</span>
        </button>

        {/* Content Container */}
        <article className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-neutral-200 shadow-sm">
          
          <div className="flex items-center gap-3 text-[#F2B632] mb-3">
            <Shield className="w-6 h-6" />
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Marco Legal y Protección de Datos
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#12151C]">
            Aviso de Privacidad
          </h1>
          <p className="mt-2 text-sm text-neutral-500">
            Última actualización: Noviembre 2026 · Cerrajería París
          </p>

          <div className="mt-8 space-y-6 text-sm sm:text-base text-neutral-700 leading-relaxed">
            
            <section>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-[#12151C] mb-2">
                1. Responsable del Tratamiento de Datos
              </h2>
              <p>
                <strong>Cerrajería París</strong>, con domicilio físico ubicado en {businessConfig.address}, es responsable del uso y protección de sus datos personales, en apego a los principios establecidos por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) de los Estados Unidos Mexicanos.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-[#12151C] mb-2">
                2. Datos Personales que Recabamos y Finalidad
              </h2>
              <p>
                Para la prestación de nuestros servicios de cerrajería automotriz, residencial y comercial a domicilio en Zapopan y Guadalajara, así como para la coordinación de citas en nuestro taller, podemos solicitarle vía telefónica o mediante mensajería instantánea (WhatsApp):
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5 text-neutral-600">
                <li>Nombre de contacto o referencia del solicitante.</li>
                <li>Número telefónico de contacto.</li>
                <li>Ubicación o dirección en Zapopan o Guadalajara donde se requiere el servicio a domicilio.</li>
                <li>Datos generales del vehículo (marca, modelo, año) o tipo de cerradura residencial para efectos de compatibilidad técnica.</li>
              </ul>
              <p className="mt-2">
                Estos datos se utilizan <strong>exclusivamente</strong> para:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5 text-neutral-600">
                <li>Confirmar su solicitud de cerrajero a domicilio y facilitar el arribo del técnico.</li>
                <li>Agendar y confirmar citas para duplicados de llaves o reparación de controles en taller.</li>
                <li>Brindar atención y asesoría técnica directa sobre su requerimiento de apertura o cerradura.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-[#12151C] mb-2">
                3. Transferencia y Protección de sus Datos
              </h2>
              <p>
                Cerrajería París no comercializa, transfiere ni cede sus datos personales a terceras empresas o agencias publicitarias con fines de lucro. Sus datos se conservan únicamente por el tiempo necesario para la debida atención y conclusión del servicio contratado.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-[#12151C] mb-2">
                4. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)
              </h2>
              <p>
                Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada o sea inexacta (Rectificación); que la eliminemos de nuestros registros de contacto cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos para fines específicos (Oposición).
              </p>
              <p className="mt-2">
                Para el ejercicio de cualquiera de los derechos ARCO, usted puede comunicarse directamente a nuestro teléfono y WhatsApp oficial: <strong>{businessConfig.phoneDisplay}</strong> o presentarse en nuestras instalaciones ubicadas en {businessConfig.address}.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-[#12151C] mb-2">
                5. Contacto para Dudas sobre Privacidad
              </h2>
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 mt-2 space-y-1.5 text-sm">
                <p className="font-bold text-neutral-900">Cerrajería París</p>
                <p className="flex items-center gap-2 text-neutral-700">
                  <MapPin className="w-4 h-4 text-[#F2B632] shrink-0" />
                  <span>{businessConfig.address}</span>
                </p>
                <p className="flex items-center gap-2 text-neutral-700">
                  <Phone className="w-4 h-4 text-[#F2B632] shrink-0" />
                  <span>{businessConfig.phoneDisplay}</span>
                </p>
                <p className="flex items-center gap-2 text-neutral-700">
                  <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                  <a href={businessConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-black">
                    WhatsApp: {businessConfig.phoneDisplay}
                  </a>
                </p>
              </div>
            </section>

            {/* Client instructions note */}
            <div className="mt-8 pt-6 border-t border-neutral-200 text-xs text-neutral-500 italic">
              Nota para la administración: Este aviso de privacidad contiene los datos fiscales y de ubicación confirmados de Cerrajería París. Si cuenta con un texto redactado formalmente por su asesor legal corporativo previo, puede actualizarlo directamente conservando esta ruta (/aviso-de-privacidad).
            </div>

          </div>

        </article>

      </div>
    </main>
  );
};
