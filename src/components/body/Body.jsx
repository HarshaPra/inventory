import React from 'react'
import './body.css';
import AddIcon from '@mui/icons-material/Add';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import Users from '../users/Users';
import AlertDeleted from './AlertDeleted';
import { useState } from 'react';



const Body = () => {
  const [show,setShow] =useState(false)

  return (
    <div className="box">
      <div className="header">
        <h2>Users</h2>
        <div className='btn'>
          <ul className='list'>
            <div className='buttons'>
              <li><Link><AddIcon fontSize='sm'/>Add user</Link></li>
              <li><Link><ModeEditOutlineIcon fontSize='sm'/>Update user</Link></li>
              <li onClick={()=>{
                  alert('Are you sure you want to delete this user?')
                  setShow(!show)
              }}><Link><DeleteIcon fontSize='sm'/>Delete User</Link></li>
            </div>
          </ul>
        </div>
      </div>
      <div className="search">
        <div id="search"><SearchIcon/></div>
        <input type="text" placeholder="Search users..."/>
      </div>  
      {show && <AlertDeleted/> }
      <div className="data">
        <Users/>
      </div>
    </div>
  )
}

export default Body;