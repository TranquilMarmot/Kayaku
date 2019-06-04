/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FunctionComponent, useContext } from "react";
import { CardsContext } from "../Hand";
import { CardClicked } from "../actions";
import { Card as CardType } from "../types";
import Info from "./Info";

interface CardProps {
  index: number;
}

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
        <Info card={card} infoType="color" infoKey="blue" emoji="🔷" row={1} />
        <Info
          card={card}
          infoType="color"
          infoKey="yellow"
          emoji="💛"
          row={2}
        />
        <Info card={card} infoType="color" infoKey="red" emoji="🔺" row={3} />
        <Info card={card} infoType="color" infoKey="green" emoji="🍏" row={4} />
        <Info card={card} infoType="color" infoKey="white" emoji="⬜" row={5} />
      </div>
      <div css={confidenceGridStyle}>
        <Info card={card} infoType="number" infoKey="one" emoji="1️⃣" row={1} />
        <Info card={card} infoType="number" infoKey="two" emoji="2️⃣" row={2} />
        <Info
          card={card}
          infoType="number"
          infoKey="three"
          emoji="3️⃣"
          row={3}
        />
        <Info card={card} infoType="number" infoKey="four" emoji="4️⃣" row={4} />
        <Info card={card} infoType="number" infoKey="five" emoji="5️⃣" row={5} />
      </div>
    </button>
  );
};

export default Card;
