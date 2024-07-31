import React, { useContext } from "react";
import "./Dharmik.css";
import { StoreContext } from '../../context/StoreContext';

export const Dharmik = () => {

  const { img } = useContext(StoreContext)

  return (
    <div className="hero" id="Dharmik">
      <div className="main">
        <p>Dharmik Sthal (<span>धार्मिक तीर्थ स्थान</span>)</p>
      </div>
      <div className="hero-content" >
        {img.map((item, index) => {
          return (
            <div key={index} className="dharm-contain">
              <img src={item.img_image} alt="" />
              <p>{item.img_name}</p>
            </div>
          )}
        )}
      </div>
    </div>
  );
};

export default Dharmik;
