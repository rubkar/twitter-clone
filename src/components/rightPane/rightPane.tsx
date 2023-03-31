import react from 'react';
import './rightPane.css';
import SearchIcon from '@mui/icons-material/Search';

export const RightPane = () => {
  return (
    <div className="right-pane-wrapper">
      <form className="search-bar-wrapper">
        
        <input
          type="search"
          placeholder="Search Twitter?"
          className="search-input"
        > <SearchIcon /></input>
      </form>
    </div>
  );
};
