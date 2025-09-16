import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Plus, ThumbsUp, Star } from 'lucide-react';

interface ContentCarouselProps {
  onSectionChange: (section: 'conservacao' | 'rotacao' | 'simulacoes' | 'questoes') => void;
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({ onSectionChange }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const sections = [
    {
      id: 'conservacao',
      title: 'Laboratório Energético',
      description: 'Explore como a energia se transforma mas nunca se perde',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop',
      category: 'Teoria Fundamental',
      rating: '98% Relevante',
      duration: '45 min'
    },
    {
      id: 'rotacao',
      title: 'Mundo Rotacional',
      description: 'Descubra os segredos do mundo que gira ao nosso redor',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop',
      category: 'Dinâmica Rotacional',
      rating: '95% Relevante',
      duration: '38 min'
    },
    {
      id: 'simulacoes',
      title: 'Experiências Virtuais',
      description: 'Experimente com simulações interativas do PhET Colorado',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop',
      category: 'Laboratório Virtual',
      rating: '92% Relevante',
      duration: 'Interativo'
    },
    {
      id: 'questoes',
      title: 'Desafios do Conhecimento',
      description: 'Teste seus conhecimentos com questões de vestibulares',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop',
      category: 'Avaliação',
      rating: '89% Relevante',
      duration: '60+ questões'
    }
  ];

  return (
    <div className="bg-netflix-dark py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">
          🔥 Populares na Física
        </h2>
        
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-netflix-dark/80 hover:bg-netflix-dark text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 netflix-button"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-netflix-dark/80 hover:bg-netflix-dark text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 netflix-button"
          >
            <ChevronRight size={28} />
          </button>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {sections.map((section) => (
              <div
                key={section.id}
                className="flex-none w-80 group/item cursor-pointer netflix-card"
                onClick={() => onSectionChange(section.id as any)}
              >
                <div className="relative overflow-hidden rounded-lg bg-netflix-gray transition-all duration-300">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover/item:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-netflix-dark/90 via-netflix-dark/30 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-4 right-4">
                      <div className="flex space-x-2">
                        <button className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors netflix-button">
                          <Plus size={16} className="text-white" />
                        </button>
                        <button className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors netflix-button">
                          <ThumbsUp size={16} className="text-white" />
                        </button>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-white bg-netflix-red px-3 py-1 rounded font-bold">
                          {section.category}
                        </span>
                        <button className="bg-white hover:bg-netflix-light-gray text-black rounded-full p-2 transition-colors netflix-button">
                          <Play size={18} fill="currentColor" />
                        </button>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-netflix-light-gray">
                        <span className="text-green-400 font-semibold">{section.rating}</span>
                        <span>•</span>
                        <span>{section.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover/item:text-netflix-light-gray transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-sm text-netflix-muted line-clamp-2 leading-relaxed">
                    {section.description}
                  </p>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-yellow-400 fill-current" />
                    ))}
                    <span className="text-xs text-netflix-muted ml-2">Altamente Recomendado</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Physics Images Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">📚 Conceitos Fundamentais</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="relative group cursor-pointer">
              <img
               src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
                alt="Energia Cinética"
                className="w-full h-36 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105 netflix-card"
              />
              <div className="absolute inset-0 bg-netflix-dark/70 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold text-lg">Energia Cinética</span>
              </div>
            </div>
            
            <div className="relative group cursor-pointer">
              <img
               src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
                alt="Energia Potencial"
                className="w-full h-36 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105 netflix-card"
              />
              <div className="absolute inset-0 bg-netflix-dark/70 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold text-lg">Energia Potencial</span>
              </div>
            </div>
            
            <div className="relative group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
                alt="Momento Angular"
                className="w-full h-36 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105 netflix-card"
              />
              <div className="absolute inset-0 bg-netflix-dark/70 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold text-lg">Momento Angular</span>
              </div>
            </div>
            
            <div className="relative group cursor-pointer">
              <img
               src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
                alt="Conservação"
                className="w-full h-36 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105 netflix-card"
              />
              <div className="absolute inset-0 bg-netflix-dark/70 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold text-lg">Conservação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;