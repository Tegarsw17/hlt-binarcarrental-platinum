import iconChevron from '../../../assets/chevron-right.png';
const Tag = ({ tags, subTags }) => {
  return (
    <div className=" z-0 flex container gap-component">
      <div className="flex gap-1 admin-tag-page pr-3 items-center">
        <p className="font-sans text-center text-xs font-bold m-0">{tags}</p>
        <img className="w-5 h-5" src={iconChevron} alt="" />
        <p className="font-sans text-center text-xs m-0">{subTags}</p>
      </div>
    </div>
  );
};

export default Tag;
