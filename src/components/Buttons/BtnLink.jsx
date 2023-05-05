import './BtnLink.scss';

const BtnLink = ({ text, button_view }) => {
  return text ? (
    <div className='link-holder'>
      <a className={`${button_view} btn link-holder_link`} href='#'>
        {text}
      </a>
    </div>
  ) : (
    ''
  );
};

export default BtnLink;
