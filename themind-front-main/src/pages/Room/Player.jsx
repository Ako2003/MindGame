import React from "react";
import { twMerge } from "tailwind-merge";
import HiddenCard from "../../components/Cards/HiddenCard";
import NumberCard from "../../components/Cards/NumberCard";

const Player = ({ player, className, position }) => {
  const myId = 1;

  return (
    <div className={twMerge(`w-[200px] h-[200px] relative flex flex-col items-center`, className)}>
      <div
        className="relative h-36"
        style={{
          width:
            player.id === myId
              ? `calc(7.5rem + ${(player.cards.length - 1) * 40}px)`
              : `calc(7.5rem + ${(player.cards.length - 1) * 20}px)`,
        }}
      >
        {player.cards.map((card, index) =>
          player.id === myId ? (
            <NumberCard
              key={index}
              number={card}
              className={`absolute bottom-0 cursor-pointer duration-200 hover:scale-125 hover:z-10 origin-bottom`}
              style={{ left: `${index * 40}px` }}
            />
          ) : (
            <HiddenCard key={card} className={`absolute bottom-0`} style={{ left: `${index * 20}px` }} />
          )
        )}
      </div>
      <p className="text-lg font-medium">
        {player.name} {player.surname}
      </p>
      <p className="uppercase text-sm">Cards left: {player.cards.length}</p>
    </div>
  );
};

export default Player;
