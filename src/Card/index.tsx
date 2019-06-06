/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FunctionComponent, useContext, useState } from "react";
import { CardsContext } from "../Hand";
import { Card as CardType } from "../types";
import ConfidenceGrid from "./ConfidenceGrid";
import CardActions from "./CardActions";

interface CardProps {
  index: number;
}

const cardStyle = css`
  transition: all 0.3s ease;
  min-height: 250px;
  border: 2px solid black;
  border-radius: 5px;
  margin: 5px;
  background: radial-gradient(
    circle,
    rgb(63, 236, 251) 0%,
    rgb(70, 88, 252) 95%,
    rgb(174, 70, 252) 100%
  );
  box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);

  &:hover {
    cursor: pointer;
    transition: all 0.5s ease;
    box-shadow: 3px 3px 6px 0 rgba(157, 96, 212, 0.5);
  }
`;

const Card: FunctionComponent<CardProps> = ({ index }) => {
  const [cards, dispatch] = useContext(CardsContext);
  const [showingActions, setShowingActions] = useState(false);

  const card = cards[index] as CardType;

  return (
    <div
      role="button"
      css={cardStyle}
      onClick={() => (!showingActions ? setShowingActions(true) : null)}
    >
      {!showingActions && <ConfidenceGrid card={card} />}
      {showingActions && (
        <CardActions
          index={index}
          card={card}
          onCloseActions={() => setShowingActions(false)}
          dispatch={dispatch}
        />
      )}
    </div>
  );
};

export default Card;
