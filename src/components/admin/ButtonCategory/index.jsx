import useListCarAdmin from '../../../hooks/useListCarAdmin';
import './index.css';
const ButtonCategory = () => {
  const { categoryActive, handleClickCategory } = useListCarAdmin();

  return (
    <div className="container d-flex btn-category-container">
      <button
        className={`base-btn-category ${categoryActive === '' ? 'btn-actived' : ''}`}
        onClick={() => handleClickCategory('')}
      >
        All
      </button>
      <button
        className={`base-btn-category ${categoryActive === 'small' ? 'btn-actived' : ''}`}
        onClick={() => handleClickCategory('small')}
      >
        2 - 4 People
      </button>
      <button
        className={`base-btn-category ${categoryActive === 'medium' ? 'btn-actived' : ''}`}
        onClick={() => handleClickCategory('medium')}
      >
        4 - 6 People
      </button>
      <button
        className={`base-btn-category ${categoryActive === 'large' ? 'btn-actived' : ''}`}
        onClick={() => handleClickCategory('large')}
      >
        6 - 8 People
      </button>
    </div>
  );
};

export default ButtonCategory;
