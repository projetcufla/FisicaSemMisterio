import React, { useState } from 'react';
import { ArrowLeft, Cog, Calculator } from 'lucide-react';
import SubTabButton from '../ui/SubTabButton';
import FormulaCard from '../ui/FormulaCard';

interface MovimentoRotacaoProps {
  onBack?: () => void;
}

const MovimentoRotacao: React.FC<MovimentoRotacaoProps> = ({ onBack }) => {
  const [activeSubTab, setActiveSubTab] = useState<'teoria' | 'formulas'>('teoria');

  const renderTeoria = () => (
    <div className="space-y-8">
      <div className="relative h-96 rounded-lg overflow-hidden">
        <img
          src="https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
          alt="Movimento de Rotação"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-netflix-dark/90 via-netflix-dark/50 to-transparent flex items-center">
          <div className="max-w-2xl px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center">
              <Cog className="mr-4" />
              Movimento de Rotação
            </h2>
            <p className="text-xl text-gray-200">
              Descobrindo o mundo que gira ao nosso redor
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-8">
        <section className="bg-netflix-gray rounded-lg p-8 border border-netflix-gray">
          <h3 className="text-2xl font-bold text-white mb-6 text-blue-400">
            🎯 Resumo Teórico
          </h3>
          <div className="text-gray-300 space-y-6 leading-relaxed">
            <p className="text-lg">
              O movimento de rotação está presente em todos os lugares: desde a Terra girando em torno 
              do seu eixo até as rodas de um carro. Assim como no movimento linear, onde temos 
              conceitos como velocidade e aceleração, no movimento rotacional temos conceitos análogos 
              mas que descrevem a rotação.
            </p>
            <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-lg p-6 border border-blue-700/50">
              <p className="font-semibold text-blue-300">🔄 Analogia Útil:</p>
              <p className="mt-2">
                Pense no movimento rotacional como o "primo circular" do movimento linear. 
                Cada conceito linear tem seu equivalente rotacional!
              </p>
            </div>
          </div>
        </section>

        <section className="bg-netflix-gray rounded-lg p-8 border border-netflix-gray">
          <h3 className="text-2xl font-bold text-white mb-6 text-purple-400">
            🌪️ Conceitos Fundamentais
          </h3>
          <div className="grid gap-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-purple-700/50">
              <h4 className="text-lg font-semibold text-purple-300 mb-3">
                Velocidade Angular (ω)
              </h4>
              <p className="text-gray-300 mb-3">
                Mede quão rápido algo gira. É o equivalente rotacional da velocidade linear.
              </p>
              <div className="bg-purple-900/20 rounded p-4">
                <p className="text-purple-200 text-sm">
                  <strong>Exemplos:</strong> Hélices de ventilador, rodas de bicicleta, patinadores no gelo fazendo piruetas.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-orange-700/50">
              <h4 className="text-lg font-semibold text-orange-300 mb-3">
                Aceleração Angular (α)
              </h4>
              <p className="text-gray-300 mb-3">
                A mudança na velocidade de rotação ao longo do tempo.
              </p>
              <div className="bg-orange-900/20 rounded p-4">
                <p className="text-orange-200 text-sm">
                  <strong>Exemplos:</strong> Motor de carro acelerando, pião perdendo velocidade, máquina de lavar entrando em centrifugação.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-green-700/50">
              <h4 className="text-lg font-semibold text-green-300 mb-3">
                Torque (τ)
              </h4>
              <p className="text-gray-300 mb-3">
                A "força de rotação" que causa a aceleração angular. É como a força no movimento linear.
              </p>
              <div className="bg-green-900/20 rounded p-4">
                <p className="text-green-200 text-sm">
                  <strong>Exemplos:</strong> Apertar um parafuso com chave de fenda, abrir uma porta, usar uma alavanca.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-red-700/50">
              <h4 className="text-lg font-semibold text-red-300 mb-3">
                Momento de Inércia (I)
              </h4>
              <p className="text-gray-300 mb-3">
                A resistência de um corpo à mudança em seu movimento de rotação. É como a massa no movimento linear.
              </p>
              <div className="bg-red-900/20 rounded p-4">
                <p className="text-red-200 text-sm">
                  <strong>Curiosidade:</strong> Patinadores fecham os braços para diminuir seu momento de inércia e girar mais rápido!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-netflix-gray rounded-lg p-8 border border-netflix-gray">
          <h3 className="text-2xl font-bold text-white mb-6 text-yellow-400">
            ⚡ Energia Cinética de Rotação
          </h3>
          <div className="text-gray-300 space-y-6 leading-relaxed">
            <p className="text-lg">
              Assim como um objeto em movimento linear tem energia cinética, um objeto que gira 
              também possui energia cinética rotacional. Esta energia depende do momento de inércia 
              e da velocidade angular do objeto.
            </p>
            
            <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-lg p-6 border border-yellow-700/50">
              <p className="font-semibold text-yellow-300">🎡 Energia Total em Movimento:</p>
              <p className="mt-2 mb-3">
                Quando um objeto rola (como uma bola descendo uma rampa), ele possui DUAS energias cinéticas:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Translacional:</strong> devido ao movimento do centro de massa</li>
                <li><strong>Rotacional:</strong> devido ao giro em torno do seu eixo</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-900/20 rounded-lg p-6 border border-blue-700">
                <h4 className="text-blue-300 font-semibold mb-3">🏀 Exemplo: Bola de Basquete</h4>
                <p className="text-sm">
                  Quando você arremessa uma bola com rotação, ela tem energia cinética de translação 
                  (movimento através do ar) E energia cinética de rotação (giro da bola).
                </p>
              </div>
              <div className="bg-green-900/20 rounded-lg p-6 border border-green-700">
                <h4 className="text-green-300 font-semibold mb-3">🛞 Exemplo: Roda de Bicicleta</h4>
                <p className="text-sm">
                  A roda de uma bicicleta em movimento possui energia cinética rotacional, 
                  que é por isso que é mais difícil parar uma bicicleta em alta velocidade.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  const renderFormulas = () => (
    <div className="space-y-8">
      <div className="relative h-64 rounded-lg overflow-hidden">
        <img
          src="https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=1920&h=400&fit=crop"
          alt="Fórmulas de Rotação"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-netflix-dark/90 via-netflix-dark/50 to-transparent flex items-center">
          <div className="max-w-2xl px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center">
              <Calculator className="mr-3" />
              Fórmulas do Movimento de Rotação
            </h2>
            <p className="text-lg text-gray-200">
              Matemática do mundo rotacional
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        <FormulaCard
          title="Energia Cinética de Rotação"
          formula="$E_{rot} = \frac{1}{2}I\ ω^2$"
          description="A energia cinética rotacional depende do momento de inércia e do quadrado da velocidade angular."
          variables={[
            { symbol: "Erot", meaning: "Energia cinética rotacional (J)" },
            { symbol: "I", meaning: "Momento de inércia (kg⋅m²)" },
            { symbol: "ω", meaning: "Velocidade angular (rad/s)" }
          ]}
        />

        <FormulaCard
          title="Torque"
          formula="$$\\tau = I\\alpha $$"
          description="O torque é o produto do momento de inércia pela aceleração angular. É a 'segunda lei de Newton' para rotação."
          variables={[
            { symbol: "τ", meaning: "Torque (N⋅m)" },
            { symbol: "I", meaning: "Momento de inércia (kg⋅m²)" },
            { symbol: "α", meaning: "Aceleração angular (rad/s²)" }
          ]}
        />

        <div className="grid md:grid-cols-2 gap-6">
          <FormulaCard
            title="Momento de Inércia (Partícula)"
            formula="$$I = mr^2$$"
            description="Para uma partícula pontual, o momento de inércia é o produto da massa pelo quadrado da distância ao eixo."
            variables={[
              { symbol: "I", meaning: "Momento de inércia (kg⋅m²)" },
              { symbol: "m", meaning: "Massa (kg)" },
              { symbol: "r", meaning: "Distância ao eixo de rotação (m)" }
            ]}
          />

          <FormulaCard
            title="Relação Velocidades"
            formula="$$v = \\omega r$$"
            description="A velocidade linear de um ponto na periferia de um objeto rotativo."
            variables={[
              { symbol: "v", meaning: "Velocidade linear (m/s)" },
              { symbol: "ω", meaning: "Velocidade angular (rad/s)" },
              { symbol: "r", meaning: "Raio (m)" }
            ]}
          />
        </div>

        <div className="bg-netflix-gray rounded-lg p-6 border border-purple-500">
          <h3 className="text-xl font-bold text-purple-400 mb-4">🎯 Momentos de Inércia Comuns</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-netflix-dark rounded p-4">
              <h4 className="font-semibold text-yellow-300 mb-2">Esfera Sólida</h4>
              <code className="text-yellow-200">I = (2/5)mr²</code>
            </div>
            <div className="bg-netflix-dark rounded p-4">
              <h4 className="font-semibold text-blue-300 mb-2">Anel</h4>
              <code className="text-blue-200">I = mr²</code>
            </div>
            <div className="bg-netflix-dark rounded p-4">
              <h4 className="font-semibold text-green-300 mb-2">Cilindro Sólido</h4>
              <code className="text-green-200">I = (1/2)mr²</code>
            </div>
          </div>
        </div>
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

        {/* Sub-navigation */}
        <div className="flex space-x-4 bg-gray-900 p-4 rounded-lg mb-6">
          <SubTabButton
            isActive={activeSubTab === 'teoria'}
            onClick={() => setActiveSubTab('teoria')}
          >
            📚 Teoria
          </SubTabButton>
          <SubTabButton
            isActive={activeSubTab === 'formulas'}
            onClick={() => setActiveSubTab('formulas')}
          >
            📐 Fórmulas
          </SubTabButton>
        </div>

        {/* Content */}
        {activeSubTab === 'teoria' ? renderTeoria() : renderFormulas()}
      </div>
    </div>
  );
};

export default MovimentoRotacao;