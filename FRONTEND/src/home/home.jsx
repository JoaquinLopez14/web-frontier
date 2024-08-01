import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ViewClan from "./clanview";
import AboutUs from "./aboutus";
import { trefoil } from "ldrs";

trefoil.register();

function Home() {
  const [loading, setLoading] = useState(true);
  const viewClanRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      textRef.current.classList.add("typing-text");
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <l-trefoil
            size="50"
            stroke="5"
            stroke-length="0.15"
            bg-opacity="0.1"
            speed="1.4"
            color="black"></l-trefoil>
        </div>
      ) : (
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
              <h1
                className="text-center w-screen font-rocksalt text-6xl sm:text-6xl md:text-6xl lg:text-9xl text-black text-shadow-wh"
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
      )}
    </>
  );
}

export default Home;
