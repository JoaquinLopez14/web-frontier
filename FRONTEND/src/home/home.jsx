import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ViewClan from "./clanview";
import AboutUs from "./aboutus";

function Home() {
  const viewClanRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="w-full h-screen overflow-hidden flex flex-col items-center hero-section">
        <nav className="w-screen flex justify-end gap-8 p-2 border-b-[1px] bg-gray-950 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
          <button
            className=" text-center justify-center items-center font-jaini text-white hover:text-red-600 transition-all duration-500"
            onClick={() => scrollToSection(viewClanRef)}>
            NOSOTROS
          </button>
          <Link to="/media">
            <button className=" text-center justify-center items-center font-jaini text-white hover:text-red-600 transition-all duration-500">
              MEDIA
            </button>
          </Link>
          <Link to="/join-us">
            <button className=" text-center justify-center items-center font-jaini text-white hover:text-red-600 transition-all duration-500">
              UNETE
            </button>
          </Link>
          <a
            href="https://discord.gg/GQsHnQEQ"
            target="blank"
            className="mr-5 text-center justify-center items-center font-jaini text-white hover:text-red-600 transition-all duration-500">
            DISCORD
          </a>
        </nav>
        <div className="flex justify-center items-center w-screen h-3/4">
          <h1 className="typing-text text-center w-screen font-rocksalt text-6xl sm:text-6xl md:text-6xl lg:text-9xl text-black text-shadow-yl">
            Es De Chill Bro
          </h1>
        </div>
      </section>
      <AboutUs />
      <section ref={viewClanRef}>
        <ViewClan />
      </section>
    </>
  );
}

export default Home;
