import useListCarAdmin from '../../../hooks/useListCarAdmin';
import './index.css';
const ButtonCategory = ({ category, handleClickCategory }) => {
  // const { categoryActive, handleClickCategory } = useListCarAdmin();

  // console.log('get cat:', category);
  return (
    <div className="container d-flex btn-category-container">
      <button
        className={`base-btn-category ${category === '' ? 'btn-actived' : ''}`}
        onClick={() => handleClickCategory('')}
      >
        All
      </button>
      <button
        className={`base-btn-category ${category === 'small' ? 'btn-actived' : ''}`}
        onClick={() => handleClickCategory('small')}
      >
        2 - 4 People
      </button>
      <button
        className={`base-btn-category ${category === 'medium' ? 'btn-actived' : ''}`}
        onClick={() => handleClickCategory('medium')}
      >
        4 - 6 People
      </button>
      <button
        className={`base-btn-category ${category === 'large' ? 'btn-actived' : ''}`}
        onClick={() => handleClickCategory('large')}
      >
        6 - 8 People
      </button>
    </div>
  );
};

export default ButtonCategory;
