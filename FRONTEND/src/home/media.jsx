import React from "react";
import Galery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Link } from "react-router-dom";
import nighthawk from "../assets/loots/1.png";
import fleshReaver from "../assets/loots/2.png";
import gorespiker from "../assets/loots/3.png";
import scourgeshot from "../assets/loots/4.png";
import warhawk from "../assets/loots/5.png";
import wyvern from "../assets/loots/6.png";
import bloodseeker from "../assets/loots/7.png";
import marauder from "../assets/loots/8.png";

const images = [
  {
    original: nighthawk,
    thumbnail: nighthawk,
  },
  {
    original: fleshReaver,
    thumbnail: fleshReaver,
  },
  {
    original: gorespiker,
    thumbnail: gorespiker,
  },
  {
    original: scourgeshot,
    thumbnail: scourgeshot,
  },
  {
    original: warhawk,
    thumbnail: warhawk,
  },
  {
    original: wyvern,
    thumbnail: wyvern,
  },
  {
    original: bloodseeker,
    thumbnail: bloodseeker,
  },
  {
    original: marauder,
    thumbnail: marauder,
  },
];
function Media() {
  return (
    <section className="w-screen min-h-screen bg-media">
      <Link to="/">
        <button className="sm:absolute top-10 left-4 w-24 h-10 bg-white text-black text-1xl font-ysabeau rounded-lg border-4 hover:scale-105 border-black">
          ← Back
        </button>
      </Link>
      <h1 className="text-center text-5xl p-10 font-ysabeau lg:text-7xl">
        {" "}
        Best Loots
      </h1>
      <div className="flex flex-col gap-10 p-5 rounded-xl lg:hidden">
        <img className="rounded-xl" src={nighthawk}></img>
        <img className="rounded-xl" src={fleshReaver}></img>
        <img className="rounded-xl" src={gorespiker}></img>
        <img className="rounded-xl" src={scourgeshot}></img>
        <img className="rounded-xl" src={warhawk}></img>
        <img className="rounded-xl" src={wyvern}></img>
        <img className="rounded-xl" src={bloodseeker}></img>
        <img className="rounded-xl" src={marauder}></img>
      </div>
      <div className="hidden w-[40vw] m-auto lg:block">
        <Galery
          items={images}
          showFullscreenButton={false}
          showPlayButton={false}
        />
      </div>
    </section>
  );
}

export default Media;
