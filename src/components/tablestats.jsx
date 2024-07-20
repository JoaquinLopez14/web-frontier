import React, { useState } from "react";
import members from "/members.json";

function Table() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchName = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredNames = members.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <input
        type="text"
        placeholder="Buscar"
        value={searchTerm}
        onChange={handleSearchName}
        className="w-52 mt-20 mb-4 ml-20 p-2 border-2 border-black rounded"
      />
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-4 px-4 text-2xl border-white bg-black text-white text-center font-ysabeau">
              Name
            </th>
            <th className="py-4 px-4 text-2xl border-white bg-black text-white text-center font-ysabeau">
              Level
            </th>
            <th className="py-4 px-4 text-2xl border-white bg-black text-white text-center font-ysabeau">
              Rank
            </th>
            <th className="py-4 px-4 text-2xl border-white bg-black text-white text-center font-ysabeau">
              Profession
            </th>
            <th className="py-4 px-4 text-2xl border-white bg-black text-white text-center font-ysabeau">
              All Time TS
            </th>
            <th className="py-4 px-4 text-2xl border-white bg-black text-white text-center font-ysabeau">
              All Time Loots
            </th>
          </tr>
        </thead>
        <tbody className="">
          {filteredNames.map((member) => (
            <tr key={member.id}>
              <td className="text-red-500 text-shadow-bl text-center py-6 text-2xl border-b-white border-b-2 px-4">
                {member.name}
              </td>
              <td className="text-white text-center py-6 text-2xl border-b-white border-b-2 px-4">
                {member.level}
              </td>
              <td className="text-white text-center py-6 text-2xl border-b-white border-b-2 px-4">
                {member.rank}
              </td>
              <td className="text-white text-center py-6 text-2xl border-b-white border-b-2 px-4">
                {member.profession}
              </td>
              <td
                className={`text-white text-center py-2 text-2xl border-b-white border-b-2 px-4 ${
                  parseInt(member.allTimeTs.replace(/[^0-9]/g, ""), 10) >
                  500000000
                    ? "text-green-700 text-shadow-bl"
                    : "text-white"
                }`}>
                {member.allTimeTs}
              </td>
              <td
                className={`text-white text-center py-2 text-2xl border-b-white border-b-2 px-4 ${
                  parseInt(member.allTimeLoots.replace(/[^0-9]/g, ""), 10) >
                  100000
                    ? "text-yellow-300 text-shadow-bl"
                    : "text-white"
                }`}>
                {member.allTimeLoots}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
