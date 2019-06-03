/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FunctionComponent, useContext } from "react";
import { CardsContext } from "./Hand";
import { CardClicked } from "./actions";
import { Card as CardType, Confidence } from "./types";

interface CardProps {
  index: number;
}

const renderColor = (card: CardType, color: string, emoji: string) => {
  switch (card.color[color]) {
    case Confidence.Positive:
      return (
        <span role="img" aria-label={`${color}`}>
          {emoji}
        </span>
      );
    case Confidence.Negative:
      return (
        <span role="img" aria-label={`${color} negative`}>
          {emoji}❌
        </span>
      );
    case Confidence.Unknown:
    default:
      return null;
  }
};

const renderNumber = (card: CardType, number: string, emoji: string) => {
  switch (card.number[number]) {
    case Confidence.Positive:
      return (
        <span role="img" aria-label={`${number}`}>
          {emoji}
        </span>
      );
    case Confidence.Negative:
      return (
        <span role="img" aria-label={`${number} negative`}>
          {emoji}❌
        </span>
      );
    case Confidence.Unknown:
    default:
      return null;
  }
};

const cardStyle = css`
  min-height: 250px;
`;

const Card: FunctionComponent<CardProps> = ({ index }) => {
  const [cards, dispatch] = useContext(CardsContext);

  const card = cards[index] as CardType;

  return (
    <button css={cardStyle} onClick={e => dispatch(CardClicked(index))}>
      <div>
        {renderColor(card, "blue", "🔷")}
        {renderColor(card, "yellow", "💛")}
        {renderColor(card, "red", "🔺")}
        {renderColor(card, "green", "🍏")}
        {renderColor(card, "white", "⬜")}
      </div>
      <div>
        {renderNumber(card, "one", "1️⃣")}
        {renderNumber(card, "two", "2️⃣")}
        {renderNumber(card, "three", "3️⃣")}
        {renderNumber(card, "four", "4️⃣")}
        {renderNumber(card, "five", "5️⃣")}
      </div>
    </button>
  );
};

export default Card;
