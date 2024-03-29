import { Card } from "./types";

/** List of action types */
export enum Actions {
  GiveHint = "GiveHint",
  PlayCard = "PlayCard",
  EditCard = "EditCard",
  MoveCard = "MoveCard"
}

/** Base Action interface that all Actions extend */
interface Action {
  type: Actions;
}

/** Give the player a hint about multiple cards */
export interface GiveHintAction extends Action {
  indices: number[];
  color?: string;
  number?: string;
}

/**
 * Give the player a hint about multiple cards.
 * This should have either number or color, but never both.
 * @param indices Indices to give hint about
 * @param color Color that this hint is about
 * @param number Number that this hint is about
 */
export const GiveHint = (
  indices: number[],
  color?: string,
  number?: string
): GiveHintAction => ({
  type: Actions.GiveHint,
  indices,
  color,
  number
});

/** Play a card at a specific index */
export interface PlayCardAction extends Action {
  index: number;
}

/**
 * Play a card at a specific index
 * @param index Index of card to play
 */
export const PlayCard = (index: number) => ({
  type: Actions.PlayCard,
  index
});

/** Possible directions to move a card */
export enum MoveCardDirection {
  LEFT,
  RIGHT
}

/** Move a card left or right in the hand */
export interface MoveCardAction extends Action {
  index: number;
  direction: MoveCardDirection;
}

/**
 * Move a card left or right in the hand
 * @param index Index of card to move
 * @param direction Direction to move card in
 */
export const MoveCard = (index: number, direction: MoveCardDirection) => ({
  type: Actions.MoveCard,
  index,
  direction
});

/** Edit a card at a specific index */
export interface EditCardAction extends Action {
  index: number;
  card: Card;
}

/**
 * Edit (replace) a card at a given index
 * @param index Index of card to edit
 * @param card Updated card
 */
export const EditCard = (index: number, card: Card) => ({
  type: Actions.EditCard,
  index,
  card
});

/** All action types */
export type ActionTypes =
  | GiveHintAction
  | PlayCardAction
  | EditCardAction
  | MoveCardAction;
