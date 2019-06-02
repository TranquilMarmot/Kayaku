/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { FunctionComponent, Dispatch, SetStateAction } from "react";

const renderColorOrNumberRadioButton = (
  value: string,
  emoji: string,
  selectedNumberOrColor: string,
  setSelectedNumberOrColor: Dispatch<SetStateAction<string>>
) => {
  const id = `color-or-number-${value}`;
  return (
    <div>
      <label htmlFor={id}>{emoji}</label>
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

interface ColorOrNumberRadioButtonsProps {
  selectedNumberOrColor: string;
  setSelectedNumberOrColor: Dispatch<SetStateAction<string>>;
}

const ColorOrNumberRadioButtons: FunctionComponent<
  ColorOrNumberRadioButtonsProps
> = ({ selectedNumberOrColor, setSelectedNumberOrColor }) => {
  return (
    <div>
      <div>
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
      <div>
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
};

export default ColorOrNumberRadioButtons;
