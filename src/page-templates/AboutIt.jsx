import { useParams } from 'react-router-dom';
import Depiction from '../components/Depiction/Depiction';
import Hero from '../components/Hero/Hero';

import imgPic from '../img/girl-with-coffee.jpg';

const AboutIt = ({ imageDataForCards }) => {
  const params = useParams();

  const card = imageDataForCards.find(
    (item) => item.id === Number(params.slug)
  );
  const text = card.name.replace(/\d+ kg/g, '');
  const description = card.description;

  return (
    <main>
      <Hero title='Our Coffee'></Hero>
      <section className='shell'>
        <div className='container'>
          <Depiction
            title={`About ${text}`}
            text={`Description: ${description}`}
            scene={imgPic}
            description='type of coffee'
          />
        </div>
      </section>
    </main>
  );
};

export default AboutIt;
