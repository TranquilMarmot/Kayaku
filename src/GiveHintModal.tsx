/** @jsx jsx */
import { jsx } from "@emotion/core";

import { FunctionComponent } from "react";

import Button from "./Button";
import { baseModalBackground, baseModalContent } from "./styles";

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
        <Button onClick={closeModal}>Close</Button>
      </div>
    </div>
  );
};

export default GiveHintModal;
