interface Song {
    id?: number
    bandName: string;
    songName: string;
    year: number;  
  }

const BASE_URL = 'http://localhost:3000/songs';  

// Fetch all songs
export const getAllSongs = async (): Promise<Song[]> => {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch all songs.');
    }
    return response.json();
  };







  export {};
