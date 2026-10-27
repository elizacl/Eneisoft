"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
    Calendar, 
    Clock, 
    MapPin, 
    ExternalLink, 
    ArrowUpRight, 
    Sparkles, 
    Shield, 
    Brain, 
    Video, 
    Award,
    Terminal
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

interface EventStep {
    id: string;
    stepNumber: string;
    type: "UPCOMING" | "PAST";
    dateBadge: string;
    modalidad: string;
    title: string;
    speaker?: string;
    role?: string;
    tematica: string;
    fechaDetalle: string;
    hora: string;
    lugar?: string;
    regla?: string;
    image?: string;
    links: { label: string; href: string; icon?: string; primary?: boolean }[];
    accentColor: string;
}

const eventSteps: EventStep[] = [
    {
        id: "hackathon-2026",
        stepNumber: "01",
        type: "UPCOMING",
        dateBadge: "NOV | 07",
        modalidad: "Presencial · FISI UNMSM",
        title: "Hackathon ENEISOFT XVI 2026",
        fechaDetalle: "Sábado 7 de noviembre de 2026",
        hora: "08:00 AM - 08:45 PM",
        lugar: "Facultad de Ingeniería de Sistemas e Informática (FISI - UNMSM)",
        tematica: "IA aplicada a problemas reales de la comunidad universitaria. Sub-ejes: Académico, Bienestar y Gestión Universitaria.",
        regla: "La solución debe ir más allá de un chatbot o dashboard convencional y mostrarse en ejecución durante el pitch final.",
        // No speaker image for Hackathon yet, as requested
        image: undefined,
        accentColor: "#00ff87",
        links: [
            { label: "Ver bases", href: "#ejes", primary: false },
            { label: "Inscribir a mi equipo", href: "#hero", primary: true },
            { label: "Abrir en Google Maps", href: "https://maps.google.com/?q=Facultad+de+Ingenieria+de+Sistemas+e+Informatica+UNMSM", primary: false }
        ]
    },
    {
        id: "ponencia-bastian",
        stepNumber: "02",
        type: "PAST",
        dateBadge: "OCT | 03",
        modalidad: "100% Virtual",
        title: "Cuando la IA aprende a hackear: Ciberseguridad en la era de los agentes autónomos",
        fechaDetalle: "Sábado 03 de octubre de 2026",
        hora: "2:00 PM - 4:00 PM (14:00 - 16:00)",
        speaker: "Bastián Landskron",
        role: "Software Architect, AI Engineer en Nxtara",
        tematica: "Revolución de la IA en el desarrollo seguro, análisis de vulnerabilidades, impacto de Codex, OWASP Top 10 y riesgos en la era de los LLM.",
        image: "/speakers/BastianLandskron.png",
        accentColor: "#60efff",
        links: [
            { label: "Ver publicación", href: "https://www.linkedin.com/", primary: false }
        ]
    },
    {
        id: "ponencia-heileen",
        stepNumber: "03",
        type: "PAST",
        dateBadge: "SEP | 25",
        modalidad: "Presencial · Auditorio FISI",
        title: "La IA ya sabe hacer, ¿nosotros sabemos decidir?",
        fechaDetalle: "Viernes 25 de septiembre de 2026",
        hora: "12:00 PM - 2:00 PM (12:00 - 14:00)",
        speaker: "Heilẹen Goodson",
        role: "AI Ethics & Strategy Specialist",
        lugar: "Auditorio - FISI UNMSM",
        tematica: "Estrategia, Shadow AI, gestión de datos, riesgos, responsabilidad, revisión humana y reglas para un uso responsable de la IA.",
        image: "/speakers/HeileenGoodson.png",
        accentColor: "#00ff87",
        links: [
            { label: "Ver publicación", href: "https://www.linkedin.com/", primary: false },
            { label: "Abrir en Google Maps", href: "https://maps.google.com/?q=Auditorio+FISI+UNMSM", primary: false }
        ]
    }
];

