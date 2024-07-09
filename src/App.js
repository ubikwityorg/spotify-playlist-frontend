import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { Route,Routes,} from 'react-router-dom';
import Finder from './components/pages/Finder';
import Home from './components/pages/Home';
import Abouts from './components/pages/Abouts'

function App() {

  return (
    <div className='App'>
      <Navbar /> 
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/song-finder" element={<Finder />} />
        <Route path="/about" element={<Abouts />} />
      </Routes>
    </div>
  );

}; //end app

export default App;
