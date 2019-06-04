/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FunctionComponent } from "react";
import { Confidence as ConfidenceType } from "../types";

interface ConfidenceProps {
  confidence: ConfidenceType;
}

const Confidence: FunctionComponent<ConfidenceProps> = ({ confidence }) => {
  switch (confidence) {
    case ConfidenceType.Positive:
      return (
        <span role="img" aria-label="positive">
          ✔
        </span>
      );
    case ConfidenceType.Negative:
      return (
        <span role="img" aria-label="negative">
          ❌
        </span>
      );
    case ConfidenceType.Unknown:
    default:
      return <span />;
  }
};

export default Confidence;
