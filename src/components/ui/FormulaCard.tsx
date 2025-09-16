import React from 'react';

interface FormulaCardProps {
  title: string;
  formula: string;
  description: string;
  variables?: { symbol: string; meaning: string }[];
}

const FormulaCard: React.FC<FormulaCardProps> = ({ title, formula, description, variables }) => {
  return (
    <div className="bg-netflix-gray rounded-lg p-6 border border-netflix-gray hover:border-netflix-red transition-all duration-300 netflix-card">
      <h3 className="text-xl font-bold text-white mb-4 text-netflix-red">{title}</h3>
      <div className="bg-netflix-dark rounded-lg p-6 mb-6 font-mono text-xl text-center border border-netflix-red/30">
        <div dangerouslySetInnerHTML={{ __html: formula }} />
      </div>
      <p className="text-netflix-light-gray mb-6 leading-relaxed">{description}</p>
      {variables && (
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-netflix-muted uppercase tracking-wide">Onde:</h4>
          {variables.map((variable, index) => (
            <div key={index} className="flex items-center space-x-3 text-sm">
              <span className="font-mono text-netflix-red font-bold bg-netflix-dark px-2 py-1 rounded">{variable.symbol}</span>
              <span className="text-netflix-muted">=</span>
              <span className="text-netflix-light-gray">{variable.meaning}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormulaCard;