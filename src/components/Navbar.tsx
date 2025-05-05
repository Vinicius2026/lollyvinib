import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ailoop-blue bg-opacity-80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-white text-2xl font-bold tracking-tight">
            <span className="text-ailoop-neon-blue">AI</span>LOOP
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/#services" className="text-white hover:text-ailoop-neon-blue transition-colors">
            Serviços
          </Link>
          <Link to="/#about" className="text-white hover:text-ailoop-neon-blue transition-colors">
            Sobre
          </Link>
          <Link to="/#why-us" className="text-white hover:text-ailoop-neon-blue transition-colors">
            Por que nós?
          </Link>
          <Link to="/#contact" className="text-white hover:text-ailoop-neon-blue transition-colors">
            Contato
          </Link>
          
          <Button 
            className="bg-black/20 border border-white/30 text-gray-300 backdrop-blur-sm rounded-lg px-5 py-2 text-sm transition-all duration-300 ease-out hover:bg-white/10 hover:border-white/60 hover:text-white"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Falar com especialista
          </Button>
        </div>
        
        <div className="md:hidden">
          <Button variant="ghost" className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
