import React, { useCallback, useEffect } from "react";

export const Button = ({ text, color }) => {
  return (
    <button
      style={{
        color: "blue",
      }}
    >
      {text}
    </button>
  );
};
