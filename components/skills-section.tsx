"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartTooltip } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This data can be configured in the code as requested
const skillsData = {
  programming: [
    { name: "Python", value: 95 },
    { name: "PHP", value: 90 },
    { name: "JavaScript", value: 75 },
    { name: "Java", value: 45 },
    { name: "TypeScript", value: 25 },
  ],
  frontend: [
    { name: "Tailwind CSS", value: 90 },
    { name: "Blade PHP", value: 80 },
    { name: "React JS", value: 70 },
    { name: "Next.js", value: 35 },
  ],
  backend: [
    { name: "Laravel", value: 95 },
    { name: "Python", value: 80 },
    { name: "Node.js", value: 60 },
    { name: "Ktor", value: 20 },
  ],
  other: [
    { name: "UI/UX", value: 90 },
    { name: "Docker", value: 80 },
    { name: "Testing", value: 80 },
  ],
}

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across various technologies and
            domains.
          </p>
        </motion.div>

        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <Card className="glass-effect gradient-border">
            <CardHeader>
              <CardTitle>Technical Proficiency</CardTitle>
              <CardDescription>Skill levels based on years of experience and project complexity</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="programming" className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6">
                  <TabsTrigger value="programming">Programming</TabsTrigger>
                  <TabsTrigger value="frontend">Frontend</TabsTrigger>
                  <TabsTrigger value="backend">Backend</TabsTrigger>
                  <TabsTrigger value="other">Other</TabsTrigger>
                </TabsList>

                {Object.entries(skillsData).map(([category, data]) => (
                  <TabsContent key={category} value={category} className="h-[400px]">
                    <div className="h-full w-full p-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 80, bottom: 20 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                          <XAxis
                            type="number"
                            domain={[0, 100]}
                            tickCount={6}
                            tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 12 }}
                            axisLine={{ stroke: "rgba(255,255,255,0.3)" }}
                          />
                          <YAxis
                            dataKey="name"
                            type="category"
                            tick={{ fill: "rgba(255,255,255,0.9)", fontSize: 13 }}
                            axisLine={{ stroke: "rgba(255,255,255,0.3)" }}
                            width={80}
                          />
                          <ChartTooltip
                            cursor={{ fill: "rgba(255,255,255,0.05)" }}
                            content={(props) => {
                              const { active, payload } = props
                              if (active && payload && payload.length) {
                                return (
                                  <div className="bg-background/90 backdrop-blur-sm p-2 border border-primary/20 rounded-md">
                                    <p className="font-medium">{payload[0].payload.name}</p>
                                    <p className="text-primary">{`Proficiency: ${payload[0].value}%`}</p>
                                  </div>
                                )
                              }
                              return null
                            }}
                          />
                          <Bar
                            dataKey="value"
                            fill="url(#skillGradient)"
                            radius={[0, 4, 4, 0]}
                            barSize={20}
                            label={{
                              position: "right",
                              formatter: (value) => `${value}%`,
                              fill: "white",
                              fontSize: 12,
                            }}
                          />
                          <defs>
                            <linearGradient id="skillGradient" x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0%" stopColor="hsl(var(--chart-1))" />
                              <stop offset="100%" stopColor="hsl(var(--chart-2))" />
                            </linearGradient>
                          </defs>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
