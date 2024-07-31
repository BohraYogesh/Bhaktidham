import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './src/pages/Home/Home';
import Navbar from './src/components/Navbar/Navbar';
import Footer from './src/components/Footer/Footer';
import Aarti from './src/pages/Bhakti/Aarti/Aarti';

export const App = () => {
  return (
    <>

     <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='Aarti' element= {Aarti}/>
        </Routes>
      </div>  
      <Footer />
    </>

  )
}

export default App;