export function VisualStory() {
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const [activeChapter, setActiveChapter] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Pin the right side visual while scrolling
            ScrollTrigger.create({
                trigger: triggerRef.current,
                start: "top top",
                end: "bottom bottom",
                pin: ".story-visual",
                scrub: true,
            });

            // Animate text sections opacity
            const sections = gsap.utils.toArray(".story-text-section");
            sections.forEach((section: any) => {
                gsap.fromTo(
                    section,
                    { opacity: 0.25, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        scrollTrigger: {
                            trigger: section,
                            start: "top center+=100",
                            end: "bottom center-=100",
                            scrub: true,
                        },
                    }
                );
            });

            // Update active chapter on scroll
            eventSteps.forEach((_, i) => {
                ScrollTrigger.create({
                    trigger: `.story-text-${i}`,
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => setActiveChapter(i),
                    onEnterBack: () => setActiveChapter(i),
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const currentEvent = eventSteps[activeChapter] || eventSteps[0];

    return (
        <section ref={containerRef} id="eventos" className="relative bg-[#030806] text-white overflow-hidden">
            {/* Header intro */}
            <div className="pt-24 pb-8 px-6 max-w-7xl mx-auto border-b border-white/5">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00ff87]/30 text-xs uppercase tracking-widest text-[#00ff87] mb-4 bg-[#07150e]/80 backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,135,0.15)] font-mono">
                            <Sparkles className="w-3.5 h-3.5 text-[#00ff87]" />
                            Cronología de Actividades
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                            Eventos ENEISOFT.
                        </h2>
                    </div>
                    <p className="text-neutral-400 text-sm md:text-base font-light max-w-md">
                        Explora la agenda completa: desde las ponencias especializadas de ponentes de élite hasta el reto culminante de la Hackathon.
                    </p>
                </div>
            </div>

            {/* Main Interactive Dual Panel */}
            <div ref={triggerRef} className="flex flex-col md:flex-row">
                {/* Left Side: Scrolling Content */}
                <div className="w-full md:w-1/2">
                    <div className="flex flex-col">
                        {eventSteps.map((step, index) => (
                            <div
                                key={step.id}
                                className={`story-text-section story-text-${index} min-h-screen flex flex-col justify-center px-6 md:px-14 lg:px-20 py-20 border-b border-white/5`}
                            >
                                {/* Step Meta Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-3xl font-mono font-bold text-[#00ff87]">
                                        {step.stepNumber}
                                    </span>
                                    <div className="h-4 w-[1px] bg-white/20" />
                                    <Badge 
                                        variant="outline" 
                                        className={step.type === "UPCOMING" 
                                            ? "border-[#00ff87]/50 bg-[#00ff87]/10 text-[#00ff87] font-mono text-xs uppercase tracking-wider" 
                                            : "border-white/20 bg-white/5 text-neutral-300 font-mono text-xs uppercase tracking-wider"}
                                    >
                                        {step.type === "UPCOMING" ? "Lo Que Se Viene" : "Lo Que Ya Vivimos"}
                                    </Badge>
                                    <span className="text-xs font-mono text-neutral-400">
                                        📅 {step.dateBadge}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight text-white leading-tight">
                                    {step.title}
                                </h3>

                                {/* Speaker info if available */}
                                {step.speaker && (
                                    <div className="mb-6 p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-4">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#60efff] shadow-[0_0_8px_#60efff]" />
                                        <div>
                                            <p className="text-sm font-semibold text-white">
                                                {step.speaker}
                                            </p>
                                            <p className="text-xs text-neutral-400 font-light">
                                                {step.role}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Details list */}
                                <div className="space-y-3 mb-6 text-sm text-neutral-300 font-light leading-relaxed">
                                    <div className="flex items-start gap-2.5">
                                        <Calendar className="w-4 h-4 text-[#00ff87] shrink-0 mt-1" />
                                        <span><strong className="text-white font-medium">Fecha:</strong> {step.fechaDetalle}</span>
                                    </div>
                                    <div className="flex items-start gap-2.5">
                                        <Clock className="w-4 h-4 text-[#60efff] shrink-0 mt-1" />
                                        <span><strong className="text-white font-medium">Hora:</strong> {step.hora}</span>
                                    </div>
                                    {step.lugar && (
                                        <div className="flex items-start gap-2.5">
                                            <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                                            <span><strong className="text-white font-medium">Lugar:</strong> {step.lugar}</span>
                                        </div>
                                    )}
                                    <div className="p-4 rounded-xl bg-[#07100b] border border-[#00ff87]/15 mt-3">
                                        <p className="text-xs font-mono uppercase tracking-wider text-[#00ff87] mb-1.5 flex items-center gap-1.5">
                                            <Brain className="w-3.5 h-3.5" /> Temática
                                        </p>
                                        <p className="text-sm text-neutral-300 leading-relaxed font-light">
                                            {step.tematica}
                                        </p>
                                    </div>
                                    {step.regla && (
                                        <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed">
                                            ⚡ <strong>Regla Técnica:</strong> {step.regla}
                                        </div>
                                    )}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap items-center gap-3 pt-2">
                                    {step.links.map((link) => (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            target={link.href.startsWith("http") ? "_blank" : undefined}
                                            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 ${
                                                link.primary
                                                    ? "bg-[#00ff87] text-[#020705] font-bold hover:bg-[#22e565] shadow-[0_0_20px_rgba(0,255,135,0.35)]"
                                                    : "bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 hover:border-white/20"
                                            }`}
                                        >
                                            <span>{link.label}</span>
                                            <ArrowUpRight className="w-3.5 h-3.5" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Sticky Visual Container */}
                <div className="hidden md:flex story-visual w-1/2 h-screen sticky top-0 bg-[#050c08] border-l border-white/10 items-center justify-center p-8 lg:p-12 overflow-hidden">
                    {/* Background Glow Behind Image */}
                    <div className="absolute w-[450px] h-[450px] bg-[#00ff87]/[0.08] rounded-full blur-[140px] pointer-events-none" />

                    <div className="relative w-full max-w-lg aspect-square rounded-[2.5rem] overflow-hidden border border-white/15 bg-[#0a1510] shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentEvent.id}
                                initial={{ opacity: 0, scale: 0.94 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.04 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute inset-0 flex flex-col items-center justify-center p-8"
                            >
                                {currentEvent.image ? (
                                    /* Speaker Presentation Card with Real Image */
                                    <div className="relative w-full h-full flex flex-col justify-between rounded-2xl overflow-hidden">
                                        <div className="relative flex-1 w-full rounded-2xl overflow-hidden border border-white/10 group">
                                            <Image
                                                src={currentEvent.image}
                                                alt={currentEvent.speaker || "Ponente ENEISOFT"}
                                                fill
                                                className="object-cover object-top filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                                                priority
                                            />
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1510] via-transparent to-transparent opacity-80" />
                                            
                                            {/* Live/Status Badge */}
                                            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-white">
                                                <span className="w-2 h-2 rounded-full bg-[#00ff87] animate-ping" />
                                                <span>Ponencia Destacada</span>
                                            </div>
                                        </div>

                                        {/* Caption info below photo */}
                                        <div className="pt-4 flex items-center justify-between">
                                            <div>
                                                <p className="text-lg font-bold text-white tracking-tight">
                                                    {currentEvent.speaker}
                                                </p>
                                                <p className="text-xs text-[#00ff87] font-mono">
                                                    {currentEvent.role}
                                                </p>
                                            </div>
                                            <span className="text-2xl font-mono font-bold text-white/20">
                                                {currentEvent.stepNumber}
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    /* Hackathon High-Tech Card (No person photo as requested) */
                                    <div className="relative w-full h-full rounded-2xl border border-[#00ff87]/30 bg-gradient-to-b from-[#0c2016] to-[#040c07] p-8 flex flex-col justify-between overflow-hidden shadow-[inset_0_0_40px_rgba(0,255,135,0.1)]">
                                        {/* Cyber matrix background decor */}
                                        <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#00ff87]/15 rounded-full blur-3xl pointer-events-none" />

                                        {/* Top Card Bar */}
                                        <div className="flex items-center justify-between z-10">
                                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff87]/10 border border-[#00ff87]/30 text-xs font-mono text-[#00ff87]">
                                                <Terminal className="w-3.5 h-3.5" />
                                                <span>RETO OFICIAL 2026</span>
                                            </div>
                                            <span className="text-xs font-mono text-neutral-400">
                                                12 EQUIPOS
                                            </span>
                                        </div>

                                        {/* Center Graphic */}
                                        <div className="flex flex-col items-center justify-center my-auto text-center z-10">
                                            <div className="relative w-20 h-20 rounded-2xl bg-black/60 border border-[#00ff87]/40 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,255,135,0.3)]">
                                                <Image 
                                                    src="/logoEneisoft.png" 
                                                    alt="ENEISOFT XVI" 
                                                    width={56} 
                                                    height={56}
                                                    className="object-contain" 
                                                />
                                            </div>
                                            <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#00ff87] mb-2 font-semibold">
                                                FISI · UNMSM
                                            </span>
                                            <h4 className="text-3xl font-black tracking-tight text-white uppercase text-gradient-eneisoft">
                                                HACKATHON XVI
                                            </h4>
                                            <p className="text-xs font-mono text-neutral-400 mt-2 max-w-xs">
                                                Sábado 07 de Noviembre · 08:00 AM - 08:45 PM
                                            </p>
                                        </div>

                                        {/* Bottom Details Footer */}
                                        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400 z-10">
                                            <span>Pozo: S/ 450.00 + Premios</span>
                                            <span className="text-[#00ff87]">36 Hackers</span>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
