import iconRectangle from '../../../assets/Rectangle10.png';
const Title = ({ title, subtitle }) => {
  return (
    <div className="self-start">
      <p className="text-xl font-bold mb-6">{title}</p>
      <div className="flex items-center gap-2 mb-4">
        <img className="w-1 h-6" src={iconRectangle} alt="" />
        <p className="text-sm font-bold m-0">{subtitle}</p>
      </div>
    </div>
  );
};

export default Title;
