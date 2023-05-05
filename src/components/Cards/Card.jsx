import './Card.scss';
import imgForCard from '../../img/solimo-coffee.jpg';

const Card = ({ name, price }) => {
  return (
    <div className='card'>
      <div className='card_inner'>
        <div className='card_top'>
          <div className='card_img-holder'>
            <img className='bg-stretch' src={imgForCard} alt='coffee variety' />
          </div>
          <div className='card_text'>{name}</div>
        </div>
        <div className='card_price'>{price}</div>
      </div>
    </div>
  );
};

export default Card;
