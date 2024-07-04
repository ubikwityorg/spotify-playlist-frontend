import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom'


function App() {
  const[descriptor, setDescriptor] = useState('');
  const [songs, setSongs] = useState([]);

  const handleInput = (e) => {
    setDescriptor(e.target.value); 
  }

  const handleSearch = async () => {
    //const fetchedSong = await fetchSongs(descriptor); // this is where the OpenAI api call will go
    const dummySongs = ["Song 1", "Song 2","Song 3"]
    setSongs(dummySongs); //replace with fetchedSong when using API call
  }

  /*const fetchSongs = async (descriptor) => {
    return ["Song 1", "Song 2", "Song 3"]; // will be replaced with the fetched responses
  }
  */

  return (
    <div className='App'>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/song-finder" element={<song-finder />} />
        <Route path="/about" element={<about />} />
      </Routes>
      <h1>Worship Songs Finder Demo</h1>
      <input
          type = "text"
          value = {descriptor}
          onChange={handleInput}
          placeholder='Enter a song category (e.g. forgiveness)'
      />
      <button onClick = {handleSearch}>Search</button>
      <ul>
        {songs.map((song, index) => (
          <li key= {index}>{song}</li>
        ))}
      </ul>
    </div>


  );

}; //end app

export default App;
