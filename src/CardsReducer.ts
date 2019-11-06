import { Card, Confidence } from "./types";
import {
  Actions,
  ActionTypes,
  GiveHintAction,
  PlayCardAction,
  EditCardAction,
  MoveCardAction,
  MoveCardDirection
} from "./actions";

/** Creates a card with empty (unknown) confidence for everything */
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

/**
 * Create a hand with the given number of empty cards
 * @param numberOfCards Number of cards in hand
 */
export const getInitialState = (numberOfCards: number): Card[] => {
  const cards: Card[] = [];

  for (let i = 0; i < numberOfCards; i++) {
    cards.push(createCard());
  }

  return cards;
};

/**
 * Gives a hint to the player.
 * The hint contains a list of indices in the hand, and the color or number for the hint.
 * This will set the confidence to positive for the color/number for the given indices,
 * and set the confidence to negative for all other indices
 * @param hand Hand to apply hint to
 * @param action Action containing hint being given
 */
const giveHint = (
  hand: Card[],
  { indices, color, number }: GiveHintAction
): Card[] =>
  hand.map((card, index) => {
    // check if this card is in the hint
    // if it is, the confidence is positive
    // otherwise it's negative
    const inHint = indices.includes(index);

    // hint is about a color
    if (color) {
      return {
        ...card,
        color: {
          ...card.color,
          [color]: inHint ? Confidence.Positive : Confidence.Negative
        }
      };
    }

    // hint it about a number
    if (number) {
      return {
        ...card,
        number: {
          ...card.number,
          [number]: inHint ? Confidence.Positive : Confidence.Negative
        }
      };
    }

    // neither color or number (tehcnically an invalid hint)
    return card;
  });

/**
 * This will remove the given card and replace it with a new, blank card.
 * This assumes that new cards are added to the right side of the hand.
 * @param hand Player's current hand
 * @param action Action containing the card being played
 */
const playCard = (hand: Card[], { index }: PlayCardAction): Card[] => {
  // clone the hand
  const cardsMinusPlayed = [...hand];

  // filter out the card we just played
  cardsMinusPlayed.splice(index, 1);

  // add a new card
  cardsMinusPlayed.push(createCard());
  return cardsMinusPlayed;
};

/**
 * Moves a card left or right in the player's hand
 * @param hand Player's current hand
 * @param action Action containing which direction to move a card
 */
const moveCard = (
  hand: Card[],
  { index, direction }: MoveCardAction
): Card[] => {
  let destinationIndex =
    direction === MoveCardDirection.LEFT ? index - 1 : index + 1;

  // rotate around the start/end of the hand
  if (destinationIndex === hand.length) {
    destinationIndex = 0;
  } else if (destinationIndex === -1) {
    destinationIndex = hand.length - 1;
  }

  // doing this the cheap and dirty way since this is a small array and
  // algorithms just make this way too complex
  const clone = [...hand];

  const destinationCard = { ...clone[destinationIndex] };
  const thisCard = { ...clone[index] };

  clone[index] = destinationCard;
  clone[destinationIndex] = thisCard;

  return clone;
};

/**
 * Edits (replaces) a card in the player's hand
 * @param hand Player's current hand
 * @param action Action containing index of card to edit
 */
const editCard = (hand: Card[], action: EditCardAction): Card[] =>
  hand.map((card, index) => {
    if (index === action.index) {
      return action.card;
    }

    return card;
  });

export default (state: Card[], action: ActionTypes): Card[] => {
  switch (action.type) {
    case Actions.GiveHint:
      return giveHint(state, action as GiveHintAction);
    case Actions.PlayCard:
      return playCard(state, action as PlayCardAction);
    case Actions.MoveCard:
      return moveCard(state, action as MoveCardAction);
    case Actions.EditCard:
      return editCard(state, action as EditCardAction);
    default:
      return state;
  }
};
