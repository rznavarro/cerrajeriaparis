# Cerrajería París - Documentación del Sitio Web

Sitio web oficial de **Cerrajería París** en Zapopan y Guadalajara, Jalisco, México.
Diseñado bajo un enfoque de alta conversión, mobile-first y resolución inmediata para urgencias y citas de taller.

---

## 📌 Guía de Configuración: `src/business.config.ts`

El archivo `src/business.config.ts` es la **única fuente de verdad** para los datos de la cerrajería.

### 1. Datos Confirmados (Ya integrados)
- **Nombre:** Cerrajería París
- **Dirección:** Av. Inglaterra 3484, Villas de San Javier, Zapopan, Jalisco, México.
- **Teléfono y WhatsApp:** +52 33 1324 0714
- **Enlace WhatsApp:** `https://wa.me/523313240714`
- **Google Maps:** `https://maps.app.goo.gl/dV5dowqHct3g3Nng8`
- **Facebook:** `https://www.facebook.com/profile.php?id=100065396592502`
- **TikTok:** `https://www.tiktok.com/@cerrajero.auto.paris`
- **Cobertura:** Servicio a domicilio en Zapopan y Guadalajara.
- **Especialidad:** Cerrajería automotriz (aperturas sin daño, llaves con chip, duplicados, controles) y cerrajería residencial.
- **Mensajes precargados de WhatsApp:** 4 flujos según la situación del cliente.

---

### 2. Campos Pendientes por Confirmar por el Cliente
Para preservar la confianza y evitar promesas falsas, los siguientes campos en `businessConfig` están configurados por defecto como `null` o `[]`. **El sitio web oculta automáticamente cualquier sección que dependa de estos campos hasta que se ingresen valores reales**:

| Campo | Tipo | Valor Inicial | Instrucciones al recibir datos |
| :--- | :--- | :--- | :--- |
| `weeklySchedule` | `WeeklySchedule \| null` | `null` | Si el cliente entrega horarios (ej. L-V 09:00 a 19:00), agregar el objeto. Esto activará automáticamente el chip "Atendiendo ahora" / "Fuera de horario" calculado con la hora de Zapopan. |
| `is24Hours` | `boolean` | `false` | Solo cambiar a `true` si el cliente confirma expresamente que tiene guardia 24 horas. |
| `colonies` | `string[]` | `[]` | Lista de colonias prioritarias atendidas en Zapopan y Guadalajara (ej. Providencia, Chapalita, La Estancia, etc.). Si se llena, se muestra la lista de zonas. |
| `carBrands` | `string[]` | `[]` | Lista de marcas automotrices específicas con las que trabaja (ej. Nissan, Ford, Volkswagen, Chevrolet). Mientras esté vacío, NO se inventa ni se escribe "todas las marcas". |
| `yearsExperience` | `number \| null` | `null` | Número exacto de años de experiencia verificable (ej. `12`). Se mostrará solo con cifra real. |
| `googleReviewsUrl` | `string \| null` | `null` | Enlace directo para leer o dejar reseñas en Google Business Profile. Si se agrega, se activa el botón de reseñas reales. |
| `logoUrl` | `string \| null` | `null` | Ruta al archivo de logotipo oficial vectorial o imagen de alta resolución. Si no se provee, se usa la identidad tipográfica limpia. |
| `realPhotos` | `string[]` | `[]` | Rutas a fotos reales tomadas por el cerrajero trabajando o de la fachada del local. Prohibido usar stock que simule al personal. |

---

## 🚀 Eventos de Analítica Soportados

El código emite eventos de seguimiento listos para Google Analytics 4 (GA4) y Meta Pixel mediante la función `trackConversion()`:
- `click_llamar`: Clics en enlaces de llamada telefónica (`tel:`).
- `click_whatsapp`: Clics en botones de WhatsApp (incluye el parámetro `source_card` indicando la urgencia seleccionada).
- `click_maps`: Clics en "Cómo llegar" y botón de Google Maps.
- `click_cita`: Clics en el botón para agendar cita de taller.

Para conectar IDs de medición reales (G-XXXXXXX o Pixel ID), agregue los scripts correspondientes en `index.html`.

---

## 📄 Páginas y Rutas
- `/`: Página principal interactiva con selector de urgencia, servicios, cobertura, taller y preguntas frecuentes.
- `/aviso-de-privacidad`: Aviso de Privacidad adaptado a la legislación mexicana (LFPDPPP).
- `/contacto`: Redirección automática a `/#contacto`.
