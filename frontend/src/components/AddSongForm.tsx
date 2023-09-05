import React, { useState } from 'react';
import { addSong, Song } from '../services/songService';

const AddSongForm: React.FC = () => {
  const [songName, setSongName] = useState('');
  const [band, setBand] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Convert the year string to a number
    const yearAsNumber = parseInt(year, 10);

    // Check if yearAsNumber is a valid number
    if (isNaN(yearAsNumber)) {
        alert('Please enter a valid year.');
        return;
    }

    const newSong: Song = {
      songName: songName,
      band: band,
      year: yearAsNumber
    }
    try {
      await addSong(newSong);
      // Clear the input fields after submitting
      setSongName('');
      setBand('');
      setYear('');
      alert('Song added successfully!');
    } catch (error) {
      console.error('Failed to add song:', error);
    }
  };

  return (
    <div className="flex flex-col items-center h-screen pt-1/4">
      <div className="flex flex-col items-center justify-center w-full max-w-xs">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="songName">
              Song Name:
            </label>
            <input 
              id="songName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter Song Name"
              value={songName}
              onChange={(e) => setSongName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="band">
              Band Name:
            </label>
            <input 
              id="band"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter Band Name"
              value={band}
              onChange={(e) => setBand(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
              Year:
            </label>
            <input 
              id="year"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button 
              type="submit" 
              className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add Song
            </button>
          </div>
        </form>
      </div>
    </div>

  );
}

export default AddSongForm;
