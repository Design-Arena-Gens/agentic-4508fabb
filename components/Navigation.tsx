'use client';

import { motion } from 'framer-motion';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const sections = [
    { id: 'hero', label: 'Home', icon: '🌌' },
    { id: 'dimensions', label: 'Dimensions', icon: '🔮' },
    { id: 'tokenomy', label: 'Tokenomy', icon: '💰' },
    { id: 'worlds', label: 'Worlds', icon: '🏗️' },
    { id: 'avatar', label: 'Avatar', icon: '🎮' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-xfi-darker/90 backdrop-blur-md border-b border-xfi-primary/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold glow-text text-xfi-primary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            XFI ECOSYSTEM
          </motion.div>

          <div className="flex gap-2">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeSection === section.id
                    ? 'bg-xfi-primary text-black glow-box'
                    : 'bg-xfi-dark/50 hover:bg-xfi-dark text-xfi-primary/70 hover:text-xfi-primary'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{section.icon}</span>
                <span className="hidden md:inline">{section.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
