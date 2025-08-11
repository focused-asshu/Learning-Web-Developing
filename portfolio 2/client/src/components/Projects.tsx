import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      category: "Web Dev",
      description: "A modern, responsive portfolio built with HTML5, CSS3, and vanilla JavaScript. Features dark/light theme toggle, smooth animations, and mobile-first design.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      gradient: "from-blue-400 to-purple-500",
      emoji: "🌐",
      subdomain: "portfolio.dev",
      techColors: {
        "HTML5": "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300",
        "CSS3": "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
        "JavaScript": "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300"
      }
    },
    {
      title: "E-commerce Platform",
      category: "Full Stack",
      description: "A full-featured e-commerce solution with product catalog, shopping cart, user authentication, and payment integration. Built with modern TypeScript and responsive design.",
      technologies: ["TypeScript", "Node.js", "MongoDB"],
      gradient: "from-green-400 to-blue-500",
      emoji: "🛒",
      subdomain: "shop.connect",
      techColors: {
        "TypeScript": "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
        "Node.js": "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
        "MongoDB": "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
      }
    },
    {
      title: "TechCraft Mod",
      category: "Minecraft",
      description: "A technology-focused Minecraft mod adding new machines, automation systems, and energy management. Downloaded by 50,000+ players on CurseForge.",
      technologies: ["Java", "Minecraft Forge", "JSON"],
      gradient: "from-green-600 to-emerald-500",
      emoji: "🟩",
      subdomain: "techcraft-mod",
      techColors: {
        "Java": "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300",
        "Minecraft Forge": "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300",
        "JSON": "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
      }
    },
    {
      title: "Discord Bot",
      category: "Python",
      description: "A multi-purpose Discord bot with moderation, music streaming, custom commands, and server management features. Serving 10+ active communities.",
      technologies: ["Python", "Discord.py", "SQLite"],
      gradient: "from-yellow-500 to-orange-500",
      emoji: "🤖",
      subdomain: "auto-assistant",
      techColors: {
        "Python": "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
        "Discord.py": "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300",
        "SQLite": "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
      }
    },
    {
      title: "Web Scraper Tool",
      category: "Automation",
      description: "An intelligent web scraping tool that extracts and analyzes data from multiple sources. Features rate limiting, data cleaning, and export capabilities.",
      technologies: ["Python", "BeautifulSoup", "Selenium"],
      gradient: "from-indigo-500 to-purple-600",
      emoji: "📊",
      subdomain: "data-harvester",
      techColors: {
        "Python": "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
        "BeautifulSoup": "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
        "Selenium": "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300"
      }
    },
    {
      title: "Pixel Quest Game",
      category: "Game Dev",
      description: "A 2D adventure game built with JavaScript and HTML5 Canvas. Features character progression, multiple levels, and retro pixel art aesthetics.",
      technologies: ["JavaScript", "HTML5 Canvas", "Web Audio"],
      gradient: "from-pink-500 to-rose-500",
      emoji: "🎮",
      subdomain: "pixel-quest",
      techColors: {
        "JavaScript": "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300",
        "HTML5 Canvas": "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300",
        "Web Audio": "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
      }
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Web Dev": "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
      "Full Stack": "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
      "Minecraft": "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300",
      "Python": "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300",
      "Automation": "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300",
      "Game Dev": "bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300";
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of my best work across web development, Minecraft modding, and Python automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-muted rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Header */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                <div className="text-center text-white">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">{project.emoji}</span>
                  </div>
                  <div className="font-mono text-sm opacity-80">{project.subdomain}</div>
                </div>
                {project.title === "TechCraft Mod" && (
                  <>
                    <div className="absolute top-2 right-2 w-4 h-4 bg-white/30"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 bg-white/30"></div>
                  </>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <span className={`px-3 py-1 ${getCategoryColor(project.category)} text-xs rounded-full font-medium`}>
                    {project.category}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 ${project.techColors[tech as keyof typeof project.techColors]} text-xs rounded`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-sm font-medium"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="px-8 py-3 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
