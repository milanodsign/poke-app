'use client';

import { useGlobalContext } from '@/context/globalContext';
import { dataMenu, dataUser } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SideMenu = () => {
  const { isOpenMenu, setDataPokemon, logout } = useGlobalContext();

  const handleClearData = () => {
    setDataPokemon([]);
  };
  return (
    <div className={isOpenMenu ? 'sideMenu active' : 'sideMenu'}>
      <div className="infoUser">
        <Image
          src={dataUser[0].avatar}
          alt="Avatar User"
          width={150}
          height={150}
          priority={true}
        />
        <span className="nameUser">{dataUser[0].name}</span>
        <span className="titleUser">{dataUser[0].title}</span>
      </div>
      <hr />
      <div className="itemsMenu">
        {dataMenu.map((item, i) => (
          <Link
            href={item.link}
            key={i}
            title={item.title}
            onClick={() =>
              item.title !== 'Logout' ? handleClearData() : logout()
            }
          >
            <span className="icon">{item.icon}</span>
            <span className="titleItemMenu">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
