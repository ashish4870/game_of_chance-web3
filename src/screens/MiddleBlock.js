import React, { useRef, useState, useContext } from 'react';
import magicCat from '../assets/images/cat.png';
import './MiddleBlock.css';
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';
import maticLogo from '../assets/images/polygon-matic-logo.png';

import AnimatedSphere from '../components/animation/AnimatedSphere';
import * as BsIcons from 'react-icons/bs';
import CustomizedTables from '../components/table/CustomizedTables.js';
import { parse } from 'postcss';

import { createRoot } from 'react-dom/client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, MeshWobbleMaterial } from '@react-three/drei';
import { Physics, usePlane, useBox } from '@react-three/cannon';
import { useSpring, a } from '@react-spring/three';
import sliderAudio from '../assets/audio/sliderAudio.wav';
import backgroundMusic from '../assets/audio/backgroundAudio.mp3';
import { AuthContext } from '../context/AuthContext';

const SpinningMesh = ({ position, color, speed, args }) => {
  //ref to target the mesh
  const mesh = useRef();

  //useFrame allows us to re-render/update rotation on each frame
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  //Basic expand state
  const [expand, setExpand] = useState(false);
  // React spring expand animation
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });
  return (
    <a.mesh
      position={position}
      ref={mesh}
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      castShadow>
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        color={color}
        speed={speed}
        attach="material"
        factor={0.6}
      />
    </a.mesh>

    //Using Drei box if you want
    // <Box {...props} ref={mesh} castShadow>
    //   <MeshWobbleMaterial
    //     {...props}
    //     attach='material'
    //     factor={0.6}
    //     Speed={1}
    //   />
    // </Box>
  );
};
const playBackgroundMusic = () => {
  const backGroundAudio = new Audio(backgroundMusic);
  setInterval(backGroundAudio.play(), 100);
};

const MiddleBlock = () => {
  const {
    userWalletAddress,
    walletConnect,
    value,
    multiplier,
    left,
    show,
    handleChange,
    inputValue,
    handleInputValue,
    getMaxInputValue,
  } = useContext(AuthContext);
  return (
    <div className="middleElements">
      <div className="navbar">
        <div className="company-name">
          <h2 className="company-name-header">BetSwing</h2>
        </div>
        <div className="documentation-button">
          <a href="/">
            <button class="bn632-hover bn20">Documentation</button>
          </a>
        </div>
        <div className="bellIconDiv">
          <BsIcons.BsFillBellFill className="bellIcon" />
        </div>
        <div className="connectWallet">
          <button onClick={walletConnect} class="bn632-hover bn20">
            {userWalletAddress !== '' ? userWalletAddress : 'Connect Wallet'}
          </button>
        </div>
      </div>
      <div className="middleBlocks">
        <Canvas>
          <OrbitControls />
          <Stars />
          <Stars />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          {/* <SpinningMesh position={[-2, 1, -5]} color='white' speed={5} /> */}
          <Physics></Physics>
        </Canvas>
        {/* <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Box />
      </Canvas> */}
        <div className="top-left-text">
          <h2>Dice</h2>
          <IoIcons.IoMdInformationCircle className="infoIcon" />
        </div>
        <div className="leaderDiv">
          <a href="/leaderboard">
            <button className="leaderboardButton">
              Leaderboard
              <FaIcons.FaMedal className="leaderIcon" />
            </button>
          </a>
        </div>
        <div className="middleContent">
          <h1>{multiplier}x</h1>
          <div
            style={{
              position: 'relative',
              'margin-left': '24px',
              'margin-right': '34px',
              display: show,
            }}>
            <span
              id="spanEle"
              style={{
                position: 'absolute',
                'padding-left': '5px',
                height: '45px',
                width: '45px',
                color: '#FFF',
                'font-size': '13px',
                'font-weight': '500',
                transform: 'translateX(-60%)',
                'line-height': '37px',
                'z-index': '2',
                left: left,
              }}>
              {value}
            </span>
          </div>
          <div className="rangeDiv">
            <input
              type="range"
              min="4"
              max="99"
              value={value}
              id="slider"
              onChange={handleChange}></input>
          </div>
          <div className="rangeNumber">
            <p>4</p>
            <p>25</p>
            <p>50</p>
            <p>75</p>
            <p>99</p>
          </div>
          <div className="rangeDivBox">
            <p className="bet">BET</p>
            <input type="text" value={inputValue} onChange={handleInputValue}></input>
            <button className="maxButton" onClick={getMaxInputValue}>max</button>
            <p className="matic">MATIC</p>
            <img className="maticLogo" src={maticLogo} alt="loading..." />
          </div>
          <div className="tableDiv">
            <table className="table">
              <tr>
                <td className="TableElement">50% win chance 3% house edge</td>
                <td className="secondTableElement">
                  Target payout: ~100 MATIC{' '}
                </td>
              </tr>
              <tr>
                <td className="TableElement">Bank: 2174 MATIC</td>
                <td className="secondTableElement">Min bet amount: 5 MATIC</td>
              </tr>
              <tr>
                <td className="TableElement"> </td>
                <td className="secondTableElement">
                  Max profit: 194.6334 MATIC
                </td>
              </tr>
            </table>
          </div>
          <div className="connectWalletMainDiv">
            {userWalletAddress === '' ? (
              <button
                onClick={walletConnect}
                className="connectWalletMainButton">
                Connect your Wallet
              </button>
            ) : (
              <button className="connectWalletMainButtonA">
                Roll over {value}{' '}
              </button>
            )}
          </div>
        </div>
      </div>
      <div>
        <CustomizedTables />
      </div>
    </div>
  );
};

export default MiddleBlock;
