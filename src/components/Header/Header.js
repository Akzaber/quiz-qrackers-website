import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='flex justify-between px-32 bg-slate-400 py-4'>
      <div>
        <h2 className='text-4xl font-semibold'>Online Quiz</h2>
      </div>
      <div>
        <NavLink className={`mr-4 text-xl ${({isActive}) => isActive? `activeClassName` : undefined}`} to='/'>Home</NavLink>
        <NavLink className='mr-4 text-xl' to='/statistics'>Statistics</NavLink>
        <NavLink className='mr-4 text-xl' to='/blog'>Blog</NavLink>
      </div>
    </nav>
  );
};

export default Header;