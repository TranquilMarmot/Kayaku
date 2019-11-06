/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FunctionComponent, useState, useEffect } from "react";

import Hand from "./Hand";
import { Card as CardType } from "./types";
import MainMenu from "./MainMenu";

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

/**
 * Renders the current hand if the player has selected the number of cards,
 * or buttons to select the number of cards if they haven't
 */
const App: FunctionComponent = () => {
  const [hand, setHand] = useState(null as CardType[] | null);

  useEffect(() => {
    // see if we have a current game in local storage; if we do, set the hand to it
    const currentGame = localStorage.getItem("currentGame");
    if (currentGame) {
      setHand(JSON.parse(currentGame) as CardType[]);
    }
  }, []);

  // function that can be called to wipe out the state of the game and go back to the main menu
  const clearHand = () => {
    setHand(null);
    localStorage.removeItem("currentGame");
  };

  return (
    <div css={mainContainerStyle}>
      {/* If we have a hand, show it. Otherwise, show the main menu. */}
      {hand ? (
        <Hand initialState={hand} clearHand={clearHand} />
      ) : (
        <MainMenu setHand={setHand} />
      )}
    </div>
  );
};

export default App;
