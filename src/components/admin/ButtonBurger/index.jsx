import { showNavbar } from '../../../reduxToolkit/features/admin-navbar/navbarSlice';
import { useSelector, useDispatch } from 'react-redux';

const ButtonBurger = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.navbarSlice);

  const handleClick = () => {
    dispatch(showNavbar());
  };

  return (
    <div className=" flex justify-center align-middle">
      <button
        onClick={handleClick}
        className="group flex justify-center align-middle"
      >
        <div className="grid justify-items-center gap-1.5">
          <span
            className={`h-1 w-8 rounded-full bg-black ${!isOpen ? '' : 'transition group-hover:rotate-45 group-hover:translate-y-2.5'}`}
          ></span>
          <span
            className={`h-1 w-8 rounded-full bg-black ${!isOpen ? '' : 'group-hover:scale-x-0 transition'}`}
          ></span>
          <span
            className={`h-1 w-8 rounded-full bg-black ${!isOpen ? '' : 'group-hover:-rotate-45 group-hover:-translate-y-2.5'}`}
          ></span>
        </div>
      </button>
    </div>
  );
};

export default ButtonBurger;
