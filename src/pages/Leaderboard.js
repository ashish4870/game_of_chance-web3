import React from 'react'
import './Dice.css';
import Navbar from '../components/navbar/Navbar';
const Leaderboard = () => {
  return (
    <div className='sectionOne'>
    <Navbar className='navbarMain' leaderboard = 'leaderboard'/>
    <div className='headingDiv'>
        <h1>No data available</h1>
    </div>
    </div>
  )
}

export default Leaderboard