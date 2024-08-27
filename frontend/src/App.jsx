
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from './Components/TopNav'
import { Home } from './Pages/Home/Home'
import AboutUs from './Pages/AboutUs/AboutUs';

function App() {

  return (
    <>
    <BrowserRouter>
    <TopNav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
