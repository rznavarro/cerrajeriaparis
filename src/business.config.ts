/**
 * CONFIGURACIÓN CENTRAL DE CERRAJERÍA PARÍS
 * 
 * Este archivo concentra todos los datos del negocio.
 * 
 * REGLA ESTRICTA: Los datos no confirmados por el cliente (horario, marcas, colonias,
 * años de experiencia, reseñas, fotos) deben permanecer vacíos (null o []) hasta que
 * el cliente los entregue oficialmente.
 * 
 * Todo componente visual que dependa de un campo vacío se oculta automáticamente
 * mediante renderizado condicional, sin dejar espacios vacíos ni mensajes de "pendiente".
 */

export interface DailySchedule {
  open: string;  // formato "HH:mm" (24h), ej. "09:00"
  close: string; // formato "HH:mm" (24h), ej. "19:00"
}

export interface WeeklySchedule {
  monday?: DailySchedule | null;
  tuesday?: DailySchedule | null;
  wednesday?: DailySchedule | null;
  thursday?: DailySchedule | null;
  friday?: DailySchedule | null;
  saturday?: DailySchedule | null;
  sunday?: DailySchedule | null;
}

export interface BusinessConfig {
  // Datos confirmados
  name: string;
  phoneDisplay: string;
  phoneClean: string;
  whatsappUrl: string;
  address: string;
  addressDetail: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
  };
  googleMapsUrl: string;
  facebookUrl: string;
  tiktokUrl: string;
  serviceArea: string;
  coverageCities: string[];

  // Zona horaria oficial para cálculo de apertura
  timezone: string;

  // Datos NO confirmados (dejar en null o [] si el cliente no los ha proporcionado)
  weeklySchedule: WeeklySchedule | null;
  is24Hours: boolean; // Solo activar si el cliente lo confirma expresamente
  colonies: string[];
  carBrands: string[];
  yearsExperience: number | null;
  googleReviewsUrl: string | null;
  logoUrl: string | null;
  realPhotos: string[];

  // Mensajes precargados de WhatsApp (Sección 8 de la especificación)
  whatsappMessages: {
    lockedOutOfCar: string;
    lostOrBrokenCarKey: string;
    lockedOutOfHome: string;
    appointmentDuplicate: string;
    generalInquiry: string;
    carUrgency: string;
    carKeys: string;
    homeLock: string;
  };
}

export const businessConfig: BusinessConfig = {
  // DATOS CONFIRMADOS
  name: "Cerrajería París",
  phoneDisplay: "+52 33 1324 0714",
  phoneClean: "+523313240714",
  whatsappUrl: "https://wa.me/523313240714",
  address: "Av. Inglaterra 3484, Villas de San Javier, Zapopan, Jalisco, México.",
  addressDetail: {
    street: "Av. Inglaterra 3484",
    neighborhood: "Villas de San Javier",
    city: "Zapopan",
    state: "Jalisco",
    country: "México"
  },
  googleMapsUrl: "https://maps.app.goo.gl/dV5dowqHct3g3Nng8",
  facebookUrl: "https://www.facebook.com/profile.php?id=100065396592502",
  tiktokUrl: "https://www.tiktok.com/@cerrajero.auto.paris",
  serviceArea: "Zapopan y Guadalajara",
  coverageCities: ["Zapopan", "Guadalajara"],

  timezone: "America/Mexico_City",

  // DATOS NO CONFIRMADOS (SE OCULTAN AUTOMÁTICAMENTE HASTA SER PROVISTOS)
  weeklySchedule: null,
  is24Hours: false,
  colonies: [],
  carBrands: [],
  yearsExperience: null,
  googleReviewsUrl: null,
  logoUrl: "/logo/logo.png",
  realPhotos: [
    "/src/assets/images/llave_programada_tablero_1793488686757.jpg",
    "/src/assets/images/maquinaria_llaves_chip_1793488686225.jpg",
    "/src/assets/images/apertura_auto_sin_dano_1793488686903.jpg",
    "/src/assets/images/cerradura_seguridad_residencial_1793488686898.jpg"
  ],

  // MENSAJES PRECARGADOS (SECCIÓN 8)
  whatsappMessages: {
    lockedOutOfCar: "Hola, me quedé fuera de mi auto. Marca y modelo: ___. Año: ___. Estoy en (colonia/zona): ___.",
    lostOrBrokenCarKey: "Hola, perdí o se me rompió la llave de mi auto. Marca y modelo: ___. Año: ___. ¿Tiene llave con chip o control? ___. Estoy en (colonia/zona): ___.",
    lockedOutOfHome: "Hola, no puedo entrar a mi casa/negocio. Estoy en (colonia/zona): ___. Mi problema es: ___.",
    appointmentDuplicate: "Hola, quiero agendar una cita para duplicar una llave o control. Es de: auto / casa. Marca y modelo (si es auto): ___. ¿Qué día me conviene? ___.",
    generalInquiry: "Hola, necesito informes sobre un servicio de cerrajería en Zapopan / Guadalajara.",
    carUrgency: "Hola, requiero con urgencia una apertura de auto sin daño. Marca y modelo: ___. Estoy en: ___.",
    carKeys: "Hola, necesito cotizar una llave con chip / control de auto. Marca y modelo: ___. Año: ___.",
    homeLock: "Hola, requiero cerrajero a domicilio para mi casa o negocio. Mi dirección es: ___."
  }
};

