import './App.css';
import { Routes, Route } from 'react-router-dom';

// All pages components
import Header from './components/header';
import Footer from './components/footer';

// Homepage
import Homepage from './components/homepage';

// Sections
import WhoAmI from './components/sections/whoami';

import Collections from './components/sections/collections/collections';

import Workshops from './components/sections/workshops/workshops';
import FaceToFace from './components/sections/workshops/faceToFace';
import Online from './components/sections/workshops/online';

import Events from './components/sections/events/events';

import OnTheNews from './components/sections/onTheNews';

// Collections
import Clocks from './components/collections/clocks';
import Mirrors from './components/collections/mirrors';
import PaintingsAndDecorations from './components/collections/paintingsAndDecorations';
import Slabs from './components/collections/slabs';
import HouseNames from './components/collections/houseNames';
import CoatOfArms from './components/collections/coatOfArms';

function App() {
  const numberPhone = "https://api.whatsapp.com/send?phone=0033608054065";
  const mailAdress = "mailto:edithbarbiera@aol.fr";
  
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* Homepage */}
        <Route path='/' element={<Homepage />} />
        
        {/* Sections */}
        <Route path='/whoami' element={<WhoAmI />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/workshops' element={<Workshops />}>
          <Route path='/workshops/faceToFace' element={<FaceToFace />} />
          <Route path='/workshops/online' element={<Online />} />
        </Route>
        <Route path='/events' element={<Events />} />
        <Route path='/onTheNews' element={<OnTheNews />} />

        {/* Collections */}
        <Route path='/clocks' element={<Clocks />} />
        <Route path='/mirrors' element={<Mirrors />} />
        <Route path='/paintingsAndDecorations' element={<PaintingsAndDecorations />} />
        <Route path='/slabs' element={<Slabs />} />
        <Route path='/houseNames' element={<HouseNames />} />
        <Route path='/coatOfArms' element={<CoatOfArms />} />
      </Routes>
      <Footer
        numberPhone={numberPhone}
        mailAdress={mailAdress}
      />
    </div>
  );
}

export default App;