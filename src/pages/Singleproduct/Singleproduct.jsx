import React from 'react'
import './Singleproduct.css'
import { Breadcrum } from '../../components/Breadcrum/Breadcrum';
import { FirstPage } from '../../components/FirstPage/FirstPage';

export const Singleproduct = () => {
  return (
    <div className='singleproduct'>
      <Breadcrum/>
      <FirstPage/>
    </div>
  )
}

export default Singleproduct;
