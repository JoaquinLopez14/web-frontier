import React from "react";
import Form from "../components/form";
import { Link } from "react-router-dom";

function JoinUs() {
  return (
    <div className="w-full h-screen bg-join-us flex flex-col items-center justify-centerl lg:flex-none">
      <Link to="/">
        <button className="sm:absolute top-10 left-4 w-24 h-10 bg-white text-black text-1xl font-ysabeau rounded-lg border-4 hover:scale-105 border-black">
          ← Back
        </button>
      </Link>
      <h1 className="text-center font-rocksalt text-3xl p-10 lg:text-5xl">
        Unete al clan !
      </h1>
      <div className="text-center ">
        <Form />
      </div>
    </div>
  );
}

export default JoinUs;
