import React, { FunctionComponent, useState } from "react";
import "./App.css";
import Hand from "./Hand";

const App: FunctionComponent = () => {
  const [numberOfCards, setNumberOfCards] = useState(-1);

  return (
    <div className="App">
      {numberOfCards < 0 && (
        <div>
          <button onClick={() => setNumberOfCards(4)}>4</button>
          <button onClick={() => setNumberOfCards(5)}>5</button>
        </div>
      )}
      {numberOfCards > 0 && <Hand numberOfCards={numberOfCards} />}
    </div>
  );
};

export default App;
