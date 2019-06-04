import { Card, Confidence } from "./types";

export enum Actions {
  GiveHint = "GiveHint",
  PlayCard = "PlayCard",
  EditCard = "EditCard"
}

interface Action {
  type: Actions;
}

export interface GiveHintAction extends Action {
  indices: number[];
  color?: string;
  number?: string;
  confidence: Confidence;
}

export const GiveHint = (
  indices: number[],
  confidence: Confidence,
  color?: string,
  number?: string
): GiveHintAction => ({
  type: Actions.GiveHint,
  indices,
  confidence,
  color,
  number
});

export interface PlayCardAction extends Action {
  index: number;
}

export const PlayCard = (index: number) => ({
  type: Actions.PlayCard,
  index
});

export interface EditCardAction extends Action {
  index: number;
  card: Card;
}

export const EditCard = (index: number, card: Card) => ({
  type: Actions.EditCard,
  index,
  card
});

export type ActionTypes = GiveHintAction | PlayCardAction | EditCardAction;
