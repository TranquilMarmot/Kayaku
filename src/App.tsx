/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FunctionComponent, useState } from "react";

import Hand from "./Hand";
import Button from "./Button";

const mainContainerStyle = css`
  text-align: center;
  background-color: black;
  width: 100%;
  height: 100%;
  color: white;
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

const App: FunctionComponent = () => {
  const [numberOfCards, setNumberOfCards] = useState(-1);

  return (
    <div css={mainContainerStyle}>
      {/* Haven't select the number of cards yet, show buttons to do so */}
      {numberOfCards < 0 && (
        <div>
          <div>How many cards?</div>
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
