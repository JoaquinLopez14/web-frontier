import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    ign: "",
    dfprofiler: "",
  });
  return (
    <form>
      <div>
        <label htmlFor="name">IGN:</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="dfprofiler">DF PROFILER link:</label>
        <input type="text" name="dfprofiler" />
      </div>
      <button type="submit" className="bg-white text-black p-1 rounded-sm mt-5">
        Enviar
      </button>
    </form>
  );
}

export default Form;
