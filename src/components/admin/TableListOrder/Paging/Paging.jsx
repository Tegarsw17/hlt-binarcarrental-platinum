import './Paging.css';
const Paging = () => {
  return (
    <div className="btn-page-list">
      <button>&lt;&lt;</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>...</button>
      <button>9</button>
      <button>&gt;&gt;</button>
    </div>
  );
};

export default Paging;
