import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import PeopleIcon from "@material-ui/icons/People";
import { Avatar } from "@material-ui/core";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
  return (
    <div className="sidebar">
      <Avatar />
      <SidebarRow Icon={PeopleIcon} title="Bạn bè" />
      <SidebarRow Icon={StorefrontOutlinedIcon} title="Nhóm" />
      <SidebarRow Icon={SupervisedUserCircleIcon} title="Marketplace"/>
      <SidebarRow Icon={SubscriptionsOutlinedIcon} title="Watch"/>
      <SidebarRow Icon={AccessAlarmIcon} title="Kỷ niệm"/>
      <SidebarRow Icon={ExpandMoreIcon} title="Xem Thêm"/>
    </div>
  );
}

export default Sidebar;
