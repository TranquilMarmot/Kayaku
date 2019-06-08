/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FunctionComponent, Dispatch, SetStateAction } from "react";

const labelStyle = css`
  padding: 10px;
  min-width: 50px;
  display: inline-block;

  &:hover {
    cursor: pointer;
  }
`;

/**
 * Render a radio button to choose a number/color for a hint
 * @param value Value of radio button
 * @param emoji Emoji to use for label
 * @param selectedNumberOrColor The currently selected number/color
 * @param setSelectedNumberOrColor Function to set the currently selected number/color
 */
const renderColorOrNumberRadioButton = (
  value: string,
  emoji: string,
  selectedNumberOrColor: string,
  setSelectedNumberOrColor: Dispatch<SetStateAction<string>>
) => {
  const id = `color-or-number-${value}`;
  return (
    <div>
      <label htmlFor={id} css={labelStyle}>
        {emoji}
      </label>
      <input
        type="radio"
        id={id}
        value={value}
        name="color-or-number"
        checked={selectedNumberOrColor === value}
        onChange={() => setSelectedNumberOrColor(value)}
      />
    </div>
  );
};

const radioListStyle = css`
  font-size: 30px;
  display: flex;
`;

interface ColorOrNumberRadioButtonsProps {
  selectedNumberOrColor: string;
  setSelectedNumberOrColor: Dispatch<SetStateAction<string>>;
}

/**
 * Renders radio buttons to choose a number of a color for a hint
 */
const ColorOrNumberRadioButtons: FunctionComponent<
  ColorOrNumberRadioButtonsProps
> = ({ selectedNumberOrColor, setSelectedNumberOrColor }) => (
  <div>
    <div css={radioListStyle}>
      {renderColorOrNumberRadioButton(
        "blue",
        "🔷",
        selectedNumberOrColor,
        setSelectedNumberOrColor
      )}
      {renderColorOrNumberRadioButton(
        "yellow",
        "💛",
        selectedNumberOrColor,
        setSelectedNumberOrColor
      )}
      {renderColorOrNumberRadioButton(
        "red",
        "🔺",
        selectedNumberOrColor,
        setSelectedNumberOrColor
      )}
      {renderColorOrNumberRadioButton(
        "green",
        "🍏",
        selectedNumberOrColor,
        setSelectedNumberOrColor
      )}
      {renderColorOrNumberRadioButton(
        "white",
        "⬜",
        selectedNumberOrColor,
        setSelectedNumberOrColor
      )}
    </div>
    <div css={radioListStyle}>
      {renderColorOrNumberRadioButton(
        "one",
        "1️⃣",
        selectedNumberOrColor,
        setSelectedNumberOrColor
      )}
      {renderColorOrNumberRadioButton(
        "two",
        "2️⃣",
        selectedNumberOrColor,
        setSelectedNumberOrColor
      )}
      {renderColorOrNumberRadioButton(
        "three",
        "3️⃣",
        selectedNumberOrColor,
        setSelectedNumberOrColor
      )}
      {renderColorOrNumberRadioButton(
        "four",
        "4️⃣",
        selectedNumberOrColor,
        setSelectedNumberOrColor
      )}
      {renderColorOrNumberRadioButton(
        "five",
        "5️⃣",
        selectedNumberOrColor,
        setSelectedNumberOrColor
      )}
    </div>
  </div>
);

export default ColorOrNumberRadioButtons;
