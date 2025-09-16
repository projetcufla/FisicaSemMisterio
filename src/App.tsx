import React, { useState } from 'react';
import NetflixHeader from './components/NetflixHeader';
import Hero from './components/Hero';
import ContentCarousel from './components/ContentCarousel';
import ConservacaoEnergia from './components/sections/ConservacaoEnergia';
import MovimentoRotacao from './components/sections/MovimentoRotacao';
import SimulacoesFisica from './components/sections/SimulacoesFisica';
import QuestoesDesafios from './components/sections/QuestoesDesafios';
import NetflixFooter from './components/NetflixFooter';

function App() {
  const [activeSection, setActiveSection] = useState<'home' | 'conservacao' | 'rotacao' | 'simulacoes' | 'questoes'>('home');

  // Listen for navigation events from Hero button
  React.useEffect(() => {
    const handleNavigateToSection = (event: CustomEvent) => {
      setActiveSection(event.detail);
    };
    
    window.addEventListener('navigateToSection', handleNavigateToSection as EventListener);
    return () => window.removeEventListener('navigateToSection', handleNavigateToSection as EventListener);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <Hero />
            <ContentCarousel onSectionChange={setActiveSection} />
          </>
        );
      case 'conservacao':
        return <ConservacaoEnergia />;
      case 'rotacao':
        return <MovimentoRotacao />;
      case 'simulacoes':
        return <SimulacoesFisica />;
      case 'questoes':
        return <QuestoesDesafios />;
      default:
        return (
          <>
            <Hero />
            <ContentCarousel onSectionChange={setActiveSection} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-netflix-dark font-netflix">
      <NetflixHeader activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main>
        {renderSection()}
      </main>

      <NetflixFooter />
    </div>
  );
}

export default App;