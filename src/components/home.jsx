import React from "react";
import fullFrame from "/full_frame.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="flex relative items-center justify-center pt-10 h-screen bg-custom-color bg-custom-gradient animate-hero-gradient-animation">
      <div className="relative ">
        <img src={fullFrame} alt="Frame" className="rounded-xl" />
        <Link to="/view-clan">
          <button className="absolute top-[5%] left-[8%] transform -translate-y-1/2 h-10 text-center justify-center items-center font-jaini text-white hover:text-red-600 transition-all duration-500 text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            VER CLAN
          </button>
        </Link>
        <button className="absolute top-[5%] left-[26%] transform -translate-y-1/2 h-10 text-center justify-center items-center font-jaini text-white hover:text-red-600 transition-all duration-500 text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          NOSOTROS
        </button>
        <button className="absolute top-[5%] left-[46%] transform -translate-y-1/2 h-10 text-center justify-center items-center font-jaini text-white hover:text-red-600 transition-all duration-500 text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          MEDIA
        </button>
        <button className="absolute top-[5%] left-[61%] transform -translate-y-1/2 h-10 text-center justify-center items-center font-jaini text-white hover:text-red-600 transition-all duration-500 text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          UNETE
        </button>
        <button className="flex gap-1 absolute top-[5%] left-[77%] transform -translate-y-1/2 h-10 text-center justify-center items-center font-jaini text-white hover:text-red-600 transition-all duration-500 text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          DISCORD{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-2 sm:size-4 lg:size-6 xl:size-7">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
        </button>
        <h1 className="absolute bottom-[75%] left-1/2 transform -translate-x-1/2 text-center text-teal-300 font-rocksalt transition-all duration-500 text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Es De Chill Bro
        </h1>
        <img
          src="clan2.png"
          className="w-1/3 absolute bottom-[15%] left-1/2 transform -translate-x-1/2"></img>
      </div>
      <h3 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center font-bold text-red-800 text-[7px] pr-2 sm:text-[10px] md:text-[15px] xl:pb-1 xl:pr-4">
        Since: 01/30/2023
      </h3>
    </section>
  );
}

export default Home;
