/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FunctionComponent, useState } from "react";

import Hand from "./Hand";
import Button from "./Button";

const mainContainerStyle = css`
  text-align: center;
  width: 100%;
  height: 100%;
  color: white;
  background: linear-gradient(
    135deg,
    rgba(50, 255, 57, 1) 0%,
    rgba(137, 196, 255, 1) 100%
  );
`;

const numberOfCardsContainerStyle = css`
  display: flex;
  justify-content: space-around;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 15%;
`;

const numberOfCardsButtonStyle = css`
  padding: 25px;
`;

const titleStyle = css`
  margin: 0;
`;

const App: FunctionComponent = () => {
  const [numberOfCards, setNumberOfCards] = useState(-1);

  return (
    <div css={mainContainerStyle}>
      {/* Haven't select the number of cards yet, show buttons to do so */}
      {numberOfCards < 0 && (
        <div>
          <h1 css={titleStyle}>火薬 - Kayaku</h1>
          <h2>How many cards?</h2>
          <div css={numberOfCardsContainerStyle}>
            <Button
              css={numberOfCardsButtonStyle}
              onClick={() => setNumberOfCards(4)}
            >
              4
            </Button>
            <Button
              css={numberOfCardsButtonStyle}
              onClick={() => setNumberOfCards(5)}
            >
              5
            </Button>
          </div>
        </div>
      )}

      {/* Have selected the number of cards, show the hand */}
      {numberOfCards > 0 && <Hand numberOfCards={numberOfCards} />}
    </div>
  );
};

export default App;
