"use client";

import React from "react";
import HeroCarousel from "@/components/home/HeroCarousel";
import PopularDestinations from "@/components/home/PopularDestinations";
import AboutUs from "@/components/home/AboutUs";
import FeaturedTreks from "@/components/home/FeaturedTreks";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ChooseOurActivity from "@/components/home/ChooseOurActivity";
import SuccessTrekSpotlights from "@/components/home/SuccessTrekSpotlights";
import CtaSection from "@/components/home/CtaSection";
import Gallery from "@/components/home/Gallery";
import FAQ from "@/components/home/FAQ";

function Page() {
  return (
    <>
      {/* hero section */}
      <HeroCarousel />

       {/* about us */}
      <AboutUs />
      
      {/* Popular Destinations */}
      <PopularDestinations />


      {/* Featured Treks */}
      <FeaturedTreks />

      {/* why choose us content */}
      <WhyChooseUs />

      {/* choose our activities */}
      <ChooseOurActivity />

      {/* success trip */}
      <SuccessTrekSpotlights />

      {/* cta section */}
      <CtaSection />
      {/* gallery */}
      <Gallery />

      {/* faq section */}
      <FAQ />
    </>
  );
}

export default Page;
