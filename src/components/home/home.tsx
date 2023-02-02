import react from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import './home.css';

export const HomeContent = () => {
  return (
    <div className="home-content-wrapper">
      <div className="top-bar-wrapper">
        <div className="home-button">Home</div>
        <div className="navigation-panel">
          <div className="for-you">For you</div>
          <div className="following">Following</div>
        </div>
      </div>
    </div>
  );
};
