"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    Calendar,
    Clock,
    MapPin,
    ArrowUpRight,
    ChevronLeft,
    ChevronRight,
    Brain,
    Terminal,
    Video,
    Sparkles,
    ShieldCheck
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface EventItem {
    id: string;
    stepNumber: string;
    dateBadge: string;
    modalidad: string;
    title: string;
    speaker?: string;
    role?: string;
    fechaDetalle: string;
    hora: string;
    lugar?: string;
    tematica: string;
    regla?: string;
    image?: string;
    links: {
        label: string;
        href: string;
        primary?: boolean;
        isExternal?: boolean;
    }[];
}

interface EventCarouselProps {
    title: string;
    subtitle: string;
    badgeText: string;
    events: EventItem[];
    sectionId?: string;
    accentColor?: string;
}

export function EventCarousel({
    title,
    subtitle,
    badgeText,
    events,
    sectionId,
    accentColor = "#00ff87"
}: EventCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const hasMultiple = events.length > 1;

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
    };

    const currentEvent = events[currentIndex] || events[0];

    return (
        <section id={sectionId} className="py-20 px-6 max-w-7xl mx-auto w-full">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00ff87]/30 text-xs uppercase tracking-widest text-[#00ff87] mb-3 bg-[#07150e]/80 backdrop-blur-sm font-mono">
                        <Sparkles className="w-3.5 h-3.5 text-[#00ff87]" />
                        {badgeText}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
                        {title}
                    </h2>
                    <p className="text-neutral-400 text-sm md:text-base font-light">
                        {subtitle}
                    </p>
                </div>

                {/* Carousel Controls (when multiple events) */}
                {hasMultiple && (
                    <div className="flex items-center gap-3 shrink-0">
                        <span className="text-xs font-mono text-neutral-400 mr-2">
                            <span className="text-[#00ff87] font-semibold">{String(currentIndex + 1).padStart(2, "0")}</span> / {String(events.length).padStart(2, "0")}
                        </span>
                        <button
                            onClick={handlePrev}
                            aria-label="Evento anterior"
                            className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 text-white transition-all active:scale-95 cursor-pointer"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={handleNext}
                            aria-label="Siguiente evento"
                            className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 text-white transition-all active:scale-95 cursor-pointer"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                )}
            </div>

            {/* Carousel Main Container */}
            <div className="relative rounded-[2.5rem] bg-[#07100b] border border-white/10 overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentEvent.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10 lg:p-12 items-center"
                    >
                        {/* Left Details Column (7 cols) */}
                        <div className="lg:col-span-7 flex flex-col justify-between">
                            {/* Meta Badges */}
                            <div className="flex flex-wrap items-center gap-2.5 mb-6">
                                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#00ff87]/15 text-[#00ff87] border border-[#00ff87]/30">
                                    📅 {currentEvent.dateBadge}
                                </span>
                                <Badge variant="outline" className="border-white/15 bg-white/5 text-neutral-300 font-mono text-xs">
                                    {currentEvent.modalidad}
                                </Badge>
                                <span className="text-xs font-mono text-neutral-500">
                                    {currentEvent.stepNumber}
                                </span>
                            </div>

                            {/* Main Title */}
                            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">
                                {currentEvent.title}
                            </h3>

                            {/* Speaker Header (if applicable) */}
                            {currentEvent.speaker && (
                                <div className="mb-6 p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-4">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#60efff] shadow-[0_0_8px_#60efff]" />
                                    <div>
                                        <p className="text-base font-semibold text-white">
                                            {currentEvent.speaker}
                                        </p>
                                        <p className="text-xs text-[#00ff87] font-mono">
                                            {currentEvent.role}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Details List */}
                            <div className="space-y-3 mb-6 text-sm text-neutral-300 font-light leading-relaxed">
                                <div className="flex items-start gap-2.5">
                                    <Calendar className="w-4 h-4 text-[#00ff87] shrink-0 mt-1" />
                                    <span><strong className="text-white font-medium">Fecha:</strong> {currentEvent.fechaDetalle}</span>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <Clock className="w-4 h-4 text-[#60efff] shrink-0 mt-1" />
                                    <span><strong className="text-white font-medium">Hora:</strong> {currentEvent.hora}</span>
                                </div>
                                {currentEvent.lugar && (
                                    <div className="flex items-start gap-2.5">
                                        <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                                        <span><strong className="text-white font-medium">Lugar:</strong> {currentEvent.lugar}</span>
                                    </div>
                                )}

                                {/* Temática Box */}
                                <div className="p-4 rounded-xl bg-[#040c07] border border-[#00ff87]/15 mt-3">
                                    <p className="text-xs font-mono uppercase tracking-wider text-[#00ff87] mb-1.5 flex items-center gap-1.5 font-semibold">
                                        <Brain className="w-3.5 h-3.5" /> Temática
                                    </p>
                                    <p className="text-sm text-neutral-300 leading-relaxed font-light">
                                        {currentEvent.tematica}
                                    </p>
                                </div>

                                {/* Regla Técnica (if present) */}
                                {currentEvent.regla && (
                                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed font-light">
                                        ⚡ <strong>Regla del reto:</strong> {currentEvent.regla}
                                    </div>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap items-center gap-3 pt-3">
                                {currentEvent.links.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        target={link.isExternal || link.href.startsWith("http") ? "_blank" : undefined}
                                        rel={link.isExternal || link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                                            link.primary
                                                ? "bg-[#00ff87] text-[#020705] hover:bg-[#22e565] shadow-[0_0_20px_rgba(0,255,135,0.35)]"
                                                : "bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 hover:border-white/25"
                                        }`}
                                    >
                                        <span>{link.label}</span>
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Right Visual Card Column (5 cols) */}
                        <div className="lg:col-span-5 flex items-center justify-center">
                            <div className="relative w-full aspect-square max-w-md rounded-[2rem] overflow-hidden border border-white/15 bg-[#0a1510] shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                                {currentEvent.image ? (
                                    /* Speaker Photo Card */
                                    <div className="relative w-full h-full flex flex-col justify-between p-6">
                                        <div className="relative flex-1 w-full rounded-2xl overflow-hidden border border-white/10 group">
                                            <Image
                                                src={currentEvent.image}
                                                alt={currentEvent.speaker || "Ponente ENEISOFT"}
                                                fill
                                                className="object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                                priority
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1510] via-transparent to-transparent opacity-80" />
                                            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-white">
                                                <span className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse" />
                                                <span>Ponencia Especializada</span>
                                            </div>
                                        </div>

                                        <div className="pt-4 flex items-center justify-between">
                                            <div>
                                                <p className="text-base font-bold text-white tracking-tight">
                                                    {currentEvent.speaker}
                                                </p>
                                                <p className="text-xs text-[#00ff87] font-mono">
                                                    {currentEvent.role}
                                                </p>
                                            </div>
                                            <span className="text-xl font-mono font-bold text-white/20">
                                                {currentEvent.stepNumber}
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    /* Hackathon Graphic Card (Sin imagen de persona aún) */
                                    <div className="relative w-full h-full rounded-[2rem] border border-[#00ff87]/30 bg-gradient-to-b from-[#0c2016] to-[#040c07] p-8 flex flex-col justify-between overflow-hidden shadow-[inset_0_0_40px_rgba(0,255,135,0.1)]">
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
                                            <div className="relative w-20 h-20 rounded-2xl bg-black/60 border border-[#00ff87]/40 flex items-center justify-center mb-5 shadow-[0_0_30px_rgba(0,255,135,0.3)]">
                                                <Image
                                                    src="/logoEneisoft.png"
                                                    alt="ENEISOFT XVI"
                                                    width={56}
                                                    height={56}
                                                    className="object-contain"
                                                />
                                            </div>
                                            <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#00ff87] mb-1 font-semibold">
                                                FISI · UNMSM
                                            </span>
                                            <h4 className="text-2xl md:text-3xl font-black tracking-tight text-white uppercase text-gradient-eneisoft">
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
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Dots indicator for multiple items */}
                {hasMultiple && (
                    <div className="pb-6 flex justify-center items-center gap-2">
                        {events.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                aria-label={`Ir al evento ${i + 1}`}
                                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                                    i === currentIndex
                                        ? "w-8 bg-[#00ff87] shadow-[0_0_8px_#00ff87]"
                                        : "w-2 bg-white/20 hover:bg-white/40"
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
