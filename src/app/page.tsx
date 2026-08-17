import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Essentials from "@/components/Essentials";
import WhatIsShag from "@/components/WhatIsShag";
import Workshops from "@/components/Workshops";
import Teachers from "@/components/Teachers";
import Tickets from "@/components/Tickets";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Essentials />
        <WhatIsShag />
        <Workshops />
        <Teachers />
        <Tickets />
        <Location />
      </main>
      <Footer />
    </>
  );
}
