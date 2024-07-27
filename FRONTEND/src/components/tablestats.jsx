import React, { useEffect, useMemo, useState } from "react";
import { fetchUsers } from "../../../BACKEND/api";
import axios from "axios";

function Table() {
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [lastUpdate, setLastUpdate] = useState(null);
  const [nextUpdate, setNextUpdate] = useState(null);

  useEffect(() => {
    const updateData = async () => {
      try {
        const userData = await fetchUsers();
        setMembers(userData);
        try {
          const response = await axios.get("http://localhost:3000/last_update");
          const lastUpdateTimestamp = response.data?.lastUpdate;
          if (lastUpdateTimestamp) {
            const lastUpdateDate = new Date(lastUpdateTimestamp);
            setLastUpdate(lastUpdateDate.toLocaleTimeString());

            const nextUpdateDate = new Date(lastUpdateDate.getTime() + 3600000);
            setNextUpdate(nextUpdateDate.toLocaleTimeString());
          } else {
            console.error("No lastUpdate property in response");
          }
        } catch (error) {
          console.error("Error fetching last update:", error);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    updateData();

    const intervalId = setInterval(updateData, 3600000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSearchName = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredNames = members.filter((member) =>
    member.ign.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const parseNumber = (numberString) => {
    return parseInt(String(numberString).replace(/[^0-9]/g, ""), 10);
  };

  const totalLoots = useMemo(() => {
    return members.reduce((total, member) => {
      return total + parseNumber(member.weekly_loots);
    }, 0);
  }, [members]);

  return (
    <div className="flex flex-col items-center min-h-screen mb-96">
      <div className="flex gap-20 items-center justify-center mt-10 mb-5">
        <div className="text-emerald-400 text-2xl text-center p-4 font-montserrat">
          Total Weekly Loots = {totalLoots}
        </div>
        <input
          type="text"
          placeholder="Buscar"
          value={searchTerm}
          onChange={handleSearchName}
          className="w-72 p-1 border-2 text-1xl border-black rounded text-black"
        />
        <div className="text-white text-center text-2xl p-4 font-montserrat">
          Última actualización: {lastUpdate || "Cargando..."} <br></br>
          Siguiente actualización: {nextUpdate || "Cargando..."}
        </div>
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
                {member.weekly_loots}
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
