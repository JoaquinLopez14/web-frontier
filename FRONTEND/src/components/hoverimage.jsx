import React from "react";

function HoverImage({ range, name, image, link }) {
  return (
    <div className="w-[300px] sm:w-[450px] relative p-5 mb-10">
      <h2 className="text-yellow-100 text-center text-2xl font-rocksalt text-shadow-lg">
        {range}
      </h2>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h3 className="text-red-600 text-center text-2xl font-ysabeau cursor-pointer peer">
          {name}
        </h3>
        <img
          src={image}
          alt={name}
          className="absolute hidden w-[32rem] h-auto top-full left-1/2 -translate-x-1/2 rounded-xl peer-hover:flex z-10"
        />
      </a>
    </div>
  );
}

export default HoverImage;
