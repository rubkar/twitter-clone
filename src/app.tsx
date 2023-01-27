import * as React from 'react';
import './app.css';
import { LeftPane } from './components/leftPane/leftPane';
import { HomeContent } from './components/home/home';

const App = () => {
  return (
    <div className="App">
      <div>
        <LeftPane />
      </div>
      <div>
        <HomeContent />
      </div>
    </div>
  );
};

export default App;
