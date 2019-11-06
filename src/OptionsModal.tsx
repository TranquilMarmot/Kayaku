/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FunctionComponent } from "react";

import Modal from "./Modal";
import Footer from "./Modal/Footer";
import Button from "./Button";

const newGameButtonStyle = css`
  margin: 25px;
  padding: 40px 70px;
`;

interface OptionsModalProps {
  /** Function to call to close modal */
  onCloseOptionsModal: () => void;

  /** Function that can be called to wipe out the state of the game and go back to the main menu **/
  onClearHand: () => void;
}

/**
 * Modal for various options
 */
const OptionsModal: FunctionComponent<OptionsModalProps> = ({
  onCloseOptionsModal,
  onClearHand
}) => {
  return (
    <Modal>
      <h1>Options</h1>
      <Button css={newGameButtonStyle} onClick={() => onClearHand()}>
        New Game
      </Button>
      <Footer onCloseClick={onCloseOptionsModal} />
    </Modal>
  );
};

export default OptionsModal;
