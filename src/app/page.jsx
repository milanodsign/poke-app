'use client';

import CardLogin from '@/components/cardLogin';
import { useGlobalContext } from '@/context/globalContext';
import Image from 'next/image';
import { useState } from 'react';

const Home = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const { valLogin } = useGlobalContext();

  const handleLogin = () => {
    valLogin(user, pass);
  };

  return (
    <main className="main">
      <Image
        className="logoApp mb-4"
        src={require('../assets/img/PokeApp.svg')}
        alt={'PokeApp'}
      />
      <CardLogin
        handleLogin={handleLogin}
        setUser={setUser}
        setPass={setPass}
      />
    </main>
  );
};

export default Home;
