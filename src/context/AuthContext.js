import React, { createContext, useState, useEffect } from 'react';
import {ethers} from 'ethers';
import sliderAudio from '../assets/audio/sliderAudio.wav';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userWalletAddress, setUserWalletAddres] = useState('');
    const audio = new Audio(sliderAudio);
    const [value, setValue] = useState('50');
    const [multiplier, setMultiplier] = useState('1.94');
    const [left, setLeft] = useState('50%');
    const [show, setShow] = useState('none');
    const [inputValue, setInputValue] = useState(0);

    const handleInputValue = (event) => {
        const minInput = 5;
        const maxInput = value/multiplier;
        if(event.target.value < minInput && maxInput > minInput) { 
            setInputValue(minInput);
        } else if(maxInput < minInput && event.target.value !== maxInput){
            if(event.target.value > maxInput){
                setInputValue(maxInput);
            } else {
                setInputValue(event.target.value);
            }
        } else if(maxInput < event.target.value){
            setInputValue(maxInput);
        } else if(event.target.value < maxInput){
            setInputValue(event.target.value);
        }
      };

    const getMaxInputValue = () => {
        const maxInput = value/multiplier;
        setInputValue(maxInput);
    }

    const handleChange = (event) => {
        setValue(event.target.value);
        setMultiplier(
          `${parseFloat((97 / (100 - parseInt(event.target.value))).toFixed(2))}`
        );
        setLeft(`${parseInt(event.target.value)}%`);
        setShow('block');
        playAudio();
      };
      const playAudio = () => {
        audio.play();
      };
    
      if (show === 'block') {
        setTimeout(function () {
          setShow('none');
        }, 20000);
      }

    const walletConnect = () => {
      let provider = window.ethereum;
      if (typeof provider !== 'undefined') {
        provider
          .request({ method: 'eth_requestAccounts' })
          .then((accounts) => {
            const userAddress =
              accounts[0].substring(0, 6) +
              '...' +
              accounts[0].substr(accounts[0].length - 6);
            setUserWalletAddres(userAddress);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
    return (
        <AuthContext.Provider
          value={{
            userWalletAddress,
            value,
            multiplier,
            left,
            inputValue,
            handleInputValue,
            walletConnect,
            handleChange,
            getMaxInputValue,
          }}>
          {children}
        </AuthContext.Provider>
      );
}