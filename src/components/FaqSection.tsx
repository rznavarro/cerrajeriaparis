import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { businessConfig, getWhatsAppLink, trackConversion } from '../business.config';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Maximum 5 FAQs strictly derived from confirmed business data (Section 7.6)
  const faqs: FaqItem[] = [
    {
      question: '¿Dañan mi auto al realizar la apertura?',
      answer: 'No. Realizamos la apertura de cualquier tipo de auto con herramientas y técnicas que protegen la cerradura, los cristales y el marco de la puerta sin causar daños.'
    },
    {
      question: '¿A qué zonas acuden para servicio a domicilio?',
      answer: 'Contamos con servicio de cerrajero a domicilio cubriendo los municipios de Zapopan y Guadalajara, Jalisco.'
    },
    {
      question: '¿Pueden hacer una llave nueva si perdí todas las copias de mi auto?',
      answer: 'Sí. Atendemos casos de llaves perdidas de auto; confeccionamos la llave desde cero y realizamos la programación de llaves con chip y control remoto según el vehículo.'
    },
    {
      question: '¿Necesito cita previa para duplicar una llave o reparar un control?',
      answer: 'Para duplicados de llaves de auto y reparación de controles atendemos de preferencia con cita previa en nuestro local en Av. Inglaterra 3484, Villas de San Javier, Zapopan.'
    },
    {
      question: '¿Qué servicios residenciales y para negocios realizan?',
      answer: 'Hacemos duplicado de llaves sencillas y de seguridad, llaves para cerraduras electrónicas, instalación y reinstalación de cerraduras, reparación, destrabación, cambio de combinación y amaestramiento (abrir varias cerraduras con una misma llave).'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCustomQuestion = () => {
    trackConversion('click_whatsapp', { source_card: 'faq_custom_question' });
  };

  return (
    <section id="preguntas" className="py-14 sm:py-20 bg-white text-[#12151C] border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F2B632] mb-2">
            <HelpCircle className="w-4 h-4" aria-hidden="true" />
            <span>Respuestas Rápidas</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#12151C]">
            Preguntas Frecuentes
          </h2>
          <p className="mt-2 text-base text-neutral-600">
            Aclaraciones directas sobre nuestro método de trabajo y servicios en Zapopan y Guadalajara.
          </p>
        </div>

        {/* FAQ Accordion List (Max 5 items) */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-neutral-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 bg-white hover:bg-neutral-50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#F2B632]' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 bg-white text-neutral-700 text-sm sm:text-base leading-relaxed border-t border-neutral-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick inquiry note */}
        <div className="mt-10 p-5 rounded-2xl bg-neutral-50 border border-neutral-200 text-center">
          <p className="text-sm font-medium text-neutral-800">
            ¿Tienes otra consulta sobre tu vehículo, cerradura o ubicación?
          </p>
          <div className="mt-3">
            <a
              href={getWhatsAppLink(businessConfig.whatsappMessages.generalInquiry)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCustomQuestion}
              data-track="click_whatsapp"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#12151C] hover:text-[#25D366] underline underline-offset-4 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current text-[#25D366]" aria-hidden="true" />
              <span>Pregúntanos directo por WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
