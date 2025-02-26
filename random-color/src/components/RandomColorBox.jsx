import React from "react";

function RandomColorBox({ newColor }) {
  return (
    <div
      style={{
        backgroundColor: newColor,
        width: "100%",
        height: "100px",
        border: "1px solid #ccc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
        color: "#fff",
        textShadow: "1px 1px 1px rgba(0,0,0,0.5)"
      }}
    >
      {newColor}
    </div>
  );
}

export default RandomColorBox;
