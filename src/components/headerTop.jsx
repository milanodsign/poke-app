'use client';
import { useGlobalContext } from '@/context/globalContext';
import Image from 'next/image';
import { FaTimes, FaBars } from 'react-icons/fa';

const HeaderTop = () => {
  const { handleIsOpen, isOpenMenu } = useGlobalContext();
  return (
    <div className="headerTop">
      <span>
        {isOpenMenu ? (
          <FaTimes className="burgerMenu" onClick={() => handleIsOpen()} />
        ) : (
          <FaBars className="burgerMenu" onClick={() => handleIsOpen()} />
        )}
      </span>
      <span>
        <Image
          className="logoAppHeader"
          src={require('@/assets/img/PokeApp.svg')}
          priority={true}
          alt="PokeApp"
        />
      </span>
    </div>
  );
};

export default HeaderTop;
