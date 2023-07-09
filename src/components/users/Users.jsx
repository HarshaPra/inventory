import React from 'react';
import './user.css';


const Users = () => {
  return (
    <>
    <table>
    <tr>
      <th></th>
      <th></th>
      <th>User ID</th>
      <th>Name</th>
      <th>NIC</th>
      <th>Phone No</th>
      <th>Email</th>
    </tr>
    <tr>
      <td><input type="checkbox"/></td>
      <td><img className='image' src='./images/76.jpg' alt='avatar' width="50"/></td>
      <td>111253</td>
      <td>Marlies Fabel</td>
      <td>24788955455</td>
      <td>+11234506345</td>
      <td>jhon@gmail.com</td>
    </tr>
    <tr>
      <td><input type="checkbox"/></td>
      <td><img className='image' src='./images/85.jpg' alt='avatar' width="50"/></td>
      <td>784544</td>
      <td>Aron Beard</td>
      <td>5248579554</td>
      <td>+1452896534</td>
      <td>emma@gmail.com</td>
    </tr>
  </table>
  </>
  )
}

export default Users