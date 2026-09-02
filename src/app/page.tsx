import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Essentials from "@/components/Essentials";
import WhatIsShag from "@/components/WhatIsShag";
import Workshops from "@/components/Workshops";
import Teachers from "@/components/Teachers";
import Tickets from "@/components/Tickets";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import { client } from "../../sanity/lib/client";
import { eventSettingsQuery } from "../../sanity/lib/queries";
import type { EventSettings } from "../../sanity/lib/types";

// Re-fetch from Sanity on every request so published edits show up on refresh,
// without needing a redeploy.
export const dynamic = "force-dynamic";

export default async function Home() {
  const eventSettings = await client.fetch<EventSettings>(eventSettingsQuery);

  return (
    <>
      <Nav eventName={eventSettings?.eventName} />
      <main id="main">
        <Hero settings={eventSettings} />
        <Essentials essentials={eventSettings?.essentials} />
        <WhatIsShag whatIsShag={eventSettings?.whatIsShag} />
        <Workshops />
        <Teachers />
        <Tickets pricing={eventSettings?.pricing} links={eventSettings?.links} />
        <Location location={eventSettings?.location} />
      </main>
      <Footer eventName={eventSettings?.eventName} links={eventSettings?.links} />
    </>
  );
}