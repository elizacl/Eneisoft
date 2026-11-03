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
        speaker: "Kevin Gamarra y Lourdes Iturria",
        role: "Founders de Latinfo, especialistas en arquitectura de datos, LegalTech y la transformación de software propio en startups de alcance regional",
        image: "/speakers/PonentesDia1.png",
        speakersList: [
            {
                speaker: "Kevin Gamarra y Lourdes Iturria",
                role: "Founders de Latinfo, especialistas en arquitectura de datos, LegalTech y la transformación de software propio en startups de alcance regional",
                image: "/speakers/PonentesDia1.png",
            },
            {
                speaker: "Guillermo Gamboa",
                role: "Board Member en QuantumHub Perú, investigador de sistemas complejos adaptativos y desarrollador de infraestructura de software híbrida para simulación cuántica",
                image: "/speakers/GuillermoGamboa.png",
            },
        ],
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
                speaker: "Kevin Gamarra y Lourdes Iturria (Latinfo)",
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
        role: "Presidente de APESOFT y líder empresarial, especializado en ecosistemas tecnológicos, Web 3.0 e Inteligencia Artificial",
        tematica: "Importancia de las habilidades blandas, liderazgo y resolución de problemas bajo presión para generar, capturar y compartir valor en software.",
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
        title: "El mundo de los datos: mucho más que dashboards e inteligencia artificial",
        fechaDetalle: "Martes 03 de noviembre de 2026",
        hora: "4:00 PM - 5:00 PM",
        speaker: "Jasef Huachambe",
        role: "Senior Cloud Data Engineer, especialista en el diseño, desarrollo e implementación de arquitecturas Big Data e IA corporativas",
        tematica: "Panorama integral sobre la ingeniería de datos más allá de dashboards e IA, orientado a estudiantes que inician sin requisitos técnicos previos.",
        image: "/speakers/JasefHuachambe.png",
        links: [
            {
                label: "Inscribirse al evento en Luma",
                href: "https://luma.com/fyfyxdak",
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
        role: "Especialista en transformación organizacional, metodologías ágiles, innovación tecnológica y diseño de experiencia de usuario",
        tematica: "Evolución estratégica desde el uso instrumental de herramientas hacia una mentalidad de pensamiento aumentado aplicada al diseño de productos.",
        image: "/speakers/DanielaOrozco.png",
        links: [
            {
                label: "Inscribirse al evento en Luma",
                href: "https://luma.com/yz53u1wh",
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
        role: "Desarrollador full-stack, especialista en backend, infraestructura cloud y DevSecOps con amplia experiencia corporativa y académica",
        tematica: "Fundamentos y arquitectura de pipelines CI/CD, despliegues automáticos con GitHub Actions y Docker, gestión de secretos y detección de fallas.",
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
        speaker: "María Puelles Bulnes",
        role: "Docente Investigadora y Magíster en Modelamiento Computacional, especializada en IA, Machine Learning y Optimización Combinatoria",
        image: "/speakers/MariaPuelles.png",
        speakersList: [
            {
                speaker: "María Puelles Bulnes",
                role: "Docente Investigadora y Magíster en Modelamiento Computacional, especializada en IA, Machine Learning y Optimización Combinatoria",
                image: "/speakers/MariaPuelles.png",
            },
            {
                speaker: "Henry Tarazona",
                role: "Software & AI Engineer en Interbank y CEO de Connect Technologies, especialista en microservicios, cloud y sistemas multi-agente",
                image: "/speakers/HenryTarazona.png",
            },
            {
                speaker: "Andrés Cáceres",
                role: "Consultor de TI con 25 años de trayectoria liderando desarrollo de sistemas corporativos e infraestructura para el sector financiero",
                image: "/speakers/AndresCaceres.jpg",
            },
        ],
        cardTitle: "DÍA 3",
        cardFooterLeft: "Auditorio - FISI UNMSM",
        cardFooterRight: "3 Ponencias Magistrales",
        programa: [
            {
                time: "2:30 PM – 3:30 PM",
                activity: 'Ponencia 1: "Algoritmos inspirados en la naturaleza e IA para el desarrollo de Sistemas Inteligentes"',
                speaker: "María Puelles Bulnes",
            },
            {
                time: "3:30 PM – 4:30 PM",
                activity: 'Ponencia 2: "Te enseño como crear tu primer agente IA con Microsoft Foundry directo para producción"',
                speaker: "Henry Tarazona",
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
                href: "https://luma.com/43p2olvl",
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
        role: "Analista de datos corporativos y fundador de DATANILO, enfocado en consultoría estratégica, analítica y transformación digital",
        tematica: "Descubrimiento del mundo de los datos mediante casos prácticos empresariales, toma de decisiones y consejos clave para estudiantes en formación.",
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
        title: "In superposition... Are you Shor?",
        fechaDetalle: "Jueves 05 de noviembre de 2026",
        hora: "2:30 PM - 3:30 PM",
        speaker: "Renzo Cienfuegos",
        role: "Co-Founder de QPeru y Creador del canal de difusión Quantum CyberSec Community, investigador y líder juvenil en divulgación de computación cuántica y ciberseguridad",
        tematica: "Exploración práctica de la computación cuántica mediante programación en Qiskit, algoritmos cuánticos y aplicaciones de ciberseguridad.",
        image: "/speakers/RenzoCienfuegos.jpg",
        links: [
            {
                label: "Inscribirse al evento en Luma",
                href: "https://luma.com/2f169956",
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
        role: "Científico de la computación, investigador principal y asesor tecnológico internacional con destacada trayectoria académica",
        tematica: "Fundamentos, evolución y tendencias científicas en computación e investigación aplicadas al desarrollo de software y tecnología.",
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
        title: "¿Cómo construir tu carrera en tiempos de IA? Apuesta por los fundamentos, el criterio y las personas",
        fechaDetalle: "Jueves 05 de noviembre de 2026",
        hora: "5:30 PM - 6:30 PM",
        speaker: "Doris Manrique",
        role: "Arquitecta de soluciones cloud, líder tecnológica en computación en la nube y fundadora de la comunidad AWS Girls Peru",
        tematica: "Estrategias de desarrollo profesional en la era de la IA, priorizando fundamentos sólidos de ingeniería, criterio técnico y trabajo colaborativo.",
        image: "/speakers/DorisManrique.jpg",
        links: [
            {
                label: "Inscribirse al evento en Luma",
                href: "https://luma.com/xf678pbo",
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
        role: "Especialista en ciberseguridad, gestión de riesgos TI y tecnologías emergentes con trayectoria en el sector bancario y financiero",
        tematica: "Estrategias prácticas de inserción laboral en tecnología mediante optimización de LinkedIn, diseño de CV para filtros ATS y networking efectivo.",
        image: "/speakers/RaulMogollon.jpg",
        links: [
            {
                label: "Inscribirse al evento en Luma",
                href: "https://luma.com/495kn5cd",
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
        speaker: "Sheila Ccahua",
        role: "Data Scientist especialista en analítica de clientes, inferencia causal y optimización matemática orientada a productos de inteligencia artificial con impacto de negocio",
        image: "/speakers/SheilaCcahua.png",
        speakersList: [
            {
                speaker: "Sheila Ccahua",
                role: "Data Scientist especialista en analítica de clientes, inferencia causal y optimización matemática orientada a productos de inteligencia artificial con impacto de negocio",
                image: "/speakers/SheilaCcahua.png",
            },
            {
                speaker: "Brenda Hidalgo",
                role: "Especialista en estrategia de tecnologías emergentes y consultora de IA y Web3 para alta dirección, enfocada en la inclusión financiera y el crecimiento sostenible",
                image: "/speakers/BrendaHidalgo.png",
            },
            {
                speaker: "Mayte Castillo",
                role: "Microsoft MVP y arquitecta de tecnología GenAI, especialista en MLOps y el diseño de arquitecturas de datos escalables en entornos multicloud",
                image: "/speakers/MayteCastillo.png",
            },
        ],
        cardTitle: "DÍA 5",
        cardFooterLeft: "Auditorio - FISI UNMSM",
        cardFooterRight: "3 Ponencias Magistrales",
        programa: [
            {
                time: "2:30 PM – 3:30 PM",
                activity: 'Ponencia 1: "De los datos a las decisiones: cómo la Inteligencia Artificial genera valor en el mundo real"',
                speaker: "Sheila Ccahua",
            },
            {
                time: "3:30 PM – 4:30 PM",
                activity: 'Ponencia 2: "Tokenizar el Perú: Cómo convertir nuestra diversidad en activos digitales"',
                speaker: "Brenda Hidalgo",
            },
            {
                time: "4:30 PM – 5:30 PM",
                activity: 'Ponencia 3: "Beyond RAG: Construye agentes con Foundry IQ"',
                speaker: "Mayte Castillo",
            },
        ],
        links: [
            {
                label: "Inscribirse al evento en Luma",
                href: "https://luma.com/v62v3wfo",
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
        tematica: "IA aplicada a problemas reales de la comunidad universitaria. (Sub-ejes: Académico, Bienestar y Gestión Universitaria).",
        regla: "La solución debe superar el nivel de un chatbot o dashboard convencional y mostrarse en ejecución durante el pitch final.",
        cardTitle: "HACKATHON XVI",
        cardFooterLeft: "Sede FISI - UNMSM",
        cardFooterRight: "12 Equipos · Pitches & Premiación",
        image: undefined,
        links: [
            {
                label: "Ver bases y reto",
                href: "/hackathon#ejes",
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
        role: "Arquitecto de software, ingeniero IA y CEO en Blandskron SpA, especializado en soluciones y sistemas inteligentes",
        tematica: "Revolución de la IA en desarrollo seguro, análisis de vulnerabilidades, impacto de Codex, OWASP Top 10 y riesgos en la era de los LLM.",
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
        role: "Estratega, conferencista internacional y consultora corporativa, especializada en la adopción responsable de la IA",
        lugar: "Auditorio - FISI UNMSM",
        tematica: "Estrategia, Shadow AI, gobierno y gestión de datos, riesgos, responsabilidad ética, supervisión humana y gobernanza en IA.",
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
