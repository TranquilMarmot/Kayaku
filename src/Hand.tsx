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
import { ActionTypes } from "./actions";
import { Card as CardType } from "./types";
import GiveHintModal from "./GiveHintModal";
import Footer from "./Footer";

// this initial state and context are created on first render
let initialState: CardType[];
export let CardsContext: Context<[CardType[], ((action: ActionTypes) => void)]>;

const renderCards = (numberOfCards: number) => {
  const cards: JSX.Element[] = [];

  for (let i = 0; i < numberOfCards; i++) {
    cards.push(<Card index={i} key={`card-${i}`} />);
  }

  return cards;
};

interface HandProps {
  numberOfCards: number;
}

const Hand: FunctionComponent<HandProps> = ({ numberOfCards }) => {
  // create our initial state and context if we haven't yet
  if (!initialState || !CardsContext) {
    initialState = getInitialState(numberOfCards);
    CardsContext = createContext<[CardType[], ((action: ActionTypes) => void)]>(
      [initialState, (action: ActionTypes) => {}]
    );
  }

  const [showingGiveHintModal, setShowingGiveHintModal] = useState(false);

  const cardsContainerStyle = css`
    grid-row: 1;
    display: grid;
    grid-template-columns: repeat(${numberOfCards}, 1fr);
  `;

  const mainContainerStyle = css`
    display: grid;
    grid-template-rows: 5fr 1fr;
    height: 100%;
  `;

  return (
    <div css={mainContainerStyle}>
      <CardsContext.Provider value={useReducer(CardsReducer, initialState)}>
        <div css={cardsContainerStyle}>{renderCards(numberOfCards)}</div>
        <Footer setShowingGiveHintModal={setShowingGiveHintModal} />
        {showingGiveHintModal && (
          <GiveHintModal closeModal={() => setShowingGiveHintModal(false)} />
        )}
      </CardsContext.Provider>
    </div>
  );
};

export default Hand;
