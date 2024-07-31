import React, { useEffect, useState } from "react";
import Integrantes from "../../../members.json";

function Table() {
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setMembers(Integrantes);
  });

  useEffect(() => {
    autoUpdateWeeklyLoots();
  }, []);

  const handleSearchName = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredNames = members.filter((member) =>
    member.ign.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center min-h-screen mb-96">
      <div className="flex gap-20 items-center justify-center mt-10 mb-5">
        <input
          type="text"
          placeholder="Buscar"
          value={searchTerm}
          onChange={handleSearchName}
          className="w-72 p-1 border-2 text-1xl border-black rounded text-black"
        />
      </div>
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
              All Time TS
            </th>
            <th className="py-2 px-4 text-2xl border-white bg-black text-white text-center font-ysabeau">
              All Time Loots
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredNames.map((member) => (
            <tr key={member.user_id}>
              <td className="text-red-500 text-center py-6 text-2xl border-b-white border-b-2 px-4">
                {member.ign}
              </td>
              <td className="text-white text-center py-6 text-2xl border-b-white border-b-2 px-4">
                {member.level}
              </td>
              <td className="text-white text-center py-6 text-2xl border-b-white border-b-2 px-4">
                {member.ranking}
              </td>
              <td className="text-white text-center py-6 text-2xl border-b-white border-b-2 px-4">
                {member.profession}
              </td>
              <td className="text-white text-center py-6 text-2xl border-b-white border-b-2 px-4">
                {member.allTimeTs}
              </td>
              <td className="text-white text-center py-6 text-2xl border-b-white border-b-2 px-4">
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
