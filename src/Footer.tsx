/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FunctionComponent, useState } from "react";

import Button from "./Button";
import OptionsModal from "./OptionsModal";

interface FooterProps {
  setShowingGiveHintModal: (showingGiveHintModal: boolean) => void;
}

const containerStyle = css`
  grid-row: 2;
  display: flex;
  justify-content: space-between;
  margin-left: 5px;
  margin-right: 5px;
`;

const buttonStyle = css`
  height: 90%;
  width: 25%;
`;

/** The main footer for the app */
const Footer: FunctionComponent<FooterProps> = ({
  setShowingGiveHintModal
}) => {
  const [showingOptionsModal, setShowingOptionsModal] = useState(false);
  return (
    <div css={containerStyle}>
      <Button css={buttonStyle} onClick={() => setShowingOptionsModal(true)}>
        Options
      </Button>
      <Button css={buttonStyle} onClick={() => setShowingGiveHintModal(true)}>
        Give Hint
      </Button>

      {showingOptionsModal && (
        <OptionsModal
          onCloseOptionsModal={() => setShowingOptionsModal(false)}
        />
      )}
    </div>
  );
};

export default Footer;
