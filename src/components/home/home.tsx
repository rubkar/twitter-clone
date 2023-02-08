import react from 'react';
import './home.css';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export const HomeContent = () => {
  return (
    <div className="home-content-wrapper">
      <div className="top-bar-wrapper">
        <div className="home-button">Home</div>
        <div className="navigation-panel">
          <div className="for-you-wrapper">
            <div className="fy-button">
              <span>For you</span>
              <div className="selector-status"></div>
            </div>
          </div>
          <div className="following">Following</div>
        </div>
      </div>
      <div className="tweet-post-bar ">
        <div className="account-posting-bar">
          <img
            src="https://pbs.twimg.com/profile_images/1621111347168661510/ohqli9_A_normal.jpg"
            alt="pic"
            className="profile-picture"
          />
          <input
            type="text"
            placeholder="What's happening?"
            className="post-input"
          />
          <div className="action-bar">
            <div className="action-icons-wraper">
              <div className="action-icons">
                <InsertPhotoOutlinedIcon />
              </div>
              <div className="action-icons">
                <GifBoxOutlinedIcon />
              </div>
              <div className="action-icons">
                <BallotOutlinedIcon />
              </div>
              <div className="action-icons">
                <SentimentSatisfiedOutlinedIcon />
              </div>
              <div className="action-icons">
                <PendingActionsOutlinedIcon />
              </div>
              <div className="action-icons">
                <LocationOnOutlinedIcon />
              </div>
            </div>
            <div className="post-tweet-button">
              <div className="post-btn-text">Tweet</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
