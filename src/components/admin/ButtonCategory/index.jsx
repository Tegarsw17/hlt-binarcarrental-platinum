import './index.css';
const ButtonCategory = ({ category, handleClickCategory }) => {
  return (
    <div className="container flex btn-category-container mb-2">
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
