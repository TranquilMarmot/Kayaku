/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent, useContext } from "react";
import { CardsContext } from "./Hand";
import { CardClicked } from "./actions";
import { Card as CardType, Confidence } from "./types";

interface CardProps {
  index: number;
}

const renderConfidence = (confidence: Confidence) => {
  switch (confidence) {
    case Confidence.Positive:
      return (
        <span role="img" aria-label="positive">
          ✔
        </span>
      );
    case Confidence.Negative:
      return (
        <span role="img" aria-label="negative">
          ❌
        </span>
      );
    case Confidence.Unknown:
    default:
      return <span />;
  }
};

const renderColor = (
  card: CardType,
  color: string,
  emoji: string,
  row: number
) => {
  return (
    <React.Fragment>
      <div
        css={css`
          grid-row: ${row};
          grid-column: 1;
        `}
      >
        <span role="img" aria-label={`${color}`}>
          {emoji}
        </span>
      </div>
      <div
        css={css`
          grid-row: ${row};
          grid-column: 2;
        `}
      >
        {renderConfidence(card.color[color])}
      </div>
    </React.Fragment>
  );
};

const renderNumber = (
  card: CardType,
  number: string,
  emoji: string,
  row: number
) => {
  return (
    <React.Fragment>
      <div
        css={css`
          grid-row: ${row};
          grid-column: 1;
        `}
      >
        <span role="img" aria-label={`${number}`}>
          {emoji}
        </span>
      </div>
      <div
        css={css`
          grid-row: ${row};
          grid-column: 2;
        `}
      >
        {renderConfidence(card.number[number])}
      </div>
    </React.Fragment>
  );
};

const cardStyle = css`
  min-height: 250px;
`;

const confidenceGridStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`;

const Card: FunctionComponent<CardProps> = ({ index }) => {
  const [cards, dispatch] = useContext(CardsContext);

  const card = cards[index] as CardType;

  return (
    <button css={cardStyle} onClick={e => dispatch(CardClicked(index))}>
      <div css={confidenceGridStyle}>
        {renderColor(card, "blue", "🔷", 1)}
        {renderColor(card, "yellow", "💛", 2)}
        {renderColor(card, "red", "🔺", 3)}
        {renderColor(card, "green", "🍏", 4)}
        {renderColor(card, "white", "⬜", 5)}
      </div>
      <div css={confidenceGridStyle}>
        {renderNumber(card, "one", "1️⃣", 1)}
        {renderNumber(card, "two", "2️⃣", 2)}
        {renderNumber(card, "three", "3️⃣", 3)}
        {renderNumber(card, "four", "4️⃣", 4)}
        {renderNumber(card, "five", "5️⃣", 5)}
      </div>
    </button>
  );
};

export default Card;
