import { useState } from 'react';
import './OpenClose.scss';

const OpenClose = ({ onAddClass }) => {
  const [text, setText] = useState('open');

  const chengeText = () => {
    onAddClass(text);
    if (text === 'open') {
      return setText('close');
    } else {
      return setText('open');
    }
  };

  const addClassToBody = () => {
    document.querySelector('body').classList.toggle('menu-open');
  };

  const clickHandler = () => {
    chengeText();
    addClassToBody();
  };

  return (
    <>
      <button onClick={clickHandler} className='open-close btn btn-alt'>
        {text}
      </button>
    </>
  );
};

export default OpenClose;
