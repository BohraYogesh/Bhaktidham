import React from 'react'
import './ListItem.css'
import { NavLink } from 'react-router-dom'

const ListItem = ({id, name, image}) => {
  return ( 
  <NavLink to={`${name}`} className="nav-link">  
    <div className='list-item'>
      <div className="list-item-img-container">
        <img src={image} alt="" className="list-item-image" />
        <div className="list-item-info">
          <div className="list-item-name">
          <p>{name}</p>
          </div>  
        </div>
      </div>
    </div>
    </NavLink>
  )
}

export default ListItem;
