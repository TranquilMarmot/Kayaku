/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FunctionComponent, useState } from "react";
import Button from "../Button";
import { ActionTypes, PlayCard } from "../actions";
import EditCardModal from "./EditCardModal";
import { Card } from "../types";

interface CardActionsProps {
  index: number;
  card: Card;
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
  card,
  onCloseActions,
  dispatch
}) => {
  const [showingEditModal, onChangeShowingEditModal] = useState(false);

  return (
    <div css={containerStyle}>
      <Button
        css={buttonStyle}
        onClick={() => onPlayCard(index, onCloseActions, dispatch)}
      >
        Play
      </Button>
      <Button css={buttonStyle} onClick={() => onChangeShowingEditModal(true)}>
        Edit
      </Button>
      <Button css={buttonStyle} onClick={onCloseActions}>
        Cancel
      </Button>
      {showingEditModal && (
        <EditCardModal
          index={index}
          card={card}
          onCloseActions={onCloseActions}
          onCloseEditCardModal={() => onChangeShowingEditModal(false)}
          dispatch={dispatch}
        />
      )}
    </div>
  );
};

export default CardActions;
