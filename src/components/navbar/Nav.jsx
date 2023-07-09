import React from 'react';
import { Link } from 'react-router-dom';
import DehazeIcon from '@mui/icons-material/Dehaze';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import './nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo"><Link to="/"><DehazeIcon fontSize="large"/></Link></div>   
      <ul className="navbar-list">
        <li><SearchIcon fontSize="large"/></li>
        <li><NotificationsIcon fontSize="large"/></li>
        <li className="login"><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  )
}

export default Nav;