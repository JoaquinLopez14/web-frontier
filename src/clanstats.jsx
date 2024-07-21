import React from "react";
import Table from "./components/tablestats";
import { Link } from "react-router-dom";

function ClanStats() {
  return (
    <section className="w-full h-auto absolute top-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <h1 className="text-black text-center text-6xl text-shadow-wh font-rocksalt mt-10 mb-10">
        Estadisticas de los miembros
      </h1>
      <div className="flex flex-col gap-2">
        <Link to="/">
          <button className=" absolute top-6 left-4 w-40 h-10  bg-gray-400 text-black text-1xl font-ysabeau rounded-lg border-4 hover:scale-105 border-black">
            {" "}
            ←← Volver al inicio{" "}
          </button>
        </Link>
        <Link to="/view-clan">
          <button className=" absolute top-20 left-4 w-40 h-10  bg-gray-400 text-black text-1xl font-ysabeau rounded-lg border-4 hover:scale-105 border-black">
            {" "}
            ← Volver atras{" "}
          </button>
        </Link>
      </div>
      <Table />
    </section>
  );
}

export default ClanStats;
