import React from "react";
import Table from "../components/tablestats";
import { Link } from "react-router-dom";

function ClanStats() {
  return (
    <section className="min-w-full min-h-screen absolute top-0 bg-stats">
      <h1 className="text-center text-4xl font-ysabeau text-white pt-2 lg:text-7xl">
        Estadisticas de los miembros
      </h1>
      <div className="flex flex-col gap-2">
        <Link to="/">
          <button className="sm:absolute top-10 left-4 w-40 h-10  bg-gray-400 text-black text-1xl font-ysabeau rounded-lg border-4 hover:scale-105 border-black">
            ← Volver atras
          </button>
        </Link>
      </div>
      <Table />
    </section>
  );
}

export default ClanStats;
