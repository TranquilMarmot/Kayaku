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
  min-height: 250px;
`;

const Card: FunctionComponent<CardProps> = ({ index }) => {
  const [cards, dispatch] = useContext(CardsContext);
  const [showingActions, setShowingActions] = useState(false);

  const card = cards[index] as CardType;

  return (
    <button
      css={cardStyle}
      onClick={e => (!showingActions ? setShowingActions(true) : null)}
    >
      {!showingActions && <ConfidenceGrid card={card} />}
      {showingActions && (
        <CardActions
          index={index}
          onCloseActions={() => setShowingActions(false)}
          dispatch={dispatch}
        />
      )}
    </button>
  );
};

export default Card;
