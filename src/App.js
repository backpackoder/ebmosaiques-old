import "./App.css";
import { Routes, Route } from "react-router-dom";

// All pages components
import Header from "./components/header";
import Footer from "./components/footer";

// Homepage
import Homepage from "./components/homepage/homepage";

// Sections
import QuiSuisJe from "./components/sections/quiSuisJe";

import Collections from "./components/collections/collections";

import Ateliers from "./components/sections/ateliers/ateliers";
import ÀDomicile from "./components/sections/ateliers/àDomicile";
import EnLigne from "./components/sections/ateliers/enLigne";

import Événements from "./components/sections/événements";

import DansLaPresse from "./components/sections/dansLaPresse";

// Collections
import Horloges from "./components/collections/horloges";
import Miroirs from "./components/collections/miroirs";
import TableauxEtDécors from "./components/collections/tableauxEtDécors";
import Dalles from "./components/collections/dalles";
import NomsDeMaisons from "./components/collections/nomsDeMaisons";
import Blasons from "./components/collections/blasons";
import { createContext, useContext, useState } from "react";

// import { TrackersApp } from './components/collections/horloges';

const themes = {
  light: {
    color: "#000",
    background: "#fff",
  },
  dark: {
    color: "#fff",
    background: "#000",
  },
};

const ThemeContext = createContext(themes.dark);

function ThemeProvider(props) {
  const [theme, setTheme] = useState(themes.light);
  const value = [theme, setTheme];
  return <ThemeContext.Provider value={value} {...props} />;
}

function CheckBoxMode() {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useContext(ThemeContext);

  function handleCheck(e) {
    setDarkMode(e.target.checked);
    setTheme(e.target.checked ? themes.dark : themes.light);
  }

  return (
    <div id="checkBoxContainer">
      <label style={{ theme }}>
        <input type="checkbox" checked={darkMode} onChange={handleCheck} />
        Mode sombre
      </label>
    </div>
  );
}

function EBMosaiques() {
  const [theme] = useContext(ThemeContext);
  const numberPhone = "https://api.whatsapp.com/send?phone=0033608054065";
  const mailAdress = "mailto:edithbarbiera@aol.fr";
  return (
    <div style={{ ...theme }}>
      <Header numberPhone={numberPhone} mailAdress={mailAdress} />
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Homepage />} />

        {/* Sections */}
        <Route path="/qui-suis-je" element={<QuiSuisJe />} />
        <Route path="/collections" element={<Collections />}>
          {/* Collections */}
          <Route path="/collections/horloges" element={<Horloges />} />
          <Route path="/collections/miroirs" element={<Miroirs />} />
          <Route path="/collections/tableaux-et-décors" element={<TableauxEtDécors />} />
          <Route path="/collections/dalles" element={<Dalles />} />
          <Route path="/collections/noms-de-maisons" element={<NomsDeMaisons />} />
          <Route path="/collections/blasons" element={<Blasons />} />
        </Route>
        <Route path="/ateliers" element={<Ateliers />}>
          <Route path="/ateliers/à-domicile" element={<ÀDomicile />} />
          <Route path="/ateliers/en-ligne" element={<EnLigne />} />
        </Route>
        <Route path="/événements" element={<Événements />} />
        <Route path="/dans-la-presse" element={<DansLaPresse />} />
      </Routes>
      <Footer numberPhone={numberPhone} mailAdress={mailAdress} />
    </div>
  );
}

function App() {
  // const [theme] = useContext(ThemeContext);

  return (
    <div className="App">
      <ThemeProvider>
        <EBMosaiques />
      </ThemeProvider>
    </div>
  );
}

export { CheckBoxMode };
export default App;
