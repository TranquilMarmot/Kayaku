/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import {
  Dispatch,
  SetStateAction,
  FunctionComponent,
  ChangeEvent
} from "react";

import { Card } from "../types";

const selectCardChecboxLabelStyle = css`
  padding: 25px 20px;
  border-radius: 5px;
  border: 1px solid black;
  margin-bottom: 5px;
  background-color: white;

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

const onCheckboxChange = (
  e: ChangeEvent<HTMLInputElement>,
  selectedCards: boolean[],
  setSelectedCards: Dispatch<SetStateAction<boolean[]>>
) => {
  setSelectedCards(
    selectedCards.map((value, index) => {
      if (`${index}` === e.target.dataset.index) {
        return e.target.checked;
      } else {
        return value;
      }
    })
  );
};

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
        data-card-index={i}
        css={selectCardCheckboxContainerStyle}
      >
        <label css={selectCardChecboxLabelStyle} htmlFor={`select-card-${i}`}>
          {i + 1}
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
