"use client";

import React from "react";
import HeroCarousel from "@/components/home/HeroCarousel";
import PopularDestinations from "@/components/home/PopularDestinations";
import AboutUs from "@/components/home/AboutUs";
import FeaturedTreks from "@/components/home/FeaturedTreks";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import SuccessTrekSpotlights from "@/components/home/SuccessTrekSpotlights";
import Gallery from "@/components/home/Gallery";
import FAQ from "@/components/home/FAQ";

function Page() {
  return (
    <>
      {/* hero section */}
      <HeroCarousel />

      {/* Popular Destinations */}
      <PopularDestinations />

      {/* about us */}
      <AboutUs />

      {/* Featured Treks */}
      <FeaturedTreks />

      {/* why choose us content */}
      <WhyChooseUs />

      {/* success trip */}
      <SuccessTrekSpotlights />

      {/* gallery */}
      <Gallery />

      {/* faq section */}
      <FAQ />
    </>
  );
}

export default Page;
