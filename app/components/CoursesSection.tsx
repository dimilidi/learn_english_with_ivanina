import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const courses = [
  {
    title: "Business English",
    description: "Master professional communication skills and business terminology for the global workplace.",
    icon: "💼",
  },
  {
    title: "Interview Preparation",
    description: "Gain confidence and learn strategies to ace your job interviews in English.",
    icon: "🎯",
  },
  {
    title: "Travel & Relocation",
    description: "Prepare for life abroad with practical English skills for travel and relocation.",
    icon: "✈️",
  },
  {
    title: "Everyday Conversations",
    description: "Develop natural fluency and confidence in daily English conversations.",
    icon: "💬",
  },
  {
    title: "Children's English",
    description: "Fun and engaging English lessons specially designed for young learners.",
    icon: "🌟",
  },
  {
    title: "Exam Preparation",
    description: "Targeted preparation for IELTS, TOEFL, and other English proficiency tests.",
    icon: "📚",
  },
]

export function CoursesSection() {
  return (
    <section id="courses" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-emerald-800">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-emerald-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-700">
                  <span className="text-2xl">{course.icon}</span>
                  {course.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-emerald-600">{course.description}</p>
                <Button asChild>
                  <a href="#contact">Learn More</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

