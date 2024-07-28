import './JumptoPage.css';
// import useTableAdmin from '../../../../hooks/useTableAdmin';
import { numberToArray } from '../../../utils/formatUtil';
import { useState } from 'react';
const JumptoPage = ({ pageCount, currentPage, onPageChange }) => {
  const arrayPage = numberToArray(pageCount);
  const [selectedPage, setSelectedPage] = useState(currentPage);

  const handleChangePage = (event) => {
    setSelectedPage(event.target.value);
  };
  const handleButtonClick = () => {
    onPageChange(selectedPage);
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center ">
      <p className="m-0 text-black font-title-btn font-normal text-xs leading-4 place-self-start">
        Jump to Page
      </p>
      <div className=" flex justify-center items-center">
        <select
          id="jump-to-page"
          className="input-limit"
          onChange={handleChangePage}
          value={selectedPage}
        >
          {arrayPage.map((number, index) => (
            <option value={number} className="" key={index}>
              {number}
            </option>
          ))}
        </select>
        <button onClick={handleButtonClick} className="btn-go text-center">
          GO
        </button>
      </div>
    </div>
  );
};

export default JumptoPage;
