import React from 'react';
//Styling & Animations
import styled from 'styled-components';
import { motion } from 'framer-motion';
//Redux
import { useDispatch } from 'react-redux';
import { loadDetails } from '../actions/detailsAction';
//Router
import { Link } from 'react-router-dom';
//Import util
import { smallImage } from '../util';

//Each Game will be displayed in Home.js
const Game = ({ name, released, image, id }) => {
  //ID from integer to string
  const stringPathId = id.toString();
  //Load Details
  const dispatch = useDispatch();
  const loadDetailsHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(loadDetails(id));
  };
  return (
    <StyledGame layoutId={stringPathId} onClick={loadDetailsHandler}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <h3>{released}</h3>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 640)}
          alt="game-cover"
        />
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
  overflow: hidden;
  img {
    width: 100%;
    //Makes all the images with same sizes
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
