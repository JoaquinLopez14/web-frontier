import React from "react";
import Form from "../components/form";

function JoinUs() {
  return (
    <div className="w-full min-h-screen bg-join-us">
      <h1 className="text-center font-rocksalt text-5xl p-10">
        Unete al clan !
      </h1>
      <div className="text-center">
        <Form />
      </div>
    </div>
  );
}

export default JoinUs;
