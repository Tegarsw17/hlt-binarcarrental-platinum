import './index.css';

// todo profile nantinya menggunakan custom hook untuk get nama admin*/}
const ProfileBox = () => {
  return (
    <div className="flex justify-between align-middle profile-box-container gap-2 ">
      <button className="w-9 h-9 icon-profile-admin">
        <span className="self-center text-">U</span>
      </button>
      <p className="flex self-center m-0 box-name-admin">Unis Badri</p>

      <button
        type="button"
        className="flex items-center justify-between w-6  font-medium rtl:text-right text-black gap-3"
      >
        <svg
          className="w-3 h-3 rotate-180 shrink-0"
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
      </button>
    </div>
  );
};

export default ProfileBox;
