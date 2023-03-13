import './app.css';
import { LeftPane } from './components/leftPane/leftPane';
import { HomeContent } from './components/home/home';
import { RightPane } from './components/rightPane/rightPane';

const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="left-pane"><LeftPane /></div>
        <div className="home-content"><HomeContent /></div>
        <div className="right-pane"><RightPane /></div>
      </div>
    </div>
  );
};

export default App;
