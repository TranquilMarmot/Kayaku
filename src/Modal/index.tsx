/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FunctionComponent } from "react";

const baseModalBackground = css`
  position: fixed; /* Stay in place */
  z-index: 1000; /* Sit on top */
  padding-top: 10px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

const baseModalContent = css`
  margin: auto;
  border: 1px solid #888;
  width: 80%;
  color: black;
  background: linear-gradient(
    315deg,
    rgba(137, 196, 255, 1) 0%,
    rgba(50, 255, 57, 1) 100%
  );
`;

const Modal: FunctionComponent = ({ children }) => {
  return (
    <div css={baseModalBackground}>
      <div css={baseModalContent}>{children}</div>
    </div>
  );
};

export default Modal;
