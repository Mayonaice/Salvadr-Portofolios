"use client"

import { motion } from "framer-motion"
import { Code, Palette, Smartphone, Globe, Database, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Web Development",
    description:
      "Building responsive, high-performance websites and web applications using modern frameworks and technologies.",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Desktop",
    description:
      "Making usefull, ",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Mobile Development",
    description:
      "Developing cross-platform mobile applications that provide native-like experiences on iOS and Android.",
    gradient: "from-cyan-400 to-emerald-500",
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "SEO Optimization",
    description:
      "Improving website visibility and search engine rankings to drive organic traffic and increase conversions.",
    gradient: "from-emerald-500 to-yellow-400",
  },
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: "UI/UX Design",
    description: "Creating intuitive, engaging user interfaces and experiences that delight users and achieve business goals.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Consulting",
    description:
      "Providing expert advice on technology strategy, architecture, and implementation to achieve business objectives.",
    gradient: "from-orange-500 to-red-500",
  },
]

export default function ServicesSection() {
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
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">My Services</span>
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            I offer a comprehensive range of services to help businesses and individuals achieve their digital goals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="glass-effect h-full overflow-hidden group">
                <div className={`h-1 w-full bg-gradient-to-r ${service.gradient}`}></div>
                <CardHeader>
                  <div className="mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
