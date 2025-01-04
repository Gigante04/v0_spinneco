import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const jobOpenings = [
  {
    title: "Senior Fashion Designer",
    department: "Design",
    location: "New York, NY",
    description: "We're seeking a creative and experienced fashion designer to lead our design team in creating innovative, sustainable clothing lines."
  },
  {
    title: "E-commerce Manager",
    department: "Marketing",
    location: "Remote",
    description: "Join our digital team to oversee and optimize our online shopping experience, driving growth and customer satisfaction."
  },
  {
    title: "Sustainability Coordinator",
    department: "Operations",
    location: "Los Angeles, CA",
    description: "Help us push the boundaries of sustainable fashion by coordinating our eco-friendly initiatives and partnerships."
  },
  {
    title: "Full Stack Developer",
    department: "Technology",
    location: "San Francisco, CA",
    description: "Contribute to building and maintaining our cutting-edge e-commerce platform and internal tools."
  }
]

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Careers at SPINNECO</h1>
        <p className="text-lg mb-8">Join our team and be part of the fashion revolution. We're always looking for passionate individuals who share our vision for innovative, sustainable fashion.</p>
        <div className="grid gap-6 md:grid-cols-2">
          {jobOpenings.map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{job.department} | {job.location}</p>
                <p>{job.description}</p>
              </CardContent>
              <CardFooter>
                <Button>Apply Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

