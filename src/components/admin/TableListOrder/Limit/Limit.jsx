import './Limit.css';

const LimitPage = () => {
  const handleSelectLimit = (value) => {
    console.log(value);
  };

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
          50
        </option>
      </select>
    </div>
  );
};

export default LimitPage;
