'use client';
import { BASE_URL } from '@/constants/constants';
import { dataUser } from '@/data/data';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const GlobalContext = createContext();

const MySwal = withReactContent(Swal);

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalsContext = ({ children }) => {
  const router = useRouter();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [offset, setOffset] = useState(0);
  const [dataAll, setDataAll] = useState([]);
  const [dataPokemon, setDataPokemon] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [infoPokemon, setInfoPokemon] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const isLoginLS = localStorage.getItem('isLogin');
    isLoginLS === true ? router.push('/dashboard') : router.push('/');
  }, []);

  const valLogin = (user, pass) => {
    console.log(user, pass);
    try {
      user === dataUser[0].user && pass === dataUser[0].password
        ? (setIsLogin(true),
          localStorage.setItem('isLogin', true),
          MySwal.fire({
            title: <strong>Good job!</strong>,
            html: <i>The data is correct</i>,
            icon: 'success',
          }),
          router.push('/dashboard'))
        : (setIsLogin(false),
          localStorage.setItem('isLogin', false),
          MySwal.fire({
            title: <strong>Error!</strong>,
            html: <i>The data is not correct</i>,
            icon: 'error',
          }));
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.clear();
    setDataAll([]);
    dataPokemon([]);
    infoPokemon([]);
    router.push('/');
  };

  const fetchData = async (limit = 1281) => {
    try {
      const response = await axios.get(
        `${BASE_URL}?limit=${limit}&offset=${offset}`,
      );
      const data = await response.data;
      setDataAll(data);
      const promises = data.results.map(async (pokemon) => {
        const response = await axios.get(pokemon.url);
        const data = await response.data;
        return data;
      });
      // console.log(promises);
      const result = await Promise.all(promises);
      // console.log(result);
      setDataPokemon(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleIsOpen = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const getCurrentItems = (items) => {
    setCurrentItems(items);
  };

  const fetchInfoPokemon = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      const data = await response.data;
      setInfoPokemon(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        handleIsOpen,
        isOpenMenu,
        dataPokemon,
        fetchData,
        dataAll,
        currentItems,
        getCurrentItems,
        infoPokemon,
        fetchInfoPokemon,
        setDataPokemon,
        valLogin,
        isLogin,
        logout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
