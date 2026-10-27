"use client";

import { motion } from "framer-motion";
import { 
    Clock, 
    MapPin, 
    Code2, 
    Pizza, 
    Lock, 
    MonitorPlay, 
    Trophy, 
    Sparkles, 
    Users, 
    Calendar,
    CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface AgendaRow {
    time: string;
    phase: string;
    title: string;
    station: string;
    stationBadge: string;
    description: string;
    details?: string[];
    isCritical?: boolean;
    isHighlight?: boolean;
    period: "morning" | "afternoon" | "evening";
    icon: any;
}

const tableSchedule: AgendaRow[] = [
    {
        time: "08:00 a. m. – 08:30 a. m.",
        phase: "Fase 01",
        title: "Kickoff e Instalación de Equipos",
        station: "Cubículos y Mesas Grandes de Estudio FISI",
        stationBadge: "Estación 1 · Cubículos FISI",
        description: "Acreditación, asignación de mesas y verificación eléctrica.",
        details: ["Acreditación de 36 participantes (12 equipos)", "Asignación de estaciones de trabajo con multitomas"],
        period: "morning",
        icon: Users,
    },
    {
        time: "08:30 a. m. – 01:00 p. m.",
        phase: "Fase 02",
        title: "Sprint 1 de Desarrollo y Programación",
        station: "Cubículos FISI",
        stationBadge: "Estación 1 · Cubículos FISI",
        description: "Citación de Mentores (DSC UNMSM) a las 08:30 a. m. Inicio de hidratación continuada.",
        details: ["Mentoría técnica especializada", "Desarrollo del núcleo funcional de IA"],
        period: "morning",
        icon: Code2,
    },
    {
        time: "01:00 p. m. – 02:00 p. m.",
        phase: "Receso",
        title: "Coffee Time / Receso de Almuerzo",
        station: "Comedor FISI",
        stationBadge: "Estación 2 · Comedor FISI",
        description: "Entrega de pizzas gestionada por Operaciones. Desconexión y receso.",
        details: ["Distribución de pizzas y bebidas", "Separación física de comida y laptops"],
        period: "afternoon",
        icon: Pizza,
    },
    {
        time: "02:00 p. m. – 04:00 p. m.",
        phase: "Fase 03",
        title: "Sprint 2 de Desarrollo e Integración",
        station: "Cubículos FISI",
        stationBadge: "Estación 1 · Cubículos FISI",
        description: "Ajustes finales de código, pruebas de integración y elaboración de diapositivas.",
        details: ["Pruebas finales de API y despliegue local", "Preparación de diapositivas PPT"],
        period: "afternoon",
        icon: Code2,
    },
    {
        time: "04:00 p. m. EXACTO",
        phase: "Hito Crítico",
        title: "CODE FREEZE (Cierre de Código)",
        station: "Plataforma Digital",
        stationBadge: "Plataforma Digital",
        description: "Cierre obligatorio de commits en repositorio y subida de entregables al Drive.",
        details: ["Repositorio GitHub/GitLab público o con acceso", "Diapositivas PPT y Video Demo MP4 de 3 min"],
        isCritical: true,
        period: "afternoon",
        icon: Lock,
    },
    {
        time: "04:00 p. m. – 04:30 p. m.",
        phase: "Transición",
        title: "Traslado y Pruebas Técnicas",
        station: "Auditorio Alfredo Alva Bravo",
        stationBadge: "Estación 3 · Auditorio Alva Bravo",
        description: "Citación de Jurados a las 03:30 p. m. Pruebas de HDMI, audio y proyección.",
        details: ["Recepción de la mesa de jurados", "Configuración técnica para los pitches"],
        period: "afternoon",
        icon: MonitorPlay,
    },
    {
        time: "04:30 p. m. – 07:30 p. m.",
        phase: "Fase 04",
        title: "Ronda de Pitches y Demostraciones",
        station: "Auditorio Alfredo Alva Bravo",
        stationBadge: "Estación 3 · Auditorio Alva Bravo",
        description: "Presentación formal de 12 equipos (15 min por equipo: 5 setup, 5 pitch, 5 Q&A).",
        details: ["Demostración real del software en ejecución", "Evaluación con Rúbrica Unificada (85%)"],
        period: "evening",
        icon: CheckCircle2,
    },
    {
        time: "07:30 p. m. – 08:00 p. m.",
        phase: "Deliberación",
        title: "Deliberación y Dinámica de Integración",
        station: "Auditorio Alfredo Alva Bravo",
        stationBadge: "Estación 3 · Auditorio Alva Bravo",
        description: "Consolidación de notas. Dinámica con el público (sorteo de becas y trivias).",
        details: ["Votación de Pares (15%) entre los 12 líderes de equipo", "Trivias y sorteos para los asistentes"],
        period: "evening",
        icon: Clock,
    },
    {
        time: "08:00 p. m. – 08:45 p. m.",
        phase: "Clausura",
        title: "Premiación, Clausura y Networking",
        station: "Auditorio Alfredo Alva Bravo",
        stationBadge: "Estación 3 · Auditorio Alva Bravo",
        description: "Entrega de cheques gigantes, distinciones protocolares y fotos oficiales.",
        details: ["Proclamación oficial del podio de honor", "Sesión fotográfica institucional y espacio de networking"],
        isHighlight: true,
        period: "evening",
        icon: Trophy,
    },
];

export function Features() {
    return (
        <section id="cronograma" className="py-32 w-full bg-[#f8fafc] text-neutral-900 relative overflow-hidden border-t border-b border-neutral-200/80">
            {/* Ambient Background Gradient Accent */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-emerald-500/[0.05] rounded-full blur-[150px] pointer-events-none" />

            <div className="boxed-frame boxed-border-light px-6 md:px-12 relative z-10">
                <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-14 md:flex justify-between items-end gap-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-200 text-xs uppercase tracking-widest text-emerald-800 mb-4 bg-emerald-50 shadow-sm font-mono">
                            <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                            Cronograma Secuencial Detallado · Sábado 07 de Noviembre
                        </div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-medium tracking-tight text-neutral-900 leading-tight"
                        >
                            Cronograma <br />
                            <span className="text-emerald-600 font-bold">de la Hackathon.</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-md mt-6 md:mt-0"
                    >
                        <p className="text-neutral-600 text-sm md:text-base font-normal leading-relaxed">
                            Organización operativa de la jornada presencial en las 3 estaciones de la Facultad de Ingeniería de Sistemas e Informática (FISI - UNMSM).
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4 text-xs font-mono text-neutral-600">
                            <span className="px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-sm">12 Equipos</span>
                            <span className="px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-sm">36 Hackers</span>
                            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold shadow-sm">Pozo S/ 450.00</span>
                        </div>
                    </motion.div>
                </div>

                {/* TABLA OFICIAL EN ESTILO LIGHT EXECUTIVE */}
                <div className="rounded-[2rem] border border-neutral-200 bg-white shadow-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[700px]">
                            {/* Table Header */}
                            <thead>
                                <tr className="border-b border-neutral-200 bg-neutral-50/90 text-xs font-mono uppercase tracking-wider text-neutral-600">
                                    <th className="py-5 px-6 w-1/4">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-3.5 h-3.5 text-emerald-600" />
                                            <span>Horario Oficial</span>
                                        </div>
                                    </th>
                                    <th className="py-5 px-6 w-1/3">
                                        <div className="flex items-center gap-2">
                                            <Code2 className="w-3.5 h-3.5 text-teal-600" />
                                            <span>Fase / Actividad Operativa</span>
                                        </div>
                                    </th>
                                    <th className="py-5 px-6">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                                            <span>Estación / Detalles Logísticos</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody className="divide-y divide-neutral-200/80">
                                {tableSchedule.map((row, index) => {
                                    return (
                                        <tr
                                            key={row.title}
                                            className={cn(
                                                "transition-colors duration-200 group",
                                                row.isCritical
                                                    ? "bg-amber-50/70 hover:bg-amber-50"
                                                    : row.isHighlight
                                                    ? "bg-emerald-50/70 hover:bg-emerald-50"
                                                    : "hover:bg-neutral-50/70"
                                            )}
                                        >
                                            {/* Column 1: Horario */}
                                            <td className="py-6 px-6 align-top">
                                                <div className="flex flex-col">
                                                    <span className={cn(
                                                        "font-mono font-bold text-sm tracking-tight",
                                                        row.isCritical ? "text-amber-800 font-extrabold" : "text-neutral-900"
                                                    )}>
                                                        {row.time}
                                                    </span>
                                                    <span className="text-[11px] font-mono text-neutral-500 mt-1">
                                                        Sáb 07 Nov
                                                    </span>
                                                </div>
                                            </td>

                                            {/* Column 2: Fase / Actividad */}
                                            <td className="py-6 px-6 align-top">
                                                <div className="flex flex-col items-start gap-2">
                                                    <div className="flex items-center gap-2">
                                                        <Badge
                                                            variant="outline"
                                                            className={cn(
                                                                "text-[10px] font-mono uppercase tracking-wider px-2 py-0.5",
                                                                row.isCritical
                                                                    ? "border-amber-300 bg-amber-100 text-amber-900 font-bold"
                                                                    : row.isHighlight
                                                                    ? "border-emerald-300 bg-emerald-100 text-emerald-900 font-bold"
                                                                    : "border-neutral-200 bg-neutral-100 text-neutral-700 font-medium"
                                                            )}
                                                        >
                                                            {row.phase}
                                                        </Badge>
                                                    </div>
                                                    <h4 className={cn(
                                                        "text-base font-bold tracking-tight text-neutral-900 group-hover:text-emerald-700 transition-colors leading-snug",
                                                        row.isCritical && "text-amber-900 font-extrabold"
                                                    )}>
                                                        {row.title}
                                                    </h4>
                                                </div>
                                            </td>

                                            {/* Column 3: Estación & Detalles */}
                                            <td className="py-6 px-6 align-top">
                                                <div className="flex flex-col gap-2">
                                                    {/* Station Badge */}
                                                    <div className="flex items-center gap-2">
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-neutral-100 border border-neutral-200 text-neutral-800">
                                                            <MapPin className="w-3 h-3 text-emerald-600" />
                                                            {row.stationBadge}
                                                        </span>
                                                    </div>

                                                    {/* Description */}
                                                    <p className="text-xs text-neutral-600 font-normal leading-relaxed">
                                                        {row.description}
                                                    </p>

                                                    {/* Extra Details */}
                                                    {row.details && (
                                                        <div className="flex flex-wrap gap-2 pt-1">
                                                            {row.details.map((detail, dIdx) => (
                                                                <span
                                                                    key={dIdx}
                                                                    className="inline-flex items-center gap-1.5 text-[11px] font-mono text-neutral-600"
                                                                >
                                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                                                    {detail}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* Table Footer Summary */}
                    <div className="py-4 px-6 bg-neutral-50 border-t border-neutral-200 flex flex-wrap items-center justify-between text-xs font-mono text-neutral-600">
                        <span>3 Estaciones Físicas · FISI UNMSM</span>
                        <span className="text-emerald-700 font-bold">9 Hitos Operativos</span>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}
