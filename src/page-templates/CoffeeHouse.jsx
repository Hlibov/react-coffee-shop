import Cards from '../components/Cards/Cards';
import Decor from '../components/Decor/Decor';
import Hero from '../components/Hero/Hero';

import bgImg from '../img/bg-paper.jpg';
import '../components/Buttons/BtnLink.scss';

const CoffeeHouse = ({ dataImg }) => {
  return (
    <main>
      <Hero
        padding_y='lg'
        title='Everything You Love About Coffee'
        suptext='We makes every day full of energy and taste. Want to try our beans?'
        btn_text='More'
        button_view='btn-alt btn-outline'
        decorColor='white'
        address='for-your-pleasure'
      ></Hero>
      <section className='content'>
        <div className='container'>
          <h2>About Us</h2>
          <Decor />
          <div className='content_text'>
            <p>
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible. Afraid at highly months do things on at.
              Situation recommend objection do intention so questions. As
              greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered
              followed. At it went is song that held help face.
            </p>
            <p>
              Now residence dashwoods she excellent you. Shade being under his
              bed her, Much read on as draw. Blessing for ignorant exercise any
              yourself unpacked. Pleasant horrible but confined day end
              marriage. Eagerness furniture set preserved far recommend. Did
              even but nor are most gave hope. Secure active living depend son
              repair day ladies now.
            </p>
          </div>
        </div>
      </section>
      <section className='content'>
        <img className='bg-stretch' src={bgImg} alt='background' />
        <div className='container'>
          <h2>Our best</h2>
          <div className='content_cards'>
            <Cards dataImg={dataImg} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default CoffeeHouse;
