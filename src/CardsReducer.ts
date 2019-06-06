import { Card, Confidence } from "./types";
import {
  Actions,
  ActionTypes,
  GiveHintAction,
  PlayCardAction,
  EditCardAction
} from "./actions";

const createCard = (): Card => ({
  color: {
    blue: Confidence.Unknown,
    yellow: Confidence.Unknown,
    red: Confidence.Unknown,
    green: Confidence.Unknown,
    white: Confidence.Unknown
  },
  number: {
    one: Confidence.Unknown,
    two: Confidence.Unknown,
    three: Confidence.Unknown,
    four: Confidence.Unknown,
    five: Confidence.Unknown
  }
});

export const getInitialState = (numberOfCards: number): Card[] => {
  const cards: Card[] = [];

  for (let i = 0; i < numberOfCards; i++) {
    cards.push(createCard());
  }

  return cards;
};

const giveHint = (state: Card[], action: GiveHintAction): Card[] => {
  const { indices, color, number } = action;

  return state.map((card, index) => {
    const inHint = indices.includes(index);

    // TODO this needs to be more complicated for rainbow cards
    // (if given two clues of color to one card, it's rainbow)
    if (color) {
      return {
        ...card,
        color: {
          ...card.color,
          [color]: inHint ? Confidence.Positive : Confidence.Negative
        }
      };
    }

    if (number) {
      return {
        ...card,
        number: {
          ...card.number,
          [number]: inHint ? Confidence.Positive : Confidence.Negative
        }
      };
    }

    return card;
  });
};

const playCard = (state: Card[], action: PlayCardAction): Card[] => {
  // filter out the card we just played
  const cardsMinusPlayed = [...state];
  cardsMinusPlayed.splice(action.index, 1);
  cardsMinusPlayed.push(createCard());
  return cardsMinusPlayed;
};

const editCard = (state: Card[], action: EditCardAction): Card[] => {
  return state.map((card, index) => {
    if (index === action.index) {
      return action.card;
    }

    return card;
  });
};

export default (state: Card[], action: ActionTypes): Card[] => {
  switch (action.type) {
    case Actions.GiveHint:
      return giveHint(state, action as GiveHintAction);
    case Actions.PlayCard:
      return playCard(state, action as PlayCardAction);
    case Actions.EditCard:
      return editCard(state, action as EditCardAction);
    default:
      return state;
  }
};
