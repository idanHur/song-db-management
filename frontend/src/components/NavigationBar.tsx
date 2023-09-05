import React from 'react';

interface NavigationBarProps {
  setShowAddSong: (value: boolean) => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ setShowAddSong }) => {
    return (
      <nav className="flex items-center justify-between bg-teal-500 p-6 w-full">
          <div className="flex items-center text-white mr-6">
              <span className="font-semibold text-xl tracking-tight">Song Search</span>
          </div>
          <div className="flex items-center">
              <button onClick={() => setShowAddSong(true)} className="mt-4 inline-block text-teal-200 hover:text-white mr-4">
                  Add Song
              </button>
              <button onClick={() => setShowAddSong(false)} className="mt-4 inline-block text-teal-200 hover:text-white mr-4">
                  Search Songs
              </button>
          </div>
      </nav>
    );
  };
  

export default NavigationBar;
