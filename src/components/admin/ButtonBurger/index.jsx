import useBurger from '../../../hooks/useBurger';

const ButtonBurger = () => {
  const { isOpen, handleClick } = useBurger();

  return (
    <div className=" flex justify-center align-middle">
      <button
        onClick={handleClick}
        className="group flex justify-center align-middle"
      >
        <div className="grid justify-items-center gap-1.5">
          <span
            className={`h-1 w-8 rounded-full bg-black ${isOpen ? 'transition group-hover:rotate-45' : 'transition group-hover:rotate-45 group-hover:translate-y-2.5'}`}
          ></span>
          <span
            className={`h-1 w-8 rounded-full bg-black ${isOpen ? 'transition group-hover:-translate-x-2' : 'group-hover:scale-x-0 transition'}`}
          ></span>
          <span
            className={`h-1 w-8 rounded-full bg-black ${isOpen ? 'transition group-hover:-rotate-45' : 'group-hover:-rotate-45 group-hover:-translate-y-2.5'}`}
          ></span>
        </div>
      </button>
    </div>
  );
};

export default ButtonBurger;
