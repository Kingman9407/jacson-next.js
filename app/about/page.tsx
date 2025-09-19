'use client'
import Navbar from "../components/Navbar";
import AboutHero from "../about/components/AboutUsHero";
import Aboutsecond from "./components/aboutsecond";
import AboutThird from "./components/aboutthird";
import AboutFourth from "./components/aboutforth";
import AboutFifth from "./components/aboutfifth"; 
import AboutSixth from "./components/aboutsixth";



export default function About() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <Aboutsecond />
      <AboutThird />
      <AboutFourth />
      <AboutFifth />
      <AboutSixth />

    </main>
  );
}
