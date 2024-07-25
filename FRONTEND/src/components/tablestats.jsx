import React, { useEffect, useState } from "react";
import { fetchUsers } from "../../../BACKEND/api";
import axios from "axios";

function Table() {
  const [searchTerm, setSearchTerm] = useState("");
  const [members, setMembers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const membersData = await fetchUsers();
        setMembers(membersData);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    const fetchLastUpdate = async () => {
      try {
        const response = await axios.get("http://localhost:3000/last_update");
        const lastupdate = response.data.lastUpdate;
        const nextUpdate = lastupdate + 3600000;
        const now = Date.now();
        const timeUntilNextUpdate = Math.max(0, (nextUpdate - now) / 1000);
        setTimeLeft(timeUntilNextUpdate);
      } catch (error) {
        console.error("Error fetching last update:", error);
      }
    };
    fetchMembers();
    fetchLastUpdate();

    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => (prevTimeLeft > 1 ? prevTimeLeft - 1 : 60));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSearchName = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredNames = members.filter((member) =>
    member.ign.toLowerCase().includes(searchTerm.toLowerCase())
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
      <div className="text-white text-center mb-4">
        Actualizacion de weekly loots en: {Math.floor(timeLeft)} segundos
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
                {member.weekly_loots}
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
