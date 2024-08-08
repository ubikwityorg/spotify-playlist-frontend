import React, { useState } from 'react';

export default function Finder() {
    const [descriptor, setDescriptor] = useState('');
    const [songs, setSongs] = useState([]);
    const [playlistLink, setPlaylistLink] = useState('');

    const handleInput = (e) => {
        setDescriptor(e.target.value); 
    }

    const handleSearch = async () => {
        try {
            console.log(`Searching for playlists with descriptor: ${descriptor}`);
            const response = await fetch(`/playlists?topic=${encodeURIComponent(descriptor)}`);
            console.log(`Response status: ${response.status}`);
            if (response.ok) {
                const data = await response.json();
                console.log(`Response data: ${JSON.stringify(data)}`);
                if (data.playlist_url) {
                    setPlaylistLink(data.playlist_url);
                    setSongs(["Playlist already exists or was created successfully!"]);
                } else {
                    setSongs(["No songs found"]);
                }
            } else {
                console.error('Error fetching playlist:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching playlist:', error);
        }
    };

    return (
        <div>
            <h1>Worship Songs Finder</h1>
            <input
                type="text"
                value={descriptor}
                onChange={handleInput}
                placeholder="Enter a song category (e.g. forgiveness)"
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {songs.map((song, index) => (
                    <li key={index}>{song}</li>
                ))}
            </ul>
            {playlistLink && (
                <div>
                    <h2>Playlist Created!</h2>
                    <a href={playlistLink} target="_blank" rel="noopener noreferrer">Open Playlist</a>
                </div>
            )}
        </div>
    );
}
