import { StickyScrollEvents, ScrollEventItem } from "@/components/sections/StickyScrollEvents";

export const metadata = {
    title: "Eventos | ENEISOFT XVI 2026",
    description: "Próximos eventos, ponencias magistrales y conferencias de la Facultad de Ingeniería de Sistemas e Informática (UNMSM).",
};

// 1. LO QUE SE VIENE - Próximos eventos
const proximosEventos: ScrollEventItem[] = [
    {
        id: "inauguracion-hackathon",
        stepNumber: "01",
        dateBadge: "NOV | 02",
        modalidad: "Presencial · Día 1 Eneisoft",
        title: "Inauguración y Jornada de Ponencias",
        fechaDetalle: "Lunes 02 de noviembre de 2026",
        hora: "2:30 PM - 7:00 PM",
        lugar: "Auditorio - FISI UNMSM",
        cardTitle: "DÍA 1",
        cardFooterLeft: "Auditorio - FISI UNMSM",
        cardFooterRight: "2 Ponencias Magistrales",
        programa: [
            {
                time: "2:30 PM – 4:00 PM",
                activity: "Inauguración Oficial",
                description: "Apertura oficial del evento y bienvenida a todos los participantes.",
            },
            {
                time: "4:00 PM – 5:30 PM",
                activity: 'Ponencia 1: "De resolver un problema a construir un producto: la historia detrás de Latinfo"',
                speaker: "Kevin Navarro y Lourdes Iturria (DSC PUCP)",
            },
            {
                time: "5:30 PM – 7:00 PM",
                activity: 'Ponencia 2: "El arquitecto híbrido: El encuentro de dos mundos"',
                speaker: "Guillermo Gamboa (QuantumHub)",
            },
        ],
        links: [
            {
                label: "Inscribirse al evento en Luma",
                href: "https://luma.com/bpl4gqid?lm_source=embed",
                primary: true,
            },
            {
                label: "Abrir en Google Maps",
                href: "https://maps.app.goo.gl/tMyPpnmLZ6ZryRej7",
                primary: false,
            },
        ],
    },
    {
        id: "ponencia-enrique",
        stepNumber: "02",
        dateBadge: "NOV | 03",
        modalidad: "Virtual · Día 2 Eneisoft",
        title: "¿Y si el problema no es el código? Cómo resolver conflictos, destacar bajo presión y transformar problemas en oportunidades de innovación",
        fechaDetalle: "Martes 03 de noviembre de 2026",
        hora: "2:30 PM - 3:30 PM",
        speaker: "Enrique Mesones",
        role: "Líder empresarial, presidente de APESOFT, especializado en impulsar ecosistemas tecnológicos, Web 3.0 e IA",
        tematica: "Importancia de las habilidades blandas, liderazgo y resolución de problemas bajo presión para generar, capturar y compartir valor en el desarrollo de software.",
        image: "/speakers/EnriqueMesones.png",
        links: [
            {
                label: "Inscribirse al evento en Luma",
                href: "https://luma.com/14y6sxn7",
                primary: true,
            },
            {
                label: "Ver perfil de Linkedin",
                href: "https://www.linkedin.com/in/enriquemesones",
                variant: "linkedin",
            },
        ],
    },
    {
        id: "ponencia-jasef",
        stepNumber: "03",
        dateBadge: "NOV | 03",
        modalidad: "Virtual · Día 2 Eneisoft",
        title: "[Título por actualizar]",
        fechaDetalle: "Martes 03 de noviembre de 2026",
        hora: "4:00 PM - 5:00 PM",
        speaker: "Jasef Huachambe",
        role: "Ingeniero de datos y Senior Cloud Data Engineer, especialista en arquitecturas Big Data e Inteligencia Artificial corporativas",
        tematica: "[Por actualizar] — Próximamente se revelará el temario detallado de la ponencia.",
        image: "/speakers/JasefHuachambe.jpg",
        links: [
            {
                label: "Inscribirse al evento en Luma",
                href: "https://luma.com/user/eneisoft",
                primary: true,
            },
            {
                label: "Ver perfil de Linkedin",
                href: "https://pe.linkedin.com/in/jasef-huachambe",
                variant: "linkedin",
            },
        ],
    },
    {
        id: "ponencia-daniela",
        stepNumber: "04",
        dateBadge: "NOV | 03",
        modalidad: "Virtual · Día 2 Eneisoft",
        title: "La parte del proyecto: De usar IA a pensar con IA",
        fechaDetalle: "Martes 03 de noviembre de 2026",
        hora: "5:30 PM - 6:30 PM",
        speaker: "Daniella Orozco",
        role: "Especialista en transformación organizacional, innovación tecnológica y UX",
        tematica: "Evolución estratégica desde el uso instrumental de herramientas de IA hacia una mentalidad de pensamiento aumentado aplicada al diseño de productos y la experiencia de usuario.",
        image: "/speakers/DanielaOrozco.png",
        links: [
            {
                label: "Inscribirse al evento en Luma",
                href: "https://luma.com/user/eneisoft",
                primary: true,
            },
            {
                label: "Ver perfil de Linkedin",
                href: "https://www.linkedin.com/in/daniella-orozco-bedregal",
                variant: "linkedin",
            },
        ],
    },
    {
        id: "ponencia-miguel",
        stepNumber: "05",
        dateBadge: "NOV | 03",
        modalidad: "Virtual · Día 2 Eneisoft",
        title: "Del git push a la nube: construye tu primer pipeline automatizado",
        fechaDetalle: "Martes 03 de noviembre de 2026",
        hora: "7:00 PM - 8:00 PM",
        speaker: "Miguel Solis",
        role: "Desarrollador full-stack, especialista en backend, arquitectura cloud y DevSecOps en Mibanco y UNMSM",
        tematica: "Fundamentos y arquitectura de pipelines CI/CD, automatización de builds y despliegues en la nube con GitHub Actions y Docker, gestión de secretos y detección temprana de errores.",
        image: "/speakers/MiguelSolis.png",
        links: [
            {
                label: "Inscribirse al evento en Luma",
                href: "https://luma.com/jk1y1vnv",
                primary: true,
            },
            {
                label: "Ver perfil de Linkedin",
                href: "https://www.linkedin.com/in/miguel-solis-cunza",
                variant: "linkedin",
            },
        ],
    },
    {
        id: "jornada-ponencias-dia3",
        stepNumber: "06",
        dateBadge: "NOV | 04",
        modalidad: "Presencial · Día 3 Eneisoft",
        title: "Jornada de Ponencias",
        fechaDetalle: "Miércoles 04 de noviembre de 2026",
        hora: "2:30 PM - 5:30 PM",
        lugar: "Auditorio - FISI UNMSM",
        cardTitle: "DÍA 3",
        cardFooterLeft: "Auditorio - FISI UNMSM",
        cardFooterRight: "3 Ponencias Magistrales",
        programa: [
            {
                time: "2:30 PM – 3:30 PM",
                activity: 'Ponencia 1: "Por actualizar"',
                speaker: "Por actualizar",
            },
            {
                time: "3:30 PM – 4:30 PM",
                activity: 'Ponencia 2: "Te enseño como crear tu primer agente IA con Microsoft Foundry directo para producción"',
                speaker: "Henry Keniding",
            },
            {
                time: "4:30 PM – 5:30 PM",
                activity: 'Ponencia 3: "El rol de la IA en los estudios universitarios"',
                speaker: "Andrés Cáceres",
            },
        ],
        links: [
            {
                label: "Inscribirse al evento en Luma",
                href: "https://luma.com/user/eneisoft",
                primary: true,
            },
            {
                label: "Abrir en Google Maps",
                href: "https://maps.app.goo.gl/tMyPpnmLZ6ZryRej7",
                primary: false,
            },
        ],
    },
    {
        id: "ponencia-danilo",
        stepNumber: "07",
        dateBadge: "NOV | 04",
        modalidad: "Virtual · Día 3 Eneisoft",
        title: "Lo que me hubiera gustado saber en primer ciclo sobre datos",
        fechaDetalle: "Miércoles 04 de noviembre de 2026",
        hora: "7:00 PM - 8:00 PM",
        speaker: "Danilo Chavez",
        role: "Analista de datos corporativos y fundador de DATANILO, enfocado en transformación digital",
        tematica: "Descubrimiento del mundo de los datos mediante casos prácticos empresariales, toma de decisiones y consejos clave para que los estudiantes comiencen a explorar esta área desde primeros ciclos.",
        image: "/speakers/DaniloChavez.jpg",
        links: [
            {
                label: "Inscribirse al evento en Luma",
                href: "https://luma.com/ipzz5u2c",
                primary: true,
            },
            {
                label: "Ver perfil de Linkedin",
                href: "https://www.linkedin.com/in/daniloyamir",
                variant: "linkedin",
            },
        ],
    },
    {
        id: "ponencia-renzo",
        stepNumber: "08",
        dateBadge: "NOV | 05",
        modalidad: "Virtual · Día 4 Eneisoft",
        title: "[Título por actualizar]",
        fechaDetalle: "Jueves 05 de noviembre de 2026",
        hora: "2:30 PM - 3:30 PM",
        speaker: "Renzo Cienfuegos",
        role: "Estudiante de Computación Científica, cofundador de QPerú y fundador de QuantumHub Perú, líder en computación cuántica y ciberseguridad",
        tematica: "[Por actualizar] — Próximamente se revelará el temario detallado de la ponencia.",
        image: "/speakers/RenzoCienfuegos.jpg",
        links: [
            {
                label: "Inscribirse al evento en Luma",
                href: "https://luma.com/user/eneisoft",
                primary: true,
            },
            {
                label: "Ver perfil de Linkedin",
                href: "https://www.linkedin.com/in/sudojung",
                variant: "linkedin",
            },
        ],
    },
    {
        id: "ponencia-ernesto",
        stepNumber: "09",
        dateBadge: "NOV | 05",
        modalidad: "Virtual · Día 4 Eneisoft",
        title: "[Título por actualizar]",
        fechaDetalle: "Jueves 05 de noviembre de 2026",
        hora: "4:00 PM - 5:00 PM",
        speaker: "Ernesto Cuadros",
        role: "Científico de la computación, investigador y asesor tecnológico peruano con reconocimiento internacional",
        tematica: "[Por actualizar] — Próximamente se revelará el temario detallado de la ponencia.",
        image: "/speakers/ErnestoCuadros_v2.jpg",
        links: [
            {
                label: "Inscribirse al evento en Luma",
                href: "https://luma.com/user/eneisoft",
                primary: true,
            },
            {
                label: "Ver perfil de Linkedin",
                href: "https://www.linkedin.com/in/ecuadrosv",
                variant: "linkedin",
            },
        ],
    },
    {
        id: "ponencia-doris",
        stepNumber: "10",
        dateBadge: "NOV | 05",
        modalidad: "Virtual · Día 4 Eneisoft",
        title: "[Título por actualizar]",
        fechaDetalle: "Jueves 05 de noviembre de 2026",
        hora: "5:30 PM - 6:30 PM",
        speaker: "Doris Manrique",
        role: "Arquitecta de soluciones cloud, líder tecnológica y fundadora de la comunidad AWS Girls Peru",
        tematica: "[Por actualizar] — Próximamente se revelará el temario detallado de la ponencia.",
        image: "/speakers/DorisManrique.jpg",
        links: [
            {
                label: "Inscribirse al evento en Luma",
                href: "https://luma.com/user/eneisoft",
                primary: true,
            },
            {
                label: "Ver perfil de Linkedin",
                href: "https://www.linkedin.com/in/dorismanrique",
                variant: "linkedin",
            },
        ],
    },
    {
        id: "ponencia-raul",
        stepNumber: "11",
        dateBadge: "NOV | 05",
        modalidad: "Virtual · Día 4 Eneisoft",
        title: "Empleabilidad más allá del aula: LinkedIn & CV",
        fechaDetalle: "Jueves 05 de noviembre de 2026",
        hora: "7:00 PM - 8:00 PM",
        speaker: "Raúl Mogollón",
        role: "Especialista en ciberseguridad, gestión de riesgos TI y tecnologías emergentes en BCP y ASBANC",
        tematica: "Estrategias prácticas de inserción laboral en tecnología mediante la optimización de perfiles en LinkedIn, diseño de CV adaptado a filtros ATS y desarrollo de networking profesional.",
        image: "/speakers/RaulMogollon.jpg",
        links: [
            {
                label: "Inscribirse al evento en Luma",
                href: "https://luma.com/user/eneisoft",
                primary: true,
            },
            {
                label: "Ver perfil de Linkedin",
                href: "https://www.linkedin.com/in/raul-mogollon",
                variant: "linkedin",
            },
        ],
    },
    {
        id: "jornada-ponencias-dia5",
        stepNumber: "12",
        dateBadge: "NOV | 06",
        modalidad: "Presencial · Día 5 Eneisoft",
        title: "Jornada de Ponencias",
        fechaDetalle: "Viernes 06 de noviembre de 2026",
        hora: "2:30 PM - 5:30 PM",
        lugar: "Auditorio - FISI UNMSM",
        cardTitle: "DÍA 5",
        cardFooterLeft: "Auditorio - FISI UNMSM",
        cardFooterRight: "3 Ponencias Magistrales",
        programa: [
            {
                time: "2:30 PM – 3:30 PM",
                activity: 'Ponencia 1: "Por actualizar"',
                speaker: "Sheila Ccahua",
            },
            {
                time: "3:30 PM – 4:30 PM",
                activity: 'Ponencia 2: "Por actualizar"',
                speaker: "Brenda Hidalgo",
            },
            {
                time: "4:30 PM – 5:30 PM",
                activity: 'Ponencia 3: "Por actualizar"',
                speaker: "Mayte Castillo",
            },
        ],
        links: [
            {
                label: "Inscribirse al evento en Luma",
                href: "https://luma.com/user/eneisoft",
                primary: true,
            },
            {
                label: "Abrir en Google Maps",
                href: "https://maps.app.goo.gl/tMyPpnmLZ6ZryRej7",
                primary: false,
            },
        ],
    },
    {
        id: "hackathon-2026",
        stepNumber: "13",
        dateBadge: "NOV | 07",
        modalidad: "Hackathon Presencial · Día 6 Eneisoft",
        title: "Hackathon ENEISOFT XVI 2026",
        fechaDetalle: "Sábado 07 de noviembre de 2026",
        hora: "8:00 AM - 8:45 PM",
        lugar: "Facultad de Ingeniería de Sistemas e Informática (FISI - UNMSM)",
        tematica: "El reto oficial y sus especificaciones técnicas se revelarán directamente a los equipos participantes.",
        regla: "La solución debe ser un prototipo funcional y mostrarse en ejecución durante el pitch final.",
        cardTitle: "HACKATHON XVI",
        cardFooterLeft: "Sede FISI - UNMSM",
        cardFooterRight: "12 Equipos · Pitches & Premiación",
        // Sin foto de persona (tarjeta técnica central)
        image: undefined,
        links: [
            {
                label: "Ver bases",
                href: "/hackathon#ejes",
                primary: false,
            },
            {
                label: "Inscribir a mi equipo",
                href: "https://forms.gle/kEkG3JYVXWN5t7hX9",
                primary: true,
            },
            {
                label: "Abrir en Google Maps",
                href: "https://maps.app.goo.gl/km1Gfoo3B5tPDwUY7",
                primary: false,
            },
        ],
    },
];

