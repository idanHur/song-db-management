import React, { useState } from 'react';
import { getSongsByBand, getSongsByYear, Song } from '../services/songService';
import SongsTable from './SongsTable'; 

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Song[]>([]);

  const handleSearchByBand = async () => {
    try {
      const data = await getSongsByBand(searchTerm);
      setResults(data);
    } catch (error) {
      console.error('Failed to fetch songs by band:', error);
    }
  };

  const handleSearchByYear = async () => {
    try {
      const data = await getSongsByYear(Number(searchTerm));
      setResults(data);
    } catch (error) {
      console.error('Failed to fetch songs by year:', error);
    }
  };

  return (
    <div>
      <input 
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearchByBand}>Search by Band</button>
      <button onClick={handleSearchByYear}>Search by Year</button>
    
      <SongsTable songsData={results} />
    </div>
  );
};

export default SearchBar;
