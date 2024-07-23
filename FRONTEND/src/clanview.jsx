import React from "react";
import HoverImage from "./components/hoverimage";
import { Link } from "react-router-dom";

function ViewClan() {
  return (
    <section className="w-full min-h-screen clanview flex flex-col items-center justify-center">
      <h1 className="text-black text-center text-4xl sm:text-6xl text-shadow-wh font-rocksalt pt-10">
        Miembros
      </h1>
      <Link to="/">
        <button className="hidden sm:flex absolute top-4 left-4 w-14 h-10 bg-gray-400 text-black text-2xl font-ysabeau rounded-lg border-4 hover:scale-105 border-black justify-center">
          {" "}
          ←
        </button>
      </Link>
      <Link to="/view-clan-stats">
        <button className="border p-1 w-52 rounded-lg bg-black text-white mt-10 mb-10 hover:scale-105 font-ysabeau">
          {" "}
          ver stats de los miembros
        </button>
      </Link>
      <HoverImage
        range="Comandante En Jefe"
        name="GhostOfThao"
        image="FRONTEND/public/thao.png"
      />
      <div className="flex flex-wrap justify-center">
        <HoverImage
          range="Comandante Principal"
          name="Jikushikarinki"
          image="FRONTEND/public/jiku.png"
        />
        <HoverImage
          range="Comandante Principal"
          name="Gonzalob13"
          image="FRONTEND/public/gonza.png"
        />
      </div>
      <HoverImage
        range="Incursor Especialista"
        name="Alestar"
        image="FRONTEND/public/alestar.png"
      />
      <div className="flex flex-wrap justify-center">
        <HoverImage
          range="Explorador Veterano"
          name="Coffeeboss"
          image="FRONTEND/public/coffeboss.png"
        />
        <HoverImage
          range="Explorador Veterano"
          name="Rapacious"
          image="FRONTEND/public/rapacious.png"
        />
      </div>
      <div className="flex flex-wrap justify-center mb-80">
        <HoverImage
          range="Novato Saqueador"
          name="Leatherface565"
          image="FRONTEND/public/leatherface.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Kleotkz"
          image="FRONTEND/public/kleo.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="JockeyPlazaaaaaa"
          image="FRONTEND/public/jockey.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="inplay"
          image="FRONTEND/public/inplay.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Kardia Pc"
          image="FRONTEND/public/kardia.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Sugah"
          image="FRONTEND/public/sugah.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="JinxAcro"
          image="FRONTEND/public/jinx.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Jaya"
          image="FRONTEND/public/jaya.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Miss Drahota"
          image="FRONTEND/public/drahota.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Zusuki"
          image="FRONTEND/public/zusuki.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Berkut"
          image="FRONTEND/public/berkut.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="ravenhard"
          image="FRONTEND/public/ravenhard.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="CaptainCupQuakes"
          image="FRONTEND/public/captain.png"
        />
      </div>
    </section>
  );
}

export default ViewClan;
