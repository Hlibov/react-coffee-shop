import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Menu from '../../components/Menu/Menu';
import OpenClose from '../../components/OpenClose/OpenClose';

import './Header.scss';
import Logo from '../../components/Logos/Logo';

const Header = () => {
  const [addClass, setAddClass] = useState('');
  const onAddClass = (flag) => {
    if (flag === 'open') {
      return setAddClass('open');
    }
    if (flag === 'close') {
      return setAddClass('');
    }
  };

  return (
    <>
      <div className='header-menu'>
        <div className='container _lg d-flex-between-center'>
          <Logo color='#fff' />
          <Menu addClass={addClass} />
          <OpenClose onAddClass={onAddClass} />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
