import React, { useState } from 'react';

export default function Finder() {
    const [descriptor, setDescriptor] = useState('');
    const [songs, setSongs] = useState([]);
    const [playlistLink, setPlaylistLink] = useState('');

    const handleInput = (e) => {
        setDescriptor(e.target.value); 
    }

    const handleSearch = async () => {
        const dummySongs = ["Song 1", "Song 2", "Song 3"];
        setSongs(dummySongs);
    }

    const generatePlaylist = () => {
        const dummyPlaylist = 'https://open.spotify.com/playlist/10LQTjHOAMVUSIgUcKb1l7';
        setPlaylistLink(dummyPlaylist);
    }

    return (
        <div style={{
            position: 'relative',
            background: 'linear-gradient(to bottom right, #008080, rgba(255, 255, 255, 0.3))',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            overflow: 'hidden'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backdropFilter: 'blur(10px)',
                zIndex: 1
            }}></div>
            <div style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <h1>Worship Songs Finder</h1>
                <input
                    type="text"
                    value={descriptor}
                    onChange={handleInput}
                    placeholder="Enter a song category (e.g. forgiveness)"
                    style={{ marginBottom: '20px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <button onClick={handleSearch} style={{ marginBottom: '20px', padding: '10px 20px', borderRadius: '5px', backgroundColor: '#006060', color: 'white', border: 'none' }}>Search</button>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {songs.map((song, index) => (
                        <li key={index} style={{ marginBottom: '10px' }}>{song}</li>
                    ))}
                </ul>
                {songs.length > 0 && (
                    <button onClick={generatePlaylist} style={{ marginBottom: '20px', padding: '10px 20px', borderRadius: '5px', backgroundColor: '#006060', color: 'white', border: 'none' }}>Generate Spotify Playlist</button>
                )}
                {playlistLink && (
                    <div>
                        <h2>Playlist Created!</h2>
                        <a href={playlistLink} target="_blank" rel="noopener noreferrer" style={{ color: '#00ffcc' }}>Open Playlist</a>
                    </div>
                )}
            </div>
        </div>
    );
}
