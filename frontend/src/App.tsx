import React from 'react';
import logo from './logo.svg';
import SearchSongs from './components/SearchSongs';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-medium mb-4">Song Search</h1>
      <SearchSongs />
    </div>
  );
}

export default App;
