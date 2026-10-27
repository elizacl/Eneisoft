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

      {/* 2. Misión y Visión Institucional (Oscuro) */}
      <MissionVision />

      {/* 3. Nuestros Aliados & Patrocinadores (Claro) */}
      <Partners />

      {/* 4. Ubicaciones del Evento con Google Maps (Oscuro) */}
      <Location />

      {/* 5. Preguntas Frecuentes (Claro, debajo de Ubicación) */}
      <FAQ />
    </div>
  );
}
