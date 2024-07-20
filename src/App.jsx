import { useState } from "react";
import { BrowserRouter, Route, Routes, Router, Link } from "react-router-dom";
import Home from "./components/home";
import ViewClan from "./components/clanview";
import ClanStats from "./components/clanstats";
import "../tailwind.css";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/view-clan" element={<ViewClan />}></Route>
          <Route path="/view-clan-stats" element={<ClanStats />}></Route>
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
