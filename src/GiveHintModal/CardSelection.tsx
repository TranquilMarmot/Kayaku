/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import {
  Dispatch,
  SetStateAction,
  FunctionComponent,
  ChangeEvent
} from "react";

import { Card } from "../types";

/**
 * Called when a checkbox changes, updates the boolean array of selected cards
 * @param e Checkbox change event
 * @param selectedCards Boolean array of selected cards
 * @param setSelectedCards Function to set array of selected cards
 */
const onCheckboxChange = (
  e: ChangeEvent<HTMLInputElement>,
  selectedCards: boolean[],
  setSelectedCards: Dispatch<SetStateAction<boolean[]>>
) => {
  setSelectedCards(
    selectedCards.map((value, index) => {
      // each checkbox has its index as a data attribute
      if (`${index}` === e.target.dataset.index) {
        return e.target.checked;
      } else {
        return value;
      }
    })
  );
};

const selectCardChecboxLabelStyle = css`
  padding: 25px 20px;
  border-radius: 5px;
  border: 1px solid black;
  margin-bottom: 5px;
  background: radial-gradient(
    circle,
    rgb(63, 236, 251) 0%,
    rgb(70, 88, 252) 95%,
    rgb(174, 70, 252) 100%
  );

  &:hover {
    cursor: pointer;
  }
`;

const selectCardCheckboxContainerStyle = css`
  display: flex;
  flex-direction: column;
  padding: 10px;
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
  // create a checkbox for every card
  const selectCardCheckboxes = [];
  for (let i = 0; i < cards.length; i++) {
    selectCardCheckboxes.push(
      <div
        key={`select-card-${i}`}
        data-card-index={i}
        css={selectCardCheckboxContainerStyle}
      >
        <label css={selectCardChecboxLabelStyle} htmlFor={`select-card-${i}`}>
          {// +1 so that they render as 1,2,3,etc.
          i + 1}
        </label>
        <input
          id={`select-card-${i}`}
          data-index={i}
          type="checkbox"
          checked={selectedCards[i]}
          onChange={e => onCheckboxChange(e, selectedCards, setSelectedCards)}
        />
      </div>
    );
  }

  return (
    <div
      css={css`
        display: flex;
      `}
    >
      {selectCardCheckboxes}
    </div>
  );
};

export default CardSelection;
