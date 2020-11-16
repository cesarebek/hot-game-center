import React from 'react';
//Styling & Animations
import styled from 'styled-components';
import { motion } from 'framer-motion';
//Redux
import { useDispatch } from 'react-redux';
import { loadDetails } from '../actions/detailsAction';
//Router
import { Link } from 'react-router-dom';

//Each Game will be displayed in Home.js
const Game = ({ name, released, image, id }) => {
  //Load Details
  const dispatch = useDispatch();
  const loadDetailsHandler = () => {
    dispatch(loadDetails(id));
  };
  return (
    <StyledGame onClick={loadDetailsHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <h3>{released}</h3>
        <img src={image} alt="game-cover" />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  img {
    width: 100%;
    //Makes all the images with same sizes
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
