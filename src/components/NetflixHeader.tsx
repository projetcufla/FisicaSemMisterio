import React, { useState, useEffect } from 'react';
import { Search, Bell, User, Menu, X } from 'lucide-react';

interface NetflixHeaderProps {
  activeSection: 'home' | 'conservacao' | 'rotacao' | 'simulacoes' | 'questoes';
  onSectionChange: (section: 'home' | 'conservacao' | 'rotacao' | 'simulacoes' | 'questoes') => void;
}

const NetflixHeader: React.FC<NetflixHeaderProps> = ({ activeSection, onSectionChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Início', icon: '🏠' },
    { id: 'conservacao', label: 'Laboratório Energético', icon: '⚡' },
    { id: 'rotacao', label: 'Mundo Rotacional', icon: '🌪️' },
    { id: 'simulacoes', label: 'Experiências Virtuais', icon: '🧪' },
    { id: 'questoes', label: 'Desafios do Conhecimento', icon: '🧠' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-netflix-dark shadow-lg' : 'bg-gradient-to-b from-netflix-dark/90 to-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onSectionChange('home')}
              className="flex items-center space-x-3 text-netflix-red hover:text-netflix-red-hover transition-all duration-300 netflix-button"
            >
              <div className="text-3xl">⚙️</div>
              <div className="hidden sm:block">
                <span className="text-2xl font-black tracking-tight">FÍSICA</span>
                <div className="text-xs text-netflix-light-gray font-light -mt-1">sem mistério</div>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id as any)}
                className={`flex items-center space-x-2 text-sm font-medium transition-all duration-300 hover:text-white relative group ${
                  activeSection === item.id ? 'text-white' : 'text-netflix-light-gray'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <div className="absolute -bottom-6 left-0 right-0 h-1 bg-netflix-red rounded-full"></div>
                )}
                <div className="absolute -bottom-6 left-0 right-0 h-1 bg-netflix-red rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </button>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-6">
            <button className="text-white hover:text-netflix-light-gray transition-colors duration-300 netflix-button">
              <Search size={22} />
            </button>
            <button className="text-white hover:text-netflix-light-gray transition-colors duration-300 netflix-button relative">
              <Bell size={22} />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-netflix-red rounded-full"></div>
            </button>
            <button className="text-white hover:text-netflix-light-gray transition-colors duration-300 netflix-button">
              <div className="w-8 h-8 bg-netflix-red rounded flex items-center justify-center">
                <User size={18} />
              </div>
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white hover:text-netflix-light-gray transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-netflix-dark border-t border-netflix-gray animate-netflix-slide">
            <nav className="py-6 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id as any);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-3 w-full text-left px-6 py-3 text-base font-medium transition-all duration-300 hover:bg-netflix-gray ${
                    activeSection === item.id ? 'text-white bg-netflix-gray border-l-4 border-netflix-red' : 'text-netflix-light-gray'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NetflixHeader;