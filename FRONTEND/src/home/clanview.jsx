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
import cesarImage from "../assets/dfprofiles/cesarCh.png";
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
        Who we are
      </h1>
      <Link to="/view-clan-stats">
        <button className=" border-white border-2 w-48 h-auto p-2 rounded-lg text-xl bg-black text-white mt-10 mb-10 hover:bg-black hover:text-white duration-500 hover:scale-105 font-montserrat">
          Member Stats
        </button>
      </Link>
      <HoverImage
        range="Comandante En Jefe"
        name="GhostOfThao"
        image={thaoImage}
        link="https://www.dfprofiler.com/profile/view/13521791"
      />
      <div className="flex flex-wrap justify-center">
        <HoverImage
          range="Comandante Principal"
          name="Jikushikarinki"
          image={jikuImage}
          link="https://www.dfprofiler.com/profile/view/12980707"
        />
        <HoverImage
          range="Comandante Principal"
          name="Gonzalob13"
          image={gonzaImage}
          link="https://www.dfprofiler.com/profile/view/13538407"
        />
      </div>
      <HoverImage
        range="Incursor Especialista"
        name="Alestar"
        image={alestarImage}
        link="https://www.dfprofiler.com/profile/view/2994914"
      />
      <div className="flex flex-wrap justify-center">
        <HoverImage
          range="Explorador Veterano"
          name="Coffeeboss"
          image={coffeeImage}
          link="https://www.dfprofiler.com/profile/view/13536663"
        />
        <HoverImage
          range="Explorador Veterano"
          name="Rapacious"
          image={rapaciousImage}
          link="https://www.dfprofiler.com/profile/view/920684"
        />
      </div>
      <div className="flex flex-wrap justify-center mb-80">
        <HoverImage
          range="Novato Saqueador"
          name="Leatherface565"
          image={leatherfaceImage}
          link="https://www.dfprofiler.com/profile/view/13963987"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Kleotkz"
          image={kleotkzImage}
          link="https://www.dfprofiler.com/profile/view/13962008"
        />
        <HoverImage
          range="Novato Saqueador"
          name="JockeyPlazaaaaaa"
          image={jockeyImage}
          link="https://www.dfprofiler.com/profile/view/13952709"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Cesar Ch"
          image={cesarImage}
          link="https://www.dfprofiler.com/profile/view/13519845"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Kardia Pc"
          image={kardiaImage}
          link="https://www.dfprofiler.com/profile/view/13427999"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Sugah"
          image={sugahImage}
          link="https://www.dfprofiler.com/profile/view/13411586"
        />
        <HoverImage
          range="Novato Saqueador"
          name="JinxAcro"
          image={jinxImage}
          link="https://www.dfprofiler.com/profile/view/13272192"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Jaya"
          image={jayaImage}
          link="https://www.dfprofiler.com/profile/view/13266413"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Miss Drahota"
          image={drahotaImage}
          link="https://www.dfprofiler.com/profile/view/13069560"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Zusuki"
          image={zusukiImage}
          link="https://www.dfprofiler.com/profile/view/12997225"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Berkut"
          image={berkutImage}
          link="https://www.dfprofiler.com/profile/view/12539481"
        />
        <HoverImage
          range="Novato Saqueador"
          name="ravenhard"
          image={ravenhardImage}
          link="https://www.dfprofiler.com/profile/view/12038649"
        />
        <HoverImage
          range="Novato Saqueador"
          name="CaptainCupQuakes"
          image={captainImage}
          link="https://www.dfprofiler.com/profile/view/8895840"
        />
      </div>
    </section>
  );
}

export default ViewClan;
