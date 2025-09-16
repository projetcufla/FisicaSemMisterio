import React from 'react';

interface SubTabButtonProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const SubTabButton: React.FC<SubTabButtonProps> = ({ isActive, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 netflix-button ${
        isActive
          ? 'bg-netflix-red text-white shadow-lg'
          : 'bg-netflix-gray text-netflix-light-gray hover:bg-netflix-gray hover:text-white'
      }`}
    >
      {children}
    </button>
  );
};

export default SubTabButton;