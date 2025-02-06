import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-emerald-800">
              ONLINE ENGLISH
              <span className="block">LEARNING CLASSES</span>
            </h1>
            <ul className="space-y-3 text-lg text-emerald-700">
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span>Master Business English</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span>Ace successful job interviews</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span>Thrive in life abroad (travel and relocation)</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span>Excel in everyday conversations</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span>Spark your kid's English journey</span>
              </li>
            </ul>
          </div>

          <Button asChild>
            <a href="#contact">Book a Free Consultation</a>
          </Button>
        </div>
        <div className="md:w-1/2 relative">
          <div className="relative w-[300px] h-[300px] mx-auto md:w-[400px] md:h-[400px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1738228749729.jfif-vXprHnErkowvfaxJv2xM5WryfaNGgc.jpeg"
              alt="Ivanina - English Tutor"
              fill
              className="rounded-full object-cover shadow-lg"
            />
          </div>
        
        </div>
      </div>
    </section>
  )
}

