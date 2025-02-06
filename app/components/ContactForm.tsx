"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Clock } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-emerald-800">Get in Touch</h2>

        <div className="max-w-3xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="w-6 h-6 text-emerald-600" />
              <a href="tel:+359899083121" className="text-xl hover:text-emerald-600 transition-colors">
                +359 899083121
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-6 h-6 text-emerald-600" />
              <p className="text-lg">
                MONDAY - SATURDAY
                <span className="block text-sm text-emerald-600">07:00 AM-08:00PM</span>
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-lg text-emerald-800">Location</h3>
            <p className="text-emerald-600">Online lessons available worldwide</p>
            <p className="text-emerald-600">Local time zone: Eastern European Time (EET)</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
          <div className="mb-4">
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
          <div className="mb-4">
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}

