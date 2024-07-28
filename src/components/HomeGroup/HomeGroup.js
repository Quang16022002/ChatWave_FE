import React from 'react'
import './HomeGroup.scss'
import UserGroupComponent from '../UserGroupComponent/UserGroupComponent';
const HomeGroup = () => {
  const userComponents = Array.from({ length: 10 });

  return (
    <div  style={{padding:20}}>
    <div className="HomeAll-top d-flex justify-content-between">
      <div  className="HomeAll-top-left d-flex justify-content-between">
      
        <p>
          Nhóm <span>15</span>
        </p>
      </div>
      <div className="HomeAll-top-right d-flex justify-content-between">
        <p>Sắp xếp</p>
        <select>
          <option>Gần đây</option>
          <option>Danh sách 03</option>
          <option>Danh sách 04</option>
        </select>
      </div>
    </div>
    <div style={{height:'auto'}} className="row">
    {userComponents.map((_, index) => (
      <UserGroupComponent key={index} />
    ))}

    </div>
  </div>
  )
}

export default HomeGroup