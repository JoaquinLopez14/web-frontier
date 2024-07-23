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
        image="/thao.png"
      />
      <div className="flex flex-wrap justify-center">
        <HoverImage
          range="Comandante Principal"
          name="Jikushikarinki"
          image="/jiku.png"
        />
        <HoverImage
          range="Comandante Principal"
          name="Gonzalob13"
          image="/gonza.png"
        />
      </div>
      <HoverImage
        range="Incursor Especialista"
        name="Alestar"
        image="/alestar.png"
      />
      <div className="flex flex-wrap justify-center">
        <HoverImage
          range="Explorador Veterano"
          name="Coffeeboss"
          image="/coffeboss.png"
        />
        <HoverImage
          range="Explorador Veterano"
          name="Rapacious"
          image="/rapacious.png"
        />
      </div>
      <div className="flex flex-wrap justify-center mb-80">
        <HoverImage
          range="Novato Saqueador"
          name="Leatherface565"
          image="/leatherface.png"
        />
        <HoverImage range="Novato Saqueador" name="Kleotkz" image="/kleo.png" />
        <HoverImage
          range="Novato Saqueador"
          name="JockeyPlazaaaaaa"
          image="/jockey.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="inplay"
          image="/inplay.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Kardia Pc"
          image="/kardia.png"
        />
        <HoverImage range="Novato Saqueador" name="Sugah" image="/sugah.png" />
        <HoverImage
          range="Novato Saqueador"
          name="JinxAcro"
          image="/jinx.png"
        />
        <HoverImage range="Novato Saqueador" name="Jaya" image="/jaya.png" />
        <HoverImage
          range="Novato Saqueador"
          name="Miss Drahota"
          image="/drahota.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Zusuki"
          image="/zusuki.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Berkut"
          image="/berkut.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="ravenhard"
          image="/ravenhard.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="CaptainCupQuakes"
          image="/captain.png"
        />
      </div>
    </section>
  );
}

export default ViewClan;
