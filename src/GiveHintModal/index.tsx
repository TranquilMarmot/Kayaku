/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { FunctionComponent, useContext, useState } from "react";

import { CardsContext } from "../Hand";
import { GiveHint, ActionTypes } from "../actions";
import Modal from "../Modal";
import Footer from "../Modal/Footer";

import CardSelection from "./CardSelection";
import ColorOrNumberRadioButtons from "./ColorOrNumberRadioButtons";

const hintSelectionStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/**
 * Determine whether the given string is a number
 * @param selectedNumberOrColor String to check if it's a color
 */
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

/**
 * Determine whether the given string is a color
 * @param selectedNumberOrColor String to check if it's a number
 */
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

/**
 *
 * @param dispatch Function to dispatch an action
 * @param selectedCards Boolean array of selected cards
 * @param selectedNumberOrColor The selected number or color
 * @param closeModal Function to close the modal
 */
const dispatchHint = (
  dispatch: (type: ActionTypes) => void,
  selectedCards: boolean[],
  selectedNumberOrColor: string,
  closeModal: () => void
) => {
  // we have to convert from boolean array -> index array
  // since that's what the reducer uses to apply the hint
  const selectedIndices: number[] = [];

  selectedCards.forEach((isChecked, index) =>
    isChecked ? selectedIndices.push(index) : null
  );

  // figure out if the player selected a color or a number
  const selectedColor = isColor(selectedNumberOrColor)
    ? selectedNumberOrColor
    : undefined;
  const selectedNumber = isNumber(selectedNumberOrColor)
    ? selectedNumberOrColor
    : undefined;

  // dispatch the hint and close the modal
  dispatch(GiveHint(selectedIndices, selectedColor, selectedNumber));
  closeModal();
};

interface GiveHintModalProps {
  closeModal: () => void;
}

/**
 * A modal to give a hint to the player
 */
const GiveHintModal: FunctionComponent<GiveHintModalProps> = ({
  closeModal
}) => {
  // grab cards and dispatch from the card context
  const [cards, dispatch] = useContext(CardsContext);

  // boolean array to drive the selected card checkboxes
  const [selectedCards, setSelectedCards] = useState<boolean[]>(
    Array(cards.length).fill(false)
  );

  // string to drive the radio button for color/number
  const [selectedNumberOrColor, setSelectedNumberOrColor] = useState<string>(
    ""
  );

  return (
    <Modal>
      <React.Fragment>
        <h1>Give Hint</h1>

        {/* Checkboxes and radio buttons to select cards and color/number */}
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

        {/* Footer to either apply hint or cancel */}
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
