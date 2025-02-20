import Agents from "../Components/Agents"
import Dream from "../Components/Dream"
import Fab from "../Components/Fab"
import Footer from "../Components/Footer"
import { Hero } from "../Components/Hero"
import OurProperties from "../Components/OurProperties"



export const Home = () => {
  return (
    <div className="">
        <Hero/>
        <OurProperties/>
        <Dream/>
        <Agents/>       
        <Footer/>
        <Fab />
    </div>
  )
}
