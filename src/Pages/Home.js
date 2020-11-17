import React, { useEffect } from 'react';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
//Styling & Animations
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
//Components
import Game from '../components/Game';
import GameDetails from '../components/GameDetails';
import { useLocation } from 'react-router-dom';

const Home = () => {
  //Get current Location
  const location = useLocation();
  //This is the ID of tha game
  const pathId = location.pathname.split('/')[2];
  //FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //GET DATA BACK [useSelector allows me to grab the state]
  const { popular, upComing, newGames, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetails pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  //These image are extremly huge and takes a lot to load, I've to fix it.
                  image={game.background_image}
                  //React needs a key for each game of the map
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ''
        )}
        <h2>Upcoming Games</h2>
        <Games>
          {upComing.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              //These image are extremly huge and takes a lot to load, I've to fix it.
              image={game.background_image}
              //React needs a key for each game of the map
              key={game.id}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              //These image are extremly huge and takes a lot to load, I've to fix it.
              image={game.background_image}
              //React needs a key for each game of the map
              key={game.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              //These image are extremly huge and takes a lot to load, I've to fix it.
              image={game.background_image}
              //React needs a key for each game of the map
              key={game.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0 5rem;
  h2 {
    padding: 5rem 0;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
