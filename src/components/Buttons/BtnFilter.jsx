import { useState } from 'react';
import './BtnFilter.scss';

const BtnFilter = ({
  text,
  button_view,
  filterElementsByCountry,
  setActive,
}) => {
  const [flug, setFlug] = useState('');

  const handleClick = (e) => {
    if (e.target.textContent === 'All') {
      console.log(e.target.textContent);
      setFlug(e.target.textContent);
    }
    filterElementsByCountry(text, flug);
    setActive({ active: 'active', name: e.target.textContent });
  };

  return (
    <div className='btn-filter'>
      <button onClick={handleClick} className={`${button_view} btn`}>
        {text}
      </button>
    </div>
  );
};

export default BtnFilter;
