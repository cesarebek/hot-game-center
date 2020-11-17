import React, { useState } from 'react';
//Styling & Animations
import styled from 'styled-components';
import { motion } from 'framer-motion';
//import logo
import logo from '../img/logo.svg';
//Import Redux & Routes
import { fetchSearch } from '../actions/gamesAction';
import { useDispatch } from 'react-redux';

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
  };

  const clearSearched = () => {
    dispatch({ type: 'CLEAR_SEARCHED' });
  };

  return (
    <StyledNav>
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>Hot Game News</h1>
      </Logo>
      <form className="search">
        <input onChange={inputHandler} type="text" value={textInput} />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  min-height: 10vh;
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
  }
  button {
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    border: none;
    outline: none;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

export default Nav;
