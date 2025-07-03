import React from "react";

export default function Banner({ title, bgImage }) {
  return (
    <div
      className="w-full h-64 md:h-80 flex items-center justify-center bg-cover bg-center mb-12"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h2 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">{title}</h2>
    </div>
  );
} 