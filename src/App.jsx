import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./Components/TopNav";
import { Home } from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Land from "./Pages/Land";
import PropertyDetails from "./Pages/PropertyDetails";
import Admin from "./Components/Admin";


import HideNavAndFooter from "./Components/HideNavAndFooter";

function App() {
  return (
    <>
      <BrowserRouter>
        <HideNavAndFooter>
          <TopNav />
        </HideNavAndFooter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/land" element={<Land />} />
          <Route path="/admin" element={<Admin />} />
          
          <Route path="/property/:propertyId" element={<PropertyDetails />} />

          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
