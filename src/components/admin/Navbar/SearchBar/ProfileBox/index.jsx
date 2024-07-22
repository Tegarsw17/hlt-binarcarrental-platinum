import './index.css';
import iconVector from '../../../../../assets/Vector.png';
import { useState } from 'react';
// todo profile nantinya menggunakan custom hook untuk get nama admin*/}

const ProfileBox = ({ onClickAccordion, isOpenAccordion }) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const handleClick = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div className="flex justify-between items-center profile-box-container gap-2 ">
      <button className="z-10 flex items-center justify-center w-9 h-9 icon-profile-admin">
        <span className="self-center text-">U</span>
      </button>
      <p className="z-10 flex self-center m-0 box-name-admin">Unis Badri</p>

      <input
        className={`z-10 w-3 h-2 ${isOpenAccordion ? ' transition-transform  rotate-0' : ' transition-transform  rotate-180'}`}
        onClick={onClickAccordion}
        type="image"
        src={iconVector}
      />

      {/* <button
        onClick={handleClick}
        type="button"
        className=" flex items-center justify-center w-6 font-medium rtl:text-right text-black gap-3 bg-black"
      >
        
        <img className="w-3 h-3" src="{iconVector}" alt="" />
        <svg
          className={`w-3 h-3 shrink-0 ${isOpen ? 'rotate-0' : 'rotate-180'} `}
          aria-hidden="true"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button> */}
    </div>
  );
};

export default ProfileBox;
