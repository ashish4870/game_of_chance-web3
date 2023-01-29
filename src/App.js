import React, {useEffect} from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dice from './pages/Dice';
import CoinToss from './pages/CoinToss';
import Leaderboard from './pages/Leaderboard';
import Referral from './pages/Referral';
import Roulette from './pages/Roulette';
import {AuthProvider} from './context/AuthContext';

function App() {
  return (
    <>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' />
          <Route path='dice'  element={<Dice/>}/>
          <Route path="coin-toss" element={<CoinToss/>} />
          <Route path="roulette" element={<Roulette/>} />
          <Route path="leaderboard" element={<Leaderboard/>} />
          <Route path="referral" element={<Referral/>} />
        </Routes>
      </Router>
    </AuthProvider>
    </>
  );
}

export default App;
