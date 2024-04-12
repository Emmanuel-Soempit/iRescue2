import React from "react";
import { useEffect, useRef } from "react";
import WindowScroll from "../components/windowScroll";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/howItWorks";
import TowingServices from "../components/towingServices";
import HomeServices from "../components/HomeServices";
import Assistance from "../components/assistance";
import Footer from "../components/Footer";
import Logo from "../assets/images/brand.png";
import ParticlesBg from "../components/particlesBg";

export default function Home() {
  return (
    <>
      <ParticlesBg />

      <WindowScroll />

      <main className="hero">
        <Header logo={Logo} isFixed={true} linkColor="" />
        <Hero />
      </main>

      <section className="howItWorks container">
        <HowItWorks />
      </section>

      <section className="towingServices container">
        <TowingServices />
      </section>

      <section className="ourServices container">
        <HomeServices />
      </section>

      <section className="assistance container">
        <div className="guarantee">
          <h3>+Our Guarantee</h3>
        </div>

        <Assistance />
      </section>

      <section className="footerBack">
        <div className="footer container">
          <Footer />
        </div>
      </section>
    </>
  );
}
