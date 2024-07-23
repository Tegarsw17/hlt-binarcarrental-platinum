import './Limit.css';

const LimitPage = ({ pageSize, handleSelectLimit }) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center ">
      <p className="m-0 text-black font-title-btn font-normal text-xs leading-4 place-self-start">
        Limit
      </p>
      <div>
        <select
          className="flex justify-center input-limit"
          onChange={handleSelectLimit}
        >
          <option disabled selected value={pageSize}>
            {pageSize}
          </option>
          <option value={'10'}>10</option>
          <option value={'50'}>50</option>
          <option value={'100'}>100</option>
        </select>
      </div>
    </div>
  );
};

export default LimitPage;
