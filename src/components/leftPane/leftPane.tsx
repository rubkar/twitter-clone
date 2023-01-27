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
        <div className="btn-text">Home</div>
      </div>
      <div className="navigation-buttons">
        <TagRoundedIcon />
        <div className="btn-text">Review</div>
      </div>
      <div className="navigation-buttons">
        <NotificationsNoneOutlinedIcon />
        <div className="btn-text">Notifications</div>
      </div>
      <div className="navigation-buttons">
        <EmailOutlinedIcon />
        <div className='btn-text'>Messages</div>
      </div>
      <div className="navigation-buttons">
        <BookmarkBorderOutlinedIcon />
        <div className='btn-text'>Bookmarks</div>
      </div>
      <div className="navigation-buttons">
        <FeaturedPlayListOutlinedIcon />
        <div className='btn-text'>Lists</div>
      </div>
      <div className="navigation-buttons">
        <PersonOutlineOutlinedIcon />
        <div className='btn-text'>Profile</div>
      </div>
      <div className="navigation-buttons">
        <MoreHorizOutlinedIcon />
        <div className='btn-text'>More</div>
      </div>
    </div>
  );
};
