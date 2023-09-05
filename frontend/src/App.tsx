import React from 'react';
import logo from './logo.svg';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-medium mb-4">Song Search</h1>
      <SearchBar />
    </div>
  );
}

export default App;
