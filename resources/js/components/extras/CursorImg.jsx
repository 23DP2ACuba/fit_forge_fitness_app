import React, { useState } from "react";

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ width: "100vw", height: "100vh", position: "absolute" }}
    >
      <img
        src="https://www.pngkey.com/png/full/4-41744_angry-side-face-trump-donald-trump-face-transparent.png"
        alt="follower"
        style={{
          position: "absolute",
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          width: "50px",
          height: "50px",
        }}
      />
    </div>
  );
}