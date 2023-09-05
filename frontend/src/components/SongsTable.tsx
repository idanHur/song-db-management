import React from 'react';
import { Song } from '../services/songService';


interface SongsTableProps {
  songsData: Song[];
}

const SongsTable: React.FC<SongsTableProps> = ({ songsData }) => {
  return (
    <div className="bg-gray-200 h-screen p-4">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="p-4">Band Name</th>
            <th className="p-4">Song Name</th>
            <th className="p-4">Year</th>
          </tr>
        </thead>
        <tbody>
          {songsData.sort((a, b) => a.bandName.localeCompare(b.bandName)).map(song => (
            <tr key={song.id}>
              <td className="p-4">{song.bandName}</td>
              <td className="p-4">{song.songName}</td>
              <td className="p-4">{song.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SongsTable;
