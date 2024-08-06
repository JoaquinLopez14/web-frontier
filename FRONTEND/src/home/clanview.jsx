import React from "react";
import HoverImage from "../components/hoverimage";
import { Link } from "react-router-dom";

import thaoImage from "../assets/dfprofiles/thao.png";
import jikuImage from "../assets/dfprofiles/jiku.png";
import gonzaImage from "../assets/dfprofiles/gonza.png";
import alestarImage from "../assets/dfprofiles/alestar.png";
import coffeeImage from "../assets/dfprofiles/coffeboss.png";
import rapaciousImage from "../assets/dfprofiles/rapacious.png";
import leatherfaceImage from "../assets/dfprofiles/leatherface.png";
import kleotkzImage from "../assets/dfprofiles/kleo.png";
import jockeyImage from "../assets/dfprofiles/jockey.png";
import inplayImage from "../assets/dfprofiles/inplay.png";
import kardiaImage from "../assets/dfprofiles/kardia.png";
import sugahImage from "../assets/dfprofiles/sugah.png";
import jinxImage from "../assets/dfprofiles/jinx.png";
import jayaImage from "../assets/dfprofiles/jaya.png";
import drahotaImage from "../assets/dfprofiles/drahota.png";
import zusukiImage from "../assets/dfprofiles/zusuki.png";
import berkutImage from "../assets/dfprofiles/berkut.png";
import ravenhardImage from "../assets/dfprofiles/ravenhard.png";
import captainImage from "../assets/dfprofiles/captain.png";

function ViewClan() {
  return (
    <section className="w-full overflow-hidden bg-green-black flex flex-col items-center justify-center">
      <h1 className="text-center text-4xl font-ysabeau text-white pt-2 lg:text-7xl">
        Miembros
      </h1>
      <Link to="/view-clan-stats">
        <button className=" border-white border-2 w-48 h-auto p-2 rounded-lg text-xl bg-gray-500 text-black mt-10 mb-10 hover:bg-black hover:text-white duration-500 hover:scale-105 font-montserrat">
          Member Stats
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
