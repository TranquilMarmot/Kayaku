/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FunctionComponent } from "react";

import { Card } from "../../types";

import Info from "./Info";

const confidenceGridContainerStyle = css`
  display: flex;
  flex-direction: column;
  height: 97%;
  margin-top: 3%;
`;

const confidenceGridStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  font-size: 20px;
  flex: 1;
`;

interface ConfidenceGridProps {
  card: Card;
}

/**
 * A grid that displays the confidence level for every color and number of a card.
 */
const ConfidenceGrid: FunctionComponent<ConfidenceGridProps> = ({ card }) => {
  return (
    <div css={confidenceGridContainerStyle}>
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
    </div>
  );
};

export default ConfidenceGrid;
