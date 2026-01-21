import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Services from "../Services/Services";
import Testimonials from "../Testimonial/Testimonial";
import AgentFarmerBanner from "../AgentFarmerBanner/AgentFarmerBanner";
import Contact from "../Contact/Contact";
// import WhatsAppButton from "../Whatsapp/WhatsappButton";
import IntroSection from "../SectionAbout/SectionAbout";
import ServiceSection from "../sectionServices/sectionServices";
import OurPartners from "../OurPartners/OurPartners";
import ImageBanner from "../ImageBanner/ImageBanner";
import OurValues from "../OurValues/OurValues";  // Import OurValues component
import ImageWithText from "../ImageWithText/ImageWithText";  // Import ImageWithText component
import SlidingPromo from "../SlidingPromo/SlidingPromo";  // Import the SlidingPromo component
import "./home.css";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <OurValues />  {/* Add OurValues section here */}
      <ImageWithText />  {/* Add ImageWithText section here */}
      <OurPartners />
      <Services />
      <ServiceSection />
      <ImageBanner />
      <Testimonials />
      <AgentFarmerBanner />
      <Contact />
      {/* <WhatsAppButton /> */}
      <SlidingPromo /> {/* Add SlidingPromo at the top of the page */}

    </div>
  );
};

export default Home;
