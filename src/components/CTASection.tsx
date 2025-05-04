import React from 'react';
import { /* Button */ AnimatedButton } from "@/components/animated/AnimatedButton";
import { MessageSquare, Calendar } from 'lucide-react';
// Importar o SVG de colaboração
import LiveCollaborationIllustration from '@/assets/illustrations/undraw_live-collaboration_i8an.svg?react';

// Placeholder removido
/*
const LiveCollaborationPlaceholder = () => (
  <div className="aspect-video bg-white/5 rounded-lg flex items-center justify-center text-gray-500 border border-white/10 max-w-sm mx-auto">
    [Ilustração "Live collaboration" - Cor Principal: #00E1FF]
  </div>
);
*/

const CTASection: React.FC = () => {
  return (
    <section id="contact" className="bg-gradient-to-r from-ailoop-blue to-ailoop-deep-blue py-24 px-4 relative overflow-hidden">
      {/* Surrealistic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes with gradients */}
        <div className="absolute -top-20 left-1/4 w-60 h-60 bg-gradient-to-br from-ailoop-neon-blue/10 to-transparent opacity-20 rotate-45 rounded-3xl blur-2xl surreal-float"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-gradient-to-br from-ailoop-purple/10 to-transparent opacity-20 -rotate-12 rounded-full blur-3xl surreal-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-10 left-1/3 w-72 h-72 bg-gradient-to-br from-ailoop-orange/10 to-transparent opacity-20 rotate-12 rounded-full blur-3xl surreal-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Broken lines and patterns */}
        <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ailoop-neon-blue/20 to-transparent"></div>
        <div className="absolute bottom-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ailoop-orange/20 to-transparent"></div>
        
        {/* Diagonal and vertical lines */}
        <div className="absolute top-0 left-1/4 w-px h-60 bg-gradient-to-b from-transparent via-ailoop-neon-blue/20 to-transparent rotate-45 transform origin-top"></div>
        <div className="absolute bottom-0 right-1/4 w-px h-60 bg-gradient-to-t from-transparent via-ailoop-pink/20 to-transparent -rotate-45 transform origin-bottom"></div>
        
        {/* Neural network style dots and connections */}
        <div className="absolute top-1/4 left-10 w-3 h-3 bg-ailoop-neon-blue/30 rounded-full neural-connection"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-ailoop-purple/30 rounded-full neural-connection"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-ailoop-pink/30 rounded-full neural-connection"></div>
        <div className="absolute top-2/3 right-10 w-3 h-3 bg-ailoop-orange/30 rounded-full neural-connection"></div>
        
        <div className="absolute top-[25%] left-[40px] w-[150px] h-px bg-gradient-to-r from-ailoop-neon-blue/30 to-transparent rotate-[30deg] neural-connection"></div>
        <div className="absolute top-[33%] right-[25%] w-[100px] h-px bg-gradient-to-l from-ailoop-purple/30 to-transparent rotate-[-15deg] neural-connection"></div>
        <div className="absolute bottom-[33%] left-[33%] w-[80px] h-px bg-gradient-to-r from-ailoop-pink/30 to-transparent rotate-[45deg] neural-connection"></div>
        <div className="absolute bottom-[40%] right-[100px] w-[120px] h-px bg-gradient-to-l from-ailoop-orange/30 to-transparent rotate-[-30deg] neural-connection"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="relative fractured-frame bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-[2.5rem] p-8 md:p-12 overflow-hidden">
          {/* Asymmetrical background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-ailoop-neon-blue/10 to-transparent rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-ailoop-purple/10 to-transparent rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-ailoop-orange/10 to-transparent rounded-full filter blur-3xl opacity-30"></div>
          
          {/* Broken frame design elements */}
          <div className="absolute top-0 left-[10%] w-[30%] h-1 bg-gradient-to-r from-ailoop-neon-blue/40 to-transparent"></div>
          <div className="absolute top-0 right-[10%] w-[30%] h-1 bg-gradient-to-l from-ailoop-neon-blue/40 to-transparent"></div>
          <div className="absolute bottom-0 left-[5%] w-[40%] h-1 bg-gradient-to-r from-ailoop-orange/40 to-transparent"></div>
          <div className="absolute bottom-0 right-[15%] w-[30%] h-1 bg-gradient-to-l from-ailoop-orange/40 to-transparent"></div>
          
          <div className="absolute left-0 top-[15%] h-[25%] w-1 bg-gradient-to-b from-ailoop-neon-blue/40 to-transparent"></div>
          <div className="absolute left-0 bottom-[15%] h-[25%] w-1 bg-gradient-to-t from-ailoop-orange/40 to-transparent"></div>
          <div className="absolute right-0 top-[10%] h-[30%] w-1 bg-gradient-to-b from-ailoop-neon-blue/40 to-transparent"></div>
          <div className="absolute right-0 bottom-[10%] h-[30%] w-1 bg-gradient-to-t from-ailoop-orange/40 to-transparent"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col items-center text-center mb-8 md:mb-12 relative">
              {/* Stylized brain neural network graphic */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 opacity-70">
                <BrainNetworkIcon />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold thin-text bg-clip-text text-transparent bg-gradient-to-r from-white via-ailoop-neon-blue to-white mt-10">
                Quer entender como a IA pode acelerar seu negócio?
              </h2>
              
              <div className="w-32 h-1 bg-gradient-to-r from-ailoop-neon-blue via-ailoop-purple to-ailoop-orange my-6"></div>
              
              <p className="text-xl text-gray-300 max-w-2xl thin-text">
                Fale agora com um especialista da <span className="text-white font-semibold">AILOOP</span> e descubra como revolucionar sua presença digital.
              </p>
            </div>
            
            {/* Ilustração adicionada aqui */}
            <div className="mb-8 md:mb-12 max-w-sm mx-auto">
              {/* Usar o componente SVG importado */}
              <LiveCollaborationIllustration className="w-full h-auto" />
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <AnimatedButton className="btn-primary w-full sm:w-auto flex items-center gap-2 bg-gradient-to-r from-ailoop-neon-blue to-ailoop-purple hover:from-ailoop-neon-blue/90 hover:to-ailoop-purple/90 text-white shadow-lg shadow-ailoop-neon-blue/20 px-8 py-6 rounded-xl transform transition-all hover:scale-105">
                <MessageSquare className="w-6 h-6" />
                <span className="text-lg">WhatsApp direto</span>
              </AnimatedButton>
              
              <AnimatedButton variant="outline" className="w-full sm:w-auto flex items-center gap-2 border-2 border-white/30 bg-white/5 hover:bg-white/10 text-white px-8 py-6 rounded-xl shadow-lg backdrop-blur-sm transform transition-all hover:scale-105">
                <Calendar className="w-6 h-6 text-ailoop-neon-blue" />
                <span className="text-lg">Agendar uma conversa</span>
              </AnimatedButton>
            </div>
            
            {/* Geometric accent element */}
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-transparent border-r-2 border-b-2 border-ailoop-orange/30 rounded-br-xl"></div>
            <div className="absolute -top-2 -left-2 w-16 h-16 bg-transparent border-l-2 border-t-2 border-ailoop-neon-blue/30 rounded-tl-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Brain network icon component with enhanced surreal design
const BrainNetworkIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="brain_grad1" x1="35" y1="30" x2="65" y2="30" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00E1FF" />
        <stop offset="1" stopColor="#6236FF" />
      </linearGradient>
      <linearGradient id="brain_grad2" x1="15" y1="60" x2="35" y2="60" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00E1FF" />
        <stop offset="1" stopColor="#6236FF" />
      </linearGradient>
      <linearGradient id="brain_grad3" x1="65" y1="60" x2="85" y2="60" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6236FF" />
        <stop offset="1" stopColor="#FF36AB" />
      </linearGradient>
      <linearGradient id="brain_grad4" x1="42" y1="80" x2="58" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6236FF" />
        <stop offset="1" stopColor="#FF8A00" />
      </linearGradient>
      
      <filter id="glow">
        <feGaussianBlur stdDeviation="2.5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
      
      <linearGradient id="line_grad1" x1="50" y1="45" x2="25" y2="55" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00E1FF" />
        <stop offset="1" stopColor="#6236FF" />
      </linearGradient>
      <linearGradient id="line_grad2" x1="50" y1="45" x2="75" y2="55" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6236FF" />
        <stop offset="1" stopColor="#FF36AB" />
      </linearGradient>
      <linearGradient id="line_grad3" x1="25" y1="70" x2="50" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00E1FF" />
        <stop offset="1" stopColor="#6236FF" />
      </linearGradient>
      <linearGradient id="line_grad4" x1="75" y1="70" x2="50" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF8A00" />
        <stop offset="1" stopColor="#6236FF" />
      </linearGradient>
      
      <linearGradient id="inner_grad1" x1="45" y1="30" x2="55" y2="30" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="#00E1FF" />
      </linearGradient>
      <linearGradient id="inner_grad2" x1="22" y1="60" x2="28" y2="60" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="#00E1FF" />
      </linearGradient>
      <linearGradient id="inner_grad3" x1="72" y1="60" x2="78" y2="60" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="#FF36AB" />
      </linearGradient>
      <linearGradient id="inner_grad4" x1="48" y1="80" x2="52" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="#FF8A00" />
      </linearGradient>
    </defs>
    
    {/* Neural network structure with glow effect */}
    <g filter="url(#glow)">
      <circle cx="50" cy="30" r="15" fill="url(#brain_grad1)" opacity="0.8" />
      <circle cx="25" cy="60" r="10" fill="url(#brain_grad2)" opacity="0.8" />
      <circle cx="75" cy="60" r="10" fill="url(#brain_grad3)" opacity="0.8" />
      <circle cx="50" cy="80" r="8" fill="url(#brain_grad4)" opacity="0.8" />
    </g>
    
    {/* Neural connections */}
    <path d="M50 45L25 55" stroke="url(#line_grad1)" strokeWidth="1.5" strokeDasharray="2 2" />
    <path d="M50 45L75 55" stroke="url(#line_grad2)" strokeWidth="1.5" />
    <path d="M25 70L50 80" stroke="url(#line_grad3)" strokeWidth="1.5" />
    <path d="M75 70L50 80" stroke="url(#line_grad4)" strokeWidth="1.5" strokeDasharray="3 3" />
    
    {/* Inner core nodes */}
    <circle cx="50" cy="30" r="5" fill="url(#inner_grad1)" />
    <circle cx="25" cy="60" r="3" fill="url(#inner_grad2)" />
    <circle cx="75" cy="60" r="3" fill="url(#inner_grad3)" />
    <circle cx="50" cy="80" r="2" fill="url(#inner_grad4)" />
    
    {/* Additional small nodes for complexity */}
    <circle cx="40" cy="40" r="1.5" fill="white" opacity="0.7" />
    <circle cx="60" cy="40" r="1.5" fill="white" opacity="0.7" />
    <circle cx="35" cy="70" r="1.5" fill="white" opacity="0.7" />
    <circle cx="65" cy="70" r="1.5" fill="white" opacity="0.7" />
    
    {/* Subtle connection lines */}
    <path d="M40 40L50 30" stroke="white" strokeWidth="0.5" opacity="0.5" />
    <path d="M60 40L50 30" stroke="white" strokeWidth="0.5" opacity="0.5" />
    <path d="M35 70L25 60" stroke="white" strokeWidth="0.5" opacity="0.5" />
    <path d="M65 70L75 60" stroke="white" strokeWidth="0.5" opacity="0.5" />
  </svg>
);

export default CTASection;
