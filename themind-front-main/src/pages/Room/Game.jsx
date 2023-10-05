import { useState } from "react";
import Player from "./Player";
import Button from "../../components/UI/Button";
import LevelCard from "../../components/Cards/LevelCard";
import heart from "../../assets/icons/heart.png";
import star from "../../assets/icons/star.png";

const players = [
  { id: 1, name: "Rafig", surname: "Hajili", cards: [13, 42, 45, 67, 13, 42, 45, 67, 13, 42, 45, 67] },
  { id: 2, name: "Akif", surname: "Mursalov", cards: [27, 52, 21, 98] },
  { id: 3, name: "Ravan", surname: "Osmanli", cards: [39, 62, 35, 11, 31, 69] },
  { id: 4, name: "Farid", surname: "Muradzada", cards: [43, 72, 91, 3] },
];

const Game = () => {
  const [heartCount, setHeartCount] = useState(4);
  const [starCount, setStarCount] = useState(6);

  return (
    <div className="h-[calc(100vh-6rem)] relative flex justify-center">
      <div
        className={`h-full w-full xl:w-2/3 relative py-8 hidden lg:grid gap-4 ${
          players.length === 2 ? "grid-cols-1" : players.length === 3 ? "grid-cols-2" : "grid-cols-3"
        }`}
      >
        {players.length === 2 ? (
          <>
            {/* player 2 */}
            <Player player={players[1]} className="self-start justify-self-center" />
            {/* you */}
            <Player player={players[0]} className="self-end justify-self-center" />
          </>
        ) : players.length === 3 ? (
          <>
            {/* player 2 */}
            <Player player={players[1]} className="self-start justify-self-start" />
            {/* player 3 */}
            <Player player={players[2]} className="self-start justify-self-end" />
            {/* you */}
            <Player player={players[0]} className="self-end justify-self-center col-span-2" />
          </>
        ) : players.length === 4 ? (
          <>
            {/* player 2 */}
            <Player player={players[1]} className="self-center justify-self-start row-span-2" />
            {/* player 3 */}
            <Player player={players[2]} className="self-start justify-self-center" />
            {/* player 4 */}
            <Player player={players[3]} className="self-center justify-self-end row-span-2" />
            {/* you */}
            <Player player={players[0]} className="self-end justify-self-center" />
          </>
        ) : null}

        <div className="absolute top-48 right-0 flex gap-4 items-center">
          <LevelCard level={8} />

          <div className="flex flex-col gap-2 w-[180px]">
            {/* hearts */}
            <div className="flex gap-2 flex-wrap">
              <img src={heart} alt="heart" className="w-6 h-6" />
              <img src={heart} alt="heart" className="w-6 h-6" />
              <img src={heart} alt="heart" className="w-6 h-6" />
              <img src={heart} alt="heart" className="w-6 h-6" />
              <img src={heart} alt="heart" className="w-6 h-6" />
            </div>

            {/* stars */}
            <div className="flex gap-2 flex-wrap">
              <img src={star} alt="star" className="w-6 h-6" />
              <img src={star} alt="star" className="w-6 h-6" />
              <img src={star} alt="star" className="w-6 h-6" />
              <img src={star} alt="star" className="w-6 h-6" />
              <img src={star} alt="star" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      <Button className="bg-red-500 absolute right-8 bottom-8">Leave game</Button>

      <h2 className="text-5xl font-bold text-center mt-[10vh] lg:hidden p-8">
        Please play the game with bigger display!
      </h2>
    </div>
  );
};

export default Game;
