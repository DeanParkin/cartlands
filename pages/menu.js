import React from "react";
import SEO from "../components/SEO";
import MenuComp from "../components/MenuComp";

export default function menu() {
  return (
    <>
      <SEO
        title="Home"
        description="Cartlands Tea Rooms is located within the heart of Kings Heath Park.
            We are a high quality facility within a beautiful location, serving
            afternoon tea sandwiches, cakes, teas, coffees . Bespoke gourmet
            hampers for all those seasonal treats."
      />
      <MenuComp />
    </>
  );
}
