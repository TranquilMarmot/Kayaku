/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FunctionComponent, useState } from "react";

import Button from "../Button";
import { ActionTypes, PlayCard, MoveCard, MoveCardDirection } from "../actions";
import { Card } from "../types";

import EditCardModal from "./EditCardModal";

/**
 * Called when a card is played. Dispatches an action to the reducer and closes the actions on the card.
 * @param index Index of card to play
 * @param onCloseActions Function to call to close the actions
 * @param dispatch Function to dispatch to reducer
 */
const onPlayCard = (
  index: number,
  onCloseActions: () => void,
  dispatch: (action: ActionTypes) => void
) => {
  dispatch(PlayCard(index));
  onCloseActions();
};

const onMoveCard = (
  index: number,
  direction: MoveCardDirection,
  onCloseActions: () => void,

  dispatch: (action: ActionTypes) => void
) => {
  dispatch(MoveCard(index, direction));
  onCloseActions();
};

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

const arrowContainerStyle = css`
  display: flex;
`;

/**
 * Actions to take on a card. Shown when the card is clicked.
 */
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
      <div css={arrowContainerStyle}>
        <Button
          css={buttonStyle}
          onClick={() =>
            onMoveCard(index, MoveCardDirection.LEFT, onCloseActions, dispatch)
          }
        >
          ⬅
        </Button>
        <Button
          css={buttonStyle}
          onClick={() =>
            onMoveCard(index, MoveCardDirection.RIGHT, onCloseActions, dispatch)
          }
        >
          ➡
        </Button>
      </div>
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
