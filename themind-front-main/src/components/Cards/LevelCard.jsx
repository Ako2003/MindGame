import { useState, useEffect } from "react";
import stroke from "../../assets/details/underline-stroke.png";
import rabbit from "../../assets/images/rabbit.png";

const LevelCard = ({ level, className }) => {
  const [difficulty, setDifficulty] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    if (level > 4 && level <= 8) {
      setDifficulty(1);
    } else if (level > 8) {
      setDifficulty(2);
    } else {
      setDifficulty(0);
    }

    (level === 2 || level === 5 || level === 8) && setText("Prize: STAR!");
    (level === 3 || level === 6 || level === 9) && setText("Prize: HEALTH!");
  }, [level]);

  return (
    <div className={className}>
      <div className={`card`}>
        {/* title */}
        <div className={`absolute w-full top-0 flex flex-col`}>
          <span
            className={`font-Rubik text-base text-center ${
              difficulty === 1 ? "text-orange-700" : difficulty === 2 ? "text-sky-700" : "text-yellow-500"
            }`}
          >
            Level {level}
          </span>
          <span
            className={`w-1/2 mx-auto h-2 -translate-y-1 bg-contain bg-center bg-no-repeat`}
            style={{
              backgroundImage: `url(${stroke})`,
              filter:
                difficulty === 2
                  ? "invert(21%) sepia(100%) saturate(2020%) hue-rotate(183deg) brightness(96%) contrast(98%)"
                  : difficulty === 1
                  ? "invert(24%) sepia(34%) saturate(5196%) hue-rotate(8deg) brightness(103%) contrast(91%)"
                  : "invert(73%) sepia(14%) saturate(3732%) hue-rotate(4deg) brightness(99%) contrast(94%)",
            }}
          />
        </div>

        {/* box */}
        <div
          className={`absolute top-8 w-full h-[60px] mt-2 flex items-center justify-center rounded bg-gradient-to-b ${
            difficulty === 1
              ? "from-orange-700 to-sky-900"
              : difficulty === 2
              ? "from-sky-700 to-yellow-900"
              : "from-yellow-500 to-orange-900"
          }`}
        >
          <img src={rabbit} alt="rabbit" className="h-[90%] drop-shadow-[0_0_10px_white]" />
        </div>

        {/* text */}
        {!!text && (
          <p
            className={`absolute bottom-0 left-2 text-xs ${
              difficulty === 1 ? "text-orange-700" : difficulty === 2 ? "text-sky-700" : "text-yellow-500"
            }`}
          >
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default LevelCard;
