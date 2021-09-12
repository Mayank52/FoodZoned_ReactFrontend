import React from "react";
import Footer from "../Nav/Footer";
import Header from "../Nav/Header";
import ContactUs from "./components/ContactUs/ContactUs";
import Features from "./components/Features/Features";
import Plans from "./components/Plans/Plans";
import Reviews from "./components/Reviews/Reviews";
import Showcase from "./components/Showcase/Showcase";

export default function LandingPage() {
  return <div>
    <Header/>
    <Showcase/>
    <Features/>
    <Reviews/>
    <Plans/>
    <ContactUs/>
    <Footer/>
  </div>;
}
