import React, { FunctionComponent, useReducer } from "react";
import "./App.css";
import CardsReducer, { getInitialState } from "./CardsReducer";
import Card from "./Card";
import { CardClicked } from "./actions";

const App: FunctionComponent = () => {
  const [cards, dispatch] = useReducer(CardsReducer, getInitialState());

  return (
    <div className="App">
      {cards.map((card, index) => (
        <Card
          key={`card${index}`}
          card={card}
          onSelectCard={() => dispatch(CardClicked(index, card))}
        />
      ))}
    </div>
  );
};

export default App;
