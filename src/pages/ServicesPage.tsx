import React from 'react';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion/config'; // Supondo que este config exista e seja apropriado

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-ailoop-dark-blue flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center"
        >
          <motion.h1 
            className="mt-12 md:mt-16 text-5xl md:text-6xl font-bold mb-6 text-white py-2"
            initial={{ textShadow: "0 0 4px rgba(200,200,255,0.2), 0 0 8px rgba(180,180,230,0.1)" }}
            animate={{
              textShadow: [
                "0 0 5px rgba(220,220,255,0.3), 0 0 10px rgba(200,200,240,0.2), 0 0 15px rgba(180,180,220,0.1)",
                "0 0 8px rgba(230,230,255,0.4), 0 0 15px rgba(210,210,245,0.3), 0 0 25px rgba(190,190,230,0.2)",
                "0 0 5px rgba(220,220,255,0.3), 0 0 10px rgba(200,200,240,0.2), 0 0 15px rgba(180,180,220,0.1)",
              ]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              repeatType: "mirror", // Para fazer a animação ir e voltar suavemente
              ease: "easeInOut"
            }}
          >
            SERVIÇOS PREÇO FIXO
          </motion.h1>
          <div className="w-full flex justify-center my-16 md:my-24 mb-12 md:mb-16">
            <motion.div
              className="relative w-32 h-32 md:w-40 md:h-40"
              animate={{
                rotate: 360,
                opacity: [1, 0.1, 0.1, 1],
                scale:   [1, 0.95, 1.15, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                opacity: { duration: 5, repeat: Infinity, times: [0, 0.45, 0.55, 1], ease: "easeInOut" },
                scale: { duration: 5, repeat: Infinity, times: [0, 0.40, 0.55, 1], ease: "easeInOut" }
              }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full"
                  style={{
                    borderWidth: `${(i + 1) * 2}px`,
                    borderColor: `rgba(255, ${120 - i * 20}, ${i * 30}, ${1 - i * 0.25})`,
                    boxShadow: `0 0 ${(i + 1) * 7}px ${(i + 1) * 2}px rgba(255, 100, 0, ${0.6 - i * 0.15}), 0 0 ${(i + 1) * 12}px ${(i + 1) * 3}px rgba(180, 40, 180, ${0.25 - i * 0.08})`
                  }}
                  animate={{
                    scale: [1, 1.03 + i * 0.04, 1],
                    opacity: [0.6, 0.9, 0.6],
                  }}
                  transition={{
                    duration: 2.2 + i * 0.6,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: i * 0.35,
                  }}
                />
              ))}
              <motion.div
                className="absolute inset-2 md:inset-3 rounded-full bg-gradient-to-br from-purple-600 via-red-500 to-orange-400"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatType: "mirror" }}
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ServicesSection />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage; 