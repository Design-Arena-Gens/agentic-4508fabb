'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [dimensionCount, setDimensionCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDimensionCount(prev => (prev < 30 ? prev + 1 : 30));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-xfi-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 glow-text text-xfi-primary">
            XFI ECOSYSTEM
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl mb-8 text-xfi-secondary"
          >
            Expanded Conscious Existence
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="mb-12"
          >
            <div className="text-6xl font-bold text-xfi-accent glow-text mb-2">
              {dimensionCount}+
            </div>
            <div className="text-xl text-white/70">Interconnected Dimensions</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-xfi-dark/50 border border-xfi-primary/30 rounded-lg p-6 hover:border-xfi-primary transition-all">
              <div className="text-4xl mb-3">🔮</div>
              <h3 className="text-xl font-bold mb-2 text-xfi-primary">Neural Immersion</h3>
              <p className="text-sm text-white/70">Full consciousness integration across reality layers</p>
            </div>

            <div className="bg-xfi-dark/50 border border-xfi-secondary/30 rounded-lg p-6 hover:border-xfi-secondary transition-all">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-bold mb-2 text-xfi-secondary">Tokenized Economy</h3>
              <p className="text-sm text-white/70">XFI, REAL, TIME & SOUL tokens powering the ecosystem</p>
            </div>

            <div className="bg-xfi-dark/50 border border-xfi-accent/30 rounded-lg p-6 hover:border-xfi-accent transition-all">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="text-xl font-bold mb-2 text-xfi-accent">Infinite Worlds</h3>
              <p className="text-sm text-white/70">Aethelgard, Veridia Prime, Kiber Nexus & beyond</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-12"
          >
            <button className="px-8 py-4 bg-xfi-primary text-black font-bold rounded-lg hover:bg-xfi-secondary hover:text-white transition-all glow-box text-lg">
              Enter the Ecosystem
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
