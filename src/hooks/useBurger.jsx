import { useEffect, useState } from 'react';

const useBurger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {}, [isOpen]);

  return { isOpen, handleClick };
};

export default useBurger;
