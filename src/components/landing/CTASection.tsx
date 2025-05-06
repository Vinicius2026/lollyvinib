'use client';

import { Section } from "./Section";
import { Globe } from "@/components/magicui/globe";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import InteractiveQuiz from './InteractiveQuiz';

export const CTASection = () => {
  return (
    <div className="relative">
      {/* Restaurar Globo */}
      <Globe className="absolute -top-80 -z-10" />

      {/* Título e Texto */}
      <div className="text-center max-w-4xl mx-auto z-10 relative">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          {/* ... existing code ... */}
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-700">
          {/* ... existing code ... */}
        </p>
      </div>

      {/* Remover a div do InteractiveQuiz daqui */}
      {/* 
      <div className="mt-12 z-10 relative">
        <InteractiveQuiz />
      </div>
      */}

      {/* Botão CTA (opcional, manter ou remover dependendo do fluxo desejado) */}
      {/* <div className="mt-10 flex justify-center z-10 relative">
      // ... existing code ...
      </div> */}
    </div>
  );
}; 