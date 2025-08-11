import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, Code, GraduationCap, User, Award, TrendingUp } from "lucide-react";

export default function Resume() {
  const experiences = [
    {
      title: "Freelance Developer",
      period: "2022 - Present",
      description: "Completed 15+ freelance projects including websites, Discord bots, and automation tools. Maintained 5-star ratings and built long-term client relationships.",
      tags: ["Web Development", "Python Automation"],
      icon: Briefcase,
      color: "bg-blue-100 dark:bg-blue-900",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      title: "Open Source Contributor",
      period: "2021 - Present",
      description: "Active contributor to various open-source projects on GitHub. Created and maintained several popular repositories with 500+ stars and 50+ forks combined.",
      tags: ["Minecraft Mods", "Discord Bots"],
      icon: Code,
      color: "bg-green-100 dark:bg-green-900",
      iconColor: "text-green-600 dark:text-green-400"
    },
    {
      title: "Junior Developer Intern",
      period: "TechStart Solutions • Summer 2023",
      description: "Worked on front-end development for client projects, implemented responsive designs, and learned best practices for professional software development.",
      tags: ["JavaScript", "React", "CSS"],
      icon: GraduationCap,
      color: "bg-purple-100 dark:bg-purple-900",
      iconColor: "text-purple-600 dark:text-purple-400"
    }
  ];

  const highlights = [
    {
      title: "Fresh Perspective",
      description: "Young, enthusiastic developer with modern skills and eagerness to learn from experienced professionals.",
      icon: User
    },
    {
      title: "Proven Results",
      description: "Track record of successful projects and satisfied clients, with measurable impact and positive feedback.",
      icon: Award
    },
    {
      title: "Growth Mindset",
      description: "Constantly learning new technologies and improving skills to stay current with industry trends.",
      icon: TrendingUp
    }
  ];

  const handleDownloadResume = async () => {
    try {
      const response = await fetch("/api/resume/download");
      const data = await response.json();
      
      if (data.downloadUrl) {
        // In a real implementation, this would trigger an actual download
        window.open(data.downloadUrl, '_blank');
      } else {
        alert("Resume download would be implemented here");
      }
    } catch (error) {
      console.error("Error downloading resume:", error);
      alert("Error downloading resume. Please try again.");
    }
  };

  return (
    <section id="resume" className="py-20 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Resume & Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6">
            Ready to contribute and grow with your team
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Download Resume */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white text-center shadow-lg"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                <Download className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Download Resume</h3>
              <p className="mb-6 opacity-90">
                Get my complete resume with detailed experience and project information.
              </p>
              <Button
                onClick={handleDownloadResume}
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold"
              >
                Download PDF
              </Button>
            </motion.div>
          </div>

          {/* Experience Summary */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-8">Experience Highlights</h3>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 ${exp.color} rounded-lg flex items-center justify-center`}>
                      <exp.icon className={`w-6 h-6 ${exp.iconColor}`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                      <p className="text-primary font-medium">{exp.period}</p>
                      <p className="text-muted-foreground mt-2">{exp.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-background rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">What I Bring to Your Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <highlight.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{highlight.title}</h4>
                <p className="text-muted-foreground text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
