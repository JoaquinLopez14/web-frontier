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
import kardiaImage from "../assets/dfprofiles/kardia.png";
import sugahImage from "../assets/dfprofiles/sugah.png";
import jinxImage from "../assets/dfprofiles/jinx.png";
import drahotaImage from "../assets/dfprofiles/drahota.png";
import berkutImage from "../assets/dfprofiles/berkut.png";
import ravenhardImage from "../assets/dfprofiles/ravenhard.png";
import coronaImage from "../assets/dfprofiles/coronavirus.png";
import emonftImage from "../assets/dfprofiles/emonftZilong.png";
import aezxcImage from "../assets/dfprofiles/aezxc.png";
import cesarImage from "../assets/dfprofiles/cesarCh.png";
import joshuaImage from "../assets/dfprofiles/joshua.png";
import hanselImage from "../assets/dfprofiles/hansel.png";
import sgtmasterImage from "../assets/dfprofiles/sgtmaster.png";
import uskayImage from "../assets/dfprofiles/uskay.png";
import velaskiImage from "../assets/dfprofiles/velaski.png";

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
        <HoverImage
          range="Explorador Veterano"
          name="JockeyPlazaaaaaa"
          image={jockeyImage}
          link="https://www.dfprofiler.com/profile/view/13952709"
        />
        <HoverImage
          range="Explorador Veterano"
          name="Sugah"
          image={sugahImage}
          link="https://www.dfprofiler.com/profile/view/13411586"
        />
      </div>
      <div className="flex flex-wrap justify-center mb-80">
        <HoverImage
          range="Novato Saqueador"
          name="C O R O N A V I R U S S S"
          image={coronaImage}
          link="https://www.dfprofiler.com/profile/view/13936355"
        />
        <HoverImage
          range="Novato Saqueador"
          name="EmonftZilong"
          image={emonftImage}
          link="https://www.dfprofiler.com/profile/view/13712319"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Aezxc"
          image={aezxcImage}
          link="https://www.dfprofiler.com/profile/view/13607572"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Cesar Ch"
          image={cesarImage}
          link="https://www.dfprofiler.com/profile/view/13519845"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Joshua32"
          image={joshuaImage}
          link="https://www.dfprofiler.com/profile/view/12964720"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Wraith Of God"
          image={hanselImage}
          link="https://www.dfprofiler.com/profile/view/12771988"
        />
        <HoverImage
          range="Novato Saqueador"
          name="SGTMaster"
          image={sgtmasterImage}
          link="https://www.dfprofiler.com/profile/view/11861003"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Uskay"
          image={uskayImage}
          link="https://www.dfprofiler.com/profile/view/11522506"
        />
        <HoverImage
          range="Novato Saqueador"
          name="MalandrinhoDos7Mares"
          image={velaskiImage}
          link="https://www.dfprofiler.com/profile/view/7295668"
        />
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
          name="Kardia Pc"
          image={kardiaImage}
          link="https://www.dfprofiler.com/profile/view/13427999"
        />
        <HoverImage
          range="Novato Saqueador"
          name="JinxAcro"
          image={jinxImage}
          link="https://www.dfprofiler.com/profile/view/13272192"
        />
        <HoverImage
          range="Novato Saqueador"
          name="Miss Drahota"
          image={drahotaImage}
          link="https://www.dfprofiler.com/profile/view/13069560"
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
      </div>
    </section>
  );
}

export default ViewClan;
