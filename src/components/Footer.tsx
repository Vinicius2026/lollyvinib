
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-ailoop-dark-blue/90 to-ailoop-blue/80 footer-glass py-16 px-4 relative overflow-hidden">
      {/* Surrealistic background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Ocean inspired elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ailoop-neon-blue/30 to-transparent"></div>
        <div className="absolute -top-10 left-1/4 w-1/2 h-20 bg-ailoop-neon-blue/10 blur-3xl rounded-full"></div>
        <div className="absolute top-1/2 right-1/6 w-20 h-20 bg-ailoop-purple/10 blur-2xl rounded-full"></div>
        <div className="absolute bottom-0 left-1/3 w-1/3 h-10 bg-ailoop-orange/10 blur-xl rounded-full"></div>
        
        {/* Geometric waves */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 Q250,150 500,50 Q750,0 1000,50 L1000,1000 L0,1000 Z" fill="url(#footer-gradient)" />
          <path d="M0,150 Q250,250 500,150 Q750,100 1000,150 L1000,1000 L0,1000 Z" fill="url(#footer-gradient-2)" opacity="0.7" />
          <path d="M0,350 Q250,450 500,350 Q750,300 1000,350 L1000,1000 L0,1000 Z" fill="url(#footer-gradient-3)" opacity="0.4" />
          <defs>
            <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00E1FF" />
              <stop offset="50%" stopColor="#4DB4FC" />
              <stop offset="100%" stopColor="#6236FF" />
            </linearGradient>
            <linearGradient id="footer-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6236FF" />
              <stop offset="50%" stopColor="#FF36AB" />
              <stop offset="100%" stopColor="#FF8A00" />
            </linearGradient>
            <linearGradient id="footer-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF8A00" />
              <stop offset="50%" stopColor="#FF36AB" />
              <stop offset="100%" stopColor="#00E1FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Footer content with brand name watermark */}
      <div className="container mx-auto relative z-10">
        {/* Giant brand name watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <h2 className="giant-brand text-white/10 font-light uppercase tracking-widest">
            AILOOP
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 relative z-10">
          <div className="flex flex-col items-start">
            <Link to="/" className="text-white text-2xl font-light tracking-wider mb-4 block brand-logo">
              <span className="ai-highlight mr-[0.15em]">AI</span>LOOP
            </Link>
            <p className="text-gray-100 thin-text">
              Marketing Digital com Inteligência Artificial de Verdade.
            </p>
          </div>
          
          <div className="flex flex-col items-start md:items-center">
            <h3 className="text-lg font-light text-white mb-6 thin-text">Links rápidos</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/#about" className="footer-link thin-text">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/#services" className="footer-link thin-text">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="footer-link thin-text">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col items-start md:items-end">
            <h3 className="text-lg font-light text-white mb-6 thin-text">Redes sociais</h3>
            <div className="flex space-x-6">
              <a href="#" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-ailoop-neon-blue">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              
              <a href="#" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-ailoop-purple">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              
              <a href="#" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-ailoop-pink">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col space-y-8">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0 ultra-thin-text">
              &copy; {new Date().getFullYear()} AILOOP. Todos os direitos reservados.
            </p>
            <div className="text-right">
              <p className="text-gray-300 text-sm ultra-thin-text mb-2">
                Site desenvolvido com IA pela própria AILOOP
              </p>
              <p className="text-ailoop-neon-blue/90 text-sm tracking-wide font-light">
                Vinicius Beni <span className="text-white/70 font-extralight text-xs">Founder</span>
              </p>
            </div>
          </div>
          
          {/* Brand footer text */}
          <div className="flex justify-center items-center overflow-hidden pt-8">
            <p className="brand-footer uppercase tracking-[0.4em] text-white/10 font-extralight">
              AILOOP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
