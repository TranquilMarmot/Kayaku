/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import {
  FunctionComponent,
  useContext,
  useState,
  Dispatch,
  SetStateAction
} from "react";

import { CardsContext } from "../Hand";
import Button from "../Button";
import { Card, Confidence } from "../types";
import { GiveHint, ActionTypes } from "../actions";

import CardSelection from "./CardSelection";
import ColorOrNumberRadioButtons from "./ColorOrNumberRadioButtons";
import Footer from "./Footer";

interface GiveHintModalProps {
  closeModal: () => void;
}

const baseModalBackground = css`
  position: fixed; /* Stay in place */
  z-index: 1000; /* Sit on top */
  padding-top: 10px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

const baseModalContent = css`
  background-color: #fefefe;
  margin: auto;
  border: 1px solid #888;
  width: 80%;
  color: black;
`;

const dispatchHint = (
  dispatch: (type: ActionTypes) => void,
  selectedCards: boolean[],
  selectedNumberOrColor: string
) => {
  // TODO dispatch(GiveHint)
};

const GiveHintModal: FunctionComponent<GiveHintModalProps> = ({
  closeModal
}) => {
  const [cards, dispatch] = useContext(CardsContext);

  const [selectedCards, setSelectedCards] = useState<boolean[]>([]);
  const [selectedNumberOrColor, setSelectedNumberOrColor] = useState<string>(
    ""
  );

  return (
    <div css={baseModalBackground}>
      <div css={baseModalContent}>
        <h1>Give Hint</h1>
        <div
          css={css`
            display: flex;
          `}
        >
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
            dispatchHint(dispatch, selectedCards, selectedNumberOrColor)
          }
        />
      </div>
    </div>
  );
};

export default GiveHintModal;
