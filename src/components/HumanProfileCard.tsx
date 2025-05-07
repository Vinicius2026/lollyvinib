import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; // Ajuste o caminho se necessário

interface HumanProfileCardProps {
  name: string;
  role: string;
  avatarUrl: string; // URL da imagem original
  className?: string;
  // Adicionar quaisquer outras props necessárias, ex: titleColor, roleColor
}

const HumanProfileCard: React.FC<HumanProfileCardProps> = ({
  name,
  role,
  avatarUrl,
  className,
}) => {
  return (
    <motion.div
      className={cn(
        "group relative flex flex-col items-center text-center p-6",
        "bg-[#1A1A1A] rounded-md", // Material: cinza escuro acetinado/fosco
        "border border-[#4A4A4A]", // Borda fina, metálica fosca
        // "shadow-[0_0_2px_#333333_inset,0_0_5px_#222222]", // Efeito de bisel interno sutil (opcional, pode ser complexo)
        "transition-all duration-300 ease-in-out",
        className
      )}
      whileHover={{ 
        // Efeito de hover sutil - MONOCROMÁTICO
        backgroundColor: "#222225", // Leve clareamento do fundo
        borderColor: "#666666", // Borda um pouco mais clara
        // scale: 1.02, // Pequeno aumento de escala
      }}
    >
      <div className="relative mb-4 w-28 h-28 sm:w-32 sm:h-32">
        <img
          src={avatarUrl}
          alt={name}
          className={cn(
            "w-full h-full rounded-full object-cover",
            "border-2 border-[#555555]", // Borda interna da imagem
            "filter grayscale hover:grayscale-[50%]", // Foto monocromática, leve dessaturação no hover
            "transition-all duration-300 ease-in-out"
          )}
        />
        {/* Adicionar um anel de status ou detalhe sutil se desejado */}
      </div>
      
      <h3 className="text-lg sm:text-xl font-semibold text-[#E0E0E0] mb-0.5">
        {name}
      </h3>
      <div className="w-1/2 h-px bg-[#555555] my-1.5 group-hover:bg-[#777777] transition-colors duration-300"></div> {/* Linha divisória fina */}
      <p className="text-xs sm:text-sm text-[#888888]">
        {role}
      </p>
      {/* Pode adicionar mais detalhes aqui, como um link para perfil completo, ícones de contato sutis, etc. */}
    </motion.div>
  );
};

export default HumanProfileCard; 