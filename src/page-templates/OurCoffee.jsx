import CardsReg from '../components/Cards/CardsReg';
import Line from '../components/Decor/Line';
import Depiction from '../components/Depiction/Depiction';
import FiltrationControl from '../components/FiltrationControl/FiltrationControl';
import Hero from '../components/Hero/Hero';

import imgPic from '../img/girl-with-coffee.jpg';

const OurCoffee = ({
  dataImg,
  filterElementsByName,
  filterElementsByCountry,
  nameButtons,
}) => {
  return (
    <main>
      <Hero title='Our Coffee'></Hero>
      <section className='shell'>
        <div className='container'>
          <Depiction
            title='About our beans'
            text='Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            scene={imgPic}
            description='type of coffee'
          />
        </div>
      </section>
      <Line />
      <div>
        <div className='shell'>
          <div className='container _sm'>
            <FiltrationControl
              filterElementsByName={filterElementsByName}
              filterElementsByCountry={filterElementsByCountry}
              nameButtons={nameButtons}
            />
            <CardsReg dataImg={dataImg} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurCoffee;
