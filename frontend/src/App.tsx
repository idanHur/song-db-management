import React, { useState } from 'react';
import logo from './logo.svg';
import AddSongForm from './components/AddSongForm';
import SearchSongs from './components/SearchSongs';
import NavigationBar from './components/NavigationBar';

function App() {
  const [showAddSong, setShowAddSong] = useState(false);

  return (
    <div className="flex flex-col items-center justify-between">
      <NavigationBar setShowAddSong={setShowAddSong} />
      <div className="container mx-auto p-4">
        {showAddSong ? <AddSongForm /> : <SearchSongs />}
      </div>
    </div>
  );
};

export default App;
