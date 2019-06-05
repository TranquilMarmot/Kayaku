/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FunctionComponent, Dispatch, SetStateAction } from "react";
import { Card, Confidence } from "../../types";

const setCardValue = (
  card: Card,
  type: string,
  key: string,
  value: Confidence
): Card => {
  return {
    ...card,
    [type]: {
      ...card[type],
      [key]: value
    }
  };
};

interface ConfidenceDropdownProps {
  onChange: Dispatch<SetStateAction<Card>>;
  card: Card;
  dropdownType: "color" | "number";
  dropdownKey: string;
  emoji: string;
}

const containerStyle = css`
  font-size: 25px;
`;

const ConfidenceDropdown: FunctionComponent<ConfidenceDropdownProps> = ({
  onChange,
  card,
  dropdownType,
  dropdownKey,
  emoji
}) => {
  const dropdownId = `dropdown-${dropdownType}-${dropdownKey}`;
  const currentConfidence = card[dropdownType][dropdownKey];
  return (
    <div css={containerStyle}>
      <label htmlFor={dropdownId}>
        <span role="img" aria-label={`${dropdownKey}`}>
          {emoji}
        </span>
      </label>
      <select
        id={dropdownId}
        onChange={e =>
          onChange(
            setCardValue(card, dropdownType, dropdownKey, e.target
              .value as Confidence)
          )
        }
      >
        <option
          value={Confidence.Unknown}
          selected={currentConfidence === Confidence.Unknown}
        >
          {" "}
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
