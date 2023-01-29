import React, { useState } from 'react';
import * as GrIcons from 'react-icons/gr';
import * as GiIcons from 'react-icons/gi';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import { Link } from 'react-router-dom';
import './Navbar.css';
import * as RiIcon from 'react-icons/ri';

const Navbar = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  if (props.dice) {
    return (
      <div className="navbarmenu">
        <nav className="nav-menu">
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <GiIcons.GiCrossedSwords className="swordIcon" />
            </li>
            <li className="nav-text-current">
              <Link to="/dice">
                <RiIcon.RiCheckboxBlankCircleFill />
                <span>Dice</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/coin-toss">
                <RiIcon.RiCheckboxBlankCircleFill />
                <span>Coin toss</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/roulette">
                <RiIcon.RiCheckboxBlankCircleFill />
                <span>Roulette</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/leaderboard">
                <RiIcon.RiCheckboxBlankCircleFill />
                <span>Leaderboard</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/referral">
                <RiIcon.RiCheckboxBlankCircleFill />
                <span>Referral</span>
              </Link>
            </li>
          </ul>
          <div className="socialLinks">
            <a href="/dice">
              <GrIcons.GrTwitter />
            </a>
            <a href="/dice">
              <FaIcons.FaTelegramPlane />
            </a>
            <a href="/dice">
              <SiIcons.SiDiscord />
            </a>
          </div>
        </nav>
      </div>
    );
  } else if (props.coinToss){
    return (
      <div className="navbarmenu">
        <nav className="nav-menu">
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <GiIcons.GiCrossedSwords className="swordIcon" />
            </li>
            <li className="nav-text">
              <Link to="/dice">
                <RiIcon.RiCheckboxBlankCircleFill />
                <span>Dice</span>
              </Link>
            </li>
            <li className="nav-text-current">
              <Link to="/coin-toss">
                <RiIcon.RiCheckboxBlankCircleFill />
                <span>Coin toss</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/roulette">
                <RiIcon.RiCheckboxBlankCircleFill />
                <span>Roulette</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/leaderboard">
                <RiIcon.RiCheckboxBlankCircleFill />
                <span>Leaderboard</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/referral">
                <RiIcon.RiCheckboxBlankCircleFill />
                <span>Referral</span>
              </Link>
            </li>
          </ul>
          <div className="socialLinks">
            <a href="/coin-toss">
              <GrIcons.GrTwitter />
            </a>
            <a href="/coin-toss">
              <FaIcons.FaTelegramPlane />
            </a>
            <a href="/coin-toss">
              <SiIcons.SiDiscord />
            </a>
          </div>
        </nav>
      </div>
    );
  } else if (props.leaderboard){
    return (
      <div className="navbarmenu">
        <nav className="nav-menu">
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <GiIcons.GiCrossedSwords className="swordIcon" />
            </li>
            <li className="nav-text">
              <Link to="/dice">
                <RiIcon.RiCheckboxBlankCircleFill />
                <span>Dice</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/coin-toss">
                <RiIcon.RiCheckboxBlankCircleFill />
                <span>Coin toss</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/roulette">
                <RiIcon.RiCheckboxBlankCircleFill />
                <span>Roulette</span>
              </Link>
            </li>
            <li className="nav-text-current">
              <Link to="/leaderboard">
                <RiIcon.RiCheckboxBlankCircleFill />
                <span>Leaderboard</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/referral">
                <RiIcon.RiCheckboxBlankCircleFill />
                <span>Referral</span>
              </Link>
            </li>
          </ul>
          <div className="socialLinks">
            <a href="/">
              <GrIcons.GrTwitter />
            </a>
            <a href="/">
              <FaIcons.FaTelegramPlane />
            </a>
            <a href="/">
              <SiIcons.SiDiscord />
            </a>
          </div>
        </nav>
      </div>
    );

  } else if (props.referral) {
    return (
      <div className="navbarmenu">
        <nav className="nav-menu">
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <GiIcons.GiCrossedSwords className="swordIcon" />
            </li>
            <li className="nav-text">
              <Link to="/dice">
                <RiIcon.RiCheckboxBlankCircleFill />
                <span>Dice</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/coin-toss">
                <RiIcon.RiCheckboxBlankCircleFill />
                <span>Coin toss</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/roulette">
                <RiIcon.RiCheckboxBlankCircleFill />
                <span>Roulette</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/leaderboard">
                <RiIcon.RiCheckboxBlankCircleFill />
                <span>Leaderboard</span>
              </Link>
            </li>
            <li className="nav-text-current">
              <Link to="/referral">
                <RiIcon.RiCheckboxBlankCircleFill />
                <span>Referral</span>
              </Link>
            </li>
          </ul>
          <div className="socialLinks">
            <a href="/referral">
              <GrIcons.GrTwitter />
            </a>
            <a href="/referral">
              <FaIcons.FaTelegramPlane />
            </a>
            <a href="/referral">
              <SiIcons.SiDiscord />
            </a>
          </div>
        </nav>
      </div>
    );

  } else {
    return (
      <div className="navbarmenu">
        <nav className="nav-menu">
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <GiIcons.GiCrossedSwords className="swordIcon" />
            </li>
            <li className="nav-text">
              <Link to="/dice">
                <RiIcon.RiCheckboxBlankCircleFill />
                <span>Dice</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/coin-toss">
                <RiIcon.RiCheckboxBlankCircleFill />
                <span>Coin toss</span>
              </Link>
            </li>
            <li className="nav-text-current">
              <Link to="/roulette">
                <RiIcon.RiCheckboxBlankCircleFill />
                <span>Roulette</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/leaderboard">
                <RiIcon.RiCheckboxBlankCircleFill />
                <span>Leaderboard</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/referral">
                <RiIcon.RiCheckboxBlankCircleFill />
                <span>Referral</span>
              </Link>
            </li>
          </ul>
          <div className="socialLinks">
            <a href="/roulette">
              <GrIcons.GrTwitter />
            </a>
            <a href="/roulette">
              <FaIcons.FaTelegramPlane />
            </a>
            <a href="/roulette">
              <SiIcons.SiDiscord />
            </a>
          </div>
        </nav>
      </div>
    );

  }
};

export default Navbar;
