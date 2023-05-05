import './Card.scss';
import imgForCard from '../../img/solimo-coffee.jpg';
import { Link } from 'react-router-dom';

const CardReg = ({ name, price, country, id }) => {
  return (
    <div className='card _shadow'>
      <Link className='card_inner' to={`${id.toString()}`}>
        <div className='card_top'>
          <div className='card_img-holder'>
            <img className='bg-stretch' src={imgForCard} alt='coffee variety' />
          </div>
          <div className='card_text'>{name}</div>
        </div>
        <div className='card_country'>{country}</div>
        <div className='card_price'>{price}</div>
      </Link>
    </div>
  );
};

export default CardReg;
