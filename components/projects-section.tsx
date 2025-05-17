"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "E-Booking Apartment Web",
    category: "Website",
    description: "A website that allows users to book apartments rooms with a simple and user-friendly interface. And many fiture that you can see at details",
    videoSrc: "/videos/ezco/home.mp4",
    detailLink: "/projects/ebooking-apartment-web",
    tags: ["Laravel", "Tailwind CSS", "Javascript"],
  },
  {
    id: 2,
    title: "JS Question Generator",
    category: "Website",
    description: "A website that allows users to generate Javascript questions with different difficulty levels.",
    videoSrc: "/videos/JS-Question-Generator/pilihankesulitan.mp4",
    detailLink: "/projects/js-question-generator",
    tags: ["Python"],
  },
  {
    id: 3,
    title: "My Own Portofolios Website",
    category: "Website",
    description: "A website that is my own portfolio, where I can share my projects and experiences.",
    videoSrc: "/videos/porto/landingpage.mp4",
    detailLink: "/projects/salvador-portfolios",
    tags: ["React", "Next JS", "Tailwind CSS"],
  },
]

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filters = ["All", "Website"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Explore my latest work through interactive video demonstrations. Each project showcases my skills in design,
            development, and problem-solving.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`
                transition-all duration-300 
                ${activeFilter === filter ? "bg-primary shadow-lg shadow-primary/20" : "hover:border-primary/50"}
              `}
            >
              {filter}
            </Button>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="project-card glass-effect rounded-lg overflow-hidden group"
            >
              <Link href={project.detailLink}>
                <div className="relative aspect-video">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={project.videoSrc}
                  >
                    <source src={project.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="project-overlay">
                    <div className="space-y-3">
                      <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30">
                        {project.category}
                      </Badge>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-sm text-foreground/80">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="bg-secondary/50">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        variant="link"
                        className="text-primary p-0 h-auto group-hover:underline flex items-center mt-2"
                      >
                        View Details{" "}
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 text-center"
        >
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 group"
          >
            View All Projects <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:rotate-45" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
