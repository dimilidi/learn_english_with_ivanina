import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "Ivanina's lessons have been instrumental in improving my business English. Her approach is both professional and engaging.",
  },
  {
    name: "Michael Chen",
    text: "Thanks to Ivanina's exam preparation course, I achieved my target IELTS score. Her strategies and support were invaluable.",
  },
  {
    name: "Elena Rodriguez",
    text: "Ivanina's conversational English classes have boosted my confidence. I now feel comfortable speaking in various social situations.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-emerald-800">What My Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-emerald-200">
              <CardContent className="p-6">
                <p className="mb-4 italic text-emerald-700">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="font-semibold text-right text-emerald-600">- {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

