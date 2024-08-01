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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.ign ||
      !formData.dfprofiler ||
      !formData.country ||
      !formData.lenguage
    ) {
      alert("Complete todos los campos");
      return;
    }

    const webhookURL =
      "https://discord.com/api/webhooks/1268208199841091616/MCjqk3QIfNPqoWpT5GulIDkL4eAU9p7TeCbeSXR1Z9zAfLPE8yChxjcZvDTkDNPJdZ8w";

    const payload = {
      content: `ign: ${formData.ign}\n dfprofiler:${formData.dfprofiler}\n pais: ${formData.country}\n idioma: ${formData.lenguage}`,
    };

    try {
      await axios.post(webhookURL, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Datos enviados a Discord!");
      setFormData({ ign: "", dfprofiler: "", country: "", lenguage: "" });
    } catch (error) {
      console.error("Error enviando el Formulario:", error);
      alert("Hubo un error al enviar el formulario, intente nuevamente");
    }
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
          className="p-1 text-center lg:w-[400px]"
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
