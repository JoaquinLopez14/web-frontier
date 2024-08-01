import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/home";
import ClanStats from "./home/clanstats";
import JoinUs from "./home/joinus";
import Media from "./home/media";
import "../tailwind.css";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/view-clan-stats" element={<ClanStats />}></Route>
          <Route path="/join-us" element={<JoinUs />}></Route>
          <Route path="/media" element={<Media />}></Route>
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
