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
    return newGridColors;
  };

  const handleRegenerateClick = () => {
    setGridColors(generateGridColors());
  };

  useEffect(() => {
    setGridColors(generateGridColors());
  }, []);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gap: "10px",
          padding: "10px",
        }}
      >
        {gridColors.map((color, index) => (
          <RandomColorBox key={index} newColor={color} />
        ))}
      </div>
      <button
        onClick={handleRegenerateClick}
        style={{ width: "100%", padding: "10px", marginTop: "10px" }}
      >
        Regenerate Grid
      </button>
    </div>
  );
}

export default RandomColorGrid;
