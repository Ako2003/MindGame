const content = [
  {
    title: "CARDS ORDER",
    text: "The main gain of the game is to predict the mind of your teammate and put all cards in right order. You have to put cards without speaking or giving any signs in ascending order (from small one to greater one).",
  },
  {
    title: "WRONG ORDER",
    text: "If you have the wrong order of cards, you miss one of your lifes, and put all lower cards away and continue reading the mind of your teammate",
  },
  {
    title: "THROWING STAR",
    text: "You will have 1 throwing star and when you will feel that you need a help, you can use it! It will put away the lowest cards of each player",
  },
  {
    title: "ENJOY THE GAME",
    text: "Don't be disappointed if you don't win. Try to read the mind of your friends and try once more!",
  },
];

const HowToPlay = () => {
  return (
    <section id="howtoplay" className="px-4 xs:px-8 sm:px-16 lg:px-32 xl:px-64 py-32">
      <h1 className="text-center text-5xl font-medium mb-8">How to play</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {content.map((card, key) => (
          <Card key={key} title={card.title} text={card.text} />
        ))}
      </div>
    </section>
  );
};

export default HowToPlay;

const Card = ({ title, text }) => {
  return (
    <div className="bg-lightener-200 rounded-3xl p-12 hover:bg-lightener-250 duration-300">
      <h2 className="text-3xl font-medium mb-2">{title}</h2>
      <p>{text}</p>
    </div>
  );
};
