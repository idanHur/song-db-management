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
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <div className=''>
        <input 
          className='max-w-xs bg-gray-50 border border-gray-400 text-gray-900 text-sm 
          rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full my-6 p-2.5 shadow '
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
        />
      </div>
      <div className='flex flex-col md:flex-row items-center self-center my-2'>
        <button className='bg-blue-500 hover:bg-blue-600 hover:scale-105 text-white font-bold py-2 px-4 md:mr-1 md:mb-0 mb-1 rounded-lg' 
        onClick={handleSearchByBand}>Search by Band</button>
        <button className='bg-blue-500 hover:bg-blue-600 hover:scale-105 text-white font-bold py-2 px-4 md:mx-1 md:my-0 my-1 rounded-lg' 
        onClick={handleSearchByYear}>Search by Year</button>
        <button className='bg-blue-500 hover:bg-blue-600 hover:scale-105 text-white font-bold py-2 px-4 md:mx-1 md:my-0 my-1 rounded-lg' 
        onClick={handleShowAllBandsByName}>Show all bands ordered by name</button>
        <button className='bg-blue-500 hover:bg-blue-600 hover:scale-105 text-white font-bold py-2 px-4 md:ml-1 md:mt-0 mt-1 rounded-lg' 
        onClick={handleShowAllBands}>Show all bands</button>
      </div>
      <SongsTable songsData={results} />
    </div>
  );
};

export default SearchBar;
