import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    ign: "",
    dfprofiler: "",
    country: "",
    lenguage: "",
  });
  return (
    <form className="text-black">
      <div className="p-4">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="IGN"
          className="text-center p-1"
        />
      </div>
      <div className="p-4">
        <input
          type="text"
          name="dfprofiler"
          placeholder="DF Profiler Link"
          className="p-1 text-center w-[400px]"
        />
      </div>
      <div className="p-4">
        <input
          type="text"
          name="country"
          placeholder="Pais"
          className="p-1 text-center"
        />
      </div>
      <div className="p-4">
        <input
          type="text"
          name="lenguaje"
          placeholder="Lenguaje/s"
          className="p-1 text-center"
        />
      </div>
      <button
        type="submit"
        className="w-36 h-12 text-2xl font-ysabeau font-bold bg-white text-black p-1 rounded-sm mt-5 hover:bg-black hover:text-white transition-all duration-500">
        Enviar
      </button>
    </form>
  );
}

export default Form;
