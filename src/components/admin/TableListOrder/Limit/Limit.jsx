import './Limit.css';
import useTableAdmin from '../../../../hooks/useTableAdmin';

const LimitPage = () => {
  const { handleSelectLimit } = useTableAdmin();
  return (
    <div>
      <select
        className="flex justify-center input-limit"
        onChange={handleSelectLimit}
      >
        <option value={'10'} className="">
          10
        </option>
        <option value={'50'} className="">
          50
        </option>
        <option value={'100'} className="">
          100
        </option>
      </select>
    </div>
  );
};

export default LimitPage;
