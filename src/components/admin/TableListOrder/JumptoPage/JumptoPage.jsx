import './JumptoPage.css';
import useTableAdmin from '../../../../hooks/useTableAdmin';

const JumptoPage = () => {
  const { handleSelectPage, pageCount } = useTableAdmin();
  const arrayPage = Array.from({ length: pageCount }, (_, i) => i + 1);
  const handleClick = () => {
    handleSelectPage();
  };

  return (
    <div className=" flex justify-center items-center">
      <select className="input-limit" onChange={handleSelectPage}>
        {arrayPage.map((number, index) => (
          <option value={number} className="" key={index}>
            {number}
          </option>
        ))}
      </select>
      <button onClick={handleClick} className="btn-go text-center">
        GO
      </button>
    </div>
  );
};

export default JumptoPage;
