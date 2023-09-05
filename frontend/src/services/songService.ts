import { json } from "stream/consumers";

export interface Song {
    id?: number
    bandName: string;
    songName: string;
    year: number;  
  }
const BASE_URL = '/songs';  

// Fetch all songs
export const getAllSongs = async (): Promise<Song[]> => {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch all songs.');
    }
    return response.json();
  };

export const getAllSongsOrderByBand = async (): Promise<Song[]> => {
const response = await fetch(`${BASE_URL}/orderByBand`);
if (!response.ok) {
    throw new Error('Failed to fetch songs ordered by band.');
}
return response.json();
};

export const getSongsByBand = async (bandName: string): Promise<Song[]> => {
const response = await fetch(`${BASE_URL}/byBand/${bandName}`);
if (!response.ok) {
    throw new Error(`Failed to fetch songs by ${bandName}.`);
}
return response.json();
};

export const getSongsByYear = async (year: number): Promise<Song[]> => {
const response = await fetch(`${BASE_URL}/byYear/${year}`);
if (!response.ok) {
    throw new Error(`Failed to fetch songs from ${year}.`);
}
return response.json();
};

export const getSpecificSong = async (songName: string, band: string): Promise<Song[]> => {
const response = await fetch(`${BASE_URL}/specificSong?songName=${encodeURIComponent(songName)}&band=${encodeURIComponent(band)}`);
if (!response.ok) {
    throw new Error(`Failed to fetch the specific song ${songName} by ${band}.`);
}
return response.json();
};

export const addSong = async (song: Song): Promise<Song> => {
    const response = await fetch(BASE_URL,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(song),
    });
    if(!response.ok){
        throw new Error('Failed to add song.');
    }
    return response.json();
};
export const deleteSong  = async (songName: string, band: string): Promise<void> => {
    const response = await fetch(BASE_URL,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({songName, band}),
    });
    if(!response.ok){
        throw new Error(`Failed to delete song ${songName} by ${band}.`);
    }
};




export {};
