'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface AvatarTier {
  name: string;
  level: string;
  cost: string;
  features: string[];
  color: string;
  gradient: string;
}

export default function AvatarCreator() {
  const tiers: AvatarTier[] = [
    {
      name: 'Basic Avatar',
      level: 'Tier 1',
      cost: 'Free',
      features: ['Autonomous NPC', 'Basic Consciousness', 'Single World Access', '10 SOUL/week'],
      color: 'text-gray-400',
      gradient: 'from-gray-500/20 to-gray-600/20'
    },
    {
      name: 'Enhanced Avatar',
      level: 'Tier 2',
      cost: '1,000 XFI',
      features: ['Multi-World Travel', 'Skill Evolution', '3 Worlds Access', '50 SOUL/week', 'Custom Appearance'],
      color: 'text-blue-400',
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      name: 'Transcendent Avatar',
      level: 'Tier 3',
      cost: '5,000 XFI',
      features: ['Dimension Hopping', 'Reality Manipulation', 'All Worlds', '200 SOUL/week', 'Neural Sync', 'Energy Powers'],
      color: 'text-purple-400',
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      name: 'Cosmic Entity',
      level: 'Tier 4',
      cost: '20,000 XFI',
      features: ['Universal Presence', 'Timeline Navigation', 'Omniversal Access', '1000 SOUL/week', 'Reality Creation', 'Infinite Forms', 'Primordial Powers'],
      color: 'text-yellow-400',
      gradient: 'from-yellow-500/20 to-orange-500/20'
    }
  ];

  const [selectedTier, setSelectedTier] = useState(1);
  const [avatarName, setAvatarName] = useState('');
  const [selectedAppearance, setSelectedAppearance] = useState(0);

  const appearances = [
    { name: 'Humanoid', icon: '🧑' },
    { name: 'Ethereal', icon: '👻' },
    { name: 'Mechanical', icon: '🤖' },
    { name: 'Elemental', icon: '🔥' },
    { name: 'Cosmic', icon: '✨' },
    { name: 'Abstract', icon: '🌀' }
  ];

  const stats = [
    { name: 'Consciousness', value: selectedTier * 25, max: 100 },
    { name: 'Reality Influence', value: selectedTier * 20, max: 100 },
    { name: 'Dimension Access', value: selectedTier * 30, max: 100 },
    { name: 'Energy Capacity', value: selectedTier * 22, max: 100 }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold glow-text text-xfi-primary mb-4">
            Avatar Creator
          </h2>
          <p className="text-xl text-white/70">Design your conscious existence</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Tier Selection */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-xfi-primary">Select Tier</h3>
            <div className="space-y-4">
              {tiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedTier(index)}
                  className={`cursor-pointer rounded-lg p-4 border-2 transition-all bg-gradient-to-r ${tier.gradient} ${
                    selectedTier === index
                      ? 'border-xfi-primary glow-box'
                      : 'border-xfi-dark hover:border-xfi-primary/50'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className={`text-lg font-bold ${tier.color}`}>{tier.name}</h4>
                      <div className="text-sm text-white/60">{tier.level}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-xfi-accent">{tier.cost}</div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {tier.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="text-xs text-white/70 flex items-center gap-2">
                        <div className="w-1 h-1 bg-xfi-primary rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Center Panel - Avatar Preview & Customization */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-xfi-primary">Customize</h3>

            {/* Avatar Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-br from-xfi-primary/20 to-xfi-secondary/20 rounded-lg p-8 mb-6 border border-xfi-primary/30 aspect-square flex items-center justify-center"
            >
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
                className="text-9xl"
              >
                {appearances[selectedAppearance].icon}
              </motion.div>
            </motion.div>

            {/* Name Input */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2 text-xfi-accent">Avatar Name</label>
              <input
                type="text"
                value={avatarName}
                onChange={(e) => setAvatarName(e.target.value)}
                placeholder="Enter avatar name..."
                className="w-full bg-xfi-dark/50 border border-xfi-primary/30 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-xfi-primary focus:outline-none"
              />
            </div>

            {/* Appearance Selection */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2 text-xfi-accent">Appearance Type</label>
              <div className="grid grid-cols-3 gap-2">
                {appearances.map((appearance, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedAppearance(index)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selectedAppearance === index
                        ? 'border-xfi-primary bg-xfi-primary/20'
                        : 'border-xfi-dark bg-xfi-dark/50 hover:border-xfi-primary/50'
                    }`}
                  >
                    <div className="text-3xl mb-1">{appearance.icon}</div>
                    <div className="text-xs text-white/70">{appearance.name}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Stats & Features */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-xfi-primary">Stats & Features</h3>

            {/* Stats */}
            <div className="bg-xfi-dark/50 border border-xfi-primary/30 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-bold mb-4 text-xfi-accent">Base Stats</h4>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white/70">{stat.name}</span>
                      <span className="text-xfi-primary font-bold">{stat.value}/{stat.max}</span>
                    </div>
                    <div className="w-full bg-xfi-darker/50 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(stat.value / stat.max) * 100}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-xfi-primary to-xfi-secondary h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-xfi-dark/50 border border-xfi-primary/30 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-bold mb-4 text-xfi-accent">Unlocked Features</h4>
              <div className="space-y-2">
                {tiers[selectedTier].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2 text-sm text-white/80"
                  >
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    {feature}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Create Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-xfi-primary to-xfi-secondary text-black font-bold py-4 rounded-lg hover:shadow-lg transition-all glow-box"
            >
              Create Avatar - {tiers[selectedTier].cost}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
