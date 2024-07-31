import iconVector from '../../../../../assets/Vector.png';

const ProfileBox = ({ onClickAccordion, isOpenAccordion }) => {
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
    </div>
  );
};

export default ProfileBox;
