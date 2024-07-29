import React from "react";
import HoverImage from "../components/hoverimage";
import { Link } from "react-router-dom";

import thaoImage from "../assets/thao.png";
import jikuImage from "../assets/jiku.png";
import gonzaImage from "../assets/gonza.png";
import alestarImage from "../assets/alestar.png";
import coffeeImage from "../assets/coffeboss.png";
import rapaciousImage from "../assets/rapacious.png";
import leatherfaceImage from "../assets/leatherface.png";
import kleotkzImage from "../assets/kleo.png";
import jockeyImage from "../assets/jockey.png";
import inplayImage from "../assets/inplay.png";
import kardiaImage from "../assets/kardia.png";
import sugahImage from "../assets/sugah.png";
import jinxImage from "../assets/jinx.png";
import jayaImage from "../assets/jaya.png";
import drahotaImage from "../assets/drahota.png";
import zusukiImage from "../assets/zusuki.png";
import berkutImage from "../assets/berkut.png";
import ravenhardImage from "../assets/ravenhard.png";
import captainImage from "../assets/captain.png";

function ViewClan() {
  return (
    <section className="w-full overflow-hidden bg-green-black flex flex-col items-center justify-center">
      <h1 className="text-center text-4xl font-ysabeau text-white pt-2 lg:text-7xl">
        Miembros
      </h1>
      <Link to="/view-clan-stats">
        <button className="border p-1 w-52 rounded-lg bg-black text-white mt-10 mb-10 hover:scale-105 font-ysabeau">
          ver stats de los miembros
        </button>
      </Link>
      <HoverImage
        range="Comandante En Jefe"
        name="GhostOfThao"
        image={thaoImage}
      />
      <div className="flex flex-wrap justify-center">
        <HoverImage
          range="Comandante Principal"
          name="Jikushikarinki"
          image={jikuImage}
        />
        <HoverImage
          range="Comandante Principal"
          name="Gonzalob13"
          image={gonzaImage}
        />
      </div>
      <HoverImage
        range="Incursor Especialista"
        name="Alestar"
        image={alestarImage}
      />
      <div className="flex flex-wrap justify-center">
        <HoverImage
          range="Explorador Veterano"
          name="Coffeeboss"
          image={coffeeImage}
        />
        <HoverImage
          range="Explorador Veterano"
          name="Rapacious"
          image={rapaciousImage}
        />
      </div>
      <div className="flex flex-wrap justify-center mb-80">
        <HoverImage
          range="Novato Saqueador"
          name="Leatherface565"
          image={leatherfaceImage}
        />
        <HoverImage
          range="Novato Saqueador"
          name="Kleotkz"
          image={kleotkzImage}
        />
        <HoverImage
          range="Novato Saqueador"
          name="JockeyPlazaaaaaa"
          image={jockeyImage}
        />
        <HoverImage
          range="Novato Saqueador"
          name="inplay"
          image={inplayImage}
        />
        <HoverImage
          range="Novato Saqueador"
          name="Kardia Pc"
          image={kardiaImage}
        />
        <HoverImage range="Novato Saqueador" name="Sugah" image={sugahImage} />
        <HoverImage
          range="Novato Saqueador"
          name="JinxAcro"
          image={jinxImage}
        />
        <HoverImage range="Novato Saqueador" name="Jaya" image={jayaImage} />
        <HoverImage
          range="Novato Saqueador"
          name="Miss Drahota"
          image={drahotaImage}
        />
        <HoverImage
          range="Novato Saqueador"
          name="Zusuki"
          image={zusukiImage}
        />
        <HoverImage
          range="Novato Saqueador"
          name="Berkut"
          image={berkutImage}
        />
        <HoverImage
          range="Novato Saqueador"
          name="ravenhard"
          image={ravenhardImage}
        />
        <HoverImage
          range="Novato Saqueador"
          name="CaptainCupQuakes"
          image={captainImage}
        />
      </div>
    </section>
  );
}

export default ViewClan;
