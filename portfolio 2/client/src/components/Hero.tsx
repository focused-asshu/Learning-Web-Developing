mport { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "A 17-year-old developer from India";

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let currentText = "";

    const typeText = () => {
      if (!isDeleting && index <= fullText.length) {
        currentText = fullText.slice(0, index);
        setDisplayText(currentText);
        index++;
      } else if (isDeleting && index >= 0) {
        currentText = fullText.slice(0, index);
        setDisplayText(currentText);
        index--;
      }

      if (index === fullText.length && !isDeleting) {
        setTimeout(() => {
          isDeleting = true;
        }, 3000);
      }

      if (index === 0 && isDeleting) {
        isDeleting = false;
        setTimeout(() => {
          index = 0;
        }, 1000);
      }

      setTimeout(typeText, isDeleting ? 50 : 100);
    };

    const timer = setTimeout(typeText, 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
            AS
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Hi, I'm <span className="text-primary">Arjun</span>
          </h1>

          <div className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground mb-8 h-16 flex items-center justify-center">
            <span className="typing-animation font-mono">
              {displayText}
            </span>
          </div>

          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about building the web, creating Minecraft mods, and crafting Python tools.
            Always eager to learn and take on new challenges in the world of development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="px-8 py-4 text-lg font-semibold rounded-xl border-2 transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
}
