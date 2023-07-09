import React from 'react';
import Nav from '../navbar/Nav';
import Sidebar from '../sidebar/Sidebar';
import Body from '../body/Body';
import './user.css'

const User = () => {
  return (
    <div className='main'>
      <Nav/>
      <div className="content">
        <Sidebar/>
        <Body/>
      </div>
    </div>
  )
}

export default User