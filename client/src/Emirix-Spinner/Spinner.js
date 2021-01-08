import React, { useState } from "react";
import "./Spinnerr.css";

export default function Spinner({
  color = "#e67e22",
  speed = 0.8,
  double = 0,
  width = 4,
  size = 60,
}) {
  const [css] = useState({
    width: size,
    height: size,
    backgroundColor: "transparent",
    borderRadius: 300,
    borderWidth: width,
    borderStyle: "solid",
    animation: `turn ${speed}s infinite linear`,
  });

  return (
    <div
      className="emirix-spinner"
      style={{
        ...css,
        borderColor: color,
        borderTopColor: "transparent",
        borderBottomColor: double ? "transparent" : color,
      }}
    ></div>
  );
}
