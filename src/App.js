import React from 'react';
//Import Pages
import Home from './Pages/Home';
//Import Styles
import GlobalStyles from './components/GlobalStyles';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Route path={['/games/id', '/']}>
        <Home />
      </Route>
    </div>
  );
};

export default App;
