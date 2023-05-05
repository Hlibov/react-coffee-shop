import { useState } from 'react';
import BtnFilter from '../Buttons/BtnFilter';

import './FiltrationControl.scss';

const FiltrationControl = ({
  filterElementsByName,
  filterElementsByCountry,
  nameButtons,
}) => {
  const [text, setText] = useState('');
  const [active, setActive] = useState({ active: 'active', name: 'All' });

  const handleChange = (e) => {
    setText(e.target.value);
    filterElementsByName(text);
  };

  return (
    <div className='filtr-control'>
      <div className='filtr-control_search'>
        <label className='filtr-control_label' htmlFor='search'>
          Lookiing for
        </label>
        <input
          onChange={handleChange}
          className='filtr-control_input'
          id='search'
          value={text}
          type='text'
          placeholder='start typing here...'
        />
      </div>
      <div className='filtr-control_text'>Or filter</div>
      <div className='filtr-control_btns-hold'>
        {nameButtons.map((item) => (
          <BtnFilter
            key={item}
            filterElementsByCountry={filterElementsByCountry}
            text={item}
            setActive={setActive}
            button_view={`btn-sm ${item === active.name ? active.active : ''}`}
          />
        ))}
      </div>
      {}
    </div>
  );
};

export default FiltrationControl;
