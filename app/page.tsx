import { Hero } from "@/components/sections/Hero";
import { MissionVision } from "@/components/sections/MissionVision";
import { Partners } from "@/components/sections/Partners";
import { Location } from "@/components/sections/Location";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 w-full">
      {/* 1. Portada ENEISOFT (Oscuro) */}
      <Hero />

      {/* 2. Misión y Visión Institucional (Claro) */}
      <MissionVision />

      {/* 3. Nuestros Aliados & Sponsors (Oscuro) */}
      <Partners />

      {/* 4. Ubicaciones del Evento con Google Maps (Claro) */}
      <Location />

      {/* 5. Preguntas Frecuentes (Oscuro) */}
      <FAQ />
    </div>
  );
}
