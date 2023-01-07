import react from 'react';
import './leftPane.css';

import TwitterIcon from '@mui/icons-material/Twitter';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

export const LeftPane = () => {
  return (
    <div className="left-pane-wrapper">
      <div className="navigation-home">
        <TwitterIcon />
      </div>

      <div className="navigation-buttons">
        <HomeOutlinedIcon />
        Home
      </div>
      <div className="navigation-buttons">
        <TagRoundedIcon />
        Review
      </div>
      <div className="navigation-buttons">
        <NotificationsNoneOutlinedIcon />
        Notifications
      </div>
      <div className="navigation-buttons">
        <EmailOutlinedIcon />
        Messages
      </div>
      <div className="navigation-buttons">
        <BookmarkBorderOutlinedIcon />
        Bookmarks
      </div>
      <div className="navigation-buttons">
        <FeaturedPlayListOutlinedIcon />
        Lists
      </div>
      <div className="navigation-buttons">
        <PersonOutlineOutlinedIcon />
        Profile
      </div>
      <div className="navigation-buttons">
        <MoreHorizOutlinedIcon />
        More
      </div>
    </div>
  );
};
