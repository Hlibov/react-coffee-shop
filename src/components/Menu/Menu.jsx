import { NavLink } from 'react-router-dom';

import './Menu.scss';

const Menu = ({ addClass }) => {
  return (
    <div className={`menu-holder ${addClass}`}>
      <nav className='menu-nav'>
        <div className='menu-nav_item'>
          <NavLink to='.'>Coffee house</NavLink>
        </div>
        <div className='menu-nav_item'>
          <NavLink to='our-coffee'>Our coffee</NavLink>
        </div>
        <div className='menu-nav_item'>
          <NavLink to='for-your-pleasure'>For your pleasure</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
