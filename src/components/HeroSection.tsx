
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="hero-bg min-h-screen pt-24 pb-16 px-4 flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Marketing Digital com <span className="text-gradient glow">Inteligência Artificial</span> de Verdade.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              Agentes humanizados no WhatsApp, tráfego com IA e gestão digital completa para empresas que querem vender mais, com mais inteligência.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Falar com um especialista
              </Button>
              
              <Button variant="outline" className="btn-outline" onClick={() => {
                const servicesSection = document.getElementById('services');
                servicesSection?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Conheça nossos serviços
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 animate-float">
              <div className="bg-gradient-to-r from-ailoop-purple/20 to-ailoop-pink/20 rounded-full p-6 backdrop-blur-md max-w-md mx-auto">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-ailoop-neon-blue to-ailoop-purple flex items-center justify-center text-white text-xs">AI</div>
                    <div className="flex-1 space-y-2">
                      <div className="bg-white/10 rounded-lg p-4">
                        <p className="text-white">Olá! Sou o assistente virtual da AILOOP. Como posso ajudar sua empresa a crescer com IA?</p>
                      </div>
                      <div className="flex justify-end">
                        <p className="text-xs text-gray-400">09:41</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs">JR</div>
                    <div className="flex-1 space-y-2">
                      <div className="bg-gray-100 rounded-lg p-4">
                        <p className="text-gray-800">Preciso melhorar as vendas do meu e-commerce</p>
                      </div>
                      <div className="flex justify-end">
                        <p className="text-xs text-gray-400">09:42</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-ailoop-neon-blue to-ailoop-purple flex items-center justify-center text-white text-xs">AI</div>
                    <div className="flex-1 space-y-2">
                      <div className="bg-white/10 rounded-lg p-4">
                        <p className="text-white">Posso ajudar! Nossa gestão de tráfego com IA pode aumentar suas conversões em até 40%. Vamos analisar seu funil de vendas e otimizar sua estratégia digital. Quer detalhes?</p>
                      </div>
                      <div className="flex justify-end">
                        <p className="text-xs text-gray-400">09:43</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/4 right-8 w-20 h-20 bg-ailoop-neon-blue rounded-full blur-2xl opacity-20 animate-pulse-glow"></div>
            <div className="absolute bottom-1/4 left-8 w-24 h-24 bg-ailoop-purple rounded-full blur-2xl opacity-20 animate-pulse-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
