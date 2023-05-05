import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from './layouts/header/Header';
import CoffeeHouse from './page-templates/CoffeeHouse';
import OurCoffee from './page-templates/OurCoffee';
import ForYourPleasure from './page-templates/ForYourPleasure';
import AboutIt from './page-templates/AboutIt';
import NotFound from './page-templates/NotFound';
import Footer from './layouts/footer/Footer';

import './App.scss';

function App() {
  (function (window, document) {
    const variable = '--full-viewport';
    function vh() {
      document.documentElement.style.setProperty(
        variable,
        `${window.innerHeight}px`
      );
    }
    vh();
    window.addEventListener('resize', vh);
  })(window, document);

  const imageDataForCards = [
    {
      img: 'solimo-coffee.jpg',
      name: 'Solimo Coffee Beans 2 kg',
      price: '10.73$',
      country: 'Brazil',
      id: 456,
      description:
        'Solimo is a popular drink made from coffee beans that contains caffeine which can help stimulate the body and improve mood. Coffee can have different flavors and aromas depending on the brewing method and bean variety. It’s a popular drink worldwide and can be prepared in various ways12.',
    },
    {
      img: 'aromistico-coffee.jpg',
      name: 'Presto Coffee Beans 1 kg',
      price: '15.99$',
      country: 'Kenya',
      id: 567,
      description:
        'Presto is a drink made from the beans of a coffee tree. It contains caffeine, which can help excite the body and improve mood. Coffee can have different taste and aroma depending on the method of preparation and the variety of beans. It is a popular drink all over the world and can be prepared in different versions.',
    },
    {
      img: 'aromistico-coffee.jpg',
      name: 'AROMISTICO Coffee 1 kg',
      price: '6.99$',
      country: 'Columbia',
      id: 765,
      description:
        'Aromistico is a premium coffee variety that boasts a rich, full-bodied flavor with a delightful aroma. Made from a blend of the finest Arabica and Robusta beans, this coffee is expertly roasted to perfection to bring out its unique flavor profile. With its smooth finish and irresistible aroma, Aromistico is the perfect choice for coffee lovers who appreciate the finer things in life.',
    },
  ];

  const nameButtons = imageDataForCards.map((item) => item.country);
  nameButtons.unshift('All');

  const [dataForCards, setDataForCards] = useState(imageDataForCards);

  const searchName = (text) => {
    if (text.length === 0) {
      return dataForCards;
    }

    return dataForCards.filter((item) => {
      return item.name.indexOf(text) > -1;
    });
  };

  const searchCountry = (country) => {
    return imageDataForCards.filter((item) => {
      return item.country === country;
    });
  };

  const filterElementsByName = (text) => {
    setDataForCards(searchName(text));
  };

  const filterElementsByCountry = (country, flug) => {
    if (flug === 'All') {
      setDataForCards(imageDataForCards);
      return;
    }
    setDataForCards(searchCountry(country));
  };

  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route
              index
              element={<CoffeeHouse dataImg={imageDataForCards} />}
            />
            <Route
              path='our-coffee'
              element={
                <OurCoffee
                  filterElementsByName={filterElementsByName}
                  filterElementsByCountry={filterElementsByCountry}
                  dataImg={dataForCards}
                  nameButtons={nameButtons}
                />
              }
            />
            <Route
              path='our-coffee/:slug'
              element={<AboutIt imageDataForCards={imageDataForCards} />}
            />
            <Route
              path='for-your-pleasure'
              element={
                <ForYourPleasure imageDataForCards={imageDataForCards} />
              }
            />
            <Route
              path='for-your-pleasure/:slug'
              element={<AboutIt imageDataForCards={imageDataForCards} />}
            />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