// 2. LO QUE YA VIVIMOS - Eventos anteriores
const eventosPasados: ScrollEventItem[] = [
    {
        id: "ponencia-bastian",
        stepNumber: "01",
        dateBadge: "OCT | 03",
        modalidad: "Ponencia Virtual",
        title: "Cuando la IA aprende a hackear: Ciberseguridad en la era de los agentes autónomos",
        fechaDetalle: "Sábado 03 de octubre de 2026",
        hora: "2:00 PM - 4:00 PM",
        speaker: "Bastián Landskron",
        role: "Arquitecto de software, ingeniero IA y CEO en Blandskron SpA, especializado en sistemas inteligentes",
        tematica: "Revolución de la IA en el desarrollo seguro, análisis de vulnerabilidades, impacto de Codex, OWASP Top 10 y riesgos en la era de los LLM.",
        image: "/speakers/BastianLandskron.png",
        links: [
            {
                label: "Ver publicación",
                href: "https://lnkd.in/p/dDy8ZHZs",
                primary: true,
            },
            {
                label: "Ver perfil de Linkedin",
                href: "https://www.linkedin.com/in/blandskron",
                variant: "linkedin",
            },
        ],
    },
    {
        id: "ponencia-heileen",
        stepNumber: "02",
        dateBadge: "SEP | 25",
        modalidad: "Ponencia Presencial",
        title: "La IA ya sabe hacer, ¿nosotros sabemos decidir?",
        fechaDetalle: "Viernes 25 de septiembre de 2026",
        hora: "12:00 PM - 2:00 PM",
        speaker: "Heilẹen Goodson",
        role: "Estratega, conferencista internacional y consultora especializada en la adopción corporativa de la IA",
        lugar: "Auditorio - FISI UNMSM",
        tematica: "Estrategia, Shadow AI, gestión de datos, riesgos, responsabilidad, revisión humana y reglas para un uso responsable de la IA.",
        image: "/speakers/HeileenGoodson.png",
        links: [
            {
                label: "Ver publicación",
                href: "https://lnkd.in/p/dwCnYg5E",
                primary: true,
            },
            {
                label: "Ver perfil de Linkedin",
                href: "https://www.linkedin.com/in/heileengoodson",
                variant: "linkedin",
            },
        ],
    },
];

