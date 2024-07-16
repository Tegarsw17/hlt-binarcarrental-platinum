import './JumptoPage.css';
const JumptoPage = () => {
  const handleSelectPage = (value) => {
    console.log(value);
  };
  return (
    <div className=" flex justify-center items-center">
      <select className="input-limit" onChange={handleSelectPage}>
        <option value={'1'} className="">
          1
        </option>
        <option value={'2'} className="">
          2
        </option>
        <option value={'3'} className="">
          3
        </option>
        <option value={'4'} className="">
          4
        </option>
        <option value={'5'} className="">
          5
        </option>
        <option value={'6'} className="">
          6
        </option>
        <option value={'7'} className="">
          7
        </option>
        <option value={'8'} className="">
          8
        </option>
        <option value={'9'} className="">
          9
        </option>
      </select>
      <button className="btn-go text-center">GO</button>
    </div>
  );
};

export default JumptoPage;
