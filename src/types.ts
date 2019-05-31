export enum Confidence {
  Unknown = "unknown",
  Negative = "negative",
  Positive = "positive"
}

export interface Card {
  color: {
    blue: Confidence;
    yellow: Confidence;
    red: Confidence;
    green: Confidence;
    white: Confidence;
    [key: string]: string;
  };
  number: {
    one: Confidence;
    two: Confidence;
    three: Confidence;
    four: Confidence;
    five: Confidence;
    [key: string]: string;
  };
}
