import './Limit.css';
import useTableAdmin from '../../../../hooks/useTableAdmin';

const LimitPage = () => {
  const { pageSize, handleSelectLimit } = useTableAdmin();
  return (
    <div>
      <select
        className="flex justify-center input-limit"
        onChange={handleSelectLimit}
      >
        <option value={'10'} className="">
          10
        </option>
        <option value={'30'} className="">
          30
        </option>
      </select>
    </div>
  );
};

export default LimitPage;
