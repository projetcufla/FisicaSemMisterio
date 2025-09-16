import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, XCircle, Award, Brain } from 'lucide-react';

interface QuestoesDesafiosProps {
  onBack?: () => void;
}

interface Question {
  id: number;
  category: 'conservacao' | 'rotacao';
  difficulty: 'medio' | 'dificil';
  source: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  formula?: string;
}

const QuestoesDesafios: React.FC<QuestoesDesafiosProps> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'conservacao' | 'rotacao'>('all');
  const [currentQuestion, setCurrentQuestion] = useState<number | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const questions: Question[] = [
    {
      id: 1,
      category: 'conservacao',
      difficulty: 'medio',
      source: 'ENEM 2019',
      question: 'Um objeto de massa 2 kg é lançado verticalmente para cima com velocidade inicial de 20 m/s. Desprezando a resistência do ar e considerando g = 10 m/s², qual é a altura máxima atingida pelo objeto?',
      options: ['10 m', '20 m', '30 m', '40 m', '50 m'],
      correctAnswer: 1,
      explanation: 'Usando conservação de energia: Ec inicial = Ep final → ½mv² = mgh → h = v²/(2g) = 400/20 = 20 m',
      formula: '$$h = \\frac{v^2}{2g}$$'
    },
    {
      id: 2,
      category: 'conservacao',
      difficulty: 'dificil',
      source: 'Vestibular UFMG',
      question: 'Uma esfera de massa 0,5 kg desliza sem atrito por uma pista. Partindo do repouso de uma altura de 5 m, qual será sua velocidade ao passar pelo ponto mais baixo da pista?',
      options: ['5 m/s', '7 m/s', '10 m/s', '14 m/s', '20 m/s'],
      correctAnswer: 2,
      explanation: 'Por conservação de energia: mgh = ½mv² → v = √(2gh) = √(2×10×5) = √100 = 10 m/s',
      formula: '$$v = \\sqrt{2gh}$$'
    },
    {
      id: 3,
      category: 'rotacao',
      difficulty: 'medio',
      source: 'ENEM 2020',
      question: 'Uma roda de bicicleta de raio 0,3 m gira com velocidade angular de 10 rad/s. Qual é a velocidade linear de um ponto na borda da roda?',
      options: ['1 m/s', '2 m/s', '3 m/s', '4 m/s', '5 m/s'],
      correctAnswer: 2,
      explanation: 'A velocidade linear é dada por v = ωr = 10 × 0,3 = 3 m/s',
      formula: '$$v = \\omega r$$'
    },
    {
      id: 4,
      category: 'rotacao',
      difficulty: 'dificil',
      source: 'Vestibular USP',
      question: 'Uma esfera sólida de massa 2 kg e raio 0,2 m rola sem deslizar por uma rampa. Se sua velocidade linear no final da rampa é 6 m/s, qual é sua energia cinética total?',
      options: ['18 J', '36 J', '42 J', '54 J', '72 J'],
      correctAnswer: 2,
      explanation: 'Para esfera sólida: I = (2/5)mr². Energia total = ½mv² + ½Iω² = ½mv² + ½(2/5)mr²(v/r)² = ½mv²(1 + 2/5) = ½ × 2 × 36 × 1,4 = 42 J',
      formula: '$$E_{total} = \\frac{1}{2}mv^2\\left(1 + \\frac{I}{mr^2}\\right)$$'
    },
    {
      id: 5,
      category: 'conservacao',
      difficulty: 'medio',
      source: 'ENEM 2021',
      question: 'Um pêndulo simples oscila entre duas posições extremas. Se a altura máxima atingida é 0,2 m acima do ponto mais baixo, qual é a velocidade máxima do pêndulo? (g = 10 m/s²)',
      options: ['1 m/s', '2 m/s', '3 m/s', '4 m/s', '5 m/s'],
      correctAnswer: 1,
      explanation: 'No ponto mais baixo, toda energia potencial se converte em cinética: mgh = ½mv² → v = √(2gh) = √(2×10×0,2) = 2 m/s',
      formula: '$$v_{max} = \\sqrt{2gh}$$'
    },
    {
      id: 6,
      category: 'rotacao',
      difficulty: 'dificil',
      source: 'Vestibular UNICAMP',
      question: 'Dois objetos de mesma massa rolam por uma rampa: uma esfera sólida e um anel. Qual chegará primeiro à base da rampa?',
      options: ['A esfera sólida', 'O anel', 'Chegam juntos', 'Depende da massa', 'Depende do raio'],
      correctAnswer: 0,
      explanation: 'A esfera sólida tem menor momento de inércia (I = 2/5 mr²) que o anel (I = mr²), então mais energia vai para translação, chegando primeiro.',
      formula: '$$I_{esfera} = \\frac{2}{5}mr^2 < I_{anel} = mr^2$$'
    }
  ];

  const filteredQuestions = selectedCategory === 'all' 
    ? questions 
    : questions.filter(q => q.category === selectedCategory);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null || currentQuestion === null) return;
    
    const question = questions.find(q => q.id === currentQuestion);
    if (!question) return;

    const isCorrect = selectedAnswer === question.correctAnswer;
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
    
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(null);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const renderQuestionCard = (question: Question) => (
    <div
      key={question.id}
      className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors cursor-pointer"
      onClick={() => setCurrentQuestion(question.id)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
            question.category === 'conservacao' 
              ? 'bg-blue-600/20 text-blue-300 border border-blue-600/30'
              : 'bg-green-600/20 text-green-300 border border-green-600/30'
          }`}>
            {question.category === 'conservacao' ? 'Conservação' : 'Rotação'}
          </div>
          <div className={`px-2 py-1 rounded text-xs ${
            question.difficulty === 'medio' 
              ? 'bg-yellow-600/20 text-yellow-300'
              : 'bg-red-600/20 text-red-300'
          }`}>
            {question.difficulty === 'medio' ? 'Médio' : 'Difícil'}
          </div>
        </div>
        <span className="text-xs text-gray-400">{question.source}</span>
      </div>
      
      <p className="text-white mb-4 leading-relaxed">{question.question}</p>
      
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">Questão #{question.id}</span>
        <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
          Responder →
        </button>
      </div>
    </div>
  );

  const renderQuestionDetail = () => {
    const question = questions.find(q => q.id === currentQuestion);
    if (!question) return null;

    return (
      <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${
              question.category === 'conservacao' 
                ? 'bg-blue-600/20 text-blue-300 border border-blue-600/30'
                : 'bg-green-600/20 text-green-300 border border-green-600/30'
            }`}>
              {question.category === 'conservacao' ? 'Conservação de Energia' : 'Movimento de Rotação'}
            </div>
            <span className="text-sm text-gray-400">{question.source}</span>
          </div>
          <button
            onClick={() => setCurrentQuestion(null)}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        <h3 className="text-xl font-bold text-white mb-6">Questão #{question.id}</h3>
        <p className="text-gray-300 mb-8 leading-relaxed text-lg">{question.question}</p>

        <div className="space-y-3 mb-8">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
              className={`w-full text-left p-4 rounded-lg border transition-colors ${
                showResult
                  ? index === question.correctAnswer
                    ? 'bg-green-600/20 border-green-600 text-green-300'
                    : index === selectedAnswer && index !== question.correctAnswer
                    ? 'bg-red-600/20 border-red-600 text-red-300'
                    : 'bg-gray-800 border-gray-700 text-gray-300'
                  : selectedAnswer === index
                  ? 'bg-blue-600/20 border-blue-600 text-blue-300'
                  : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-600'
              }`}
            >
              <span className="font-medium mr-3">{String.fromCharCode(65 + index)})</span>
              {option}
              {showResult && index === question.correctAnswer && (
                <CheckCircle className="inline ml-2" size={16} />
              )}
              {showResult && index === selectedAnswer && index !== question.correctAnswer && (
                <XCircle className="inline ml-2" size={16} />
              )}
            </button>
          ))}
        </div>

        {!showResult ? (
          <button
            onClick={handleSubmitAnswer}
            disabled={selectedAnswer === null}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
          >
            Confirmar Resposta
          </button>
        ) : (
          <div className="space-y-6">
            <div className={`p-4 rounded-lg border ${
              selectedAnswer === question.correctAnswer
                ? 'bg-green-600/20 border-green-600'
                : 'bg-red-600/20 border-red-600'
            }`}>
              <div className="flex items-center space-x-2 mb-2">
                {selectedAnswer === question.correctAnswer ? (
                  <CheckCircle className="text-green-400" size={20} />
                ) : (
                  <XCircle className="text-red-400" size={20} />
                )}
                <span className={`font-semibold ${
                  selectedAnswer === question.correctAnswer ? 'text-green-400' : 'text-red-400'
                }`}>
                  {selectedAnswer === question.correctAnswer ? 'Correto!' : 'Incorreto!'}
                </span>
              </div>
              <p className="text-gray-300">{question.explanation}</p>
              {question.formula && (
                <div className="mt-4 p-3 bg-gray-800 rounded text-center">
                  <div dangerouslySetInnerHTML={{ __html: question.formula }} />
                </div>
              )}
            </div>
            
            <button
              onClick={handleNextQuestion}
              className="w-full bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
            >
              Próxima Questão
            </button>
          </div>
        )}
      </div>
    );
  };

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
            src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1920&h=400&fit=crop"
            alt="Questões e Desafios"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-netflix-dark/90 via-netflix-dark/50 to-transparent flex items-center">
            <div className="max-w-2xl px-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center">
                <Brain className="mr-4" />
                Questões e Desafios
              </h1>
              <p className="text-xl text-gray-200">
                Teste seus conhecimentos com questões de vestibulares e ENEM
              </p>
            </div>
          </div>
        </div>

        {/* Score Display */}
        {score.total > 0 && (
          <div className="bg-netflix-gray rounded-lg p-4 mb-6 border border-netflix-gray">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Award className="text-yellow-400" size={24} />
                <span className="text-white font-semibold">Seu Desempenho</span>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">
                  {score.correct}/{score.total}
                </div>
                <div className="text-sm text-gray-400">
                  {Math.round((score.correct / score.total) * 100)}% de acertos
                </div>
              </div>
            </div>
          </div>
        )}

        {currentQuestion ? (
          renderQuestionDetail()
        ) : (
          <>
            {/* Category Filter */}
            <div className="flex space-x-4 mb-8">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-netflix-red text-white'
                    : 'bg-netflix-gray text-netflix-light-gray hover:bg-gray-700'
                }`}
              >
                Todas as Questões
              </button>
              <button
                onClick={() => setSelectedCategory('conservacao')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === 'conservacao'
                    ? 'bg-netflix-red text-white'
                    : 'bg-netflix-gray text-netflix-light-gray hover:bg-gray-700'
                }`}
              >
                Conservação de Energia
              </button>
              <button
                onClick={() => setSelectedCategory('rotacao')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === 'rotacao'
                    ? 'bg-netflix-red text-white'
                    : 'bg-netflix-gray text-netflix-light-gray hover:bg-gray-700'
                }`}
              >
                Movimento de Rotação
              </button>
            </div>

            {/* Questions Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredQuestions.map(renderQuestionCard)}
            </div>

            {/* Study Tips */}
            <div className="mt-12 bg-netflix-gray rounded-lg p-6 border border-netflix-gray">
              <h3 className="text-xl font-bold text-white mb-4">💡 Dicas de Estudo</h3>
              <div className="grid md:grid-cols-2 gap-6 text-netflix-light-gray">
                <div>
                  <h4 className="font-semibold text-netflix-red mb-2">Para Conservação de Energia:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Identifique os tipos de energia presentes</li>
                    <li>• Defina um referencial para energia potencial</li>
                    <li>• Verifique se há forças dissipativas</li>
                    <li>• Use E₁ = E₂ para sistemas conservativos</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-netflix-red mb-2">Para Movimento de Rotação:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Memorize os momentos de inércia básicos</li>
                    <li>• Lembre-se: v = ωr para rolamento</li>
                    <li>• Energia total = translacional + rotacional</li>
                    <li>• Menor I significa maior velocidade final</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuestoesDesafios;