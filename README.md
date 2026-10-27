# ENEISOFT XVI 2026 — Plataforma Web Oficial
> **Encuentro Nacional de Estudiantes de Ingeniería de Sistemas e Informática**  
> *Facultad de Ingeniería de Sistemas e Informática (FISI) — Universidad Nacional Mayor de San Marcos (UNMSM)*

---

## ✦ Visión General

Plataforma web oficial del **ENEISOFT XVI 2026** y su **Hackathon Presencial de Inteligencia Artificial**. Diseñada bajo una estética *Cyber Matrix* de alta fidelidad, inspirada en interfaces futuristas de ingeniería de sistemas con paleta de alto contraste (fondo oscuro profundo `#030806`, verde neón `#00ff87`, cian cuántico `#60efff` y secciones ejecutivas alternadas en fondo claro).

La solución integra tanto la difusión y bases de la competencia presencial como el catálogo interactivo de conferencias del congreso.

---

## ✦ Hackathon ENEISOFT XVI 2026

* **Fecha de la Jornada**: Sábado 07 de Noviembre de 2026
* **Sede**: Instalaciones de la FISI — UNMSM (3 estaciones operativas)
* **Capacidad**: 12 equipos clasificados (36 participantes de pregrado)
* **Eje Temático Central**: *«IA aplicada a problemas reales de la comunidad universitaria»*
* **Pozo Oficial**: S/ 450.00 en efectivo + Becas integrales y diplomas de honor

---

## ✦ Arquitectura de la Plataforma

### 1. Portal Principal ENEISOFT (`/`)
* **Hero ENEISOFT** *(Fondo Oscuro)*: Portada monumental de identidad visual del congreso, lema *«CONECTA / CREA / CONSTRUYE»* y llamados de acción directa a la Hackathon y Eventos.
* **Misión & Visión Institucional** *(Fondo Oscuro)*: Sección dedicada con tarjetas de alta estética glassmorphism para el propósito y la visión a futuro del congreso.
* **Nuestros Aliados & Patrocinadores** *(Fondo Claro)*: Marquesina continua fluida (*Framer Motion*) con logos a gran escala de aliados (IEEE Computer Society PUCP, Developer Student Club PUCP, Club Blockchain PUCP).
* **Ubicaciones del Evento (Sede Oficial)** *(Fondo Oscuro)*: Mapa interactivo estilizado en modo oscuro con las coordenadas exactas de la FISI - UNMSM, radar de localización, botón de acceso directo a Google Maps (`https://maps.app.goo.gl/km1Gfoo3B5tPDwUY7`) e información de ingresos y estaciones.
* **Preguntas Frecuentes (FAQ)** *(Fondo Claro)*: Acordeón interactivo situado debajo de la ubicación con respuestas a dudas sobre inscripciones, sedes, hackathon y certificaciones.

### 2. Pestaña Oficial Hackathon 2026 (`/hackathon`)
* **Portada Hackathon con Inscripción** *(Fondo Oscuro)*: Portada monumental dedicada a la competencia, fecha oficial (Sábado 07 de Noviembre), sede FISI - UNMSM y botón directo para inscripción de equipos al formulario.
* **1. Ejes Temáticos** *(Fondo Claro)*: Desglose de los 3 sub-ejes (Académico, Bienestar Universitario y Gestión Universitaria).
* **2. Estructura de Premiación** *(Fondo Oscuro)*: Pestañas interactivas para 1.er puesto (S/ 200.00), 2.º puesto (S/ 150.00) y 3.er puesto (S/ 100.00), becas integrales/parciales y certificados oficiales.
* **3. Cronograma Operativo** *(Fondo Claro)*: Tabla secuencial con los 9 hitos presenciales en las 3 estaciones físicas del campus.
* **4. Esquema de Evaluación** *(Fondo Oscuro)*: Ponderación oficial (85% Jurados + 15% Voto de Pares), rúbrica unificada de 5 criterios y penalización anti-código preexistente (-15 pts).

### 3. Módulo de Eventos & Conferencias (`/eventos`)
* **Navegación Scrollytelling (*Sticky Scroll*)**:
  * **Próximos Eventos**: Convocatoria de la Hackathon 2026 con bases oficiales, enlace de registro y geolocalización.
  * **Eventos Anteriores**: Ponencias magistrales con ponentes internacionales (Bastián Landskron y Heileen Goodson), enlaces a publicaciones oficiales y ubicación en Google Maps.

---

## ✦ Stack Tecnológico

* **Framework Core**: [Next.js 16 (App Router)](https://nextjs.org/)
* **Lenguaje**: TypeScript
* **Estilizado**: Tailwind CSS v4 + Vanilla CSS Design Tokens (Eneisoft Cyber Matrix)
* **Animaciones & Física**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://greensock.com/)
* **Smooth Scroll**: [Lenis](https://lenis.studio/freight/react-lenis)
* **Componentes UI**: [Radix UI Primitives](https://ui.shadcn.com/)
* **Iconografía**: [Lucide React](https://lucide.dev/)

---

## ✦ Puesta en Marcha (Desarrollo Local)

### Prerrequisitos
* Node.js 18+ o superior
* npm, pnpm o yarn

### Instalación y Ejecución

1. Instalar las dependencias del proyecto:
   ```bash
   npm install
   ```

2. Iniciar el servidor de desarrollo local:
   ```bash
   npm run dev
   ```

3. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

4. Validar compilación de producción:
   ```bash
   npm run build
   ```

---

## ✦ Organización & Créditos

* **Organizador**: Comisión Académica y Organizadora — ENEISOFT XVI 2026
* **Institución**: Facultad de Ingeniería de Sistemas e Informática (FISI)
* **Universidad**: Universidad Nacional Mayor de San Marcos (UNMSM) — Lima, Perú
