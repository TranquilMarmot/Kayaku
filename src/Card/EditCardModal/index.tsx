/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { FunctionComponent, useState } from "react";
import Modal from "../../Modal";
import { Card, Confidence } from "../../types";
import { ActionTypes } from "../../actions";
import ConfidenceDropdown from "./ConfidenceDropdown";
import Button from "../../Button";

const dropdownContainerStyle = css`
  display: flex;
  justify-content: center;
`;

interface EditCardModalProps {
  index: number;
  card: Card;
  onCloseEditCardModal: () => void;
  dispatch: (action: ActionTypes) => void;
}

const EditCardModal: FunctionComponent<EditCardModalProps> = ({
  index,
  card,
  onCloseEditCardModal,
  dispatch
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
        <Button onClick={onCloseEditCardModal}>Cancel</Button>
        <Button onClick={onCloseEditCardModal}>Save</Button>
      </React.Fragment>
    </Modal>
  );
};

export default EditCardModal;
