import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import HeaderOption from "./HeaderOption";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import { Avatar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
          alt="fb_logo"
        />
        <div className="header__input">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__middle">
        <HeaderOption active Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SubscriptionsOutlinedIcon} title="Watch" />
        <HeaderOption Icon={StorefrontOutlinedIcon} title="MarketPlace" />
        <HeaderOption Icon={SupervisorAccountIcon} title="Group" />
        <HeaderOption Icon={SportsEsportsIcon} title="Game" />
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>My Name</h4>
        </div>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
