"use client";
import { useState } from "react";

export default function CircleAnimation() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = e.clientX - 60;
    const y = e.clientY - 60;
    setPosition({ x, y });
  };

  return (
    <div
      className="relative w-full h-[500px] bg-gray-200  cursor-crosshair"
      onMouseMove={handleMouseMove}
      onClick={handleMouseMove}
    >
      <div
        className="absolute bg-red-500 w-[120px] h-[120px] rounded-full transition-transform duration-200 ease-[cubic-bezier(0.02,1.23,.79,1.08)]"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      ></div>
    </div>
  );
}
