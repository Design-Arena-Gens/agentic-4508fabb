'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface World {
  name: string;
  type: string;
  description: string;
  dimensions: string;
  population: string;
  features: string[];
  color: string;
  gradient: string;
}

export default function WorldsGallery() {
  const worlds: World[] = [
    {
      name: 'Aethelgard',
      type: 'Evolutionary RPG',
      description: 'Medieval fantasy realm where characters evolve through quantum progression',
      dimensions: '1-15',
      population: '2.4M',
      features: ['Quantum Skills', 'Guild Wars', 'Dragon Hunting', 'Crafting System'],
      color: 'text-red-400',
      gradient: 'from-red-500/20 to-orange-500/20'
    },
    {
      name: 'Veridia Prime',
      type: 'Symbiotic Ecosystem',
      description: 'Living planet with bioluminescent forests and conscious flora',
      dimensions: '10-22',
      population: '1.8M',
      features: ['Bio-Engineering', 'Ecosystem Balance', 'Telepathic Communication', 'Evolution Chambers'],
      color: 'text-emerald-400',
      gradient: 'from-emerald-500/20 to-teal-500/20'
    },
    {
      name: 'Kiber Nexus',
      type: 'Hackable Reality',
      description: 'Digital metropolis where code shapes physical reality',
      dimensions: '15-28',
      population: '3.1M',
      features: ['Reality Hacking', 'AI Companions', 'Data Mining', 'Quantum Computing'],
      color: 'text-cyan-400',
      gradient: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      name: 'Astral Sanctum',
      type: 'Consciousness Hub',
      description: 'Pure thought realm where minds converge and create',
      dimensions: '20-30',
      population: '892K',
      features: ['Thought Manifestation', 'Collective Dreams', 'Memory Archives', 'Soul Fusion'],
      color: 'text-purple-400',
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      name: 'Void Expanse',
      type: 'Primordial Chaos',
      description: 'Pre-reality space where creation itself is forged',
      dimensions: '25-31+',
      population: '127K',
      features: ['Reality Creation', 'Time Manipulation', 'Universe Seeding', 'Cosmic Forge'],
      color: 'text-yellow-400',
      gradient: 'from-yellow-500/20 to-orange-500/20'
    },
    {
      name: 'Oceanus Deep',
      type: 'Aquatic Civilization',
      description: 'Underwater world with pressure-based dimension gates',
      dimensions: '5-18',
      population: '1.5M',
      features: ['Deep Sea Mining', 'Pressure Adaptation', 'Bioluminescent Tech', 'Coral Cities'],
      color: 'text-blue-400',
      gradient: 'from-blue-500/20 to-indigo-500/20'
    }
  ];

  const [selectedWorld, setSelectedWorld] = useState<number>(0);

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold glow-text text-xfi-primary mb-4">
            Foundational Worlds
          </h2>
          <p className="text-xl text-white/70">Explore infinite realms of existence</p>
        </motion.div>

        {/* World Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {worlds.map((world, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedWorld(index)}
              className={`cursor-pointer rounded-lg p-6 border-2 transition-all bg-gradient-to-br ${world.gradient} ${
                selectedWorld === index
                  ? 'border-xfi-primary glow-box scale-105'
                  : 'border-xfi-dark hover:border-xfi-primary/50'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-2 ${world.color}`}>{world.name}</h3>
              <div className="text-sm text-xfi-accent mb-3">{world.type}</div>
              <p className="text-sm text-white/70 mb-4">{world.description}</p>

              <div className="flex justify-between items-center text-xs text-white/60">
                <span>Dims: {world.dimensions}</span>
                <span>Pop: {world.population}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected World Details */}
        <motion.div
          key={selectedWorld}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className={`bg-gradient-to-br ${worlds[selectedWorld].gradient} rounded-lg p-8 border border-xfi-primary/30`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className={`text-4xl font-bold mb-3 ${worlds[selectedWorld].color} glow-text`}>
                {worlds[selectedWorld].name}
              </h3>
              <div className="text-xl text-xfi-accent mb-4">{worlds[selectedWorld].type}</div>
              <p className="text-lg text-white/80 mb-6">{worlds[selectedWorld].description}</p>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center p-3 bg-xfi-darker/50 rounded">
                  <span className="text-white/70">Dimensions:</span>
                  <span className="font-bold text-xfi-primary">{worlds[selectedWorld].dimensions}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-xfi-darker/50 rounded">
                  <span className="text-white/70">Population:</span>
                  <span className="font-bold text-xfi-secondary">{worlds[selectedWorld].population}</span>
                </div>
              </div>

              <button className="w-full bg-xfi-primary text-black font-bold py-3 rounded-lg hover:bg-xfi-secondary hover:text-white transition-all glow-box">
                Enter {worlds[selectedWorld].name}
              </button>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-4 text-xfi-primary">Core Features</h4>
              <div className="space-y-3">
                {worlds[selectedWorld].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-xfi-darker/50 border border-xfi-primary/20 rounded-lg p-4 hover:border-xfi-primary/50 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-xfi-accent rounded-full animate-pulse"></div>
                      <span className="text-white font-semibold">{feature}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-xfi-primary/10 rounded-lg border border-xfi-primary/30">
                <h5 className="text-lg font-bold mb-3 text-xfi-accent">Active Events</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">Season Tournament</span>
                    <span className="text-emerald-400">Live Now</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Dimension Shift</span>
                    <span className="text-yellow-400">2h 15m</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Boss Raid</span>
                    <span className="text-red-400">6h 42m</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
