import { useState } from "react";
import { BrowserRouter, Route, Routes, Router, Link } from "react-router-dom";
import Home from "./home/home";
import ViewClan from "./home/clanview";
import ClanStats from "./home/clanstats";
import AboutUs from "./home/aboutus";
import JoinUs from "./home/joinus";
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
          <Route path="/join-us" element={<JoinUs />}></Route>
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
