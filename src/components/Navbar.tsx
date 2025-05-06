import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LogIn, ListChecks, Menu, X, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinkClasses = "text-neutral-300 hover:text-white transition-colors duration-200 font-light tracking-wide text-sm flex items-center gap-1.5";
  const buttonBaseClasses = "px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/50 backdrop-blur-lg";
  const loginButtonClasses = cn(
    buttonBaseClasses,
    "bg-white/10 border border-white/20 text-neutral-200 shadow-inner shadow-white/5",
    "hover:bg-white/20 hover:border-white/30 focus:ring-white/30"
  );
  const planButtonClasses = cn(
    buttonBaseClasses,
    "bg-gradient-to-r from-ailoop-blue/30 to-ailoop-neon-blue/30 border border-white/10 text-white shadow-inner shadow-white/5",
    "hover:from-ailoop-blue/40 hover:to-ailoop-neon-blue/40 hover:border-white/20 focus:ring-ailoop-blue/50"
  );

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
      isScrolled || isMobileMenuOpen ? "bg-black/70 backdrop-blur-xl border-b border-neutral-800/70 shadow-lg" : "bg-transparent border-b border-transparent"
    )}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-white text-xl font-bold tracking-tight filter hover:brightness-110 transition-all">
          <span className="text-ailoop-neon-blue">AI</span><span className="font-light">LOOP</span>
        </Link>

        <div className="hidden md:flex items-center flex-grow justify-end space-x-6">
          <div className="flex items-center space-x-6">
            <button onClick={scrollToContact} className={navLinkClasses}>
              CONTATO
            </button>
            <Link to="/blog" className={navLinkClasses}>
              <BookOpen className="w-4 h-4 opacity-80"/>
              BLOG
            </Link>
          </div>

          <div className="flex items-center space-x-4 ml-6">
            <Button variant="outline" className={loginButtonClasses} asChild>
              <Link to="/login">
                <LogIn className="w-4 h-4 mr-1.5" />
                LOGIN
              </Link>
            </Button>
            <Button className={planButtonClasses} asChild>
              <Link to="/#services">
                <ListChecks className="w-4 h-4 mr-1.5" />
                SELECIONAR PLANO
              </Link>
            </Button>
          </div>
        </div>

        <div className="md:hidden">
          <button
            onClick={handleMobileMenuToggle}
            className="text-neutral-300 hover:text-white focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border-t border-neutral-800 shadow-xl pb-4"
        >
          <div className="container mx-auto px-4 pt-4 flex flex-col space-y-4 items-center">
            <button onClick={scrollToContact} className={navLinkClasses}>
              CONTATO
            </button>
            <Link to="/blog" className={navLinkClasses}>
              <BookOpen className="w-4 h-4 opacity-80"/>
              BLOG
            </Link>
            <div className="w-1/2 h-px bg-neutral-700 my-2"></div>
            <Button variant="outline" className={cn(loginButtonClasses, "w-full justify-center")} asChild>
              <Link to="/login">
                <LogIn className="w-4 h-4 mr-1.5" />
                LOGIN
              </Link>
            </Button>
            <Button className={cn(planButtonClasses, "w-full justify-center")} asChild>
              <Link to="/#services">
                <ListChecks className="w-4 h-4 mr-1.5" />
                SELECIONAR PLANO
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
