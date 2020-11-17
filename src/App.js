import React from 'react';
//Import Pages
import Home from './Pages/Home';
//Import Styles
import GlobalStyles from './components/GlobalStyles';
import { Route } from 'react-router-dom';
//Import Nav
import Nav from './components/Nav';

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Route path={['/games/id', '/']}>
        <Home />
      </Route>
    </div>
  );
};

export default App;
