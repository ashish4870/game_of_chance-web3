import React from 'react'
import Navbar from '../components/navbar/Navbar';
import MiddleBlock from '../screens/MiddleBlock';
import './Dice.css';

const Dice = () => {
  return (
    <div className='sectionOne'>
    <Navbar className='navbarMain' dice='dice'/>
    <MiddleBlock className='middleBlockMain'/>
    </div>
  )
}

export default Dice