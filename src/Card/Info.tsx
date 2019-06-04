/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent } from "react";
import { Card } from "../types";
import Confidence from "./Confidence";

interface InfoProps {
  card: Card;
  infoType: "color" | "number";
  infoKey: string;
  emoji: string;
  row: number;
}

const Info: FunctionComponent<InfoProps> = ({
  card,
  infoType,
  infoKey,
  emoji,
  row
}) => {
  return (
    <React.Fragment>
      <div
        css={css`
          grid-row: ${row};
          grid-column: 1;
          border-right: 1px solid black;
          border-bottom: 1px solid gray;
          border-top: 1px solid gray;
        `}
      >
        <span role="img" aria-label={`${infoKey}`}>
          {emoji}
        </span>
      </div>
      <div
        css={css`
          grid-row: ${row};
          grid-column: 2;
          border-left: 1px solid black;
          border-bottom: 1px solid gray;
          border-top: 1px solid gray;
        `}
      >
        <Confidence confidence={card[infoType][infoKey]} />
      </div>
    </React.Fragment>
  );
};

export default Info;
