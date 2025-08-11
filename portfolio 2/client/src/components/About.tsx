import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase, CheckCircle } from "lucide-react";

export default function About() {
  const facts = [
    { icon: MapPin, text: "Mumbai, India" },
    { icon: Calendar, text: "Age 17" },
    { icon: Briefcase, text: "Available for Freelance" },
    { icon: CheckCircle, text: "3+ Years Experience" },
  ];

  const interests = [
    "🎮 Gaming",
    "🎵 Music",
    "📚 Learning",
    "🏃‍♂️ Fitness",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-muted rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-foreground">🌟 My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a 17-year-old developer from Mumbai, India, who discovered the magic of coding at 14.
                What started as curiosity about how websites work has evolved into a passion for creating
                digital solutions and experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-muted rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-foreground">🎯 Current Focus</h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing Computer Science while actively working on freelance projects.
                I specialize in full-stack web development, Minecraft modding, and Python automation.
                Always looking for opportunities to apply my skills in real-world scenarios.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-muted rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-foreground">💡 Motivation</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe technology should solve problems and bring joy to people's lives.
                Whether it's building a responsive website, creating a fun Minecraft mod,
                or automating tedious tasks with Python, I'm driven by the impact my code can have.
              </p>
            </motion.div>
          </div>

          <div className="space-y-6">
            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                {facts.map((fact, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <fact.icon className="w-5 h-5" />
                    <span>{fact.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-muted rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Beyond Coding</h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
