import { Card, Confidence } from "./types";
import { Actions } from "./actions";

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

interface Action {
  type: string;
}

interface GiveHintAction extends Action {
  indices: number[];
  color?: string;
  number?: string;
}

interface PlayCardAction extends Action {
  index: number;
}

interface CardClickedAction extends Action {
  index: number;
  card: Card;
}

type ActionTypes = GiveHintAction | PlayCardAction | CardClickedAction;

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
  return state;
};

const cardClicked = (state: Card[], action: CardClickedAction): Card[] => {
  return state;
};

export default (state: Card[], action: ActionTypes): Card[] => {
  switch (action.type) {
    case Actions.GiveHint:
      return giveHint(state, action as GiveHintAction);
    case Actions.PlayCard:
      return playCard(state, action as PlayCardAction);
    case Actions.CardClicked:
      return cardClicked(state, action as CardClickedAction);
    default:
      return state;
  }
};
