import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Footer } from './Footer';

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
      className="flex min-h-screen flex-col bg-white text-espresso">
      
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </motion.div>);

}