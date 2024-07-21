import './JumptoPage.css';
import useTableAdmin from '../../../../hooks/useTableAdmin';
import { useSelector } from 'react-redux';

const JumptoPage = () => {
  const { handleSelectPage } = useTableAdmin();
  const { countPage } = useSelector((state) => state.listOrderSlice);
  const arrayPage = Array.from({ length: 40 }, (_, i) => i + 1);

  return (
    <div className=" flex justify-center items-center">
      <select className="input-limit" onChange={handleSelectPage}>
        {arrayPage.map((number, index) => (
          <option value={number} className="" key={index}>
            {number}
          </option>
        ))}
      </select>
      <button className="btn-go text-center">GO</button>
    </div>
  );
};

export default JumptoPage;
