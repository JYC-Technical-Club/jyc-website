// import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import EVENTS from "./Pages/Event Page/EVENTS/EVENTS";
import TEAMS from "./Pages/Teams/TEAMS/TEAMS";
import Cultural from "./Pages/Clubs/Cultural/Cultural";
import Environment from "./Pages/Clubs/Environment/Environment";
import Literary from "./Pages/Clubs/Literary/Literary";
import Sports from "./Pages/Clubs/Sports/Sports";
import Theatre from "./Pages/Clubs/Theatre/Theatre";
import TMPClub from "./Pages/Clubs/TMPClub/TMPClub";
import Arts from "./Pages/Committees/Arts/Arts";
import Disciplinary from "./Pages/Committees/Disciplinary/Disciplinary";
import EventsPro from "./Pages/Committees/Events_Procurement/Events";
import Finance from "./Pages/Committees/Finance/Finance";
import Media from "./Pages/Committees/Media/Media";
import Registration from "./Pages/Committees/Registration/Registration";
import Page_Under_Construction from "./Pages/Page_Under_Construction/Page_Under_Construction";
import About from "./Pages/components/About/About";
import Contact from "./Pages/Contact/Contact";
import MovieNight from "./Pages/Event Page/EventPages/MovieNight/MovieNight";
import LeFiestus from "./Pages/Event Page/EventPages/LeFiestus/LeFiestus";
import Murious from "./Pages/Event Page/EventPages/Murious/Murious";
import SemTournaments from "./Pages/Event Page/EventPages/SemTournaments/SemTournaments";
import Diksha from "./Pages/Event Page/EventPages/Diksha/Diksha";
import Alfaaz from "./Pages/Event Page/EventPages/Alfaaz/Alfaaz";
import MasterChef from "./Pages/Event Page/EventPages/MasterChef/MasterChef";
import Parakram from "./Pages/Event Page/EventPages/Parakram/Parakram";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="events" element={<EVENTS />} />
        <Route path="teams" element={<TEAMS />} />
        <Route path="cultural-club" element={<Cultural />} />
        <Route path="environment-club" element={<Environment />} />
        <Route path="literary-club" element={<Literary />} />
        <Route path="sports-club" element={<Sports />} />
        <Route path="theatre-club" element={<Theatre />} />
        <Route path="tmp-club" element={<TMPClub />} />
        <Route path="arts-committee" element={<Arts />} />
        <Route path="disciplinary-committee" element={<Disciplinary />} />
        <Route path="eventspro-committee" element={<EventsPro />} />
        <Route path="finance-committee" element={<Finance />} />
        <Route path="media-committee" element={<Media />} />
        <Route path="registration-committee" element={<Registration />} />
        <Route path="movie-night" element={<MovieNight />} />
        <Route path="le-fiestus" element={<LeFiestus />} />
        <Route path="murious" element={<Murious />} />
        <Route path="sem-tournaments" element={<SemTournaments />} />
        <Route path="diksha" element={<Diksha />} />
        <Route path="alfaaz" element={<Alfaaz />} />
        <Route path="master-chef" element={<MasterChef />} />
        <Route path="parakram" element={<Parakram />} />
        <Route path="koshish-club" element={<Parakram />} />
        <Route
          path="page-under-construction"
          element={<Page_Under_Construction />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
