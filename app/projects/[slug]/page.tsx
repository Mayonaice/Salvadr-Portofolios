"use client"

import { useEffect, useState, useRef } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Sample project data - replace with your actual projects
const projectsData = [
  {
    id: 1,
    slug: "ebooking-apartment-web",
    title: "E-Booking Apartment Web",
    category: "Website",
    description:
      "A website that allows users to book apartments rooms with a simple and user-friendly interface. and created with device recognition features so that users do not need to create an account first, WhatsApp bot feature when the user has booked a room",
    technologies: ["Laravel", "Tailwind CSS", "Javascript"],
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
      "implementing a website with features that can recognize the device so that users don't have to create an account first and also connect to the WhatsApp API to send order details when the user has successfully booked a room.",
  },
  {
    id: 2,
    slug: "js-question-generator",
    title: "JS Question Generator",
    category: "Website",
    description:
      "A website that allows users to generate Javascript questions with different difficulty levels.",
    technologies: ["Python"],
    mainVideoSrc: "/videos/JS-Question-Generator/pilihankesulitan.mp4",
    additionalVideos: [
      {
        title: "Difficulty Option",
        src: "/videos/JS-Question-Generator/pilihankesulitan.mp4",
      },
      {
        title: "Answer Question",
        src: "/videos/JS-Question-Generator/menjawabsoal.mp4",
      },
      {
        title: "History",
        src: "/videos/JS-Question-Generator/riwayat.mp4",
      },
    ],
    liveLink: "https://example.com",
    githubLink: "https://github.com/example/project",
    challenges:
      "Create an application that has a feature to generate JavaScript questions so that the generated questions are quite varied and difficult, and also provides corrections to the answered questions.",
    
  },
  {
    id: 3,
    slug: "salvador-portfolios",
    title: "My Own Portofolios Website",
    category: "Website",
    description:
      "A website that is my own portfolio, where I can share my projects and experiences.",
    technologies: ["React", "Next JS", "Tailwind CSS"],
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
      "implement an attractive UI and place a demo video of my project on this website as well as provide a chart for the skills I am proficient in",
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
  const [isVideo, setIsVideo] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (params.slug) {
      const foundProject = projectsData.find((p) => p.slug === params.slug)
      if (foundProject) {
        setProject(foundProject)
        setSelectedVideo(foundProject.mainVideoSrc)
        setIsVideo(foundProject.mainVideoSrc.endsWith('.mp4'))
      }
    }
    setIsLoading(false)
  }, [params.slug])

  useEffect(() => {
    // Check if selected video is a video file
    if (selectedVideo) {
      setIsVideo(selectedVideo.endsWith('.mp4'))
    }
  }, [selectedVideo])

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
                  isVideoPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
                } group-hover:opacity-0 transition-opacity duration-300 z-10 cursor-pointer`}
                onClick={() => {
                  if (isVideo && videoRef.current) {
                    videoRef.current.play();
                    setIsVideoPlaying(true);
                  }
                }}
              >
                {isVideo && (
                  <div className="bg-primary/90 rounded-full p-4 transform transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                )}
              </div>
              {isVideo ? (
                <video
                  ref={videoRef}
                  className="w-full aspect-video object-cover video-player"
                  controls={true}
                  muted={!isVideoPlaying}
                  loop={!isVideoPlaying}
                  playsInline
                  preload="auto"
                  src={selectedVideo || ""}
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                  onEnded={() => setIsVideoPlaying(false)}
                  onError={(e) => {
                    console.error("Video error:", e);
                    setIsVideo(false);
                  }}
                  style={{ objectFit: isVideoPlaying ? "contain" : "cover" }}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img 
                  src={selectedVideo || ""} 
                  alt={project.title} 
                  className="w-full aspect-video object-cover" 
                />
              )}
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
                    setSelectedVideo(video.src);
                    setIsVideoPlaying(false);
                    // Reset video state when selecting a new video
                    if (videoRef.current) {
                      videoRef.current.pause();
                      videoRef.current.currentTime = 0;
                    }
                    // Check if it's a video
                    setIsVideo(video.src.endsWith('.mp4'));
                  }}
                >
                  <div className="relative">
                    <div className="w-full aspect-video bg-secondary/30 object-cover flex items-center justify-center overflow-hidden">
                      {video.src.endsWith('.mp4') ? (
                        <video className="w-full h-full object-cover" muted loop playsInline preload="metadata">
                          <source src={video.src} type="video/mp4" />
                        </video>
                      ) : (
                        <img src={video.src} alt={video.title} className="w-full h-full object-cover" />
                      )}
                    </div>
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
