import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/image.png'


const Header = () => {
  return <header className='mt-0'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>

        <Link to='/'>
          <img className='h-[100px]' src={Logo} alt='' />
        </Link>
        <Link to='/contact'>
          <button className='btn btn-sm'> Gallery</button></Link>
      </div>

    </div>
  </header>;
};

export default Header;
