import { itemList } from '../../../utils/dummyData';
import { useEffect, useState } from 'react';

const AdminShowCar = () => {
  const [dataCar, setDataCar] = useState([]);

  useEffect(() => {
    setDataCar(itemList);
  }, []);

  return (
    <div>
      <h1>Show Car</h1>
      <div className="d-flex justify-content-around">
        {dataCar.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-body">
              <img className="card-img-top" src={item.image} alt="" />
              <p>{item.image}</p>
              <p>{item.brand}</p>
              <p>{item.price}</p>
              <div className="d-flex">
                <button>delete</button>
                <button>edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminShowCar;
