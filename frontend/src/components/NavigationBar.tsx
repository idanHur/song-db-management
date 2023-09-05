import React from 'react';

interface NavigationBarProps {
  setShowAddSong: (value: boolean) => void;
}


  const NavigationBar: React.FC<NavigationBarProps> = ({ setShowAddSong }) => {
    return (
      <nav className="flex items-center bg-teal-500 p-6 w-full">
          <span className="font-semibold text-2xl text-white tracking-tight mr-6">Song Search</span>
          <button onClick={() => setShowAddSong(true)} className="mt-3 inline-block text-teal-100 hover:text-white mr-4">
              Add Song
          </button>
          <button onClick={() => setShowAddSong(false)} className="mt-3 inline-block text-teal-100 hover:text-white mr-4">
              Search Songs
          </button>
      </nav>
    );
  };
  

export default NavigationBar;
