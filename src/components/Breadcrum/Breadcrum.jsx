import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../../assets/breadcrum_arrow.png'

export const Breadcrum = (props) => {
    const {data_list} = props;
  return (
    <div className='breadcrum'>
        Bhaktidham<img src={arrow_icon} alt="" />Aarti<img src={arrow_icon} alt="" /> 
        
        {/* {data_list.category} <img src={arrow_icon} alt="" /> {data_list.name} */}
    </div>
  )
}
