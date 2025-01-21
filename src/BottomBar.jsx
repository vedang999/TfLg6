import React, { useState } from 'react';
import { Home, MessageCircle, Settings } from 'lucide-react';

const BottomBar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [animating, setAnimating] = useState('home');

  const handleClick = (id) => {
    setActiveItem(id);
    setAnimating(id);
    setTimeout(() => setAnimating(''), 1500);
  };

  const NavItem = ({ icon: Icon, label, id }) => (
    <button
      onClick={() => handleClick(id)}
      className={`relative flex flex-col items-center justify-center p-3 w-24 group transition-all duration-300
        ${activeItem === id ? 'text-indigo-400' : 'text-gray-400 hover:text-gray-300'}`}
    >
      <div className="relative">
        <div className={`
          ${animating === id && id === 'home' ? 'animate-float' : ''}
          ${animating === id && id === 'messages' ? 'animate-wave' : ''}
          ${animating === id && id === 'settings' ? 'animate-spin-slow' : ''}
        `}>
          <Icon className="w-7 h-7" />
          {id === 'messages' && (
            <div className="absolute -right-1 -top-1 w-3 h-3 bg-red-400 rounded-full border-2 border-gray-900" />
          )}
        </div>
      </div>
      <span className="mt-1 text-xs font-medium tracking-wide">{label}</span>
      {activeItem === id && (
        <div className="absolute bottom-0 w-12 h-1 bg-indigo-400 rounded-full transform transition-all duration-300" />
      )}
    </button>
  );

  return (
    <div className="flex items-center justify-center w-full bg-gray-800 bg-opacity-95 text-white p-2 rounded-xl shadow-lg backdrop-blur-sm">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px) scale(1.1); }
          }
          @keyframes wave {
            0%, 100% { transform: rotate(0); }
            25% { transform: rotate(-12deg) scale(1.1); }
            75% { transform: rotate(12deg) scale(1.1); }
          }
          @keyframes spinSlow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(180deg); }
          }
          .animate-float {
            animation: float 1.5s ease-in-out;
          }
          .animate-wave {
            animation: wave 1.5s ease-in-out;
          }
          .animate-spin-slow {
            animation: spinSlow 1.5s ease-in-out;
          }
        `}
      </style>
      <nav className="flex items-center space-x-6">
        <NavItem icon={Home} label="Home" id="home" />
        <NavItem icon={MessageCircle} label="Messages" id="messages" />
        <NavItem icon={Settings} label="Settings" id="settings" />
      </nav>
    </div>
  );
};

export default BottomBar;