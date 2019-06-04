/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FunctionComponent } from "react";
import Button from "./Button";

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

const Footer: FunctionComponent<FooterProps> = ({
  setShowingGiveHintModal
}) => {
  return (
    <div css={containerStyle}>
      <Button css={buttonStyle} onClick={() => {}}>
        Options
      </Button>
      <Button css={buttonStyle} onClick={() => setShowingGiveHintModal(true)}>
        Give Hint
      </Button>
    </div>
  );
};

export default Footer;
