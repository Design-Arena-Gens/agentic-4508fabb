'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Dimension {
  range: string;
  name: string;
  description: string;
  color: string;
  properties: string[];
}

export default function DimensionExplorer() {
  const dimensions: Dimension[] = [
    {
      range: '1-12',
      name: 'Base Reality',
      description: 'Standard physical dimensions with classical physics',
      color: 'from-blue-500 to-cyan-500',
      properties: ['Physical Laws', 'Material Reality', 'Linear Time', 'Spatial Navigation']
    },
    {
      range: '13-20',
      name: 'Expanded Consciousness',
      description: 'Awareness transcends physical constraints',
      color: 'from-purple-500 to-pink-500',
      properties: ['Telepathy', 'Precognition', 'Astral Projection', 'Energy Manipulation']
    },
    {
      range: '21-30',
      name: 'Metacosmic Realms',
      description: 'Pure existence beyond physical and mental forms',
      color: 'from-yellow-500 to-orange-500',
      properties: ['Reality Sculpting', 'Timeline Navigation', 'Collective Consciousness', 'Quantum States']
    },
    {
      range: '31+',
      name: 'Primordial Source',
      description: 'Pre-cosmic existence at the origin point',
      color: 'from-emerald-500 to-teal-500',
      properties: ['Universal Creation', 'Omniscience', 'Absolute Reality', 'Source Integration']
    }
  ];

  const [selectedDimension, setSelectedDimension] = useState<number>(0);

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold glow-text text-xfi-primary mb-4">
            Dimension Explorer
          </h2>
          <p className="text-xl text-white/70">Navigate through nested realities</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {dimensions.map((dimension, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedDimension(index)}
              className={`cursor-pointer rounded-lg p-6 border-2 transition-all ${
                selectedDimension === index
                  ? 'border-xfi-primary glow-box scale-105'
                  : 'border-xfi-dark hover:border-xfi-primary/50'
              }`}
            >
              <div className={`text-6xl font-bold bg-gradient-to-r ${dimension.color} bg-clip-text text-transparent mb-3`}>
                {dimension.range}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{dimension.name}</h3>
              <p className="text-sm text-white/60">{dimension.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          key={selectedDimension}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-xfi-dark/50 border border-xfi-primary/30 rounded-lg p-8"
        >
          <h3 className="text-3xl font-bold mb-6 text-xfi-primary">
            Dimensions {dimensions[selectedDimension].range}: {dimensions[selectedDimension].name}
          </h3>

          <p className="text-lg mb-6 text-white/80">
            {dimensions[selectedDimension].description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dimensions[selectedDimension].properties.map((property, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-xfi-darker/50 border border-xfi-secondary/20 rounded-lg p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-xfi-primary rounded-full animate-pulse"></div>
                  <span className="text-white">{property}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-xfi-primary/10 to-xfi-secondary/10 rounded-lg border border-xfi-primary/20">
            <h4 className="text-xl font-bold mb-3 text-xfi-accent">Access Requirements</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-xfi-primary">{(selectedDimension + 1) * 1000}</div>
                <div className="text-sm text-white/60">XFI Tokens</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-xfi-secondary">{(selectedDimension + 1) * 500}</div>
                <div className="text-sm text-white/60">REAL Energy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-xfi-accent">{(selectedDimension + 1) * 100}</div>
                <div className="text-sm text-white/60">TIME Hours</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-400">{selectedDimension * 250}</div>
                <div className="text-sm text-white/60">SOUL Rep</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
