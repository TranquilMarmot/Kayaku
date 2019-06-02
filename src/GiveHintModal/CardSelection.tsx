/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import React, { Dispatch, SetStateAction, FunctionComponent } from "react";

import { Card } from "../types";

const selectCardChecboxLabelStyle = css`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid black;
`;

interface CardSelectionProps {
  cards: Card[];
  selectedCards: boolean[];
  setSelectedCards: Dispatch<SetStateAction<boolean[]>>;
}

const CardSelection: FunctionComponent<CardSelectionProps> = ({
  cards,
  selectedCards,
  setSelectedCards
}) => {
  const selectCardCheckboxes = [];

  for (let i = 0; i < cards.length; i++) {
    selectCardCheckboxes.push(
      <div
        key={`select-card-${i}`}
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <label css={selectCardChecboxLabelStyle} htmlFor={`select-card-${i}`}>
          {i + 1}
        </label>
        <input
          id={`select-card-${i}`}
          type="checkbox"
          checked={selectedCards[i]}
          onChange={e =>
            setSelectedCards(
              selectedCards.map((value, index) => {
                if (index === i) {
                  return e.target.checked;
                } else {
                  return value;
                }
              })
            )
          }
        />
      </div>
    );
  }

  return <React.Fragment>{selectCardCheckboxes}</React.Fragment>;
};

export default CardSelection;
