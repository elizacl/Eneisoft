import { HackathonHero } from "@/components/sections/HackathonHero";
import { InfiniteMarquee } from "@/components/sections/InfiniteMarquee";
import { Pricing } from "@/components/sections/Pricing";
import { ProductDemo } from "@/components/sections/ProductDemo";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { HackathonSpaces } from "@/components/sections/HackathonSpaces";

export const metadata = {
    title: "Hackathon | ENEISOFT XVI 2026",
    description:
        "Hackathon ENEISOFT XVI 2026: IA aplicada a problemas reales de la comunidad universitaria. Reto oficial, premiación, cronograma y evaluación. FISI - UNMSM.",
};

export default function HackathonPage() {
    return (
        <div className="flex flex-col gap-0 w-full">
            {/* Portada con inscripción (Oscuro) */}
            <HackathonHero />
            <InfiniteMarquee />
            {/* 1. Reto Oficial - Próximamente (Claro) */}
            <Pricing />
            {/* 2. Estructura de Premiación (Oscuro) */}
            <ProductDemo />
            {/* 3. Cronograma (Claro) */}
            <Features />
            {/* 4. Esquema de Evaluación (Oscuro) */}
            <Testimonials />
            {/* 5. Espacios e Instalaciones Físicas de la Hackathon (Claro) */}
            <HackathonSpaces />
        </div>
    );
}
