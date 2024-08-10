import React, { useState } from "react";
import axios from "axios";
import eeuu from "../assets/locales/usa.png";
import spain from "../assets/locales/spain.png";

function Form() {
  const [formData, setFormData] = useState({
    ign: "",
    dfprofiler: "",
    country: "",
    lenguage: "",
    rol: "",
  });

  const [isEnglish, setIsEnglish] = useState(false);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

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
      !formData.lenguage ||
      !formData.rol
    ) {
      alert(
        isEnglish ? "Please complete all fields" : "Complete todos los campos"
      );
      return;
    }

    const webhookURL =
      "https://discord.com/api/webhooks/1268208199841091616/MCjqk3QIfNPqoWpT5GulIDkL4eAU9p7TeCbeSXR1Z9zAfLPE8yChxjcZvDTkDNPJdZ8w";

    const payload = {
      content: `ign: ${formData.ign}\n dfprofiler: ${formData.dfprofiler}\n pais: ${formData.country}\n idioma: ${formData.lenguage} \n rol: ${formData.rol}`,
    };

    try {
      await axios.post(webhookURL, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert(isEnglish ? "Data sent to Discord!" : "Datos enviados a Discord!");
      setFormData({
        ign: "",
        dfprofiler: "",
        country: "",
        lenguage: "",
        rol: "",
      });
    } catch (error) {
      console.error("Error enviando el Formulario:", error);
      alert(
        isEnglish
          ? "There was an error sending the form, please try again"
          : "Hubo un error al enviar el formulario, intente nuevamente"
      );
    }
  };

  return (
    <form className="text-black" onSubmit={handleSubmit}>
      <div className="flex justify-center mb-5">
        <img
          src={spain}
          alt="Spanish Flag"
          onClick={() => setIsEnglish(false)}
          className="w-10 h-10 cursor-pointer"
        />
        <img
          src={eeuu}
          alt="USA Flag"
          onClick={() => setIsEnglish(true)}
          className="w-10 h-10 cursor-pointer ml-4"
        />
      </div>
      <div className="p-4">
        <input
          type="text"
          id="ign"
          name="ign"
          placeholder="IGN"
          value={formData.ign}
          onChange={handleChange}
          className="text-center font-ysabeau text-xl font-semibold p-1 placeholder-black"
        />
      </div>
      <div className="p-4">
        <input
          type="text"
          name="dfprofiler"
          placeholder="DF Profiler Link"
          value={formData.dfprofiler}
          onChange={handleChange}
          className="p-1 text-center font-ysabeau text-xl font-semibold lg:w-[500px] placeholder-black"
        />
      </div>
      <div className="p-4">
        <input
          type="text"
          name="country"
          placeholder={isEnglish ? "Country" : "País"}
          value={formData.country}
          onChange={handleChange}
          className="p-1 text-center lg:w-[250px] font-ysabeau text-xl font-semibold placeholder-black"
        />
      </div>
      <div className="p-4">
        <input
          type="text"
          name="lenguage"
          placeholder={isEnglish ? "Dominant Language" : "Lenguaje Dominante"}
          value={formData.lenguage}
          onChange={handleChange}
          className="p-1 text-center lg:w-[250px] font-ysabeau text-xl font-semibold placeholder-black"
        />
      </div>
      <div className="p-4">
        <input
          type="text"
          name="rol"
          placeholder={
            isEnglish
              ? "Main Role (looter, grinder, pvp)"
              : "Rol Principal (looter, grinder, pvp) "
          }
          value={formData.rol}
          onChange={handleChange}
          className="p-1 text-center lg:w-[350px] font-ysabeau text-xl font-semibold placeholder-black"
        />
      </div>
      <button
        type="submit"
        className="w-36 h-12 text-2xl font-ysabeau font-bold bg-white text-black p-1 rounded-sm mt-5 hover:bg-black hover:text-white transition-all duration-500">
        {isEnglish ? "Submit" : "Enviar"}
      </button>
    </form>
  );
}

export default Form;
