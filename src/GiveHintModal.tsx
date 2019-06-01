/** @jsx jsx */
import { jsx } from "@emotion/core";

import { FunctionComponent } from "react";

import { baseModalBackground, baseModalContent, baseButton } from "./styles";

interface GiveHintModalProps {
  closeModal: () => void;
}

const GiveHintModal: FunctionComponent<GiveHintModalProps> = ({
  closeModal
}) => {
  return (
    <div css={baseModalBackground}>
      <div css={baseModalContent}>
        <div>Give Hint</div>
        <button css={baseButton} onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default GiveHintModal;
