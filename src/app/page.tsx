import { Navbar } from "@/components/rr/navbar";
import { Hero } from "@/components/rr/hero";
import { BrandIntro } from "@/components/rr/brand-intro";
import { MotorCars } from "@/components/rr/motor-cars";
import { Bespoke } from "@/components/rr/bespoke";
import { BlackBadge } from "@/components/rr/black-badge";
import { Heritage } from "@/components/rr/heritage";
import { Finale } from "@/components/rr/finale";
import { Enquire } from "@/components/rr/enquire";
import { SiteFooter } from "@/components/rr/site-footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-obsidian text-ivory">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BrandIntro />
        <MotorCars />
        <Bespoke />
        <BlackBadge />
        <Heritage />
        <Finale />
        <Enquire />
      </main>
      <SiteFooter />
    </div>
  );
}
