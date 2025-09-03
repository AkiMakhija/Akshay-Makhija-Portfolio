import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Profile Image - ADD THIS SECTION */}
          <div className="mb-8 opacity-0 animate-fade-in">
            <div className="relative w-48 h-48 mx-auto group">
              <img
                src="/profile/profile.png" // Replace with your actual image path
                alt="Akshay Makhija"
                className="w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-xl 
                          transition-all duration-500 ease-out
                          group-hover:border-primary/60 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]
                          group-hover:scale-110 group-hover:rotate-3
                          bg-background/80 backdrop-blur-sm"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated Ring */}
              <div className="absolute -inset-2 rounded-full border-2 border-primary/30 
                            opacity-0 group-hover:opacity-100 group-hover:animate-pulse-subtle
                            transition-opacity duration-500"></div>
            </div>
          </div>
          {/* END OF PROFILE IMAGE SECTION */}

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Akshay
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Makhija
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Welcome to my space! I’m a Software Engineer with a Masters Degree in Computer Software Engineering. 
            I love the art of problem-solving, the challenge of scalability, and the thrill of turning complex ideas into working solutions.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};