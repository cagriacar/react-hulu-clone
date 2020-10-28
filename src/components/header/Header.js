import React from "react";
import "./style/Header.css";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

function Header() {
  return (
    <div className="header">
      <div className="header__icons">
        <div className="header__icon header__icon--active">
          <HomeIcon />
          <p>Anasayfa</p>
          </div>
          <div className="header__icon">
          <FlashOnIcon />
          <p>Trend</p>
          </div>
          <div className="header__icon">
          <LiveTvIcon />
          <p>Canlı</p>
          </div>
          <div className="header__icon">
          <VideoLibraryIcon />
          <p>Kitaplık</p>
          </div>
          <div className="header__icon">
          <SearchIcon />
          <p>Ara</p>
          </div>
          <div className="header__icon">
          <PersonOutlineOutlinedIcon />
          <p>Profil</p>
          </div>
         
        
       
       
        
       
      </div>
      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png?fit=1280%2C680"
        alt="hulu-logo"
      />
    </div>
  );
}

export default Header;
