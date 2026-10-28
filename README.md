# ENEISOFT XVI 2026 — Plataforma Web Oficial
> **Encuentro Nacional de Estudiantes de Ingeniería de Software**  
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
*Secuencia de fondos estrictamente alternada (Oscuro $\to$ Claro $\to$ Oscuro $\to$ Claro $\to$ Oscuro $\to$ Claro):*
* **Hero ENEISOFT** *(Fondo Oscuro)*: Portada monumental de identidad visual del congreso, lema *«CONECTA / CREA / CONSTRUYE»* y llamados de acción directa a la Hackathon y Eventos.
* **Misión & Visión Institucional** *(Fondo Claro)*: Sección dedicada con tarjetas interactivas de alta estética para el propósito y la visión a futuro del congreso.
* **Nuestros Aliados & Patrocinadores** *(Fondo Oscuro)*: Marquesina continua fluida (*Framer Motion*) con logos a gran escala de aliados (IEEE Computer Society PUCP, Developer Student Club PUCP, Club Blockchain PUCP) y botón de contacto directo a WhatsApp (`https://wa.link/k11jrd`) para sponsors.
* **Ubicaciones del Evento (Sede Oficial)** *(Fondo Claro)*: Mapa interactivo con las coordenadas exactas de la FISI - UNMSM, radar de localización, botón directo a Google Maps e información de ingresos y estaciones.
* **Preguntas Frecuentes (FAQ)** *(Fondo Oscuro)*: Acordeón interactivo con respuestas a dudas sobre inscripciones, dinámicas, sedes y certificaciones oficiales.
* **Footer Institucional** *(Fondo Claro)*: Navegación (*Explora*), redes oficiales (*Conecta*: Luma, LinkedIn, Facebook, Instagram y WhatsApp) y bloque de marca ENEISOFT.

### 2. Pestaña Oficial Hackathon 2026 (`/hackathon`)
*Secuencia de fondos estrictamente alternada (Oscuro $\to$ Claro $\to$ Oscuro $\to$ Claro $\to$ Oscuro $\to$ Claro):*
* **Portada Hackathon con Inscripción** *(Fondo Oscuro)*: Portada monumental dedicada a la competencia, fecha oficial (Sábado 07 de Noviembre), marquesina interactiva y botón directo al formulario oficial de inscripción.
* **1. Ejes Temáticos** *(Fondo Claro)*: Desglose de los 3 sub-ejes (Académico, Bienestar Universitario y Gestión Universitaria).
* **2. Estructura de Premiación** *(Fondo Oscuro)*: Pestañas interactivas para 1.er puesto (S/ 200.00), 2.º puesto (S/ 150.00) y 3.er puesto (S/ 100.00), becas integrales/parciales y certificados oficiales.
* **3. Cronograma Operativo** *(Fondo Claro)*: Tabla secuencial con los 9 hitos presenciales en las 3 estaciones físicas del campus.
* **4. Esquema de Evaluación** *(Fondo Oscuro)*: Ponderación oficial (85% Jurados + 15% Voto de Pares), rúbrica unificada de 5 criterios y penalización anti-código preexistente (-15 pts).
* **5. Espacios e Instalaciones Físicas** *(Fondo Claro)*: Disposición visual en una sola fila de las 3 áreas acondicionadas: Sala de Estudios & Cubículos (Estación 1: Sprints y Mentoría), Comedor FISI (Estación 2: Receso e Hidratación) y Auditorio Alfredo Alva Bravo (Estación 3: Pitches y Premiación).

### 3. Módulo de Eventos & Conferencias (`/eventos`)
* **Navegación Scrollytelling (*Sticky Scroll*)**:
  * **Próximos Eventos (Noviembre 2026)**: Conferencias virtuales magistrales ordenadas cronológicamente, con enlace directo al perfil de LinkedIn de cada ponente:
    * **Enrique Mesones** (03 de Noviembre, 14:30): *"¿Y si el problema no es el código? Cómo resolver conflictos, destacar bajo presión y transformar problemas en oportunidades de innovación"*.
    * **Daniella Orozco** (03 de Noviembre, 17:30): *"La parte del proyecto: De usar IA a pensar con IA"*.
    * **Miguel Solis** (03 de Noviembre, 19:00): *"Del git push a la nube: construye tu primer pipeline automatizado"*.
    * **Danilo Chavez** (04 de Noviembre, 19:00): *"Lo que me hubiera gustado saber en primer ciclo sobre datos"*.
    * **Ernesto Cuadros** (05 de Noviembre, 16:00): Ponencia magistral en computación e investigación.
    * **Doris Manrique** (05 de Noviembre, 17:30): Arquitectura cloud y liderazgo tecnológico.
    * **Raúl Mogollón** (05 de Noviembre, 19:00): *"Empleabilidad más allá del aula: LinkedIn & CV"*.
    * **Hackathon Presencial** (07 de Noviembre, 08:00 - 20:45): Jornada técnica en la FISI - UNMSM.
  * **Eventos Anteriores**: Ponencias magistrales internacionales (Bastián Landskron y Heileen Goodson) con enlaces a publicaciones oficiales de LinkedIn.

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
