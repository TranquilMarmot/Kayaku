/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { FunctionComponent } from "react";

import Button from "../Button";

interface FooterProps {
  onCloseClick: () => void;
  onConfirmClick: () => void;
}

const Footer: FunctionComponent<FooterProps> = ({
  onCloseClick,
  onConfirmClick
}) => {
  return (
    <div>
      <Button onClick={onCloseClick}>Cancel</Button>
      <Button onClick={onConfirmClick}>Apply</Button>
    </div>
  );
};

export default Footer;
