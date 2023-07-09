import React from 'react'
import './sidebar.css';
import { Link } from 'react-router-dom';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import CallMergeIcon from '@mui/icons-material/CallMerge';
import GroupIcon from '@mui/icons-material/Group';

const Dashbord = () => {

  const pages = [
    {
      title: 'User',
      icon: <PermIdentityIcon/>,
      path: '/user'
    },
    {
      title: 'Items',
      icon: <AlignVerticalBottomIcon/>,
      path: '/'
    },
    {
      title: 'Categories',
      icon: <CallMergeIcon/>,
      path: '/user'
    },
    {
      title: 'Suppliers',
      icon: <GroupIcon/>,
      path: '/user'
    },
    {
      title: 'Customers',
      icon: <PermIdentityIcon/>,
      path: '/user'
    },
    {
      title: 'Sales',
      icon: <PermIdentityIcon/>,
      path: '/user'
    },
  ]

  return (
    <div className='dashbord'>
      <ul>
        {pages.map((val)=>{
          return(
            <li
            key={val.id}
            onClick={()=>{window.location.pathname= val.path}}
            >
            
              <div className="items">
                <div className="icons">{val.icon}</div>
                <div className="title">{val.title}</div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  //   <div className="dashboard">
  //   <ul>
  //     {pages.map((val) => {
  //       return (
  //         <li key={val.path}>
  //           <Link to={val.path} className="items">
  //             <div className="icons">{val.icon}</div>
  //             <div className="title">{val.title}</div>
  //           </Link>
  //         </li>
  //       );
  //     })}
  //   </ul>
  // </div>
  )
}

export default Dashbord