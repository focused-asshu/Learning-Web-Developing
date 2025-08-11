import { motion } from "framer-motion";

export default function Skills() {
  const coreSkills = [
    { name: "HTML5", emoji: "🔤", description: "Semantic markup", bgColor: "bg-orange-100 dark:bg-orange-900" },
    { name: "CSS3", emoji: "🎨", description: "Modern styling", bgColor: "bg-blue-100 dark:bg-blue-900" },
    { name: "JavaScript", emoji: "⚡", description: "ES6+ Features", bgColor: "bg-yellow-100 dark:bg-yellow-900" },
    { name: "TypeScript", emoji: "📘", description: "Type safety", bgColor: "bg-blue-100 dark:bg-blue-900" },
    { name: "Python", emoji: "🐍", description: "Automation & Tools", bgColor: "bg-green-100 dark:bg-green-900" },
    { name: "Java", emoji: "☕", description: "Minecraft Mods", bgColor: "bg-red-100 dark:bg-red-900" },
  ];

  const tools = [
    { name: "Git", emoji: "🌿", description: "Version Control", bgColor: "bg-orange-100 dark:bg-orange-900" },
    { name: "VS Code", emoji: "💻", description: "Primary IDE", bgColor: "bg-blue-100 dark:bg-blue-900" },
    { name: "Linux", emoji: "🐧", description: "Command Line", bgColor: "bg-gray-100 dark:bg-gray-900" },
    { name: "Tailwind", emoji: "🎯", description: "Utility CSS", bgColor: "bg-teal-100 dark:bg-teal-900" },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on experience and continuous learning
          </p>
        </div>

        {/* Primary Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Core Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {coreSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-background rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 ${skill.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl">{skill.emoji}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{skill.name}</h4>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools & Frameworks */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Tools & Environment</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-background rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 ${tool.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl">{tool.emoji}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{tool.name}</h4>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
