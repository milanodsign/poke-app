import userImg from '@/assets/img/user/ash.png';
import { MdSpaceDashboard, MdLogout } from 'react-icons/md';

export const dataUser = [
  {
    name: 'Ash Ketchum',
    title: 'Pokemon Trainer',
    avatar: userImg,
    user: 'aKetchum85',
    password: '1234567890',
  },
];

export const dataMenu = [
  { title: 'Dashboard', icon: <MdSpaceDashboard />, link: '/dashboard' },
  { title: 'Logout', icon: <MdLogout />, link: '' },
];
