import Image from 'next/image';
import React from 'react';

const Loading = () => {
  return (
    <div className="align-items-center d-flex justify-content-center loadingGrid flex-column">
      <Image
        src={require('../assets/img/pokeIcon.png')}
        alt={'Loading'}
        width={150}
        height={150}
        priority={true}
        className="imgLoading"
      />
      <div className="ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
