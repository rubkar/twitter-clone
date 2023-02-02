import * as React from 'react';
import './app.css';
import { LeftPane } from './components/leftPane/leftPane';
import { HomeContent } from './components/home/home';

const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="left-pane"><LeftPane /></div>
        <div className="home-content"><HomeContent /></div>
      </div>
    </div>
  );
};

export default App;
