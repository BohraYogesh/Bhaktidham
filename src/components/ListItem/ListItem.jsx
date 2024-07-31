import React from 'react'
import './ListItem.css'

const ListItem = ({id, name, image}) => {
  return (
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
  )
}

export default ListItem;
