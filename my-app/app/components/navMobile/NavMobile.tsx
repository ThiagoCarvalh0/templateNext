import {
  GanttChartSquareIcon,
  HomeIcon,
  Link,
  UserSquareIcon,
  UsersIcon,
} from 'lucide-react';
import React from 'react';

const NavMobile = () => {
  return (
    <div className='sticky bottom-0 w-full justify-between border border-t-slate-500 bg-white p-2 sm:flex lg:hidden'>
      <a href='#'>
        <div className='flex flex-col items-center justify-center'>
          <HomeIcon />
          <span>Home</span>
        </div>
      </a>
      <div className='flex flex-col items-center justify-center'>
        <UsersIcon />
        <span>Quem Somos</span>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <GanttChartSquareIcon />
        <span>Serviços</span>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <UserSquareIcon />
        <span>Contatos</span>
      </div>
    </div>
  );
};

export default NavMobile;
