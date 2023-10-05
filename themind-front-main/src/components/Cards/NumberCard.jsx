import { twMerge } from "tailwind-merge";

const NumberCard = ({ number, className, style }) => {
  return (
    <div className={className} style={style}>
      <div className={`card`}>
        <span className={`absolute font-bold top-1 left-1 text-lg text-neutral-500`}>{number}</span>
        <span className={`absolute font-bold top-1 right-1 text-lg text-neutral-500`}>{number}</span>
        <span className={`absolute font-bold bottom-1 left-1 text-lg text-neutral-500 rotate-180`}>{number}</span>
        <span className={`absolute font-bold bottom-1 right-1 text-lg text-neutral-500 rotate-180`}>{number}</span>
        <span
          className={`position-center font-Rubik text-7xl text-black`}
          style={{ filter: "drop-shadow(0 0 15px white) drop-shadow(0 0 30px red) drop-shadow(0 0 30px blue)" }}
        >
          {number}
        </span>
      </div>
    </div>
  );
};

export default NumberCard;
