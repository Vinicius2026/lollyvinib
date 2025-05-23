import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Zap, ChevronRight } from 'lucide-react'; // Usando Zap como exemplo, substitua se necessário

// Supondo que fadeInUp esteja definido em algum lugar global ou defina localmente
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 60 },
};

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', colorClass: 'hover:text-pink-500' },
    { icon: Twitter, href: '#', label: 'Twitter', colorClass: 'hover:text-blue-400' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', colorClass: 'hover:text-blue-600' },
    // { icon: Zap, href: '#', label: 'WhatsApp', colorClass: 'hover:text-green-500' }, // Exemplo
  ];

  return (
    <motion.footer
      className="bg-black text-neutral-400 py-16 px-4 md:px-8" // Fundo preto sólido, padding ajustado
      variants={fadeInUp}
      initial="initial"
      whileInView="animate" // Alterado para whileInView para ativar ao rolar
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 items-start">
          {/* Coluna 1: Logo e Descrição */}
          <div className="md:col-span-1 flex flex-col">
            <Link to="/" className="mb-4 inline-block">
              <h1 className="text-3xl font-bold filter hover:brightness-125 transition-all duration-300">
                <span className="text-ailoop-neon-blue">AI</span>
                <span className="text-white font-light">LOOP</span>
              </h1>
            </Link>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Marketing Digital com Inteligência Artificial de Verdade. Transformando ideias em realidade digital.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-5 tracking-wide">
              Navegação
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/servicos-fixos" className="hover:text-ailoop-neon-blue transition-colors duration-200">Serviços Preço Fixo</Link></li>
              <li><Link to="/#about" className="hover:text-ailoop-neon-blue transition-colors duration-200">Sobre Nós</Link></li>
              <li><Link to="/#contact" className="hover:text-ailoop-neon-blue transition-colors duration-200">Contato</Link></li>
              <li><Link to="/blog" className="hover:text-ailoop-neon-blue transition-colors duration-200">Blog</Link></li>
              <li>
                <span className="flex items-center cursor-default text-neutral-400 hover:text-neutral-200 transition-colors duration-200">
                  <ChevronRight className="w-3 h-3 mr-1.5 text-neutral-500 flex-shrink-0" />
                  Trabalhe conosco
                </span>
              </li>
              <li>
                <span className="flex items-center cursor-default text-neutral-400 hover:text-neutral-200 transition-colors duration-200">
                  <ChevronRight className="w-3 h-3 mr-1.5 text-neutral-500 flex-shrink-0" />
                  Youtube Canal CEO
                </span>
              </li>
              <li>
                <span className="flex items-center cursor-default text-neutral-400 hover:text-neutral-200 transition-colors duration-200">
                  <ChevronRight className="w-3 h-3 mr-1.5 text-neutral-500 flex-shrink-0" />
                  Escola e Treinamentos
                </span>
              </li>
              <li>
                <span className="flex items-center cursor-default text-neutral-400 hover:text-neutral-200 transition-colors duration-200">
                  <ChevronRight className="w-3 h-3 mr-1.5 text-neutral-500 flex-shrink-0" />
                  Cuidamos do Rio de Janeiro
                </span>
              </li>
              <li>
                <span className="flex items-center cursor-default text-neutral-400 hover:text-neutral-200 transition-colors duration-200">
                  <ChevronRight className="w-3 h-3 mr-1.5 text-neutral-500 flex-shrink-0" />
                  SCHOOL
                </span>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato/Legal (Exemplo) */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-5 tracking-wide">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/termos" className="hover:text-ailoop-purple transition-colors duration-200">Termos de Serviço</Link></li>
              <li><Link to="/privacidade" className="hover:text-ailoop-purple transition-colors duration-200">Política de Privacidade</Link></li>
              <li><Link to="/#politica-uso" className="hover:text-ailoop-purple transition-colors duration-200">Política de uso</Link></li>
              <li><Link to="/#parceria-comercial" className="hover:text-ailoop-purple transition-colors duration-200">Parceria Comercial</Link></li>
              <li><Link to="/#imprensa" className="hover:text-ailoop-purple transition-colors duration-200">Imprensa</Link></li>
            </ul>
          </div>
          
          {/* Coluna 4: Redes Sociais */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-5 tracking-wide">
              Conecte-se
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-neutral-500 transition-colors duration-200 ${social.colorClass}`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-neutral-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AILOOP. Todos os direitos reservados.
            </p>
            <div className="text-center md:text-right">
              <p className="text-neutral-500">
                Site desenvolvido com IA pela própria AILOOP
              </p>
              <p className="font-semibold text-white mt-1">
                EDCRED Founder
              </p>
              <p className="text-neutral-400 text-xs">
                Vinicius Beni Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
