"use client";

import React from "react";
import HeroSection from "@/components/home/HeroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Process from "@/components/home/Process";
import Destination from "@/components/home/Destination";
import ContactForm from "@/components/home/ContactForm";
import Pricing from "@/components/home/Pricing";
import Testimonial from "@/components/home/Testimonial";
import TravelGuid from "@/components/home/TravelGuid";
import Faq from "@/components/home/Faq";
function Page() {
  return (
   <>
   {/* hero section */}
   <HeroSection />

   {/* why choose us section */}
   <WhyChooseUs />

   {/* process section */}
   <Process />

   {/* destination section */}
   <Destination />

   {/* contact form section */}
   <ContactForm />

   {/* pricing section */}
   <Pricing />

    {/* testimonial section */}
   <Testimonial />

   {/* travel guide section */}
   <TravelGuid />

    {/* faq section */}
   <Faq />
   </>
  );
}

export default Page;
