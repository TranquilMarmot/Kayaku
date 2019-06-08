/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FunctionComponent } from "react";

import Modal from "./Modal";
import Footer from "./Modal/Footer";

interface OptionsModalProps {
  onCloseOptionsModal: () => void;
}

/**
 * Modal for varioud options
 */
const OptionsModal: FunctionComponent<OptionsModalProps> = ({
  onCloseOptionsModal
}) => {
  return (
    <Modal>
      <h1>Options</h1>
      <Footer onCloseClick={onCloseOptionsModal} onConfirmClick={() => {}} />
    </Modal>
  );
};

export default OptionsModal;
