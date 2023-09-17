'use client';

import Header from '@/components/header';
import Loading from '@/components/loading';
import { useGlobalContext } from '@/context/globalContext';
import Image from 'next/image';
import React, { Fragment, useEffect } from 'react';

const InfoPokemon = ({ params }) => {
  const { id } = params;
  const { isOpenMenu, infoPokemon, fetchInfoPokemon } = useGlobalContext();

  useEffect(() => {
    fetchInfoPokemon(id);
  }, []);

  return (
    <Fragment>
      <Header />
      <div className={isOpenMenu ? 'contInfo active' : 'contInfo'}>
        {infoPokemon !== null ? (
          <>
            <h1 className="namePokemon">{infoPokemon.name}</h1>
            <div className="conInfoPokemon mt-5">
              <div className="imgPokemon">
                <Image
                  src={infoPokemon.sprites.other.dream_world.front_default}
                  width={300}
                  height={300}
                  priority={true}
                  alt={infoPokemon.name}
                />
              </div>
              <div className="infoPokemon">
                <h2>Stats</h2>
                {infoPokemon.stats.map((item, i) => (
                  <span key={i}>
                    <label className="labelStat" htmlFor={i}>
                      {item.stat.name}
                    </label>
                    {/* <progress
                      className="progressStat"
                      id="file"
                      max="100"
                      value={item.base_stat}
                    >
                      70%
                    </progress> */}
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                        role="progressbar"
                        style={{ width: `${item.base_stat}%` }}
                        aria-valuenow={item.base_stat}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </span>
                ))}
              </div>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </Fragment>
  );
};

export default InfoPokemon;
