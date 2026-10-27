"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    Calendar,
    Clock,
    MapPin,
    ArrowUpRight,
    Brain,
    Terminal,
    Sparkles,
    Linkedin,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MagneticButton } from "@/components/ui/MagneticButton";

export interface ScrollEventItem {
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
        variant?: "primary" | "linkedin" | "default";
    }[];
}

interface StickyScrollEventsProps {
    title: string;
    subtitle: string;
    badgeText: string;
    events: ScrollEventItem[];
    sectionId?: string;
}

function EventTextItem({
    event,
    index,
    onVisible,
}: {
    event: ScrollEventItem;
    index: number;
    onVisible: (index: number) => void;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        margin: "-35% 0px -35% 0px",
    });

    useEffect(() => {
        if (isInView) {
            onVisible(index);
        }
    }, [isInView, index, onVisible]);

    return (
        <div
            ref={ref}
            className="min-h-[75vh] flex flex-col justify-center py-16 px-4 sm:px-8 lg:px-12 border-b border-white/5 last:border-b-0"
        >
            {/* Meta Header */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-3xl font-mono font-bold text-[#24ed7a]">
                    {event.stepNumber}
                </span>
                <div className="h-4 w-[1px] bg-white/20" />
                <Badge
                    variant="outline"
                    className="border-[#24ed7a]/40 bg-[#24ed7a]/10 text-[#24ed7a] font-mono text-xs uppercase tracking-wider"
                >
                    📅 {event.dateBadge}
                </Badge>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white leading-tight">
                {event.title}
            </h3>

            {/* Modalidad - Entre el título y la fecha */}
            <div className="mb-6 flex items-center gap-2">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071320] border border-[#24ed7a]/30 text-xs font-mono uppercase tracking-wider text-[#24ed7a] shadow-[0_0_12px_rgba(36,237,122,0.15)] font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#24ed7a] shadow-[0_0_8px_#24ed7a] animate-pulse" />
                    <span>{event.modalidad}</span>
                </span>
            </div>

            {/* Mobile Image preview (only on mobile screens) */}
            <div className="block lg:hidden my-6">
                {event.image ? (
                    <div>
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 bg-[#0a1510]">
                            <Image
                                src={event.image}
                                alt={event.speaker || event.title}
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                        {/* Debajo de la foto en móvil: Nombre y Perfil */}
                        {event.speaker && (
                            <div className="pt-3">
                                <h4 className="text-base font-bold text-white tracking-tight">
                                    {event.speaker}
                                </h4>
                                <p className="text-xs text-[#24ed7a] font-mono mt-0.5 leading-relaxed">
                                    {event.role}
                                </p>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 bg-[#0a1510]">
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#0c2016] to-[#040c07]">
                            <Image
                                src="/logoEneisoft.png"
                                alt="ENEISOFT XVI"
                                width={48}
                                height={48}
                                className="object-contain mb-3"
                            />
                            <h4 className="text-xl font-bold text-white uppercase text-gradient-eneisoft">
                                HACKATHON XVI
                            </h4>
                            <p className="text-xs text-neutral-400 font-mono mt-1">
                                {event.fechaDetalle}
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Details list */}
            <div className="space-y-3 mb-6 text-sm text-neutral-300 font-light leading-relaxed">
                <div className="flex items-start gap-2.5">
                    <Calendar className="w-4 h-4 text-[#00ff87] shrink-0 mt-1" />
                    <span><strong className="text-white font-medium">Fecha:</strong> {event.fechaDetalle}</span>
                </div>
                <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#60efff] shrink-0 mt-1" />
                    <span><strong className="text-white font-medium">Hora:</strong> {event.hora}</span>
                </div>
                {event.lugar && (
                    <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                        <span><strong className="text-white font-medium">Lugar:</strong> {event.lugar}</span>
                    </div>
                )}

                {/* Temática Box */}
                <div className="p-4 rounded-xl bg-[#040c07] border border-[#00ff87]/15 mt-3">
                    <p className="text-xs font-mono uppercase tracking-wider text-[#00ff87] mb-1.5 flex items-center gap-1.5 font-semibold">
                        <Brain className="w-3.5 h-3.5" /> Temática
                    </p>
                    <p className="text-sm text-neutral-300 leading-relaxed font-light">
                        {event.tematica}
                    </p>
                </div>

                {/* Regla (if present) */}
                {event.regla && (
                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed font-light">
                        ⚡ <strong>Regla del reto:</strong> {event.regla}
                    </div>
                )}
            </div>

            {/* Links / Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
                {event.links.map((link) => {
                    const isLinkedIn =
                        link.variant === "linkedin" ||
                        link.href.includes("linkedin.com") ||
                        link.label.toLowerCase().includes("linkedin");

                    return (
                        <Link
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="inline-block"
                        >
                            <MagneticButton
                                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                                    isLinkedIn
                                        ? "bg-[#0a66c2] text-white hover:bg-[#004182] border border-[#0a66c2] shadow-[0_0_20px_rgba(10,102,194,0.4)]"
                                        : link.primary
                                        ? "bg-[#24ed7a] text-[#0a2138] hover:bg-[#00c8df] hover:text-[#0a2138] shadow-[0_0_20px_rgba(36,237,122,0.35)] hover:shadow-[0_0_25px_rgba(0,200,223,0.5)] font-bold"
                                        : "bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 hover:border-white/25"
                                }`}
                            >
                                {isLinkedIn && <Linkedin className="w-3.5 h-3.5 fill-current" />}
                                <span>{link.label}</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </MagneticButton>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export function StickyScrollEvents({
    title,
    subtitle,
    badgeText,
    events,
    sectionId,
}: StickyScrollEventsProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeEvent = events[activeIndex] || events[0];

    return (
        <section id={sectionId} className="py-20 px-4 sm:px-6 max-w-7xl mx-auto w-full">
            {/* Section Header */}
            <div className="pb-8 mb-4 border-b border-white/10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#24ed7a]/30 text-xs uppercase tracking-widest text-[#24ed7a] mb-3 bg-[#071320]/80 backdrop-blur-sm font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-[#24ed7a]" />
                    {badgeText}
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
                    {title}
                </h2>
                <p className="text-neutral-400 text-sm md:text-base font-light">
                    {subtitle}
                </p>
            </div>

            {/* Dual Column: Left Scrolling Text / Right Sticky Visual */}
            <div className="relative flex flex-col lg:flex-row">
                {/* Left Side: Scrollable Text Items */}
                <div className="w-full lg:w-1/2">
                    {events.map((event, index) => (
                        <EventTextItem
                            key={event.id}
                            event={event}
                            index={index}
                            onVisible={setActiveIndex}
                        />
                    ))}
                </div>

                {/* Right Side: Sticky Visual Container that updates on scroll */}
                <div className="hidden lg:flex w-1/2 h-[calc(100vh-7rem)] sticky top-24 items-center justify-center p-6 lg:p-10">
                    {/* Ambient Glow */}
                    <div className="absolute w-[450px] h-[450px] bg-[#24ed7a]/[0.08] rounded-full blur-[140px] pointer-events-none" />

                    <div className="relative w-full max-w-lg aspect-square rounded-[2.5rem] overflow-hidden border border-white/15 bg-[#0a1510] shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeEvent.id}
                                initial={{ opacity: 0, scale: 0.93, y: 15 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.05, y: -15 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute inset-0 flex flex-col items-center justify-center p-6"
                            >
                                {activeEvent.image ? (
                                    /* Speaker Presentation Card with Image */
                                    <div className="relative w-full h-full flex flex-col justify-between rounded-2xl overflow-hidden">
                                        <div className="relative flex-1 w-full rounded-2xl overflow-hidden border border-white/10 group">
                                            <Image
                                                src={activeEvent.image}
                                                alt={activeEvent.speaker || "Ponente ENEISOFT"}
                                                fill
                                                className="object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                                                priority
                                            />
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1510] via-transparent to-transparent opacity-85" />

                                            {/* Live/Status Badge */}
                                            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-white">
                                                <span className="w-2 h-2 rounded-full bg-[#00ff87] animate-ping" />
                                                <span>Ponencia Especializada</span>
                                            </div>
                                        </div>

                                        {/* Bottom info below photo: Nombre y Perfil */}
                                        <div className="pt-4 flex items-start justify-between gap-4">
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-base md:text-lg font-bold text-white tracking-tight leading-snug">
                                                    {activeEvent.speaker}
                                                </h4>
                                                <p className="text-xs text-[#24ed7a] font-mono mt-1 leading-relaxed">
                                                    {activeEvent.role}
                                                </p>
                                            </div>
                                            <span className="text-2xl font-mono font-bold text-white/20 shrink-0">
                                                {activeEvent.stepNumber}
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    /* Hackathon High-Tech Card (No person photo as requested) */
                                    <div className="relative w-full h-full rounded-2xl border border-[#24ed7a]/30 bg-gradient-to-b from-[#071320] to-[#040d17] p-8 flex flex-col justify-between overflow-hidden shadow-[inset_0_0_40px_rgba(36,237,122,0.1)]">
                                        {/* Cyber matrix background decor */}
                                        <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#24ed7a]/15 rounded-full blur-3xl pointer-events-none" />

                                        {/* Top Card Bar */}
                                        <div className="flex items-center justify-between z-10">
                                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#24ed7a]/10 border border-[#24ed7a]/30 text-xs font-mono text-[#24ed7a]">
                                                <Terminal className="w-3.5 h-3.5" />
                                                <span>RETO OFICIAL 2026</span>
                                            </div>
                                            <span className="text-xs font-mono text-neutral-400">
                                                12 EQUIPOS
                                            </span>
                                        </div>

                                        {/* Center Graphic */}
                                        <div className="flex flex-col items-center justify-center my-auto text-center z-10">
                                            <div className="relative w-20 h-20 rounded-2xl bg-black/60 border border-[#24ed7a]/40 flex items-center justify-center mb-5 shadow-[0_0_30px_rgba(36,237,122,0.3)]">
                                                <Image
                                                    src="/logoEneisoft.png"
                                                    alt="ENEISOFT XVI"
                                                    width={56}
                                                    height={56}
                                                    className="object-contain"
                                                />
                                            </div>
                                            <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#24ed7a] mb-1 font-semibold">
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
                                            <span className="text-[#24ed7a]">36 Hackers</span>
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
