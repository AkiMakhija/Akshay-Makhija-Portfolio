import { GraduationCap, Briefcase, Calendar } from "lucide-react";

export const ExperienceTimeline = () => {
 const timelineItems = [
  {
    type: "experience",
    title: "Software Engineer",
    organization: "IpserLab",
    location: "Boston, MA",
    date: "Jun 2025 - Present",
    description: "Currently working as a Software Engineer building React.js marketplace features, implementing GraphQL with Apollo for 70% performance improvement, and ensuring quality through Playwright testing.",
    icon: Briefcase,
  },
   {
     type: "education",
     title: "Master of Science in Computer Software Engineering",
     organization: "Northeastern University",
     location: "Boston, MA",
     date: "May 2025",
     description: "Graduated with comprehensive knowledge in software engineering principles and practices.",
     icon: GraduationCap,
   },
   {
     type: "experience",
     title: "Graduate Teaching Assistant - Big Data Indexing",
     organization: "Northeastern University",
     location: "Boston, MA",
     date: "Jan 2025 - May 2025",
     description: "Supported coursework for 150+ students on RabbitMQ, Redis, Elasticsearch, Kafka, and GraphQL optimization.",
     icon: Briefcase,
   },
   {
     type: "experience",
     title: "Software Engineer",
     organization: "Mars Pvt Ltd",
     location: "Mumbai, India",
     date: "Sep 2022 - Apr 2023",
     description: "I worked as a Software Engineer where I designed a production monitoring app using JavaScript and Django that increased operational efficiency by 35% and reduced response times from 30 to 6 minutes.",
     icon: Briefcase,
   },
   {
     type: "experience",
     title: "Associate Software Engineer",
     organization: "Accenture",
     location: "Mumbai, India",
     date: "Jan 2021 - Aug 2022",
     description: "I worked as an Associate Software Engineer where I built reusable React components that increased dashboard usage by 45%. I also designed Java RESTful APIs integrated with AWS S3 and configured CI/CD pipelines, reducing deployment time by 30%.",
     icon: Briefcase,
   },
   {
     type: "education",
     title: "Bachelor of Engineering in Computer Engineering",
     organization: "University of Mumbai",
     location: "Mumbai, India",
     date: "Oct 2020",
     description: "Strong foundation in computer science fundamentals and engineering principles.",
     icon: GraduationCap,
   },
 ];

 return (
   <section id="experience" className="py-24 px-4 relative">
     <div className="container mx-auto max-w-4xl">
       <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
         My <span className="text-primary">Journey</span>
       </h2>

       <div className="relative">
         {/* Timeline line */}
         <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2"></div>

         <div className="space-y-12">
           {timelineItems.map((item, index) => (
             <div
               key={index}
               className={`relative flex items-center ${
                 index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
               }`}
             >
               {/* Timeline icon */}
               <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-background border-4 border-primary/20 rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10 hover:border-primary/60 transition-colors duration-300">
                 <item.icon className={`h-5 w-5 ${
                   item.type === "education" ? "text-blue-500" : "text-primary"
                 }`} />
               </div>

               {/* Content card */}
               <div
                 className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                   index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                 }`}
               >
                 <div className="gradient-border p-6 card-hover bg-card">
                   <div className="flex items-center gap-2 mb-2">
                     <Calendar className="h-4 w-4 text-muted-foreground" />
                     <span className="text-sm text-muted-foreground font-medium">
                       {item.date}
                     </span>
                   </div>

                   <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                   <h4 className="font-semibold text-primary mb-1">
                     {item.organization}
                   </h4>
                   <p className="text-sm text-muted-foreground mb-3">
                     {item.location}
                   </p>
                   <p className="text-muted-foreground text-sm leading-relaxed">
                     {item.description}
                   </p>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>
     </div>
   </section>
 );
};