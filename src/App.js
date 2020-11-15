import React from 'react';
//Import Pages
import Home from './Pages/Home';
//Import Styles
import GlobalStyles from './components/GlobalStyles';

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Home />
    </div>
  );
};

export default App;
