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

  const parseNumber = (numberString) => {
    return parseInt(numberString.replace(/[^0-9]/g, ""), 10);
  };

  return (
    <div className="flex flex-col items-center min-h-screen mb-96">
      <input
        type="text"
        placeholder="Buscar"
        value={searchTerm}
        onChange={handleSearchName}
        className="w-52 mt-20 mb-4 ml-20 p-2 border-2 border-black rounded"
      />
      <table className="min-w-96 mr-20 ml-20">
        <thead>
          <tr>
            <th className="py-2 px-4 text-2xl border-white bg-black text-white text-center font-ysabeau">
              Name
            </th>
            <th className="py-2 px-4 text-2xl border-white bg-black text-white text-center font-ysabeau">
              Level
            </th>
            <th className="py-2 px-4 text-2xl border-white bg-black text-white text-center font-ysabeau">
              Rank
            </th>
            <th className="py-2 px-4 text-2xl border-white bg-black text-white text-center font-ysabeau">
              Profession
            </th>
            <th className="py-2 px-4 text-2xl border-white bg-black text-white text-center font-ysabeau">
              Weekly Loots
            </th>
            <th className="py-2 px-4 text-2xl border-white bg-black text-white text-center font-ysabeau">
              All Time TS
            </th>
            <th className="py-2 px-4 text-2xl border-white bg-black text-white text-center font-ysabeau">
              All Time Loots
            </th>
          </tr>
        </thead>
        <tbody className="">
          {filteredNames.map((member) => (
            <tr key={member.id}>
              <td className="text-red-500 text-center py-6 text-2xl border-b-white border-b-2 px-4">
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
              <td className="text-white text-center py-6 text-2xl border-b-white border-b-2 px-4">
                {member.weeklyLoots}
              </td>
              <td className="text-white text-center py-6 text-2xl border-b-white border-b-2 px-4">
                {member.allTimeTs}
              </td>
              <td
                className={`text-white text-center py-6 text-2xl border-b-white border-b-2 px-4 ${
                  parseNumber(member.allTimeLoots) > 100000
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
