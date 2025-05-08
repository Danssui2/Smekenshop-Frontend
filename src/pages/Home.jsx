
import Navbar from "../Components/Navbar.jsx"
import Hero from "../Components/Hero.jsx"
import Highlighted from "../Components/Highlighted.jsx"
import Katalog from "../Components/Katalog.jsx"
import HelpForm from "../Components/HelpForm.jsx"
import Footer from "../Components/Footer.jsx"
import Marquee from "../Components/Marquee.jsx"

function Home() {
  return (
    <div>
        <Navbar />
      <div className="w-screen px-4 flex flex-col items-center pb-[4rem] md:pb-0">
        <Hero />
        <Highlighted />
        <Katalog />
        <HelpForm />
        <Marquee/>
        <Footer />
      </div>
    </div>
  )
}

export default Home