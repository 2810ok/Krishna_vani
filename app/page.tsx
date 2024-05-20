
import Image from "next/image";
import Navbar from '../components/Header';
import Hero from '../components/HeroScrtion'
import Hero2 from '../components/welcome.js'
import Hero3 from '../components/WhoSection'
import Hero4 from '../components/WhySection'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div>
            <Navbar />
            <Hero />
            < Hero2 />
            <Hero3 />
            <Hero4 />
            <Footer />
            {/* Your page content */}
        </div>
  );
}
