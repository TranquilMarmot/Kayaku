/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent } from "react";
import { Card } from "../types";
import Info from "./Info";

interface ConfidenceGridProps {
  card: Card;
}

const confidenceGridStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`;

const ConfidenceGrid: FunctionComponent<ConfidenceGridProps> = ({ card }) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default ConfidenceGrid;
