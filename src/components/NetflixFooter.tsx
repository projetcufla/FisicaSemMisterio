import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Globe } from 'lucide-react';

const NetflixFooter: React.FC = () => {
  return (
    <footer className="bg-netflix-dark border-t border-netflix-gray py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Social Media Icons */}
        <div className="flex space-x-8 mb-12">
          <button className="text-netflix-muted hover:text-white transition-colors duration-300 netflix-button">
            <Facebook size={28} />
          </button>
          <button className="text-netflix-muted hover:text-white transition-colors duration-300 netflix-button">
            <Instagram size={28} />
          </button>
          <button className="text-netflix-muted hover:text-white transition-colors duration-300 netflix-button">
            <Twitter size={28} />
          </button>
          <button className="text-netflix-muted hover:text-white transition-colors duration-300 netflix-button">
            <Youtube size={28} />
          </button>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="space-y-3">
            <h4 className="text-white font-bold text-lg">Conteúdo</h4>
            <ul className="space-y-3 text-sm text-netflix-muted">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Laboratório Energético</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Mundo Rotacional</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Experiências Virtuais</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Desafios do Conhecimento</a></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-white font-bold text-lg">Recursos</h4>
            <ul className="space-y-3 text-sm text-netflix-muted">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Laboratório Virtual</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Fórmulas Matemáticas</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Teoria Interativa</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Simulações PhET</a></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-white font-bold text-lg">Suporte</h4>
            <ul className="space-y-3 text-sm text-netflix-muted">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Contato</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Feedback</a></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-white font-bold text-lg">Sobre</h4>
            <ul className="space-y-3 text-sm text-netflix-muted">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Nossa Missão</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Metodologia</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Equipe UFLA</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Parcerias</a></li>
            </ul>
          </div>
        </div>

        {/* University and Copyright */}
        <div className="border-t border-netflix-gray pt-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-6 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="text-4xl">⚙️</div>
              <div>
                <h3 className="text-white font-black text-2xl tracking-tight">FÍSICA sem Mistério</h3>
                <p className="text-netflix-muted text-sm font-medium">Plataforma Educacional de Física</p>
              </div>
            </div>
            
            <div className="text-left md:text-right">
              <p className="text-netflix-muted text-sm font-medium">
                © 2025 Ana Beatriz Gramacho - Universidade Federal de Lavras
              </p>
              <p className="text-netflix-muted text-xs mt-2 opacity-75">
                Todos Direitos Reservados
              </p>
            </div>
          </div>
        </div>

        {/* Language Selector */}
        <div className="mt-8 pt-6 border-t border-netflix-gray">
          <button className="flex items-center space-x-2 text-netflix-muted hover:text-white transition-colors duration-300 netflix-button">
            <Globe size={16} />
            <span className="text-sm">Português (Brasil)</span>
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-netflix-muted text-xs leading-relaxed max-w-4xl mx-auto">
            Esta plataforma utiliza tecnologias modernas para proporcionar uma experiência educacional única em física. 
            Desenvolvido com React, TypeScript e bibliotecas de visualização científica para criar uma interface 
            intuitiva e envolvente, inspirada nas melhores práticas de UX/UI da indústria de streaming.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default NetflixFooter;