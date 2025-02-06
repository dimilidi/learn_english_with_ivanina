import { HeroSection } from "./components/HeroSection"
import { AboutMe } from "./components/AboutMe"
import { TestimonialsSection } from "./components/TestimonialsSection"
import { CoursesSection } from "./components/CoursesSection"
import { ContactForm } from "./components/ContactForm"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <CoursesSection />
      <TestimonialsSection />
      <ContactForm />
    </>
  )
}

