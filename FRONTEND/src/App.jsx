import { useState } from "react";
import { BrowserRouter, Route, Routes, Router, Link } from "react-router-dom";
import Home from "./home";
import ViewClan from "./clanview";
import ClanStats from "./clanstats";
import AboutUs from "./aboutus";
import "../tailwind.css";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/view-clan" element={<ViewClan />}></Route>
          <Route path="/view-clan-stats" element={<ClanStats />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
