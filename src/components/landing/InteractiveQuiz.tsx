'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

// const InteractiveQuiz: React.FC = () => {
//     // TODO: Restore original quiz logic later
//     return (
//         <div className="bg-pink-800 text-white p-4 text-center max-w-2xl mx-auto">
//             TESTE QUIZ - Se você vê isso, o problema está na lógica interna do quiz.
//         </div>
//     );
// };

// ... (Original quiz logic commented out for testing)
interface Question {
  id: number;
  text: string;
  options: string[];
  type: 'single' | 'multiple' | 'confirmation';
  description?: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: 'Podemos Começar?',
    options: ['Sim', 'Não'],
    type: 'single',
    description: 'Complete e receba uma mensagem no WhatsApp com a Caixa Mágica IALOOP. Quer potencializar seu negócio com IA e está apertado(a)? Complete o Quizz.\\n\\nSelecione uma das opções, ao clicar você confirma e não poderá alterar sua escolha. Estamos registrando seu IP e será permitido UMA Caixa Mágica por WhatsApp cadastrado.',
  },
  {
    id: 2,
    text: 'Seu agente no Whatsapp, o que ele faria mais, aplicado ao seu negócio.',
    options: [
      'Ele explicaria mais para os clientes.',
      'Ele venderia mais rápido.',
      'Ele agendaria reuniões.',
      'Ele agendaria consultas.',
      'Ele agendaria atendimento.',
      'Ele informaria links úteis.',
      'Ele enviaria voz.',
      'Ele enviaria fotos dos meus produtos.',
      'Ele falaria preços ou somas.',
    ],
    type: 'multiple',
  },
  {
    id: 3,
    text: 'Utiliza tráfego pago hoje em dia no seu negócio?',
    options: ['Sim', 'Não'],
    type: 'single',
  },
  {
    id: 4,
    text: 'Tem receio de um Agente Assistente tomar conta do principal atendimento do seu negócio?',
    options: [
      'Sim',
      'Não',
      'Um pouco já vi exemplos fracos',
      'Conheço a AILOOP sei que parece humano',
    ],
    type: 'single',
  },
  {
    id: 5,
    text: 'Já experimentou IA Agente Assistente alguma vez?',
    options: [
      'Sim enviando audio',
      'Sim só texto',
      'Não só chat bot programado',
      'Não',
    ],
    type: 'single',
  },
  {
    id: 6,
    text: 'Ok vamos confirmar!',
    options: [
      'Confirmar sem presente',
      'Confirmar com presente',
    ],
    type: 'confirmation',
    description: 'Ao confirmar com presente, você precisará informar seu WhatsApp.',
  },
];

// Funções Helper para animação de texto (exemplo)
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.04, // Ajustar para velocidade desejada
    },
  },
}

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
}

const InteractiveQuiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string | string[] }>({});
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [showWhatsappInput, setShowWhatsappInput] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const currentQuestion = questions[currentQuestionIndex];

  const handleSingleChoice = (option: string) => {
    if (showWhatsappInput || isCompleted) return;
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: option }));
    setSelectedOptions([option]);
    if (currentQuestion.id === 1 && option === 'Não') {
      finalizeQuiz({ 1: 'Não' });
      return;
    }
    setTimeout(() => { goToNextQuestion(); }, 300);
  };

  const handleMultipleChoice = (option: string) => {
    if (showWhatsappInput || isCompleted) return;
    const newSelection = selectedOptions.includes(option)
      ? selectedOptions.filter(item => item !== option)
      : [...selectedOptions, option];
    setSelectedOptions(newSelection);
    setError(null);
  };

  const submitMultipleChoice = () => {
    if (selectedOptions.length === 0) {
        setError("Por favor, selecione ao menos uma opção.");
        return;
    }
    setError(null);
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: selectedOptions }));
    goToNextQuestion();
  };

  const handleConfirmation = (option: string) => {
    if (showWhatsappInput || isCompleted) return;
    const currentAnswers = { ...answers, [currentQuestion.id]: option };
    setAnswers(currentAnswers);
    if (option === 'Confirmar com presente') {
      setShowWhatsappInput(true);
      setError(null);
    } else {
      finalizeQuiz(currentAnswers);
    }
  };

   const submitWhatsappNumber = () => {
    const cleanedNumber = whatsappNumber.replace(/\s+|\(|\)|-/g, '');
    if (!cleanedNumber.trim() || !/^\+?[1-9]\d{10,14}$/.test(cleanedNumber) ) {
        setError("Por favor, insira um número de WhatsApp válido (ex: +5511999998888).");
        return;
    }
    setError(null);
    setWhatsappNumber(cleanedNumber);
    const finalAnswers = { ...answers };
    console.log('WhatsApp Number Submitted:', cleanedNumber);
    finalizeQuiz(finalAnswers, cleanedNumber);
  };

   const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptions([]);
      setError(null);
    } else {
      finalizeQuiz(answers, showWhatsappInput ? whatsappNumber : undefined);
    }
  };

  const finalizeQuiz = (finalAnswers: typeof answers, finalWhatsappNumber?: string) => {
    console.log('Quiz Finalizado, Respostas:', finalAnswers);
    if(finalWhatsappNumber) {
        console.log('Número WhatsApp:', finalWhatsappNumber);
    }
    setAnswers(finalAnswers);
    setIsCompleted(true);
 };

  if (isCompleted) {
    // Container de Conclusão com Glassmorphism
    const CompletionContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
      <motion.div
        key={answers[1] === 'Não' ? "completion-no" : "completion-yes"} // Chave única para cada estado final
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="text-center p-8 bg-brand-dark/70 backdrop-blur-lg rounded-xl border border-neutral-700/50 max-w-3xl mx-auto shadow-2xl shadow-black/30"
      >
        {children}
      </motion.div>
    );

    if (answers[1] === 'Não') {
        return (
          <CompletionContainer>
            <h3 className="text-2xl font-serif text-brand-white mb-4">Entendido.</h3>
            <p className="text-neutral-300">Você optou por não iniciar o quizz agora. Sem problemas!</p>
          </CompletionContainer>
        );
    }

    return (
      <CompletionContainer>
        <h3 className="text-3xl font-serif text-brand-white mb-6">Fluxo Concluído!</h3>
        <p className="text-neutral-300 mb-4">Obrigado por compartilhar suas informações.</p>
        {answers[6] === 'Confirmar com presente' && whatsappNumber && (
          <p className="text-cyan-400">Enviaremos a Caixa Mágica para o número: <span className="font-mono">{whatsappNumber}</span></p>
        )}
        {answers[6] === 'Confirmar sem presente' && (
          <p className="text-neutral-400">Você optou por não receber o presente desta vez.</p>
        )}
      </CompletionContainer>
    );
  }

  // Variantes para animação de hover e seleção dos painéis
  const panelVariants = {
    initial: { borderColor: 'rgba(64, 64, 64, 0.5)' }, // neutral-700 com alpha
    hover: {
      scale: 1.03,
      borderColor: 'rgba(168, 85, 247, 0.8)', // purple-500 com alpha
      boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
      transition: { duration: 0.2 }
    },
    selected: {
      borderColor: 'rgba(168, 85, 247, 1)',
      backgroundColor: 'rgba(168, 85, 247, 0.15)',
      scale: 1.03,
      boxShadow: '0 0 25px rgba(168, 85, 247, 0.6)',
      transition: { duration: 0.2 }
    },
    unselected: {
      borderColor: 'rgba(64, 64, 64, 0.5)', // neutral-700 com alpha
      backgroundColor: 'rgba(40, 40, 40, 0.3)', // Fundo mais escuro e translúcido
      scale: 1,
      boxShadow: 'none',
      transition: { duration: 0.2 }
    },
    // Adiciona variantes hidden/visible para staggerChildren
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    // Container Principal com Glassmorphism e Borda Refinada
    <motion.div
      key={currentQuestionIndex}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      // Classe para Glassmorphism, fundo mais translúcido, borda sutil
      className="p-8 bg-brand-dark/70 backdrop-blur-lg rounded-xl border border-neutral-700/50 max-w-3xl mx-auto shadow-2xl shadow-black/30 relative overflow-hidden"
      style={{ minHeight: '480px' }} // Aumentado minHeight
    >
      {/* Efeito de Brilho na Borda (Exemplo Simples) */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-purple-500/30 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        style={{ filter: 'blur(5px)' }}
      />

        <div className="absolute top-5 left-1/2 -translate-x-1/2 flex items-center space-x-1.5 z-10">
             {questions.map((q, index) => {
                 const isActive = index === currentQuestionIndex;
                 const isCompletedNode = index < currentQuestionIndex;
                 // Definir cor de fundo inicial segura para animação
                 const initialBgColor = 'rgba(10, 10, 10, 0.05)'; // Quase transparente, alinhado com bg-brand-dark
                 return (
                     <motion.div
                         key={`node-${q.id}`}
                         className={`w-3 h-3 rounded-full border-2 transition-colors duration-300 ${isActive ? 'border-purple-500' : isCompletedNode ? 'border-cyan-500' : 'border-neutral-600'}`}
                         // Ajuste na animação do backgroundColor para evitar warning
                         animate={{
                             scale: isActive ? [1, 1.2, 1] : 1,
                             backgroundColor: isActive
                                 ? ['rgba(168, 85, 247, 0.1)', 'rgba(168, 85, 247, 0.4)', 'rgba(168, 85, 247, 0.1)']
                                 : isCompletedNode
                                     ? '#06b6d4' // cyan-500
                                     : initialBgColor // Usa a cor inicial segura em vez de 'transparent'
                         }}
                         transition={isActive ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }}
                         // Define o estilo inicial explicitamente se necessário
                         style={{ backgroundColor: initialBgColor }}
                     />
                 );
             })}
        </div>

        <div className="mt-16 relative z-10"> {/* Conteúdo acima do brilho da borda */}
            {/* Descrição com Animação de Texto */}
            {currentQuestion.description && !showWhatsappInput && (
              <motion.p
                key={`desc-${currentQuestionIndex}`} // Key para reanimar a cada mudança
                className="text-sm text-neutral-300 mb-6 whitespace-pre-line font-sans"
                variants={sentence}
                initial="hidden"
                animate="visible"
              >
                {currentQuestion.description.split("").map((char, index) => (
                  <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
                ))}
              </motion.p>
            )}

            {/* Título/Pergunta com Animação de Texto */}
            <motion.h2
              key={`title-${currentQuestionIndex}`} // Key para reanimar a cada mudança
              className="text-2xl lg:text-3xl font-serif text-brand-white mb-8"
              variants={sentence}
              initial="hidden"
              animate="visible"
            >
              {(!showWhatsappInput ? currentQuestion.text : "Confirme seu WhatsApp")
                .split("").map((char, index) => (
                  <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
              ))}
            </motion.h2>

             {/* ... (Instruções WhatsApp, Erro - sem alterações na animação por ora) ... */}
             {showWhatsappInput && (
                 <p className="text-neutral-300 font-sans mb-6">
                    Para receber sua Caixa Mágica AILOOP, por favor, informe seu número.
                 </p>
             )}
            {error && <p className="text-red-400 mb-4 text-sm font-medium absolute -bottom-4 left-0 z-20">{error}</p>}

            {/* Conteúdo Dinâmico: Opções ou Input */}
            <motion.div
              className="space-y-4 pt-2" // Adicionado padding top
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.5 } // Atrasado após animação do título
                }
              }}
            >
                 {showWhatsappInput ? (
                    // ... (Input WhatsApp - sem alterações, mas agora dentro do container animado) ...
                    <motion.div
                      className="flex flex-col space-y-4 max-w-md mx-auto"
                      variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                    >
                        <Input
                          type="tel"
                          placeholder="+55 (11) 99999-8888"
                          value={whatsappNumber}
                          onChange={(e) => { setWhatsappNumber(e.target.value); setError(null); }}
                          className="bg-neutral-900/60 border-neutral-700/80 placeholder-neutral-500 text-brand-white focus:ring-cyan-500 focus:border-cyan-500 font-sans text-center p-3 rounded-md shadow-inner"
                        />
                        <Button
                          onClick={submitWhatsappNumber}
                          className="w-full bg-cyan-600 hover:bg-cyan-700 text-brand-dark font-semibold py-3 px-4 rounded-md transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                          Confirmar e Receber
                        </Button>
                    </motion.div>
                 ) : (
                    // Painéis de Seleção (Ajuste no stagger)
                    <>
                        {currentQuestion.options.map((option) => {
                            const isSelected = selectedOptions.includes(option);
                            return (
                                <motion.div
                                    key={option}
                                    // Combinando as variantes necessárias aqui
                                    variants={{ ...panelVariants, hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                                    initial="hidden" // Inicia escondido para stagger
                                    animate={"visible"} // <<<<< MODIFICADO: Garante que anime para visível primeiro
                                    whileHover="hover"
                                    // Aplica estilos condicionais para seleção por cima da animação 'visible'
                                    style={isSelected ? panelVariants.selected : panelVariants.unselected}
                                    onClick={() => {
                                        if (currentQuestion.type === 'single') handleSingleChoice(option);
                                        if (currentQuestion.type === 'multiple') handleMultipleChoice(option);
                                        if (currentQuestion.type === 'confirmation') handleConfirmation(option);
                                    }}
                                    // Estilos base + glassmorphism sutil no painel
                                    className={`p-4 rounded-lg border-2 transition-colors duration-200 cursor-pointer font-sans text-center relative shadow-md hover:shadow-purple-500/10`}
                                >
                                    {option}
                                    {isSelected && (
                                        <motion.div
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                            className="absolute top-1/2 right-4 -translate-y-1/2 text-purple-400"
                                        >
                                            <Check size={20} strokeWidth={3} />
                                        </motion.div>
                                    )}
                                </motion.div>
                            );
                         })}
                         {/* Botão Múltipla Escolha */}
                         {currentQuestion.type === 'multiple' && (
                            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                                <Button
                                  onClick={submitMultipleChoice}
                                  disabled={selectedOptions.length === 0}
                                  className="w-full mt-6 bg-purple-600 hover:bg-purple-700 disabled:bg-neutral-700 disabled:opacity-50 text-white font-semibold py-3 px-4 rounded-md transition-all duration-200 shadow-lg hover:shadow-purple-500/30"
                                >
                                  Próximo
                                </Button>
                            </motion.div>
                         )}
                    </>
                 )}
            </motion.div>
        </div>
    </motion.div>
  );
};

// */
export default InteractiveQuiz; 