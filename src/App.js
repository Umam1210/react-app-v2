import "bootstrap/dist/css/bootstrap.min.css";
import AddEpisode from "./components/AddEpisode";
import AddFilm from "./components/AddFilm";
import ListFilmAdmin from './components/ListFilmAdmin';
import DetailFilmAdmin from './components/DetailFilmAdmin';
import NavbarAdmin from "./components/NavbarAdmin";
import LisTransaction from './pages/ListTransaction';
import Detailprofil from './components/Detailprofil';
import Detailfilm from './components/Detailfilm';
import NavbarLogin from './components/NavbarLogin';
import NavbarUser from './components/NavbarUser';
import Payuser from './components/Payuser';
import Cardtv from './components/Cardtv';
import Tvseries from './pages/Tvseries';
import Movie from './pages/Movie';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addfilm" element={ <AddFilm />} />
          <Route path="/tvseries" element={<Tvseries/>} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/profil" element={<Detailprofil />} />
          <Route path="/pay" element={<Payuser />} />
          <Route path="/detail" element={<Detailfilm />} />
          {/* <Route path="/" element={} />
          <Route path="/" element={} />
          <Route path="/" element={} />
          <Route path="/" element={} />
          <Route path="/" element={} />
          <Route path="/" element={} />
          
         
          <AddEpisode />
          <ListFilmAdmin />
          <LisTransaction />
          <DetailFilmAdmin />
          <NavbarUser />
          <Detailprofil />
          <Payuser />
          <NavbarLogin />

          <Movie />
          <Tvseries />
          <Cardtv />
          <Detailfilm /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
