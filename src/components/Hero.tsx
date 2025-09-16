import React from 'react';
import { Play, Info, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-start overflow-hidden pt-32 pb-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(20,20,20,0.9), rgba(20,20,20,0.3)), url('/ie_4746-768x529.webp')`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-white">
        <div className="max-w-2xl space-y-8 animate-netflix-fade">
          {/* Netflix-style category badge */}
          <div className="flex items-center space-x-3">
            <span className="bg-netflix-red px-3 py-1 text-sm font-bold rounded">SÉRIE ORIGINAL</span>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-current" />
              ))}
              <span className="text-sm text-netflix-light-gray ml-2">4.9/5</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
            <span className="text-netflix-red">FÍSICA</span>
            <br />
            <span className="text-white font-light">sem Mistério</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-netflix-light-gray leading-relaxed max-w-xl">
            Explore os segredos do universo através da conservação de energia, 
            movimento de rotação e simulações interativas
          </p>

          {/* Lavoisier Quote Section */}
          <div className="bg-netflix-dark/80 backdrop-blur-sm rounded-lg p-6 border border-netflix-gray">
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-20 h-20 rounded-full bg-netflix-gray border-2 border-netflix-red overflow-hidden flex-shrink-0">
                <img 
                  src="/Lavoisier.png" 
                  alt="Lavoisier" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <blockquote className="text-lg md:text-xl italic text-netflix-red mb-2 font-medium">
                  "A energia não pode ser criada nem destruída, apenas transformada de uma forma em outra."
                </blockquote>
                <cite className="text-sm text-netflix-muted">— Lei da Conservação de Energia</cite>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => {
                // Trigger navigation to simulacoes section
                const event = new CustomEvent('navigateToSection', { detail: 'simulacoes' });
                window.dispatchEvent(event);
              }}
              className="flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-md font-bold text-lg hover:bg-netflix-light-gray transition-all duration-300 netflix-button"
            >
              <Play size={24} fill="currentColor" />
              <span>▶ Assistir Agora</span>
            </button>
            
            <button className="flex items-center space-x-3 bg-netflix-gray/80 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-netflix-gray transition-all duration-300 netflix-button">
              <Info size={24} />
              <span>Mais Informações</span>
            </button>
          </div>
          
          {/* Netflix-style metadata */}
          <div className="flex items-center space-x-6 text-sm text-netflix-muted">
            <span className="border border-netflix-muted px-2 py-1 rounded text-xs">HD</span>
            <span>2025</span>
            <span>Educacional</span>
            <span>Física</span>
            <span>Interativo</span>
          </div>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-netflix-dark to-transparent" />
    </div>
  );
};

export default Hero;