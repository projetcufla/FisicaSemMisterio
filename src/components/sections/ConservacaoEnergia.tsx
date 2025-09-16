import React, { useState } from 'react';
import { ArrowLeft, Book, Calculator } from 'lucide-react';
import SubTabButton from '../ui/SubTabButton';
import FormulaCard from '../ui/FormulaCard';

interface ConservacaoEnergiaProps {
  onBack?: () => void;
}

const ConservacaoEnergia: React.FC<ConservacaoEnergiaProps> = ({ onBack }) => {
  const [activeSubTab, setActiveSubTab] = useState<'teoria' | 'formulas'>('teoria');

  const renderTeoria = () => (
    <div className="space-y-8">
      <div className="relative h-96 rounded-lg overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
          alt="Conservação de Energia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-netflix-dark/90 via-netflix-dark/50 to-transparent flex items-center">
          <div className="max-w-2xl px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ⚡ Lei de Conservação de Energia
            </h2>
            <p className="text-xl text-netflix-light-gray">
              "Nada se perde, tudo se transforma"
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-8">
        <section className="bg-netflix-gray rounded-lg p-8 border border-netflix-gray">
          <h3 className="text-2xl font-bold text-white mb-6 text-netflix-red flex items-center">
            <Book className="mr-3" />
            Resumo Teórico
          </h3>
          <div className="text-netflix-light-gray space-y-6 leading-relaxed">
            <p className="text-lg">
              A Lei de Conservação de Energia é um dos princípios fundamentais da física. 
              Ela afirma que a energia total de um sistema isolado permanece constante ao longo do tempo. 
              Em outras palavras, a energia pode ser transformada de uma forma para outra, 
              mas nunca pode ser criada ou destruída.
            </p>
            <p>
              Esta lei revolucionária nos ajuda a entender como a energia se comporta no universo, 
              desde o movimento dos planetas até as reações químicas em nosso corpo.
            </p>
            
            <div className="bg-gradient-to-r from-netflix-red/20 to-yellow-900/30 rounded-lg p-6 border border-netflix-red/50">
              <h4 className="text-xl font-semibold text-netflix-red mb-3">💡 Conceito Fundamental</h4>
              <p className="text-white">
                A energia total do universo é constante. Quando observamos mudanças energéticas, 
                estamos vendo transformações, não criação ou destruição de energia.
              </p>
            </div>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-netflix-gray rounded-lg p-6 border border-netflix-gray">
            <h3 className="text-2xl font-bold text-white mb-4 text-green-400">
              🏃 Energia Cinética
            </h3>
            <div className="text-netflix-light-gray space-y-4 leading-relaxed">
              <p>
                A energia cinética está associada ao movimento de um corpo. Todo objeto em movimento 
                possui energia cinética, que depende diretamente de sua massa e velocidade.
              </p>
              <div className="bg-netflix-dark rounded-lg p-4 border-l-4 border-green-500">
                <p className="font-semibold text-green-300">💡 Fato Interessante:</p>
                <p className="text-sm mt-1">
                  Quando você dobra a velocidade de um objeto, sua energia cinética quadruplica! 
                  Isso explica por que acidentes de trânsito em alta velocidade são muito mais perigosos.
                </p>
              </div>
              <p className="text-sm">
                Exemplos do dia a dia: uma bola rolando, um carro em movimento, 
                suas mãos se movendo enquanto você digita.
              </p>
            </div>
          </section>

          <section className="bg-netflix-gray rounded-lg p-6 border border-netflix-gray">
            <h3 className="text-2xl font-bold text-white mb-4 text-yellow-400">
              ⛰️ Energia Potencial
            </h3>
            <div className="text-netflix-light-gray space-y-4 leading-relaxed">
              <p>
                A energia potencial gravitacional é a energia de "reserva" que um corpo possui 
                devido à sua posição em um campo gravitacional. É como se fosse energia armazenada, 
                pronta para ser liberada.
              </p>
              <div className="bg-netflix-dark rounded-lg p-4 border-l-4 border-yellow-500">
                <p className="font-semibold text-yellow-300">🌍 Exemplos Práticos:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
                  <li>Uma pedra no alto de uma montanha</li>
                  <li>Água represada em uma usina hidrelétrica</li>
                  <li>Um livro em uma prateleira alta</li>
                  <li>Um esquiador no topo de uma pista</li>
                </ul>
              </div>
              <p className="text-sm">
                Quanto mais alto um objeto estiver, maior será sua energia potencial gravitacional. 
                Quando o objeto cai, essa energia é convertida em energia cinética.
              </p>
            </div>
          </section>
        </div>

        <section className="bg-netflix-gray rounded-lg p-6 border border-netflix-gray">
          <h3 className="text-2xl font-bold text-white mb-4 text-netflix-red">
            🔄 Sistemas Conservativos e Dissipativos
          </h3>
          <div className="text-netflix-light-gray space-y-4 leading-relaxed">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-900/20 rounded-lg p-4 border border-green-700">
                <h4 className="text-lg font-semibold text-green-400 mb-2">✅ Sistemas Conservativos</h4>
                <p className="text-sm">
                  A energia mecânica total se mantém constante. Exemplo teórico: 
                  um pêndulo no vácuo, sem atrito.
                </p>
              </div>
              <div className="bg-red-900/20 rounded-lg p-4 border border-red-700">
                <h4 className="text-lg font-semibold text-red-400 mb-2">❌ Sistemas Dissipativos</h4>
                <p className="text-sm">
                  Parte da energia mecânica é perdida, geralmente convertida em calor. 
                  Exemplo: um pêndulo real com atrito do ar.
                </p>
              </div>
            </div>
            
            <div className="bg-netflix-dark rounded-lg p-4 border-l-4 border-orange-500">
              <p className="font-semibold text-orange-300">🔬 Exemplo do Pêndulo:</p>
              <p className="text-sm mt-1">
                Um pêndulo ideal, sem atrito, seria um sistema conservativo - ele balançaria para sempre! 
                Mas na realidade, a resistência do ar e o atrito nos pontos de apoio transformam 
                energia mecânica em calor e som, fazendo o pêndulo parar gradualmente.
              </p>
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
          src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1920&h=400&fit=crop"
          alt="Fórmulas Matemáticas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-netflix-dark/90 via-netflix-dark/50 to-transparent flex items-center">
          <div className="max-w-2xl px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center">
              <Calculator className="mr-3" />
              Fórmulas da Conservação de Energia
            </h2>
            <p className="text-lg text-netflix-light-gray">
              Matemática por trás dos fenômenos energéticos
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        <FormulaCard
          title="Energia Cinética"
          formula="$E_c = \frac{1}{2}mv^2$"
          description="A energia cinética é diretamente proporcional à massa e ao quadrado da velocidade do objeto."
          variables={[
            { symbol: "Ec", meaning: "Energia cinética (J - Joules)" },
            { symbol: "m", meaning: "Massa do objeto (kg)" },
            { symbol: "v", meaning: "Velocidade do objeto (m/s)" }
          ]}
        />

        <FormulaCard
          title="Energia Potencial Gravitacional"
          formula="$$E_p = mgh$$"
          description="A energia potencial gravitacional depende da massa, gravidade e altura do objeto."
          variables={[
            { symbol: "Ep", meaning: "Energia potencial gravitacional (J)" },
            { symbol: "m", meaning: "Massa do objeto (kg)" },
            { symbol: "g", meaning: "Aceleração da gravidade (≈ 9,8 m/s²)" },
            { symbol: "h", meaning: "Altura em relação ao referencial (m)" }
          ]}
        />

        <FormulaCard
          title="Energia Mecânica Total"
          formula="$$E_m = E_c + E_p$$"
          description="A energia mecânica total é a soma da energia cinética e potencial do sistema."
          variables={[
            { symbol: "Em", meaning: "Energia mecânica total (J)" },
            { symbol: "Ec", meaning: "Energia cinética (J)" },
            { symbol: "Ep", meaning: "Energia potencial (J)" }
          ]}
        />

        <div className="grid md:grid-cols-2 gap-6">
          <FormulaCard
            title="Sistemas Conservativos"
            formula="$$\\Δ E_m = 0$$"
            description="Em sistemas conservativos, a variação da energia mecânica é zero."
            variables={[
              { symbol: "ΔEm", meaning: "Variação da energia mecânica" },
              { symbol: "0", meaning: "A energia total se conserva" }
            ]}
          />

          <FormulaCard
            title="Sistemas Dissipativos"
            formula="$$\\Δ E_m = \\tau_{atrito}$$"
            description="Em sistemas dissipativos, a energia perdida é igual ao trabalho das forças dissipativas."
            variables={[
              { symbol: "ΔEm", meaning: "Variação da energia mecânica" },
              { symbol: "τatrito", meaning: "Trabalho das forças de atrito (J)" }
            ]}
          />
        </div>

        <div className="bg-netflix-gray rounded-lg p-6 border border-netflix-red">
          <h3 className="text-xl font-bold text-netflix-red mb-4">🧮 Dica para Resolução de Problemas</h3>
          <div className="text-netflix-light-gray space-y-2">
            <p><strong>1.</strong> Identifique se o sistema é conservativo ou dissipativo</p>
            <p><strong>2.</strong> Escolha um referencial para a altura (h = 0)</p>
            <p><strong>3.</strong> Calcule a energia inicial e final do sistema</p>
            <p><strong>4.</strong> Aplique a conservação de energia: E₁ = E₂ (conservativo) ou E₁ = E₂ + Energia dissipada</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-netflix-dark pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-netflix-muted hover:text-white mb-8 transition-colors duration-300 netflix-button"
          >
            <ArrowLeft size={20} />
            <span>Voltar</span>
          </button>
        )}

        {/* Sub-navigation */}
        <div className="flex space-x-4 bg-netflix-gray p-6 rounded-lg mb-8">
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

export default ConservacaoEnergia;