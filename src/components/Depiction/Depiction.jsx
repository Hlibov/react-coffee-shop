import Decor from '../Decor/Decor';
import './Depiction.scss';

const Depiction = ({ title, text, scene, description }) => {
  return (
    <div className='dep'>
      <div className='dep_col'>
        <div className='dep_img'>
          <img className='bg-stretch' src={scene} alt={description} />
        </div>
      </div>
      <div className='dep_col'>
        <div className='dep_text'>
          <h2>{title}</h2>
          <div className='dep_decor'>
            <Decor />
          </div>
          <p>{text}</p>
          <div className='dep_line'></div>
        </div>
      </div>
    </div>
  );
};

export default Depiction;
