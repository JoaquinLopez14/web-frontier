import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [formData, setFormData] = useState({
    ign: "",
    dfprofiler: "",
    country: "",
    lenguage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/submit-form", formData)
      .then((response) => {
        alert("Formulario enviado exitosamente");
      })
      .catch((error) => {
        console.error("Error al enviar el formulario:", error);
        alert("Error enviando el formulario");
      });
  };

  return (
    <form className="text-black" onSubmit={handleSubmit}>
      <div className="p-4">
        <input
          type="text"
          id="ign"
          name="ign"
          placeholder="IGN"
          value={formData.ign}
          onChange={handleChange}
          className="text-center p-1"
        />
      </div>
      <div className="p-4">
        <input
          type="text"
          name="dfprofiler"
          placeholder="DF Profiler Link"
          value={formData.dfprofiler}
          onChange={handleChange}
          className="p-1 text-center w-[400px]"
        />
      </div>
      <div className="p-4">
        <input
          type="text"
          name="country"
          placeholder="Pais (residencia actual)"
          value={formData.country}
          onChange={handleChange}
          className="p-1 text-center"
        />
      </div>
      <div className="p-4">
        <input
          type="text"
          name="lenguage"
          placeholder="Lenguaje dominante (solo uno)"
          value={formData.lenguage}
          onChange={handleChange}
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
