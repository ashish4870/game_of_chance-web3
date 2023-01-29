import React from 'react'
import './Dice.css';
import Navbar from '../components/navbar/Navbar';
import MiddleBlockCoin from '../screens/MiddleBlockCoin';
const CoinToss = () => {
  return (
    <div className='sectionOne'>
    <Navbar className='navbarMain' coinToss = 'coinToss'/>
    <MiddleBlockCoin/>
    </div>
  )
}

export default CoinToss