export default function EventosPage() {
    return (
        <div className="flex flex-col w-full bg-[#0a2138] text-white min-h-screen pt-24 pb-28">
            <div className="boxed-frame boxed-border-dark flex flex-col w-full">
                {/* 1. LO QUE SE VIENE — Próximos eventos (Efecto scroll fijado dinámico) */}
                <StickyScrollEvents
                    sectionId="proximos"
                    badgeText="Próximos eventos"
                    title="LO QUE SE VIENE"
                    subtitle="Conferencias magistrales virtuales y el evento central de innovación tecnológica."
                    events={proximosEventos}
                    actionButton={{
                        label: "Ver Calendario en Luma",
                        href: "https://luma.com/eneisoft_unmsm_2026?compact=true",
                    }}
                />

                {/* Separador de línea con brillo neón */}
                <div className="max-w-7xl mx-auto w-full px-6 my-10">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#24ed7a]/30 to-transparent" />
                </div>

                {/* 2. LO QUE YA VIVIMOS — Eventos anteriores (Efecto scroll fijado dinámico) */}
                <StickyScrollEvents
                    sectionId="anteriores"
                    badgeText="Eventos anteriores"
                    title="LO QUE YA VIVIMOS"
                    subtitle="Desliza hacia abajo para recorrer las ponencias y revivir las conferencias magistrales que ya se llevaron a cabo."
                    events={eventosPasados}
                />
            </div>
        </div>
    );
}
