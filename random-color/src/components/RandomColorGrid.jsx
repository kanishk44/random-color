import React, { useEffect, useState } from "react";
import RandomColorBox from "./RandomColorBox";

function RandomColorGrid() {
  const [gridColors, setGridColors] = useState([]);
  const rows = 3,
    cols = 4;
  const generateRandomColor = () => {
    const hex = "0123456789ABCDEF";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += hex[Math.floor(Math.random() * 16)];
    }
    return newColor;
  };

  const generateGridColors = () => {
    const newGridColors = [];
    for (let i = 0; i < rows * cols; i++) {
      newGridColors.push(generateRandomColor());
    }
    console.log(newGridColors);
    return newGridColors;
  };

  const handleRegenrateClick = () => {
    setGridColors(generateGridColors());
  };

  useEffect(() => {
    setGridColors(generateRandomColor());
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gap: "10px",
        padding: "10px",
      }}
    >
      {/* {gridColors.map((color, index) => (
        <RandomColorBox key={index} newColor={color} />
      ))} */}
      <button
        onClick={handleRegenrateClick}
        style={{ gridColumn: "1 / -1", marginTop: "10px" }}
      >
        Regenerate Grid
      </button>
    </div>
  );
}

export default RandomColorGrid;
