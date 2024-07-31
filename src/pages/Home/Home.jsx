import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ListDisplay from '../../components/ListDisplay/ListDisplay';
import Dharmik from '../../components/Dharmik/Dharmik'
import Dev from '../../components/Dev/Dev'

export const Home = () => {
  
  const [category, setCategory] = useState("All");

  return (
    <div>
     <Header />
     <ListDisplay category={category} setCategory={setCategory} />
     <Dev />
     <Dharmik />
    </div>
  )
}

export default Home;