import rabbit from "../../assets/images/rabbit.png";

const HiddenCard = ({ className, style }) => {
  return (
    <div className={className} style={style}>
      <div className={`card`}>
        <span
          className={`position-center font-Rubik text-9xl text-black`}
          style={{ filter: "drop-shadow(0 0 15px white) drop-shadow(0 0 30px orange) drop-shadow(0 0 30px red)" }}
        >
          <img src={rabbit} alt="" />
        </span>
      </div>
    </div>
  );
};

export default HiddenCard;
