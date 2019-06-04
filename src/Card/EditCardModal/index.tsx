/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { FunctionComponent } from "react";
import Modal from "../../Modal";
import { Card, Confidence } from "../../types";
import { ActionTypes } from "../../actions";
import ConfidenceDropdown from "./ConfidenceDropdown";
import Button from "../../Button";

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
  return (
    <Modal>
      <React.Fragment>
        <h1>Edit Card</h1>
        <ConfidenceDropdown
          card={card}
          dropdownType="color"
          dropdownKey="blue"
          emoji="🔷"
        />
        <Button onClick={onCloseEditCardModal}>Cancel</Button>
        <Button onClick={onCloseEditCardModal}>Save</Button>
      </React.Fragment>
    </Modal>
  );
};

export default EditCardModal;
