import React, { useState } from 'react';
import { getSongsByBand, getAllSongs, getAllSongsOrderByBand, getSongsByYear, Song } from '../services/songService';
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
  const handleShowAllBandsByName = async () => {
    try {
      const data = await getAllSongsOrderByBand();
      setResults(data);
    } catch (error) {
      console.error('Failed to fetch songs ordered by name:', error);
    }
  };
  const handleShowAllBands = async () => {
    try {
      const data = await getAllSongs();
      setResults(data);
    } catch (error) {
      console.error('Failed to fetch all bands:', error);
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
      <button onClick={handleShowAllBandsByName}>Show all bands ordered by name</button>
      <button onClick={handleShowAllBands}>Show all bands</button>

      <SongsTable songsData={results} />
    </div>
  );
};

export default SearchBar;