/**
 * Genera el enlace de WhatsApp codificado con mensaje inicial
 */
export function getWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/523313240714?text=${encoded}`;
}

/**
 * Calcula si el negocio está abierto según el horario configurado y la zona horaria.
 * Si weeklySchedule es null, retorna null (indicando que no se debe mostrar el chip).
 */
export function getBusinessStatus(config: BusinessConfig = businessConfig): { isOpen: boolean; text: string } | null {
  if (config.is24Hours) {
    return { isOpen: true, text: "Atendiendo ahora · Servicio 24 horas" };
  }

  if (!config.weeklySchedule) {
    return null; // NO mostrar chip si no hay horario confirmado
  }

  try {
    const now = new Date();
    // Obtener día y hora en la zona horaria del negocio
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: config.timezone,
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
      hour12: false
    });

    const parts = formatter.formatToParts(now);
    let weekday = "";
    let hour = 0;
    let minute = 0;

    for (const part of parts) {
      if (part.type === "weekday") weekday = part.value.toLowerCase();
      if (part.type === "hour") hour = parseInt(part.value, 10);
      if (part.type === "minute") minute = parseInt(part.value, 10);
    }

    const dayKey = weekday as keyof WeeklySchedule;
    const todaySchedule = config.weeklySchedule[dayKey];

    if (!todaySchedule) {
      return { isOpen: false, text: "Fuera de horario, escríbenos y te respondemos al abrir" };
    }

    const [openH, openM] = todaySchedule.open.split(":").map(Number);
    const [closeH, closeM] = todaySchedule.close.split(":").map(Number);

    const currentMinutes = hour * 60 + minute;
    const openMinutes = openH * 60 + openM;
    const closeMinutes = closeH * 60 + closeM;

    if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
      return { isOpen: true, text: "Atendiendo ahora" };
    }

    return { isOpen: false, text: "Fuera de horario, escríbenos y te respondemos al abrir" };
  } catch {
    return null;
  }
}

/**
 * Event Tracking para GA4 y Meta Pixel
 * Registra data-attributes y dispara eventos personalizados
 */
export function trackConversion(eventName: string, params: Record<string, unknown> = {}) {
  try {
    // 1. DataLayer para Google Analytics 4 / Google Tag Manager
    if (typeof window !== "undefined" && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
      (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
        event: eventName,
        timestamp: new Date().toISOString(),
        ...params
      });
    }

    // 2. Window gtag si existe
    if (typeof window !== "undefined" && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", eventName, params);
    }

    // 3. Meta Pixel (fbq) si existe
    if (typeof window !== "undefined" && (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq) {
      (window as unknown as { fbq: (...args: unknown[]) => void }).fbq("trackCustom", eventName, params);
    }

    // 4. Custom DOM Event
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("cerrajeria_paris_event", {
        detail: { event: eventName, ...params }
      }));
    }
  } catch {
    // Silencioso para no interrumpir la navegación del usuario
  }
}
