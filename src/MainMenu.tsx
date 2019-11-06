/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FunctionComponent } from "react";

import Button from "./Button";
import { Card as CardType } from "./types";
import { getInitialState } from "./CardsReducer";

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

interface MainMenuProps {
  setHand: (cards: CardType[]) => void;
}

/** Renders buttons to choose the number of cards to use in the game */
const MainMenu: FunctionComponent<MainMenuProps> = ({ setHand }) => {
  return (
    <div>
      <h1 css={titleStyle}>火薬</h1>
      <h2>Kayaku</h2>
      <h3>How many cards?</h3>
      <div css={numberOfCardsContainerStyle}>
        <Button
          css={numberOfCardsButtonStyle}
          onClick={() => setHand(getInitialState(4))}
        >
          4
        </Button>
        <Button
          css={numberOfCardsButtonStyle}
          onClick={() => setHand(getInitialState(5))}
        >
          5
        </Button>
      </div>
    </div>
  );
};

export default MainMenu;
