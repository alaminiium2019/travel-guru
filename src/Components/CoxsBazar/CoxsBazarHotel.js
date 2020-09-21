import React, { useState } from "react";
import fakeData from "../fakeData";
import Gmap from "../Map/Gmap";
import "./CoxsBazarHotel.css";

const CoxsBazarHotel = () => {
  console.log(fakeData);
  const first10 = fakeData.slice(0, 10);
  const [hotels, sethotels] = useState(first10);

  return (
    <div className="container">
      <p>Stay in Cox's Bazar</p>

      <div className="d-flex">
        <div>
          {hotels.map((h) => (
            <div className="d-flex">
              <div className="m-3">
                <img className="img" src={h.img} />
              </div>
              <div className="pl-2">
                <h3> {h.name}</h3>
                <p> {h.description}</p>
                <p>Rating: {h.star}</p>
                <p>${h.price}/per night</p>
              </div>
            </div>
          ))}
        </div>
        
          <Gmap></Gmap>
      
      </div>
    </div>
  );
};

export default CoxsBazarHotel;
