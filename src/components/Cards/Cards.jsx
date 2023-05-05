import Card from './Card';

const Cards = ({ dataImg }) => {
  return (
    <>
      {dataImg.map((item) => {
        return <Card key={item.name} {...item} />;
      })}
    </>
  );
};

export default Cards;
