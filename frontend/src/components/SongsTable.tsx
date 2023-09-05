import React from 'react';
import { Song } from '../services/songService';


interface SongsTableProps {
  songsData: Song[];
}

const SongsTable: React.FC<SongsTableProps> = ({ songsData }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
      <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Band Name</th>
            <th className="px-6 py-3">Song Name</th>
            <th className="px-6 py-3">Year</th>
          </tr>
        </thead>
        <tbody>
          {songsData.sort((a, b) => a.bandName.localeCompare(b.bandName)).map(song => (
            <tr key={song.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <td className="px-6 py-4">{song.bandName}</td>
              <td className="px-6 py-4">{song.songName}</td>
              <td className="px-6 py-4">{song.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SongsTable;
