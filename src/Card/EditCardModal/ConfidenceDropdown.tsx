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

const emojiStyle = css`
  font-size: 30px;
  padding: 10px;
  min-width: 50px;
  display: inline-block;
`;

interface ConfidenceDropdownProps {
  onChange: Dispatch<SetStateAction<Card>>;
  card: Card;
  dropdownType: "color" | "number";
  dropdownKey: string;
  emoji: string;
}

/**
 * Render a dropdown to choose the confidence level of a color or number for a card
 */
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
    <div>
      <label htmlFor={dropdownId}>
        <span css={emojiStyle} role="img" aria-label={`${dropdownKey}`}>
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
        defaultValue={currentConfidence}
      >
        <option value={Confidence.Unknown}> </option>
        <option value={Confidence.Positive}>
          {/* eslint-ignore jsx-a11y/accessible-emoji */}✔
        </option>
        <option value={Confidence.Negative}>
          {/* eslint-ignore jsx-a11y/accessible-emoji */}❌
        </option>
      </select>
    </div>
  );
};

export default ConfidenceDropdown;
