/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent, useState } from "react";

import Modal from "../../Modal";
import Footer from "../../Modal/Footer";
import { Card } from "../../types";
import { ActionTypes, EditCard } from "../../actions";

import ConfidenceDropdown from "./ConfidenceDropdown";

const onSaveCard = (
  card: Card,
  index: number,
  onCloseEditCardModal: () => void,
  dispatch: (action: ActionTypes) => void,
  onCloseActions: () => void
) => {
  dispatch(EditCard(index, card));
  onCloseEditCardModal();
  onCloseActions();
};

const dropdownContainerStyle = css`
  display: flex;
  justify-content: center;
`;

interface EditCardModalProps {
  index: number;
  card: Card;
  onCloseEditCardModal: () => void;
  dispatch: (action: ActionTypes) => void;
  onCloseActions: () => void;
}

/**
 * Renders a modal to edit the current confidence values of a card
 */
const EditCardModal: FunctionComponent<EditCardModalProps> = ({
  index,
  card,
  onCloseEditCardModal,
  dispatch,
  onCloseActions
}) => {
  const [editedCard, onEditedCardChange] = useState(card);

  return (
    <Modal>
      <React.Fragment>
        <h1>Edit Card</h1>
        <div css={dropdownContainerStyle}>
          <ConfidenceDropdown
            onChange={onEditedCardChange}
            card={editedCard}
            dropdownType="color"
            dropdownKey="blue"
            emoji="🔷"
          />
          <ConfidenceDropdown
            onChange={onEditedCardChange}
            card={editedCard}
            dropdownType="color"
            dropdownKey="yellow"
            emoji="💛"
          />
          <ConfidenceDropdown
            onChange={onEditedCardChange}
            card={editedCard}
            dropdownType="color"
            dropdownKey="red"
            emoji="🔺"
          />
          <ConfidenceDropdown
            onChange={onEditedCardChange}
            card={editedCard}
            dropdownType="color"
            dropdownKey="green"
            emoji="🍏"
          />
          <ConfidenceDropdown
            onChange={onEditedCardChange}
            card={editedCard}
            dropdownType="color"
            dropdownKey="white"
            emoji="⬜"
          />
        </div>
        <div css={dropdownContainerStyle}>
          <ConfidenceDropdown
            onChange={onEditedCardChange}
            card={editedCard}
            dropdownType="number"
            dropdownKey="one"
            emoji="1️⃣"
          />
          <ConfidenceDropdown
            onChange={onEditedCardChange}
            card={editedCard}
            dropdownType="number"
            dropdownKey="two"
            emoji="2️⃣"
          />
          <ConfidenceDropdown
            onChange={onEditedCardChange}
            card={editedCard}
            dropdownType="number"
            dropdownKey="three"
            emoji="3️⃣"
          />
          <ConfidenceDropdown
            onChange={onEditedCardChange}
            card={editedCard}
            dropdownType="number"
            dropdownKey="four"
            emoji="4️⃣"
          />
          <ConfidenceDropdown
            onChange={onEditedCardChange}
            card={editedCard}
            dropdownType="number"
            dropdownKey="five"
            emoji="5️⃣"
          />
        </div>
        <Footer
          onCloseClick={onCloseEditCardModal}
          onConfirmClick={() =>
            onSaveCard(
              editedCard,
              index,
              onCloseEditCardModal,
              dispatch,
              onCloseActions
            )
          }
        />
      </React.Fragment>
    </Modal>
  );
};

export default EditCardModal;
