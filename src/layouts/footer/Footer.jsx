import { NavLink } from 'react-router-dom';
import Decor from '../../components/Decor/Decor';
import Logo from '../../components/Logos/Logo';

import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer_holder'>
          <div className='footer_logo'>
            <Logo />
          </div>
          <ul className='footer_menu'>
            <li className='footer_menu-item'>
              <NavLink to='.'>Coffee house</NavLink>
            </li>
            <li className='footer_menu-item'>
              <NavLink to='our-coffee'>Our coffee</NavLink>
            </li>
            <li className='footer_menu-item'>
              <NavLink to='for-your-pleasure'>For your pleasure</NavLink>
            </li>
          </ul>
          <div className='footer_decor'>
            <Decor />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
