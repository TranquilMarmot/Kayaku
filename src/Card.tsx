import React, { FunctionComponent } from "react";
import { Card as CardType } from "./types";

interface CardProps {
  card: CardType;
  onSelectCard: OnSelectCardCallback;
}

interface OnSelectCardCallback {
  (event: React.MouseEvent, card: CardType): void;
}

const Card: FunctionComponent<CardProps> = ({ card, onSelectCard }) => {
  const { color, number } = card;
  return (
    <button onClick={e => onSelectCard(e, card)}>
      <div>
        <div>Red: {color.red}</div>
        <div>Blue: {color.blue}</div>
        <div>Yellow: {color.yellow}</div>
        <div>Green: {color.green}</div>
        <div>White: {color.white}</div>
      </div>
      <div>
        <div>One: {number.one}</div>
        <div>Two: {number.two}</div>
        <div>Three: {number.three}</div>
        <div>Four: {number.four}</div>
        <div>Five: {number.five}</div>
      </div>
    </button>
  );
};

export default Card;
