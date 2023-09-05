import React, { useState } from 'react';
import { getSongsByBand, getAllSongs, getAllSongsOrderByBand, getSongsByYear, Song } from '../services/songService';
import SongsTable from './SongsTable'; 

const SearchSongs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Song[]>([]);

  const fetchData = async (method: () => Promise<Song[]>) => {
    try {
      const data = await method();
      setResults(data);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const buttonActions = [
    { label: 'Search by Band', method: () => getSongsByBand(searchTerm) },
    { label: 'Search by Year', method: () => getSongsByYear(Number(searchTerm)) },
    { label: 'Show all bands ordered by name', method: getAllSongsOrderByBand },
    { label: 'Show all bands', method: getAllSongs }
  ];

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
        {buttonActions.map((action, index) => (
          <button 
            key={index}
            className='bg-teal-500 hover:bg-teal-600 hover:scale-105 text-white font-bold py-2 px-4 md:mx-1 md:my-0 my-1 rounded-lg' 
            onClick={() => fetchData(action.method)}>
            {action.label}
          </button>
        ))}
      </div>
      <SongsTable songsData={results} />
    </div>
  );
};

export default SearchSongs;
