import React, {
  FunctionComponent,
  useReducer,
  createContext,
  Context
} from "react";
import "./App.css";
import CardsReducer, { getInitialState } from "./CardsReducer";
import Card from "./Card";
import { ActionTypes } from "./actions";
import { Card as CardType } from "./types";

let initialState: CardType[];

export let CardsContext: Context<[CardType[], ((action: ActionTypes) => void)]>;

interface HandProps {
  numberOfCards: number;
}

const Hand: FunctionComponent<HandProps> = ({ numberOfCards }) => {
  if (!initialState || !CardsContext) {
    initialState = getInitialState(numberOfCards);
    CardsContext = createContext<[CardType[], ((action: ActionTypes) => void)]>(
      [initialState, (action: ActionTypes) => {}]
    );
  }

  const cards: JSX.Element[] = [];

  for (let i = 0; i < numberOfCards; i++) {
    cards.push(<Card index={i} key={`card-${i}`} />);
  }

  return (
    <div className="App">
      <CardsContext.Provider value={useReducer(CardsReducer, initialState)}>
        {cards}
      </CardsContext.Provider>
    </div>
  );
};

export default Hand;
