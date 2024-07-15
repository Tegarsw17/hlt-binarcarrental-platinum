import './index.css';
const SideNavbar = () => {
  return (
    <div>
      <div className="z-30 fixed h-screen w-16 sidebar-container"></div>
      <div className="z-10 fixed left-16 bg-white h-screen w-52 shadow-md"></div>
    </div>
  );
};

export default SideNavbar;
