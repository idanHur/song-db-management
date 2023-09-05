import React, { useEffect, useState } from 'react';

interface Song {
  id?: number;
  bandName: string;
  songName: string;
  year: number;
}

const SongsTable: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/songs")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch songs.");
        }
        return response.json();
      })
      .then(data => setSongs(data))
      .catch(error => setError(error.message));
  }, []);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="bg-gray-200 h-screen p-4">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="p-4">Band</th>
            <th className="p-4">Song Name</th>
          </tr>
        </thead>
        <tbody>
          {songs.sort((a, b) => a.bandName.localeCompare(b.bandName)).map(song => (
            <tr key={song.id}>
              <td className="p-4">{song.bandName}</td>
              <td className="p-4">{song.songName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SongsTable;
