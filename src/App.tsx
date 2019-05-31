import React, { FunctionComponent, useReducer, createContext } from "react";
import "./App.css";
import CardsReducer, { getInitialState } from "./CardsReducer";
import Card from "./Card";
import { ActionTypes } from "./actions";

const initialState = getInitialState();

export const CardsContext = createContext([
  initialState,
  (action: ActionTypes) => {}
]);

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <CardsContext.Provider value={useReducer(CardsReducer, initialState)}>
        <Card index={0} />
        <Card index={1} />
        <Card index={2} />
        <Card index={3} />
      </CardsContext.Provider>
    </div>
  );
};

export default App;
