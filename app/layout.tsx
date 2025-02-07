import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"
import { Facebook, Youtube, Instagram, Linkedin } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Learn English with Ivanina",
//   description:
//     "Professional English language tutor specializing in Business English, Exam Preparation, and Conversational English.",
// }


export const metadata: Metadata = {
  title: "Learn English with Ivanina",
  description:
    "Professional English language tutor specializing in Business English, Exam Preparation, and Conversational English.",
  manifest: "/manifest.json"
  
}



export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#10b981"
};









export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-emerald-600">
          Learn English with Ivanina
        </a>
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="hover:text-emerald-600 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-emerald-600 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#courses" className="hover:text-emerald-600 transition-colors">
              Courses
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-emerald-600 transition-colors">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-emerald-600 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-emerald-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2025 Learn English with Ivanina. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/ivaninapaskaleva/" target="blank_" className="hover:text-emerald-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/people/Learn-English-with-Ivanina/61561269775757/?_rdr" target="blank_" className="hover:text-emerald-400 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/learn_english_with_ivanina/" target="blank_" className="hover:text-emerald-400 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

