import React, { FunctionComponent, useState } from "react";
import "./App.css";
import Hand from "./Hand";

const App: FunctionComponent = () => {
  const [numberOfCards, setNumberOfCards] = useState(-1);

  return (
    <div className="App">
      {/* Haven't select the number of cards yet, show buttons to do so */}
      {numberOfCards < 0 && (
        <div>
          <div>How many cards?</div>
          <button onClick={() => setNumberOfCards(4)}>4</button>
          <button onClick={() => setNumberOfCards(5)}>5</button>
        </div>
      )}

      {/* Have selected the number of cards, show the hand */}
      {numberOfCards > 0 && <Hand numberOfCards={numberOfCards} />}
    </div>
  );
};

export default App;
