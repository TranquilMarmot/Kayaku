/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent } from "react";
import { Card } from "../../types";
import Confidence from "./Confidence";

interface InfoProps {
  card: Card;
  infoType: "color" | "number";
  infoKey: string;
  emoji: string;
  row: number;
}

const infoStyle = (row: number, column: number) => css`
  grid-row: ${row};
  grid-column: ${column};
  border-right: 1px solid black;
  border-bottom: 1px solid gray;
  border-top: 1px solid gray;
`;

const Info: FunctionComponent<InfoProps> = ({
  card,
  infoType,
  infoKey,
  emoji,
  row
}) => {
  return (
    <React.Fragment>
      <div css={infoStyle(row, 1)}>
        <span role="img" aria-label={`${infoKey}`}>
          {emoji}
        </span>
      </div>
      <div css={infoStyle(row, 2)}>
        <Confidence confidence={card[infoType][infoKey]} />
      </div>
    </React.Fragment>
  );
};

export default Info;
