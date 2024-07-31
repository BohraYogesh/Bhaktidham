import React, { useContext } from 'react';
import './ListDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import ListItem from '../ListItem/ListItem';
import { list } from '../../assets/assets'


export const ListDisplay = ({category, setCategory}) => {

  const {data_list} = useContext(StoreContext)

  return (
    <div className='list-display' id='
    list-display'>
      <div className="fifa">
      <h2>Bhakti Sangrah (<span>भक्ति संग्रह</span>)</h2>
      </div>
      <div className='explore-more' id='explore-more'>
      <div className="explore-list">
        {list.map((item,index)=>{
        return(
          <div onClick={()=>setCategory(prev=>prev===item.list_name?"All":item.list_name)} key={index} className="explore-list-item">
            <img className={category=== item.list_name?"active":""}src={item.list_image} alt="" />
            <p>{item.list_name}</p>
          </div>
        )}
      )}
      </div>
    </div>
      <div className="list-display-list">
        {data_list.map((item,index)=>{
          if (category==="All" || category===item.category){

            return <ListItem key = {index} id= {item._id} name={item.name} image={item.image} />
          }
        })}
      </div>
      <hr />
    </div>
  )
}

export default ListDisplay;