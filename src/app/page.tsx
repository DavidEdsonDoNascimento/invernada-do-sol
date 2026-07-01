import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { ExperiencesSection } from "@/components/sections/ExperiencesSection"
import { RestaurantSection } from "@/components/sections/RestaurantSection"
import { WeeklyAgenda } from "@/components/sections/WeeklyAgenda"
import { CabinSection } from "@/components/sections/CabinSection"
import { MomentsSection } from "@/components/sections/MomentsSection"
import { LocationSection } from "@/components/sections/LocationSection"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ExperiencesSection />
        <RestaurantSection />
        <WeeklyAgenda />
        <CabinSection />
        <MomentsSection />
        <LocationSection />
      </main>
      <Footer />
    </>
  )
}
