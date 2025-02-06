"use client"

import { useState } from "react"
import Image from "next/image"

type CertificateCard = {
  title: string
  description: string
  imageSrc: string
}

const certificates: CertificateCard[] = [
  {
    title: "TEFL Certification",
    description: "120-Hour TEFL Certification for teaching English as a foreign language",
    imageSrc: "/placeholder.svg",
  },
  {
    title: "Business English Specialist",
    description: "Certified to teach Business English and professional communication",
    imageSrc: "/placeholder.svg",
  },
  {
    title: "IELTS Preparation Expert",
    description: "Specialized in preparing students for the IELTS exam",
    imageSrc: "/placeholder.svg",
  },
  {
    title: "Young Learners' Instructor",
    description: "Certified to teach English to children and young learners",
    imageSrc: "/placeholder.svg",
  },
]

function CertificateFlipCard({ certificate }: { certificate: CertificateCard }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="flip-card w-full h-64 perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`flip-card-inner w-full h-full transition-transform duration-500 ${isFlipped ? "rotate-y-180" : ""} relative`}
      >
        <div className="flip-card-front absolute w-full h-full backface-hidden">
          <div className="bg-emerald-100 rounded-lg shadow-md p-6 h-full flex flex-col justify-center items-center text-center">
            <h3 className="text-xl font-semibold text-emerald-800 mb-2">{certificate.title}</h3>
            <p className="text-emerald-600">{certificate.description}</p>
          </div>
        </div>
      <div className="flip-card-back absolute w-full h-full backface-hidden rotate-y-180">
        <div className="bg-white rounded-lg shadow-md p-4 h-full flex justify-center items-center">
          <Image
            src={certificate.imageSrc || "/placeholder.svg"}
            alt={certificate.title}
            width={200}
            height={150}
            className="object-contain"
          />
        </div>
      </div>
      </div>
    </div>
  )
}

export function AboutMe() {
  return (
    <section id="about" className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-emerald-800">About Me</h2>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-emerald-700 mb-4">
            With over a decade of experience in teaching English, I'm passionate about helping students achieve their
            language goals. My expertise spans various areas of English language instruction, backed by internationally
            recognized certifications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert, index) => (
            <CertificateFlipCard key={index} certificate={cert} />
          ))}
        </div>
      </div>
    </section>
  )
}

