import React, { useContext } from 'react'
import './Dev.css'
import { StoreContext } from '../../context/StoreContext';

export const Dev = () => {
  const { dev } = useContext(StoreContext)
  return (
    <div className='dev' id='dev'>
      <div className="dev-hero">
      <p>Devi Devta(<span>देवियाँ देवता</span>) </p>
      </div>
      <div className="dev-hero-content" >
        {dev.map((item, index) => {
          return (
            
            <div key={index} className="dev-dharm-contain">
              <div className="image-hover">
              <img src={item.dev_image} alt="" />
                </div>
                <p>{item.dev_name}</p>
            </div>
          )}
        )}
      </div>
      <hr />
    </div>
  )
}

export default Dev;