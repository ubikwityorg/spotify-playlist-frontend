import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { Route,Routes, Navigate} from 'react-router-dom';
import Finder from './components/pages/Finder';
import Home from './components/pages/Home';
import Abouts from './components/pages/Abouts';
import SpotifyAuth from './components/SpotifyAuth';
import UserProfile from './components/pages/UserProfile';
import './components/styles.css';
import { AuthProvider } from './components/AuthContext';

function App() {

  return (
    <AuthProvider>
    <div className='App'>
      <Navbar /> 
      <Routes>
        <Route path= "/" element= {<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/song-finder" element={<Finder />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/callback" element={<UserProfile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
    </AuthProvider>
  );

}; //end app

export default App;
