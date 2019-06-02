import { css } from "@emotion/core";

export const baseModalBackground = css`
  position: fixed; /* Stay in place */
  z-index: 1000; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

export const baseModalContent = css`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;

// Rainbow gradient: linear-gradient(135deg, #00ff00 0%,#ff0000 25%,#0000ff 50%,#ffff00 75%,#ffffff 100%)
