import React from 'react';
import './style.css';
import CarCard from '../CarCard';
const CarList = ({ data }) => {
  return (
    <div className="car-list-wrapper">
      <div className="car-list">
        {data.length === 0 && (
          <h2 style={{ alignSelf: 'center' }}>Data not found</h2>
        )}
        {data.map((item, index) => (
          <CarCard
            key={index}
            id={item.id} //id
            name={item.name} // name
            price={item.price} //price
            desc={item.desc} // buat default
            image={item.image} //image-> buat default jika null
          />
        ))}
      </div>
    </div>
  );
};

export default CarList;
