import { Link } from 'react-router-dom';
import img_2x from '../../img/coffee-shop_2x.jpg';
// import BtnLink from '../Buttons/BtnLink';
import Decor from '../Decor/Decor';

import './Hero.scss';

const Hero = ({
  title,
  suptext,
  btn_text,
  button_view,
  padding_y,
  decorColor,
  address,
}) => {
  let py_size = '';
  if (padding_y) {
    py_size = padding_y;
  }

  return (
    <section className={`hero ${py_size}`}>
      <img className='bg-stretch' src={img_2x} alt='coffee-shop' />
      <div className='container'>
        <div className='hero_headline'>
          <h1 className='hero_headline-title'>{title}</h1>
        </div>
        {decorColor ? <Decor color={decorColor} /> : ''}

        {suptext ? (
          <div className='hero_text'>
            <div className='hero_suptext'>
              <p>{suptext}</p>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      {btn_text ? (
        <Link
          className={`${button_view} btn link-holder link-holder_link`}
          to={address}
        >
          {btn_text}
        </Link>
      ) : (
        ''
      )}
    </section>
  );
};

export default Hero;
