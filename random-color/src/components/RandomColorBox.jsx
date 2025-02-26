import React from "react";

function RandomColorBox({ newColor }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: color,
          width: "200px",
          height: "100px",
          border: "1px solid #ccc",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.2rem",
        }}
      >
        {newColor}
      </div>
      <button onClick={handleGenerateClick}>Generate Random Color</button>
    </div>
  );
}

export default RandomColorBox;
