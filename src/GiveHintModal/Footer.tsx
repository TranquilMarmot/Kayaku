/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { FunctionComponent } from "react";

import Button from "../Button";

interface FooterProps {
  onCloseClick: () => void;
  onConfirmClick: () => void;
}

const footerStyle = css`
  border-top: 2px solid grey;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const footerButtonStyle = css`
  padding: 15px 20px;

  width: 100px;
`;

const Footer: FunctionComponent<FooterProps> = ({
  onCloseClick,
  onConfirmClick
}) => {
  return (
    <div css={footerStyle}>
      <Button css={footerButtonStyle} onClick={onCloseClick}>
        Cancel
      </Button>
      <Button css={footerButtonStyle} onClick={onConfirmClick}>
        Apply
      </Button>
    </div>
  );
};

export default Footer;
