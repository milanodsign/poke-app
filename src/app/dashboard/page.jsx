'use client';

import Header from '@/components/header';
import Loading from '@/components/loading';
import Pagination from '@/components/pagination';
import { useGlobalContext } from '@/context/globalContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useEffect } from 'react';

const Dashboard = () => {
  const { isOpenMenu, fetchData, dataPokemon, currentItems, getCurrentItems } =
    useGlobalContext();

  useEffect(() => {
    fetchData();
  }, []);

  const itemsPerPage = 10;
  const pageCount = Math.ceil(dataPokemon.length / itemsPerPage);

  const handlePageChange = (selectedPage) => {
    const startOffset = selectedPage * itemsPerPage;
    const endOffset = startOffset + itemsPerPage;
    const itemsToDisplay =
      dataPokemon && dataPokemon.slice(Number(startOffset), Number(endOffset));
    getCurrentItems(itemsToDisplay); // Actualiza los elementos actuales
  };

  useEffect(() => {
    dataPokemon.length > 0 && handlePageChange(0);
  }, [dataPokemon]);

  return (
    <Fragment>
      <Header />
      <div className={isOpenMenu ? 'contInfo active' : 'contInfo'}>
        <h1>Dashboard</h1>
        {currentItems.length > 0 ? (
          <>
            <div className="contCard mt-5">
              {currentItems.map((item, i) => (
                <div className="card" key={i} title={item?.name}>
                  <Link href={`/${item.id}`}>
                    <div className="card-img-top contImgItem">
                      <Image
                        src={item?.sprites?.other?.dream_world?.front_default}
                        alt={item?.name}
                        width={150}
                        height={150}
                      />
                      <span>
                        <span>Weight: {item?.weight}kg</span>
                      </span>
                    </div>

                    <div className="card-body">
                      <span className="namePokemon">{item?.name}</span>
                      <span className="abilities">
                        #{item.abilities[0]?.ability.name} #
                        {item.abilities[1]?.ability.name}
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
          </>
        ) : (
          <Loading />
        )}
      </div>
    </Fragment>
  );
};

export default Dashboard;
