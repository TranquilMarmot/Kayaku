export enum Confidence {
  Unknown = "unknown",
  Positive = "positive",
  Negative = "negative"
}

export interface Card {
  color: {
    blue: Confidence;
    yellow: Confidence;
    red: Confidence;
    green: Confidence;
    white: Confidence;
    [key: string]: Confidence;
  };
  number: {
    one: Confidence;
    two: Confidence;
    three: Confidence;
    four: Confidence;
    five: Confidence;
    [key: string]: Confidence;
  };
  [key: string]: object;
}
