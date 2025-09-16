import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Play, Maximize } from 'lucide-react';

interface SimulacoesFisicaProps {
  onBack?: () => void;
}

const SimulacoesFisica: React.FC<SimulacoesFisicaProps> = ({ onBack }) => {
  const [activeSimulation, setActiveSimulation] = useState<'projectile' | 'pendulum' | 'rotation' | null>(null);

  const simulations = [
    {
      id: 'projectile',
      title: 'Movimento de Projétil',
      description: 'Explore as trajetórias parabólicas e a conservação de energia em lançamentos de projéteis.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      url: 'https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion_all.html?locale=pt_BR',
      concepts: ['Energia Cinética', 'Energia Potencial', 'Trajetória Parabólica', 'Conservação de Energia']
    },
    {
      id: 'pendulum',
      title: 'Laboratório de Pêndulo',
      description: 'Investigue o movimento pendular e observe como a energia se transforma entre cinética e potencial.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      url: 'https://phet.colorado.edu/sims/html/pendulum-lab/latest/pendulum-lab_all.html?locale=pt_BR',
      concepts: ['Movimento Harmônico', 'Energia Potencial', 'Energia Cinética', 'Amortecimento']
    },
    {
      id: 'rotation',
      title: 'Rotação e Momento Angular',
      description: 'Explore os conceitos de rotação, momento angular e conservação do momento angular.',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      url: 'https://phet.colorado.edu/sims/cheerpj/rotation/latest/rotation.html?simulation=rotation&locale=pt_BR',
      concepts: ['Momento Angular', 'Velocidade Angular', 'Energia Rotacional', 'Conservação']
    }
  ];

  const renderSimulationFrame = (simulation: typeof simulations[0]) => (
    <div className="bg-netflix-gray rounded-lg overflow-hidden border border-netflix-gray">
      <div className="flex items-center justify-between p-4 bg-netflix-dark border-b border-netflix-gray">
        <h3 className="text-lg font-semibold text-white">{simulation.title}</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => window.open(simulation.url, '_blank')}
            className="flex items-center space-x-1 px-3 py-1 bg-netflix-red text-white rounded text-sm hover:bg-netflix-red-hover transition-colors netflix-button"
          >
            <ExternalLink size={14} />
            <span>Abrir em Nova Aba</span>
          </button>
          <button
            onClick={() => setActiveSimulation(null)}
            className="px-3 py-1 bg-netflix-gray text-white rounded text-sm hover:bg-gray-700 transition-colors netflix-button"
          >
            Fechar
          </button>
        </div>
      </div>
      <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
        <iframe
          src={simulation.url}
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation allow-top-navigation-by-user-activation"
          allowFullScreen
          title={simulation.title}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-netflix-dark pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Voltar</span>
          </button>
        )}

        {/* Header */}
        <div className="relative h-64 rounded-lg overflow-hidden mb-8">
          <img
            src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1920&h=400&fit=crop"
            alt="Simulações de Física"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-netflix-dark/90 via-netflix-dark/50 to-transparent flex items-center">
            <div className="max-w-2xl px-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                🧪 Simulações de Física
              </h1>
              <p className="text-xl text-gray-200">
                Experimente com simulações interativas do PhET Colorado
              </p>
            </div>
          </div>
        </div>

        {/* Active Simulation */}
        {activeSimulation && (
          <div className="mb-8">
            {renderSimulationFrame(simulations.find(s => s.id === activeSimulation)!)}
          </div>
        )}

        {/* Simulation Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {simulations.map((simulation) => (
            <div
              key={simulation.id}
              className="bg-netflix-gray rounded-lg overflow-hidden border border-netflix-gray hover:border-netflix-red transition-colors netflix-card"
            >
              <div className="relative">
                <img
                  src={simulation.image}
                  alt={simulation.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => setActiveSimulation(simulation.id as any)}
                    className="flex items-center space-x-2 bg-netflix-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-netflix-red-hover transition-colors netflix-button"
                  >
                    <Play size={20} />
                    <span>Iniciar Simulação</span>
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{simulation.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {simulation.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Conceitos Abordados:</h4>
                  <div className="flex flex-wrap gap-2">
                    {simulation.concepts.map((concept, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs border border-blue-600/30"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={() => setActiveSimulation(simulation.id as any)}
                    className="flex-1 flex items-center justify-center space-x-2 bg-netflix-red text-white py-2 rounded font-medium hover:bg-netflix-red-hover transition-colors netflix-button"
                  >
                    <Play size={16} />
                    <span>Executar</span>
                  </button>
                  
                  <button
                    onClick={() => window.open(simulation.url, '_blank')}
                    className="flex items-center justify-center space-x-2 bg-netflix-gray text-white px-4 py-2 rounded font-medium hover:bg-gray-600 transition-colors netflix-button"
                  >
                    <Maximize size={16} />
                    <span>Tela Cheia</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-12 bg-netflix-gray rounded-lg p-6 border border-netflix-gray">
          <h3 className="text-xl font-bold text-white mb-4">📋 Como Usar as Simulações</h3>
          <div className="grid md:grid-cols-3 gap-6 text-netflix-light-gray">
            <div>
              <h4 className="font-semibold text-netflix-red mb-2">Movimento de Projétil:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Ajuste o ângulo e velocidade inicial</li>
                <li>• Observe a trajetória parabólica</li>
                <li>• Analise os gráficos de energia</li>
                <li>• Experimente diferentes massas</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-netflix-red mb-2">Laboratório de Pêndulo:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Varie o comprimento do pêndulo</li>
                <li>• Modifique o ângulo inicial</li>
                <li>• Observe a conservação de energia</li>
                <li>• Teste diferentes condições de atrito</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-netflix-red mb-2">Rotação e Momento Angular:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Explore diferentes formas geométricas</li>
                <li>• Varie a distribuição de massa</li>
                <li>• Observe a conservação do momento angular</li>
                <li>• Analise a energia rotacional</li>
              </ul>
            </div>
          </div>
        </div>

        {/* PhET Credit */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Simulações fornecidas pelo{' '}
            <a
              href="https://phet.colorado.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              PhET Interactive Simulations - University of Colorado Boulder
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimulacoesFisica;