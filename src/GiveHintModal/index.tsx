/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { FunctionComponent, useContext, useState } from "react";

import { CardsContext } from "../Hand";
import { Confidence } from "../types";
import { GiveHint, ActionTypes } from "../actions";

import Modal from "../Modal";
import CardSelection from "./CardSelection";
import ColorOrNumberRadioButtons from "./ColorOrNumberRadioButtons";
import Footer from "./Footer";

const hintSelectionStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const isNumber = (selectedNumberOrColor: string): boolean => {
  switch (selectedNumberOrColor) {
    case "one":
    case "two":
    case "three":
    case "four":
    case "five":
      return true;
    default:
      return false;
  }
};

const isColor = (selectedNumberOrColor: string): boolean => {
  switch (selectedNumberOrColor) {
    case "blue":
    case "yellow":
    case "red":
    case "green":
    case "white":
      return true;
    default:
      return false;
  }
};

const dispatchHint = (
  dispatch: (type: ActionTypes) => void,
  selectedCards: boolean[],
  selectedNumberOrColor: string,
  closeModal: () => void
) => {
  const selectedIndices: number[] = [];

  selectedCards.forEach((isChecked, index) =>
    isChecked ? selectedIndices.push(index) : null
  );

  const selectedColor = isColor(selectedNumberOrColor)
    ? selectedNumberOrColor
    : undefined;
  const selectedNumber = isNumber(selectedNumberOrColor)
    ? selectedNumberOrColor
    : undefined;

  dispatch(
    GiveHint(
      selectedIndices,
      Confidence.Positive,
      selectedColor,
      selectedNumber
    )
  );
  closeModal();
};

interface GiveHintModalProps {
  closeModal: () => void;
}

const GiveHintModal: FunctionComponent<GiveHintModalProps> = ({
  closeModal
}) => {
  const [cards, dispatch] = useContext(CardsContext);

  const [selectedCards, setSelectedCards] = useState<boolean[]>(
    Array(cards.length).fill(false)
  );
  const [selectedNumberOrColor, setSelectedNumberOrColor] = useState<string>(
    ""
  );

  return (
    <Modal>
      <React.Fragment>
        <h1>Give Hint</h1>
        <div css={hintSelectionStyle}>
          <CardSelection
            cards={cards}
            selectedCards={selectedCards}
            setSelectedCards={setSelectedCards}
          />
          <ColorOrNumberRadioButtons
            selectedNumberOrColor={selectedNumberOrColor}
            setSelectedNumberOrColor={setSelectedNumberOrColor}
          />
        </div>
        <Footer
          onCloseClick={closeModal}
          onConfirmClick={() =>
            dispatchHint(
              dispatch,
              selectedCards,
              selectedNumberOrColor,
              closeModal
            )
          }
        />
      </React.Fragment>
    </Modal>
  );
};

export default GiveHintModal;
