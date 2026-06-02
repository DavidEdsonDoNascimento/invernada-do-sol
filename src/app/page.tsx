import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { RefugeSection } from "@/components/sections/RefugeSection"
import { ExperiencesSection } from "@/components/sections/ExperiencesSection"
import { RestaurantSection } from "@/components/sections/RestaurantSection"
import { WeeklyAgenda } from "@/components/sections/WeeklyAgenda"
import { CabinSection } from "@/components/sections/CabinSection"
import { GallerySection } from "@/components/sections/GallerySection"
import { MomentsSection } from "@/components/sections/MomentsSection"
import { LocationSection } from "@/components/sections/LocationSection"
import { ReservationCTA } from "@/components/sections/ReservationCTA"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <RefugeSection />
        <ExperiencesSection />
        <RestaurantSection />
        <WeeklyAgenda />
        <CabinSection />
        <GallerySection />
        <MomentsSection />
        <LocationSection />
        <ReservationCTA />
      </main>
      <Footer />
    </>
  )
}
