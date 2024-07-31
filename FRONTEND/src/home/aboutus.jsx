import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <section className="h-screen bg-green">
      <div className="flex flex-col items-center p-1">
        <h1 className="text-center text-4xl font-ysabeau text-white pt-2 lg:text-7xl">
          Descripción del Clan
        </h1>
        <h2 className="text-center text-white text-sm font-ysabeau mt-10 lg:text-2xl">
          Buscamos{" "}
          <em className="text-yellow-300">
            miembros activos, comprometidos y responsables
          </em>
          , que entiendan lo que significa pertenecer a un equipo. <br />{" "}
          <em className="text-blue-300">Ofrecemos la oportunidad de crecer</em>,
          tanto en <em className="text-blue-300">habilidad</em>, como en{" "}
          <em className="text-blue-300">equipamiento</em> en el juego. <br />
          Contarán también con
          <em className="text-blue-300"> boosts de clan</em>, que básicamente
          son implantes gratuitos.
        </h2>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center mt-2 lg:mt-24 lg:flex-row lg:gap-20">
        <div className="flex flex-col items-center text-center mt-10 mb-10 lg:mb-44">
          <h2 className="text-white font-rocksalt text-xl lg:text-4xl mb-2 lg:mb-10">
            Boosts
          </h2>
          <h3 className="text-white font-ysabeau text-shadow-wh text-sm lg:text-2xl">
            +10% Damage Inflicted
            <br />
            +30% Weapon Loot Chance
            <br />
            +3% Armour Loot Chance <br />
            +10% Loot Spots
            <br />
            +15% Loot Speed
          </h3>
        </div>
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-white font-rocksalt text-xl lg:text-4xl mb-2 lg:mb-10">
            Estadísticas
          </h2>
          <h3 className="text-yellow-300 font-ysabeau text-sm lg:text-2xl">
            Total Victory Points 4,175 <br />
            All Time PvP Points 49,858 <br />
            All Time EXP Record 10,872,181,548 <br />
            All Time Loots 1,835,757 <br />
            Weekly PvP Points 920 <br />
            Weekly EXP Record 231,449,940 <br />
            Weekly Loots 22,247
          </h3>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
