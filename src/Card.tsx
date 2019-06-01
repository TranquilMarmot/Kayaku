import React, { FunctionComponent, useContext } from "react";
import { CardsContext } from "./Hand";
import { CardClicked } from "./actions";
import { Card as CardType } from "./types";

interface CardProps {
  index: number;
}

const Card: FunctionComponent<CardProps> = (props: CardProps) => {
  const [cards, dispatch] = useContext(CardsContext);

  const { index } = props;

  const { color, number } = cards[index] as CardType;

  return (
    <button onClick={e => dispatch(CardClicked(index))}>
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
