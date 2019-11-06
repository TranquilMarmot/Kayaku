/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FunctionComponent, useState } from "react";

import Button from "./Button";
import OptionsModal from "./OptionsModal";

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

interface FooterProps {
  /** Function to call to set whether the give him modal is currently being shown */
  setShowingGiveHintModal: (showingGiveHintModal: boolean) => void;

  /** Function that can be called to wipe out the state of the game and go back to the main menu **/
  clearHand: () => void;
}

/** The main footer for the app */
const Footer: FunctionComponent<FooterProps> = ({
  setShowingGiveHintModal,
  clearHand
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
          onClearHand={clearHand}
        />
      )}
    </div>
  );
};

export default Footer;
