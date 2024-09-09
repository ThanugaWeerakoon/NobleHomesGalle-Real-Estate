import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from './Components/TopNav';
import { Home } from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/Contact/Contact';
import Land from './Pages/Land/Land';
import House from './Pages/House/House';

function App() {
  return (
    <>
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/land" element={<Land />} />
          <Route path='/house' element={<House/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
