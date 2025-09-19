'use client'
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import  Hero  from "./components/hero";
import SecondCard from "./components/secondcard";
import ServicesSection from "./components/thirdsection";
import SuccessMatric from "./components/SuccessMetric";
import Portfolio from "./components/PortfolioCard";
import WhyUs from "./components/whyus";
import ContactForm from "./components/homecontact";
import NewPortfoli from "./components/Newportfolio";
 
export default function Home() {  
  return (
    <main>
    
    <Hero/>
    <SecondCard/>
    <ServicesSection/>
    <SuccessMatric/>
    <NewPortfoli/>
    <WhyUs/>
    <ContactForm/>
    </main>
  )
  
}
