import magicCat from '../assets/images/cat.png';
import './MiddleBlock.css';
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';
import maticLogo from '../assets/images/polygon-matic-logo.png';
import Box from '../components/animation/Box';
import { Sphere } from 'three';
import AnimatedSphere from '../components/animation/AnimatedSphere';
import * as BsIcons from 'react-icons/bs';
import CustomizedTables from '../components/table/CustomizedTables.js';
import { parse } from 'postcss';
import coinVideo from '../assets/videos/MATIC_tails.webm';
import React, { useRef, useState, useContext } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  softShadows,
  MeshWobbleMaterial,
  OrbitControls,
  Stars,
} from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';
import { AuthContext } from '../context/AuthContext';

softShadows();

const SpinningMesh = ({ position, color, speed, args }) => {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  const [expand, setExpand] = useState(false);
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
  );
};

const MiddleBlockCoin = () => {
  const { userWalletAddress, walletConnect } = useContext(AuthContext);
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
            {userWalletAddress == '' ? 'Connect Wallet': userWalletAddress}
          </button>
        </div>
      </div>
      <div className="middleBlocks">
        <Canvas
          colorManagement
          shadowMap
          camera={{ position: [-5, 2, 10], fov: 60 }}>
          {/* This light makes things look pretty */}
          <ambientLight intensity={0.3} />
          {/* Our main source of light, also casting our shadow */}
          <directionalLight
            castShadow
            position={[0, 10, 0]}
            intensity={1.5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <Stars />
          {/* A light to help illumnate the spinning boxes */}
          <pointLight position={[-10, 0, -20]} intensity={0.5} />
          <pointLight position={[0, -10, 0]} intensity={1.5} />
          <group>
            {/* This mesh is the plane (The floor) */}
            {/* <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
            receiveShadow>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <shadowMaterial attach='material' opacity={0.3} />
          </mesh> */}
            {/* <SpinningMesh
            position={[0, 1, 0]}
            color='#d4418e'
            args={[3, 2, 1]}
            speed={2}
          /> */}
            {/* <SpinningMesh position={[-2, 1, -5]} color='#d4418e' speed={6} />
          <SpinningMesh position={[5, 2, -1]} color='#d4418e' speed={6} /> */}
          </group>
          {/* Allows us to move the canvas around for different prespectives */}
          {/* <OrbitControls /> */}
          <Stars />
        </Canvas>
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
          <h1>1.94x</h1>
          <div className="coinVideo">
            <video width="150" height="150" preload="none" autoplay="autoplay">
              <source src={coinVideo} />
            </video>
          </div>
          <div className="rangeDivBox">
            <p className="bet">BET</p>
            <input type="text"></input>
            <button className="maxButton">max</button>
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
              <button className="connectWalletMainButtonA">Flip heads </button>
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

export default MiddleBlockCoin;
