"use client";
import React, { useState } from "react";
import { cn } from "../lib/utils";

export const Card = React.memo(({
  card,
  index,
  hovered,
  setHovered
}) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-3xl  relative bg-gray-100 dark:bg-neutral-900 overflow-hidden md:h-auto md:w-full w-[190px] h-[190px] transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}>
    <img src={card.image} alt={card.title} className="object-cover inset-0 w-full" />
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}>
        <div className="w-full flex flex-col gap-2">
            <div
                className="text-xl md:text-2xl flex flex-col font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                {card.title}
                <span className="text-xs">{card.description}</span>
            </div>
            <a href={card.link} className={"text-primary underline text-[12px]"} target="_blank" rel="noopener noreferrer">
                See in creedly
            </a>
        </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({
  cards
}) {
  const [hovered, setHovered] = useState(null);

  return (
    (<div
        className="grid grid-cols-2 md:grid-cols-4 gap-5 mx-auto md:px-0 w-full justify-items-center" >
      {cards.map((card, index) => (
        <Card
          key={index}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered} />
      ))}
    </div>)
  );
}
