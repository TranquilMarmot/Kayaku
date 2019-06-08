/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import {
  FunctionComponent,
  useReducer,
  createContext,
  Context,
  useState
} from "react";

import CardsReducer, { getInitialState } from "./CardsReducer";
import Card from "./Card";
import GiveHintModal from "./GiveHintModal";
import Footer from "./Footer";
import { ActionTypes } from "./actions";
import { Card as CardType } from "./types";

// this initial state and context are created on first render
let initialState: CardType[];
export let CardsContext: Context<[CardType[], ((action: ActionTypes) => void)]>;

/**
 *
 * @param numberOfCards How many cards are in the player's hand
 *  Cards pull their state from the context
 */
const renderCards = (numberOfCards: number) => {
  const cards: JSX.Element[] = [];

  for (let i = 0; i < numberOfCards; i++) {
    cards.push(<Card index={i} key={`card-${i}`} />);
  }

  return cards;
};

const mainContainerStyle = css`
  display: grid;
  grid-template-rows: 5fr 1fr;
  height: 100%;
`;

const cardsContainerStyle = css`
  grid-row: 1;
  display: grid;
`;

interface HandProps {
  numberOfCards: number;
}

/** Renders all of the cards in the player's hand */
const Hand: FunctionComponent<HandProps> = ({ numberOfCards }) => {
  // create our initial state and context if we haven't yet
  if (!initialState || !CardsContext) {
    initialState = getInitialState(numberOfCards);
    CardsContext = createContext<[CardType[], ((action: ActionTypes) => void)]>(
      [initialState, (action: ActionTypes) => {}]
    );
  }

  const [showingGiveHintModal, setShowingGiveHintModal] = useState(false);

  // one column for every card
  const cardsGrid = css`
    ${cardsContainerStyle}
    grid-template-columns: repeat(${numberOfCards}, 1fr);
  `;

  return (
    <div css={mainContainerStyle}>
      {/*
        By putting the result of useReducer as the value of the provider,
        the current state and the dispatch function are available to anything using the context
      */}
      <CardsContext.Provider value={useReducer(CardsReducer, initialState)}>
        <div css={cardsGrid}>{renderCards(numberOfCards)}</div>
        <Footer setShowingGiveHintModal={setShowingGiveHintModal} />
        {showingGiveHintModal && (
          <GiveHintModal closeModal={() => setShowingGiveHintModal(false)} />
        )}
      </CardsContext.Provider>
    </div>
  );
};

export default Hand;
