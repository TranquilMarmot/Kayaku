/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FunctionComponent } from "react";
import Button from "../Button";
import { ActionTypes, PlayCard } from "../actions";

interface CardActionsProps {
  index: number;
  onCloseActions: () => void;
  dispatch: (action: ActionTypes) => void;
}

const containerStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const buttonStyle = css`
  flex: 1;
  margin: 15px;
`;

const onPlayCard = (
  index: number,
  onCloseActions: () => void,
  dispatch: (action: ActionTypes) => void
) => {
  dispatch(PlayCard(index));
  onCloseActions();
};

const CardActions: FunctionComponent<CardActionsProps> = ({
  index,
  onCloseActions,
  dispatch
}) => {
  return (
    <div css={containerStyle}>
      <Button
        css={buttonStyle}
        onClick={() => onPlayCard(index, onCloseActions, dispatch)}
      >
        Play
      </Button>
      <Button css={buttonStyle} onClick={() => {}}>
        Edit
      </Button>
      <Button css={buttonStyle} onClick={onCloseActions}>
        Cancel
      </Button>
    </div>
  );
};

export default CardActions;
