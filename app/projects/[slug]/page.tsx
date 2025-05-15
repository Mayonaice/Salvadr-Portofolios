"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Sample project data - replace with your actual projects
const projectsData = [
  {
    id: 1,
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A comprehensive e-commerce solution built with Next.js, featuring product management, cart functionality, payment processing, and order tracking. The platform includes an admin dashboard for inventory management and sales analytics.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma", "PostgreSQL"],
    mainVideoSrc: "/placeholder.svg?height=600&width=800",
    additionalVideos: [
      {
        title: "Product Filtering Demo",
        src: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Checkout Process",
        src: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Admin Dashboard",
        src: "/placeholder.svg?height=600&width=800",
      },
    ],
    liveLink: "https://example.com",
    githubLink: "https://github.com/example/project",
    challenges:
      "One of the main challenges was implementing a real-time inventory system that could handle high traffic during sales events. We solved this by using a combination of optimistic UI updates and server-side caching.",
    results:
      "The platform has seen a 45% increase in conversion rates and a 30% reduction in cart abandonment since launch. The client reported a 60% increase in overall sales within the first three months.",
  },
  {
    id: 2,
    slug: "mobile-banking-app",
    title: "Mobile Banking App",
    category: "Mobile App",
    description:
      "A secure and user-friendly mobile banking application that allows users to manage their finances on the go. Features include account management, transaction history, bill payments, and biometric authentication for enhanced security.",
    technologies: ["React Native", "Redux", "Node.js", "Express", "MongoDB", "JWT"],
    mainVideoSrc: "/placeholder.svg?height=600&width=800",
    additionalVideos: [
      {
        title: "Account Overview",
        src: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Transaction Process",
        src: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Security Features",
        src: "/placeholder.svg?height=600&width=800",
      },
    ],
    liveLink: "https://example.com",
    githubLink: "https://github.com/example/project",
    challenges:
      "Security was the primary concern for this project. We implemented multiple layers of encryption and biometric authentication to ensure user data remained protected at all times.",
    results:
      "The app has been downloaded over 50,000 times with a 4.8/5 rating on app stores. User engagement metrics show that 70% of users access the app at least three times per week.",
  },
  {
    id: 3,
    slug: "ai-content-generator",
    title: "AI Content Generator",
    category: "AI / Machine Learning",
    description:
      "An AI-powered content generation tool that helps marketing teams create engaging content for various platforms. The application uses advanced language models to generate blog posts, social media content, and product descriptions.",
    technologies: ["Python", "TensorFlow", "React", "FastAPI", "Docker", "AWS"],
    mainVideoSrc: "/placeholder.svg?height=600&width=800",
    additionalVideos: [
      {
        title: "Content Generation Demo",
        src: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Template Customization",
        src: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Analytics Dashboard",
        src: "/placeholder.svg?height=600&width=800",
      },
    ],
    liveLink: "https://example.com",
    githubLink: "https://github.com/example/project",
    challenges:
      "Training the AI model to generate content that matched each client's brand voice was challenging. We developed a fine-tuning system that allowed the model to learn from existing brand content.",
    results:
      "Marketing teams using the tool reported a 70% reduction in content creation time and a 35% increase in engagement metrics for AI-generated content compared to manually created content.",
  },
  {
    id: 4,
    slug: "analytics-dashboard",
    title: "Real-time Analytics Dashboard",
    category: "Data Visualization",
    description:
      "An interactive dashboard for real-time data analysis and business intelligence. The application provides customizable visualizations, data filtering, and export capabilities to help businesses make data-driven decisions.",
    technologies: ["React", "D3.js", "Node.js", "Socket.io", "PostgreSQL", "Redis"],
    mainVideoSrc: "/placeholder.svg?height=600&width=800",
    additionalVideos: [
      {
        title: "Real-time Data Updates",
        src: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Custom Chart Creation",
        src: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Data Export Features",
        src: "/placeholder.svg?height=600&width=800",
      },
    ],
    liveLink: "https://example.com",
    githubLink: "https://github.com/example/project",
    challenges:
      "Handling large volumes of real-time data without affecting performance was the biggest challenge. We implemented efficient data streaming and caching strategies to maintain responsiveness.",
    results:
      "The dashboard has helped clients reduce decision-making time by 40% and identify business opportunities that increased revenue by an average of 25% within six months of implementation.",
  },
]

export default function ProjectDetail() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  useEffect(() => {
    if (params.slug) {
      const foundProject = projectsData.find((p) => p.slug === params.slug)
      if (foundProject) {
        setProject(foundProject)
        setSelectedVideo(foundProject.mainVideoSrc)
      }
    }
    setIsLoading(false)
  }, [params.slug])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Button onClick={() => router.push("/#projects")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 animated-gradient-background pt-20">
      <div className="container mx-auto px-4 py-12">
        <Button
          variant="ghost"
          onClick={() => router.push("/#projects")}
          className="mb-8 hover:bg-primary/20 transition-colors duration-300"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8"
        >
          <div className="lg:col-span-3">
            <div className="glass-effect rounded-lg overflow-hidden relative group">
              <div
                className={`absolute inset-0 bg-black/50 flex items-center justify-center ${
                  isVideoPlaying ? "opacity-0" : "opacity-100"
                } group-hover:opacity-0 transition-opacity duration-300 z-10 cursor-pointer`}
                onClick={() => setIsVideoPlaying(true)}
              >
                <div className="bg-primary/90 rounded-full p-4 transform transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-8 w-8 text-white" />
                </div>
              </div>
              <video
                className="w-full aspect-video object-cover"
                controls={isVideoPlaying}
                autoPlay={isVideoPlaying}
                muted={!isVideoPlaying}
                loop={!isVideoPlaying}
                playsInline
                poster={selectedVideo || project.mainVideoSrc}
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
              >
                <source src={selectedVideo || project.mainVideoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              {project.additionalVideos.map((video: any, index: number) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`cursor-pointer rounded-lg overflow-hidden border-2 ${
                    selectedVideo === video.src ? "border-primary" : "border-transparent"
                  }`}
                  onClick={() => {
                    setSelectedVideo(video.src)
                    setIsVideoPlaying(false)
                  }}
                >
                  <div className="relative">
                    <video className="w-full aspect-video object-cover" muted loop playsInline poster={video.src}>
                      <source src={video.src} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <Play className="h-6 w-6 text-white/80" />
                    </div>
                  </div>
                  <div className="p-2 bg-secondary/50 text-xs truncate">{video.title}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="glass-effect gradient-border rounded-lg p-6">
              <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 mb-2">
                {project.category}
              </Badge>
              <h1 className="text-3xl font-bold mb-4 gradient-text">{project.title}</h1>
              <p className="text-foreground/80 mb-6">{project.description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, index: number) => (
                    <Badge key={index} variant="secondary" className="bg-secondary/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Challenges</h3>
                <p className="text-foreground/80">{project.challenges}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Results</h3>
                <p className="text-foreground/80">{project.results}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary/90 flex-1 group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:rotate-45" /> Live Demo
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white flex-1 transition-all duration-300"
                >
                  <Github className="mr-2 h-4 w-4" /> View Code
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
