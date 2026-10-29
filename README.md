# ENEISOFT XVI 2026 — Plataforma Web Oficial

> **Plataforma web oficial del Encuentro Nacional de Estudiantes de Ingeniería de Software**  
> *Facultad de Ingeniería de Sistemas e Informática (FISI) — Universidad Nacional Mayor de San Marcos (UNMSM)*

[![Next.js](https://img.shields.io/badge/Next.js-16.0.8-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.1-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel)](https://eneisoft-unmsm.vercel.app/)

🌐 **Despliegue Oficial en Producción:** [https://eneisoft-unmsm.vercel.app/](https://eneisoft-unmsm.vercel.app/)

---

## ✦ Visión y Enfoque Técnico

La plataforma web de **ENEISOFT XVI 2026** fue concebida como una aplicación web de alto rendimiento y estética *Cyber Matrix / Tech Terminal*. Diseñada para ofrecer una experiencia inmersiva mediante scrollytelling dinámico, micro-interacciones físicas y transiciones fluidas, integrando de manera eficiente la navegación institucional, el portal de la Hackathon y el catálogo interactivo de eventos y conferencias.

---

## ✦ Stack Tecnológico

| Capa | Tecnologías | Propósito |
| :--- | :--- | :--- |
| **Framework Web** | [Next.js 16.0.8](https://nextjs.org/) (App Router, Turbopack) | Arquitectura basada en React Server Components (RSC) y optimización de compilación estática. |
| **Biblioteca UI** | [React 19.2.1](https://react.dev/) | Renderizado y gestión de estado reactivo moderno. |
| **Lenguaje** | [TypeScript 5.x](https://www.typescriptlang.org/) | Tipado estricto en datos de eventos, esquemas de ponencias y propiedades de componentes. |
| **Motor de Estilizado** | [Tailwind CSS v4](https://tailwindcss.com/) + `@tailwindcss/postcss` | Sistema de clases utilitarias de última generación con tokens de diseño personalizados. |
| **Animaciones & Física** | [Framer Motion 12](https://www.framer.com/motion/) & [GSAP 3.14](https://greensock.com/) | Orquestación de scroll interactivo, interpolación física de resortes (*springs*) y transformaciones GPU. |
| **Smooth Scrolling** | [Lenis 1.3](https://lenis.studio/freight/react-lenis) | Desplazamiento inercial suave desacoplado del motor nativo del navegador. |
| **Primitivas UI** | [Radix UI](https://www.radix-ui.com/) | Componentes accesibles y no estilizados (Accordion, Dialog, Tabs, Slot, Avatar, Separator, Switch). |
| **Utilidades de Clases** | `clsx`, `tailwind-merge`, `class-variance-authority` | Composición modular y condicional de estilos. |
| **Iconografía** | [Lucide React](https://lucide.dev/) | Iconos SVG optimizados y alineados con la temática técnica. |
| **Hosting & CI/CD** | [Vercel](https://vercel.com/) | Edge deployment con compresión automática y CDN global. |

---

## ✦ Arquitectura y Estructura del Proyecto

El proyecto sigue la convención modular del **Next.js App Router**:

```text
eneisoft/
├── app/                                # Enrutamiento principal (Next.js App Router)
│   ├── eventos/                        # Página de Eventos y Cronograma (/eventos)
│   │   └── page.tsx
│   ├── hackathon/                      # Página oficial de la Hackathon (/hackathon)
│   │   └── page.tsx
│   ├── favicon.ico                     # Favicon del proyecto
│   ├── globals.css                     # Directivas globales de Tailwind CSS v4 y tokens
│   ├── layout.tsx                      # Layout raíz (Navbar, Footer, SmoothScroll, Preloader)
│   └── page.tsx                        # Landing Page principal (/)
│
├── components/                         # Módulos y componentes reutilizables
│   ├── layout/                         # Componentes estructurales globales
│   │   ├── Footer.tsx                  # Pie de página institucional y enlaces de redes
│   │   ├── Navbar.tsx                  # Barra de navegación flotante fija y responsiva
│   │   └── SmoothScroll.tsx            # Wrapper de inicialización y sincronización de Lenis
│   │
│   ├── sections/                       # Secciones completas de la interfaz
│   │   ├── CTA.tsx                     # Bloques de llamado a la acción
│   │   ├── EventCarousel.tsx           # Carrusel alternativo de ponencias
│   │   ├── FAQ.tsx                     # Preguntas frecuentes con acordeones interactivos
│   │   ├── Features.tsx                # Grilla de características e impacto del congreso
│   │   ├── HackathonHero.tsx           # Hero monumental de la página de Hackathon
│   │   ├── HackathonSpaces.tsx         # Visualización de áreas físicas acondicionadas
│   │   ├── Hero.tsx                    # Hero principal de ENEISOFT
│   │   ├── InfiniteMarquee.tsx         # Marquesinas continuas con animación infinita
│   │   ├── Location.tsx                # Integración cartográfica de la sede FISI UNMSM
│   │   ├── MissionVision.tsx           # Tarjetas interactivas de Misión y Visión
│   │   ├── Partners.tsx                # Logotipos de comunidades aliadas y llamada a sponsors
│   │   ├── Pricing.tsx                 # Estructura de premiación por pestañas
│   │   ├── ProductDemo.tsx             # Panel de demostración técnica y rubro de evaluación
│   │   ├── StickyScrollEvents.tsx      # Engine de scrollytelling sincronizado de eventos
│   │   ├── TechSpecs.tsx               # Especificaciones técnicas operativas
│   │   ├── Testimonials.tsx            # Citas y declaraciones de ediciones pasadas
│   │   └── VisualStory.tsx             # Narrativa visual interactiva del congreso
│   │
│   └── ui/                             # Primitivas UI y micro-interacciones
│       ├── CustomCursor.tsx            # Puntero personalizado con seguimiento cinético
│       ├── MagneticButton.tsx          # Botón con efecto magnético basado en movimiento del cursor
│       ├── Noise.tsx                   # Capa estética de textura de ruido cinematográfico
│       ├── ParallaxImage.tsx           # Efecto de profundidad en imágenes al hacer scroll
│       ├── Preloader.tsx               # Pantalla de carga inicial cinemática
│       ├── StaggeredText.tsx           # Animación de entrada de texto secuencial
│       ├── TextScramble.tsx            # Efecto de descifrado estilo consola/terminal
│       └── [primitivas Radix]          # accordion, avatar, badge, button, card, dialog, tabs...
│
├── lib/                                # Utilidades compartidas y helpers
│   └── utils.ts                        # Función 'cn()' para merge seguro de clases Tailwind
│
├── public/                             # Recursos estáticos servidos directamente
│   ├── allies/                         # Logotipos de sponsors y comunidades aliadas
│   ├── spaces/                         # Fotografías de instalaciones físicas (FISI)
│   ├── speakers/                       # Fotografías optimizadas de ponentes oficiales
│   ├── hero/                           # Assets gráficos de la portada
│   └── logoEneisoft.png                # Isotipo e isotipo vectorial oficial
│
├── Eventos.md                          # Registro y fuente de verdad de la agenda de ponencias
├── package.json                        # Definición de dependencias y scripts de compilación
├── tsconfig.json                       # Configuración del compilador TypeScript
└── next.config.ts                      # Configuración de compilación Next.js
```

---

## ✦ Patrones de Diseño & UX Engineering

### 1. Sistema Scrollytelling Dual (*Sticky Scroll*)
Implementado en `StickyScrollEvents.tsx`. A través del hook `useInView` de Framer Motion, la columna izquierda contiene una lista de eventos con umbral de visibilidad dinámico, sincronizando en tiempo real la tarjeta visual fija (*sticky*) de la columna derecha, logrando una transición suave entre ponencias, detalles de ponentes e insignias de estado.

### 2. Micro-interacción Magnética (*MagneticButton*)
Los botones principales (`MagneticButton.tsx`) calculan las coordenadas relativas del cursor mediante `getBoundingClientRect()` y aplican una fuerza de tracción magnética elástica sobre un resorte con `stiffness: 150` y `damping: 15`, retornando al reposo al salir del área de activación.

### 3. Alternancia Estricta de Fondos (Ritmo Visual)
La arquitectura de secciones sigue un patrón de contraste deliberado:
* **Fondo Oscuro** (`#0a2138` / `#030806` con acentos en `#24ed7a` y `#00c8df`): Secciones técnicas, hero monumental, cronogramas y FAQs.
* **Fondo Claro** (`#f8fafc` / `#ffffff` con tipografía en alto contraste): Secciones institucionales, espacios de sede y criterios de evaluación.

### 4. Desplazamiento Inercial Asíncrono (*Lenis*)
Integrado a nivel de layout raíz en `SmoothScroll.tsx`, normaliza el scroll vertical a través de diferentes plataformas y sistemas operativos para asegurar fluidez constante a 60-120 fps sin interferir con la accesibilidad de teclado o touch.

---

## ✦ Rutas de la Aplicación

| Ruta | Componente Base | Descripción Técnica |
| :--- | :--- | :--- |
| `/` | `app/page.tsx` | Portal principal: Hero con tipografía escalada, Misión/Visión, Aliados continuos, Mapa de sede y FAQs. |
| `/hackathon` | `app/hackathon/page.tsx` | Hub técnico de la Hackathon: Registro directo, estructura de premios por pestañas, cronograma presencial y espacios. |
| `/eventos` | `app/eventos/page.tsx` | Plataforma de eventos: Scrollytelling de ponencias próximas y pasadas, enlace directo a calendario de Luma. |

---

## ✦ Scripts y Flujo de Trabajo

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el entorno de desarrollo local con soporte Turbopack en `http://localhost:3000`. |
| `npm run build` | Ejecuta la verificación estricta de TypeScript y genera el build optimizado de producción. |
| `npm run start` | Arranca el servidor de producción con los activos pre-renderizados. |
| `npm run lint` | Valida las directrices de código estático mediante ESLint 9. |

---

## ✦ Despliegue en Producción

El proyecto está configurado para despliegue continuo en **Vercel**:
* **Build Command**: `next build`
* **Output Directory**: `.next`
* **Framework Preset**: Next.js
* **URL de Producción**: [https://eneisoft-unmsm.vercel.app/](https://eneisoft-unmsm.vercel.app/)

---

## ✦ Créditos & Organización

* **Entidad Organizadora**: Comisión Académica y Organizadora — ENEISOFT XVI 2026
* **Facultad**: Facultad de Ingeniería de Sistemas e Informática (FISI)
* **Universidad**: Universidad Nacional Mayor de San Marcos (UNMSM) — Lima, Perú
