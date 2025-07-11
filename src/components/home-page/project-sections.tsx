'use client'
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Calendar, Users } from 'lucide-react';

const ProjectsSection = () => {
   const projects = [
      {
         id: 1,
         title: "E-Commerce Platform",
         description: "A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics. Built with modern technologies for optimal performance and scalability.",
         image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
         technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS", "Docker"],
         liveUrl: "#",
         githubUrl: "#",
         duration: "3 months",
         team: "Solo Project",
         status: "Completed",
         year: "2024"
      },
      {
         id: 2,
         title: "Task Management App",
         description: "A collaborative project management tool with real-time updates, team collaboration features, and advanced reporting capabilities. Supports multiple project types and team sizes.",
         image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
         technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "Tailwind CSS"],
         liveUrl: "#",
         githubUrl: "#",
         duration: "4 months",
         team: "Team of 3",
         status: "In Progress",
         year: "2024"
      },
      {
         id: 3,
         title: "Weather Dashboard",
         description: "A beautiful weather application with interactive maps, detailed forecasts, and location-based recommendations. Features real-time weather updates and historical data visualization.",
         image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
         technologies: ["React", "Chart.js", "OpenWeather API", "Geolocation", "PWA"],
         liveUrl: "#",
         githubUrl: "#",
         duration: "2 months",
         team: "Solo Project",
         status: "Completed",
         year: "2023"
      },
      {
         id: 4,
         title: "Social Media Dashboard",
         description: "Analytics dashboard for social media management with data visualization, scheduling features, and performance tracking across multiple platforms.",
         image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
         technologies: ["Vue.js", "D3.js", "Firebase", "Social APIs", "Chart.js"],
         liveUrl: "#",
         githubUrl: "#",
         duration: "5 months",
         team: "Team of 2",
         status: "Completed",
         year: "2023"
      },
      {
         id: 5,
         title: "AI-Powered Chatbot",
         description: "Intelligent chatbot with natural language processing capabilities, integration with various APIs, and machine learning for improved responses over time.",
         image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80",
         technologies: ["Python", "TensorFlow", "Flask", "OpenAI API", "MongoDB"],
         liveUrl: "#",
         githubUrl: "#",
         duration: "6 months",
         team: "Solo Project",
         status: "Completed",
         year: "2023"
      },
      {
         id: 6,
         title: "Real Estate Platform",
         description: "Comprehensive real estate platform with property listings, virtual tours, mortgage calculator, and agent communication system. Mobile-responsive design.",
         image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
         technologies: ["React", "Node.js", "MySQL", "AWS S3", "Stripe", "Maps API"],
         liveUrl: "#",
         githubUrl: "#",
         duration: "8 months",
         team: "Team of 4",
         status: "In Progress",
         year: "2024"
      }
   ];

   return (
      <section id="projects" className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Featured Projects
               </h2>
               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  A showcase of my recent work and personal projects that demonstrate my skills and creativity
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
               {projects.map((project, index) => (
                  <div
                     key={project.id}
                     className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-0 shadow-lg animate-scale-in rounded-md"
                     style={{ animationDelay: `${index * 0.15}s` }}
                  >
                     <div className="relative overflow-hidden">
                        {/* <img
                           src={project.image}
                           alt={project.title}
                           className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                        /> */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                           <div className="flex space-x-4">
                              <Button
                                 size="sm"
                                 variant="secondary"
                                 onClick={() => window.open(project.liveUrl, '_blank')}
                                 className="bg-white/90 hover:bg-white backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                              >
                                 <ExternalLink className="h-4 w-4 mr-2" />
                                 Live Demo
                              </Button>
                              <Button
                                 size="sm"
                                 variant="secondary"
                                 onClick={() => window.open(project.githubUrl, '_blank')}
                                 className="bg-white/90 hover:bg-white backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                              >
                                 <Github className="h-4 w-4 mr-2" />
                                 Code
                              </Button>
                           </div>
                        </div>
                     </div>

                     <div className=" p-4">
                        <div className="pb-4">
                           <div className="flex items-center justify-between mb-2">
                              <div className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                 {project.title}
                              </div>
                              <span className="text-sm text-gray-500 font-medium">{project.year}</span>
                           </div>
                           <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                 <Calendar className="h-4 w-4" />
                                 {project.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                 <Users className="h-4 w-4" />
                                 {project.team}
                              </div>
                           </div>
                        </div>

                        <div className="pt-0">
                           <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                              {project.description}
                           </p>
                           <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                 <Badge
                                    key={techIndex}
                                    variant="outline"
                                    className="text-xs hover:bg-blue-50 hover:border-blue-300 transition-colors duration-200"
                                 >
                                    {tech}
                                 </Badge>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default ProjectsSection;