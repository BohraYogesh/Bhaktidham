import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './src/pages/Home/Home';
import Singleproduct from './src/pages/Singleproduct/Singleproduct';
import SecondProduct from './src/pages/SecondProduct/SecondProduct'
import Navbar from './src/components/Navbar/Navbar';
import Footer from './src/components/Footer/Footer';

export const App = () => {
  return (
    <>

     <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/:id' element={<Singleproduct/>}/>
          <Route path='/Devidevta' element={<SecondProduct/>}/>
        </Routes>
      </div>  
      <Footer />
    </>

  )
}

export default App;