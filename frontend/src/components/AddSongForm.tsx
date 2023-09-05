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
      bandName: band,
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Song Name:</label>
        <input 
          type="text"
          value={songName}
          onChange={(e) => setSongName(e.target.value)}
        />
      </div>
      <div>
        <label>Band Name:</label>
        <input 
          type="text"
          value={band}
          onChange={(e) => setBand(e.target.value)}
        />
      </div>
      <div>
        <label>Year:</label>
        <input 
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <button type="submit">Add Song</button>
    </form>
  );
}

export default AddSongForm;
