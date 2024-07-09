import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getList } from '../../../reduxToolkit/features/admin-list/listSlice';
import './index.css';
const ButtonCategory = () => {
  const [isActive, setIsActive] = useState('all');
  const dispatch = useDispatch();
  const [size, setSize] = useState('all');

  const handleClick = (sizes) => {
    setSize(sizes);
    setIsActive(sizes);
  };

  useEffect(() => {
    dispatch(getList({ size }));
  }, [size]);

  return (
    <div className="container d-flex btn-category-container">
      <button
        className={`base-btn-category ${isActive === 'all' ? 'btn-actived' : ''}`}
        onClick={() => handleClick('all')}
      >
        All
      </button>
      <button
        className={`base-btn-category ${isActive === 'small' ? 'btn-actived' : ''}`}
        onClick={() => handleClick('small')}
      >
        2 - 4 People
      </button>
      <button
        className={`base-btn-category ${isActive === 'medium' ? 'btn-actived' : ''}`}
        onClick={() => handleClick('medium')}
      >
        4 - 6 People
      </button>
      <button
        className={`base-btn-category ${isActive === 'large' ? 'btn-actived' : ''}`}
        onClick={() => handleClick('large')}
      >
        6 - 8 People
      </button>
    </div>
  );
};

export default ButtonCategory;
