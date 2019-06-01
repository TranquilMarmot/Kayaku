import React, { FunctionComponent } from "react";

interface GiveHintModalProps {
  closeModal: () => void;
}

const GiveHintModal: FunctionComponent<GiveHintModalProps> = ({
  closeModal
}) => {
  return (
    <div>
      Give a hint yo
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default GiveHintModal;
