import CardReg from './CardReg';

import './CardsReg.scss';

const CardsReg = ({ dataImg }) => {
  return (
    <div className='cards-reg'>
      {dataImg.map((item) => {
        return <CardReg key={item.name} {...item} />;
      })}
    </div>
  );
};

export default CardsReg;
