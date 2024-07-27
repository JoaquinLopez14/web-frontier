import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ViewClan from "./clanview";
import AboutUs from "./aboutus";

function Home() {
  const viewClanRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      textRef.current.classList.add("typing-text");
    }, 500); // Añade un pequeño retraso antes de comenzar la animación

    return () => clearTimeout(timeout);
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="w-full h-screen overflow-hidden flex flex-col items-center hero-section">
        <nav className="w-screen flex justify-end gap-10 p-2 border-b-[1px] bg-gray-950">
          <button
            className=" text-center justify-center items-center font-jaini text-white hover:text-red-600 transition-all duration-500 text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-2xl"
            onClick={() => scrollToSection(viewClanRef)}>
            NOSOTROS
          </button>
          <button className=" text-center justify-center items-center font-jaini text-white hover:text-red-600 transition-all duration-500 text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
            MEDIA
          </button>
          <Link to="/join-us">
            <button className=" text-center justify-center items-center font-jaini text-white hover:text-red-600 transition-all duration-500 text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
              UNETE
            </button>
          </Link>
          <button className=" mr-5 text-center justify-center items-center font-jaini text-white hover:text-red-600 transition-all duration-500 text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
            DISCORD
          </button>
        </nav>
        <div className="flex justify-center items-center h-3/4">
          <h1
            className="text-center justify-center font-rocksalt text-1xl sm:text-2xl md:text-3xl lg:text-9xl text-black text-shadow-wh"
            ref={textRef}>
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
