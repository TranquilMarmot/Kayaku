/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FunctionComponent } from "react";

import Button from "../Button";

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

interface FooterProps {
  /** Function to call when close button is clicked (should close the modal...) If this is not passed in, the close button will not be shown. */
  onCloseClick?: () => void;

  /** Function to call when confirming the modal. If this is not passed in, the confirm button will not be shown. */
  onConfirmClick?: () => void;
}

/**
 * Footer for a Modal that has Cancel and Apply buttons
 */
const Footer: FunctionComponent<FooterProps> = ({
  onCloseClick,
  onConfirmClick
}) => (
  <div css={footerStyle}>
    {onCloseClick && (
      <Button css={footerButtonStyle} onClick={onCloseClick}>
        Cancel
      </Button>
    )}
    {onConfirmClick && (
      <Button css={footerButtonStyle} onClick={onConfirmClick}>
        Apply
      </Button>
    )}
  </div>
);

export default Footer;
