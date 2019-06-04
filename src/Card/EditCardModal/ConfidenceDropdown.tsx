/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FunctionComponent } from "react";
import { Card, Confidence } from "../../types";

interface ConfidenceDropdownProps {
  card: Card;
  dropdownType: "color" | "number";
  dropdownKey: string;
  emoji: string;
}

const ConfidenceDropdown: FunctionComponent<ConfidenceDropdownProps> = ({
  card,
  dropdownType,
  dropdownKey,
  emoji
}) => {
  const dropdownId = `dropdown-${dropdownType}-${dropdownKey}`;
  const currentConfidence = card[dropdownType][dropdownKey];
  return (
    <div>
      <label htmlFor={dropdownId}>
        <span role="img" aria-label={`${dropdownKey}`}>
          {emoji}
        </span>
      </label>
      <select id={dropdownId}>
        <option
          value={Confidence.Unknown}
          selected={currentConfidence === Confidence.Unknown}
        >
          ❔
        </option>
        <option
          value={Confidence.Positive}
          selected={currentConfidence === Confidence.Positive}
        >
          ✔
        </option>
        <option
          value={Confidence.Negative}
          selected={currentConfidence === Confidence.Negative}
        >
          ❌
        </option>
      </select>
    </div>
  );
};

export default ConfidenceDropdown;
