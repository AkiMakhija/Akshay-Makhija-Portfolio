import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
            Engineer with Purpose & Passion for Impact
            </h3>

            <p className="text-muted-foreground">
            I recently earned my Master’s degree in Computer Software Engineering from 
            Northeastern University and bring 2+ years of full-stack development experience. 
            I’m now looking for new opportunities to contribute, grow, and build impactful software.
            </p>

            <p className="text-muted-foreground">
            When I’m not coding, you can find me exploring new technologies, mentoring students, hitting the gym, or catching live music shows.
            I believe in continuous learning and love finding inspiration both inside and outside the world of engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1AXqd9Lz5QeRERJ1vGjiAeJ5JIcSSANLv/view?usp=drive_link"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                  Building end-to-end web applications with robust backends, efficient databases, and seamless API integrations.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Frontend & UI/UX</h4>
                  <p className="text-muted-foreground">
                  Creating responsive, interactive user interfaces with modern frameworks and intuitive user experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI & Data Solutions</h4>
                  <p className="text-muted-foreground">
                  Integrating AI APIs, implementing big data indexing, and creating intelligent applications 
                  with vector embeddings and retrieval systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};