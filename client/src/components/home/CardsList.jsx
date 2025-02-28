import Card from "./Card";

const CardsList = () => {
  const cardsData = [
    {
      imageSrc: "https://images.unsplash.com/photo-1620207418302-439b387441b0",
      title: "Card Title",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1620207418302-439b387441b0",
      title: "Card Title",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1620207418302-439b387441b0",
      title: "Card Title",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1620207418302-439b387441b0",
      title: "Card Title",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1620207418302-439b387441b0",
      title: "Card Title",
      description: "Lorem ipsum dolor sit amet...",
    },
  ];

  return (
    <div className="cards grid grid-cols-1 gap-10 max-w-5xl mx-auto py-10">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          description={card.description}
          index={index}
          length={cardsData.length}
        />
      ))}
    </div>
  );
};

export default CardsList;
