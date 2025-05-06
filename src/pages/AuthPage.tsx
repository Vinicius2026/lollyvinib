'use client'; // Se necessário para interatividade com hooks do React como useState

import React, { useState } from 'react';
// Importe aqui os ícones do lucide-react que você usará, por exemplo:
import { User, Mail, Lock, CalendarDays, Users, Phone, MapPin, Home, Hash, Briefcase } from 'lucide-react';

// TODO: Importar componentes ShadCN/UI como Button, Input, etc., se for usá-los diretamente.
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AuthPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'signup' | 'signin' | 'recovery'>('signup');
  const [recoveryMethod, setRecoveryMethod] = useState<'email' | 'phone'>('email');
  const [recoveryInput, setRecoveryInput] = useState('');

  // Placeholder para os ícones - substitua pelo componente Lucide real
  // const IconPlaceholder: React.FC<{ name: string; className?: string }> = ({ name, className }) => (
  //   <span className={`text-gray-500 ${className}`}>[{name}]</span>
  // );

  const handleRecoveryMethodChange = (value: string) => {
    setRecoveryMethod(value as 'email' | 'phone');
    setRecoveryInput(''); // Limpa o input ao mudar o método
  };

  const renderFormContent = () => {
    switch (activeTab) {
      case 'signin':
        return (
          <form className="w-full max-w-md space-y-6">
            <h1 className="text-3xl font-bold text-center text-white font-orbitron mb-8 text-shadow-[0_0_10px_rgba(0,229,255,0.3)]">
              Acessar Conta
            </h1>
            <div className="input-wrapper-react">
              {/* <Mail className="lucide-icon" /> */}
              
              <input type="email" placeholder="Seu e-mail" className="form-input-react" />
            </div>
            <div className="input-wrapper-react">
              {/* <Lock className="lucide-icon" /> */}
              
              <input type="password" placeholder="Sua senha" className="form-input-react" />
            </div>
            <button type="submit" className="cta-button-react w-full">
              Entrar
            </button>
            <p className="text-center text-sm text-neutral-400">
              <a href="#" onClick={() => setActiveTab('recovery')} className="hover:text-neon-cyan transition-colors">
                Esqueceu a senha?
              </a>
            </p>
          </form>
        );
      case 'recovery':
        return (
          <form className="w-full max-w-md space-y-6">
            <h1 className="text-3xl font-bold text-center text-white font-orbitron mb-8 text-shadow-[0_0_10px_rgba(0,229,255,0.3)]">
              Recuperar Senha
            </h1>
            <div className="space-y-2">
              <label htmlFor="recovery-method-trigger" className="block text-sm font-medium text-neutral-300">Recuperar usando:</label>
              <Select value={recoveryMethod} onValueChange={handleRecoveryMethodChange}>
                <SelectTrigger id="recovery-method-trigger" className="w-full pl-3 text-left bg-neutral-800/50 border border-neutral-700 rounded-lg text-white focus:ring-neon-cyan focus:border-neon-cyan transition-all duration-300 h-auto py-3">
                  <SelectValue placeholder="Selecione o método" />
                </SelectTrigger>
                <SelectContent className="bg-neutral-800 border-neutral-700 text-white">
                  <SelectItem value="email" className="hover:bg-neutral-700 focus:bg-neutral-700 cursor-pointer">E-mail</SelectItem>
                  <SelectItem value="phone" className="hover:bg-neutral-700 focus:bg-neutral-700 cursor-pointer">Celular</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="input-wrapper-react">
              {recoveryMethod === 'email' ? 
                <Mail className="lucide-icon-auth" /> : 
                <Phone className="lucide-icon-auth" />
              }
              <input 
                type={recoveryMethod === 'email' ? 'email' : 'tel'}
                placeholder={recoveryMethod === 'email' ? 'Digite seu e-mail de cadastro' : 'Digite seu celular cadastrado'}
                className="form-input-react" 
                value={recoveryInput}
                onChange={(e) => setRecoveryInput(e.target.value)}
                pattern={recoveryMethod === 'phone' ? "[0-9]*" : undefined}
              />
            </div>

            <button type="submit" className="cta-button-react w-full">
              Enviar Link de Recuperação
            </button>
            <button type="button" className="w-full py-3 px-4 bg-neutral-700 hover:bg-neutral-600 text-white font-semibold rounded-lg transition-all duration-300 ease-in-out">
              Chamar Humano
            </button>
          </form>
        );
      case 'signup':
      default:
        return (
          <form className="w-full max-w-md space-y-6">
            <h1 className="text-3xl font-bold text-center text-white font-orbitron mb-8 text-shadow-[0_0_10px_rgba(0,229,255,0.3)]">
              Crie sua Conta
            </h1>
            {/* Exemplo de campo - adicione todos os outros campos aqui */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="input-wrapper-react">
                {/* <User className="lucide-icon" /> */}
                
                <input type="text" placeholder="Nome" className="form-input-react" />
              </div>
              <div className="input-wrapper-react">
                {/* <User className="lucide-icon" /> */}
                
                <input type="text" placeholder="Sobrenome" className="form-input-react" />
              </div>
            </div>
            <div className="input-wrapper-react">
              {/* <Mail className="lucide-icon" /> */}
              
              <input type="email" placeholder="Seu e-mail" className="form-input-react" />
            </div>
            <div className="input-wrapper-react">
              {/* <Lock className="lucide-icon" /> */}
              {/* Adicionar ícone Lucide Lock se desejar */}
              <input type="password" placeholder="Sua senha" className="form-input-react" />
            </div>
            <div className="input-wrapper-react">
              {/* <Lock className="lucide-icon" /> */}
              {/* Adicionar ícone Lucide Lock se desejar */}
              <input type="password" placeholder="Confirme sua senha" className="form-input-react" />
            </div>
            <div className="input-wrapper-react">
              {/* <Phone className="lucide-icon" /> */}
              {/* Adicionar ícone Lucide Phone se desejar */}
              <input type="tel" placeholder="WhatsApp (somente números)" className="form-input-react" pattern="[0-9]*" title="Por favor, insira somente números." />
            </div>
            <div className="input-wrapper-react">
              {/* <Briefcase className="lucide-icon" /> */}
              {/* Adicionar ícone Lucide Briefcase se desejar */}
              <select 
                className="form-select-react"
                defaultValue=""
                // onChange={(e) => console.log(e.target.value)} // Exemplo de como pegar o valor
              >
                <option value="" disabled>Selecione seu negócio</option>
                <option value="varejo">Lojas de Varejo (Roupas, Eletrônicos, Cosméticos)</option>
                <option value="restaurantes">Restaurantes e Lanchonetes (Delivery)</option>
                <option value="beleza">Serviços de Beleza (Salões, Barbearias, Esteticistas)</option>
                <option value="profissionais_liberais">Profissionais Liberais (Advogados, Contadores, Consultores)</option>
                <option value="agencias_viagens">Agências de Viagens</option>
                <option value="corretores_imoveis">Corretores de Imóveis</option>
                <option value="escolas_cursos">Escolas e Cursos</option>
                <option value="academias_personais">Academias e Personal Trainers</option>
                <option value="clinicas_consultorios">Clínicas e Consultórios (Médicos, Dentistas, Terapeutas)</option>
                <option value="petshops">Pet Shops e Serviços para Animais</option>
                <option value="artesanato">Artesanato e Produtos Personalizados</option>
                <option value="eventos">Organização de Eventos</option>
                <option value="concessionarias">Concessionárias de Veículos</option>
                <option value="supermercados">Supermercados e Mercearias</option>
                <option value="floriculturas">Floriculturas</option>
                <option value="limpeza">Empresas de Limpeza</option>
                <option value="reparos_manutencao">Serviços de Reparo e Manutenção</option>
                <option value="docerias_confeitarias">Docerias e Confeitarias</option>
                <option value="marketing_digital">Marketing Digital e Social Media</option>
                <option value="fotografos_videomakers">Fotógrafos e Videomakers</option>
                <option value="graficas">Gráficas e Serviços de Impressão</option>
                <option value="infoprodutores">Produtores de Conteúdo Digital/Infoprodutores</option>
                <option value="coach_mentores">Coach e Mentores</option>
                <option value="material_construcao">Lojas de Material de Construção</option>
                <option value="software_saas">Empresas de Software e SaaS</option>
                <option value="ecommerce">E-commerce em Geral</option>
                <option value="assessorias_consultorias">Assessorias e Consultorias Especializadas</option>
              </select>
            </div>
            {/* Adicionar os outros campos: Data de Nascimento, Gênero, etc. */}
            {/* Lembre-se do checkbox de termos */}
            <div className="flex items-start space-x-3 pt-2">
              <input type="checkbox" id="terms-react" className="form-checkbox-react" />
              <label htmlFor="terms-react" className="text-xs text-neutral-400">
                Ao confirmar, você concorda com a <a href="/privacidade" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">Política de Privacidade</a> da AILOOP e aceita os <a href="/termos" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">Termos de Uso</a>.
              </label>
            </div>
            <button type="submit" className="cta-button-react w-full">
              Criar Conta
            </button>
          </form>
        );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-dark font-inter p-4 relative overflow-hidden">
      {/* Camadas de Fundo Animado (usando classes Tailwind e CSS customizado se necessário) */}
      <div className="auth-bg-layer-1"></div>
      <div className="auth-bg-layer-2"></div>

      <div className="w-full max-w-4xl lg:max-w-5xl bg-neutral-900/70 backdrop-blur-xl border border-neon-cyan/20 rounded-2xl shadow-2xl shadow-black/50 flex flex-col md:flex-row overflow-hidden z-10">
        {/* Painel da Marca (Direita no Desktop, Topo no Mobile - ajuste a ordem com flex ou grid) */}
        <div className="w-full md:w-2/5 lg:w-1/2 p-8 md:p-12 flex flex-col items-center justify-center text-center bg-neutral-950/30 relative">
          {/* Overlay de Ruído aqui, se desejado */}
          <div className="branding-logo-react mb-6">
            <h2 className="font-orbitron text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-wider ailoop-logo-glow">
              AILOOP
            </h2>
          </div>
          <div className="branding-welcome-react">
            <h3 className="font-orbitron text-xl lg:text-2xl font-semibold text-white mb-3">
              Bem-Vindo ao Futuro.
            </h3>
            <p className="text-sm text-neutral-300 max-w-xs">
              Desbloqueie o futuro com nossas soluções de Inteligência Artificial.
            </p>
          </div>
        </div>

        {/* Painel do Formulário (Esquerda no Desktop) */}
        <div className="w-full md:w-3/5 lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <nav className="flex justify-center mb-8 space-x-2 md:space-x-4">
            {[
              { key: 'signin', label: 'ENTRAR' },
              { key: 'signup', label: 'CADASTRAR' },
              { key: 'recovery', label: 'RECUPERAR' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`px-4 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-md transition-all duration-300 ease-in-out focus:outline-none
                  ${activeTab === tab.key
                    ? 'bg-neon-cyan/20 text-neon-cyan shadow-lg shadow-neon-cyan/30' 
                    : 'text-neutral-400 hover:bg-neutral-700/50 hover:text-neutral-200'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
          <div className="form-content-area">
            {renderFormContent()}
          </div>
        </div>
      </div>
      {/* Adicionar CSS global para as classes .ailoop-logo-glow, .auth-bg-layer-1, .auth-bg-layer-2,
           .input-wrapper-react, .form-input-react, .lucide-icon, .cta-button-react, .form-checkbox-react
           inspirado no auth.css que criamos. 
           Exemplo para o input no seu index.css ou um CSS global:
           .input-wrapper-react {
             position: relative;
           }
           .lucide-icon {
             position: absolute;
             left: 0.75rem; top: 50%;
             transform: translateY(-50%);
             width: 1.125rem; height: 1.125rem; 
             color: theme('colors.neutral.500');
             transition: color 0.3s;
           }
           .input-wrapper-react:focus-within .lucide-icon {
             color: theme('colors.ailoop-neon-blue');
           }
           .form-input-react {
             @apply w-full pl-10 pr-3 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:ring-ailoop-neon-blue focus:border-ailoop-neon-blue transition-all duration-300;
           }
           .cta-button-react {
             @apply w-full py-3 px-4 bg-gradient-to-r from-ailoop-neon-blue to-ailoop-blue text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-ailoop-neon-blue/90 hover:to-ailoop-blue/90 transform hover:scale-[1.02] transition-all duration-300 ease-in-out;
           }
           .form-checkbox-react {
             @apply w-5 h-5 rounded bg-neutral-700 border-neutral-600 text-ailoop-neon-blue focus:ring-ailoop-neon-blue focus:ring-offset-neutral-900;
           }
           .ailoop-logo-glow {
             text-shadow: 0 0 5px theme('colors.ailoop-neon-blue'), 0 0 10px theme('colors.ailoop-neon-blue'), 0 0 20px theme('colors.ailoop-neon-blue'), 0 0 40px theme('colors.ailoop-blue'), 0 0 70px theme('colors.ailoop-blue');
             animation: pulseLogoReact 5s infinite alternate ease-in-out;
           }
           @keyframes pulseLogoReact {
             0% { text-shadow: ... }
             100% { text-shadow: ... } 
           }
           // E assim por diante para os outros estilos customizados e de fundo.
      */}
    </div>
  );
};

export default AuthPage; 