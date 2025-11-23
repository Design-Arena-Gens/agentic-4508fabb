'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import DimensionExplorer from '@/components/DimensionExplorer';
import TokenomyDashboard from '@/components/TokenomyDashboard';
import WorldsGallery from '@/components/WorldsGallery';
import AvatarCreator from '@/components/AvatarCreator';
import Navigation from '@/components/Navigation';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <main className="min-h-screen">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <div id="hero" className={activeSection === 'hero' ? 'block' : 'hidden'}>
        <Hero />
      </div>

      <div id="dimensions" className={activeSection === 'dimensions' ? 'block' : 'hidden'}>
        <DimensionExplorer />
      </div>

      <div id="tokenomy" className={activeSection === 'tokenomy' ? 'block' : 'hidden'}>
        <TokenomyDashboard />
      </div>

      <div id="worlds" className={activeSection === 'worlds' ? 'block' : 'hidden'}>
        <WorldsGallery />
      </div>

      <div id="avatar" className={activeSection === 'avatar' ? 'block' : 'hidden'}>
        <AvatarCreator />
      </div>
    </main>
  );
}
