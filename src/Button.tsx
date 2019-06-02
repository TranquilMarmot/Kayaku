/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FunctionComponent } from "react";

interface ButtonProps {
  children: string | JSX.Element;
  disabled?: boolean;
  onClick: () => void;
}

const buttonStyle = css`
  transition: all 0.3s ease;
  border-radius: 10px;
  padding: 10px 15px;
  box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
  border: solid 2px transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(135deg, #ff0000 0%, #0000ff 50%, #ffff00 100%);
  color: #00ff00;
  font-weight: 800;

  &:hover {
    cursor: pointer;
    transition: all 0.5s ease;
    box-shadow: 3px 3px 6px 0 rgba(157, 96, 212, 0.5);
  }
`;

const Button: FunctionComponent<ButtonProps> = props => {
  const { children } = props;
  return (
    <button css={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;
