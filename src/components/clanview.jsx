import React from "react";
import HoverImage from "./hoverimage";
import { Link } from "react-router-dom";

function ViewClan() {
  return (
    <section className="flex flex-col items-center absolute top-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <h1 className="text-black text-center text-6xl text-shadow-wh font-rocksalt mt-10 mb-10">
        Miembros
      </h1>
      <Link to="/">
        <button className=" absolute top-4 left-4 w-40 h-10 bg-gray-400 text-black text-1xl font-ysabeau rounded-lg border-4 hover:scale-105 border-black">
          {" "}
          ← Volver atras{" "}
        </button>
      </Link>
      <Link to="/view-clan-stats">
        <button className="border p-2 rounded-lg bg-black text-white mt-10 mb-10 hover:scale-105 font-ysabeau">
          {" "}
          ver stats de los miembros
        </button>
      </Link>
      <HoverImage
        range="Comandante En Jefe"
        name="GhostOfThao"
        image="../public/thao.png"
      />
      <div className="flex flex-wrap justify-center">
        <HoverImage
          range="Comandante Principal"
          name="Jikushikarinki"
          image="../public/jiku.png"
        />
        <HoverImage
          range="Comandante Principal"
          name="Gonzalob13"
          image="../public/gonza.png"
        />
      </div>
      <HoverImage
        range="Incursor Especialista"
        name="Alestar"
        image="../public/alestar.png"
      />
      <div className="flex flex-wrap justify-center">
        <HoverImage
          range="Explorador Veterano"
          name="Coffeeboss"
          image="../public/coffeboss.png"
        />
        <HoverImage
          range="Explorador Veterano"
          name="Rapacious"
          image="../public/rapacious.png"
        />
      </div>
      <div className="flex flex-wrap justify-center mb-80">
        <HoverImage
          range="Novato Saqueador"
          name="Leatherface565"
          image="../public/leatherface.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Kleotkz"
          image="../public/kleo.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="JockeyPlazaaaaaa"
          image="../public/jockey.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="inplay"
          image="../public/inplay.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Kardia Pc"
          image="../public/kardia.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Sugah"
          image="../public/sugah.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="JinxAcro"
          image="../public/jinx.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Jaya"
          image="../public/jaya.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Miss Drahota"
          image="../public/drahota.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Zusuki"
          image="../public/zusuki.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Berkut"
          image="../public/berkut.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="ravenhard"
          image="../public/ravenhard.png"
        />
        <HoverImage
          range="Novato Saqueador"
          name="CaptainCupQuakes"
          image="../public/captain.png"
        />
      </div>
    </section>
  );
}

export default ViewClan;
