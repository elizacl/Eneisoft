"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { MagneticButton } from "@/components/ui/MagneticButton";

const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/#mision-vision" },
    { name: "Hackathon", href: "/hackathon" },
    { name: "Eventos", href: "/eventos" },
    { name: "Aliados", href: "/#partners" },
    { name: "Ubicación", href: "/#ubicacion" },
    { name: "FAQ", href: "/#faq" },
];

export function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = lastScrollY;
        setLastScrollY(latest);

        // Check if scrolled down for floating effect
        if (latest > 100) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        // Hide/Show logic on scroll direction
        if (latest > previous && latest > 150) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: -20, opacity: 0 },
            }}
            animate={isHidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
        >
            {/* Floating Glass Pill */}
            <motion.div
                initial={{ width: "95%" }}
                animate={{ width: "95%" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "pointer-events-auto flex items-center justify-between transition-all duration-500 rounded-full max-w-7xl mx-auto w-full",
                    isScrolled
                        ? "bg-[#030806]/85 backdrop-blur-xl shadow-2xl border border-[#00ff87]/20 px-6 py-2.5"
                        : "bg-transparent py-2"
                )}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group mr-8">
                    <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#00ff87]/30 bg-black/60 p-1 flex items-center justify-center group-hover:border-[#00ff87] transition-colors shadow-[0_0_12px_rgba(0,255,135,0.2)]">
                        <Image
                            src="/logoEneisoft.jpg"
                            alt="ENEISOFT XVI"
                            width={28}
                            height={28}
                            className="object-contain rounded"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                            <span className="text-base font-bold tracking-tight text-white group-hover:text-[#00ff87] transition-colors">
                                ENEISOFT
                            </span>
                            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#00ff87]/15 text-[#00ff87] border border-[#00ff87]/30 font-semibold">
                                XVI
                            </span>
                        </div>
                        <span className="text-[9px] font-mono tracking-widest text-[#7aa38f] uppercase">
                            UNMSM · FISI
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1 group/nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative px-4 py-2 text-sm font-medium text-neutral-400 hover:text-[#24ed7a] transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4 ml-8">
                    <a
                        href="https://forms.gle/kEkG3JYVXWN5t7hX9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                        <MagneticButton className="rounded-full px-5 py-2.5 bg-[#24ed7a] text-[#0a2138] hover:bg-[#00c8df] hover:text-[#0a2138] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(36,237,122,0.35)] hover:shadow-[0_0_30px_rgba(0,200,223,0.5)] border border-[#24ed7a] cursor-pointer">
                            Inscribir Equipo
                        </MagneticButton>
                    </a>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden flex items-center">
                    <a
                        href="https://forms.gle/kEkG3JYVXWN5t7hX9"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            size="sm"
                            className="rounded-full px-4 bg-[#24ed7a] text-[#0a2138] hover:bg-[#00c8df] font-semibold transition-all mr-2 text-xs cursor-pointer"
                        >
                            Inscribir
                        </Button>
                    </a>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <Menu className="w-5 h-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="top" className="w-full h-full bg-white dark:bg-black border-none p-0">
                            <SheetTitle className="sr-only">Menu</SheetTitle>
                            <div className="flex flex-col h-full items-center justify-center relative">
                                <SheetClose className="absolute top-6 right-6">
                                    <X className="w-6 h-6" />
                                </SheetClose>
                                <div className="flex flex-col gap-8 text-center">
                                    {navLinks.map((link) => (
                                        <SheetClose key={link.name} asChild>
                                            <Link
                                                href={link.href}
                                                className="text-4xl font-light tracking-tight hover:italic transition-all"
                                            >
                                                {link.name}
                                            </Link>
                                        </SheetClose>
                                    ))}
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </motion.div>
        </motion.header>
    );
}
