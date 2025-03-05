import exp1 from '/crowddoing.png';
import exp2 from '/espire.png';
import exp3 from '/eduvance.png';
import { motion } from "framer-motion";

const experienceData = [
  { 
    image: exp1,
    title: "Software Engineer",
    company: "CrowdDoing",
    description: "• Implemented a chatbot feature in the user management system, leveraging an agentic framework using Llama Index Flow. • Designed and implemented RESTful APIs to facilitate smooth communication between front-end and back-end systems for the chatbot. • Enhanced database efficiency by 15% through the optimization of SQL queries, while maintaining data integrity and system availability. • Engineered UI/UX components for a volunteer management system web application using React and JavaScript, achieving a 25% decrease in page load times, while successfully deploying the application on AWS, utilizing services such as EC2 and S3 services. • Utilized Git for version control to manage codebase changes effectively, and Docker for containerization, streamlining the development, testing, and deployment processes across various environments.",
    technologies: ["React", "Tailwind", "MongoDB", "Next.js", "Express.js", "Python", "LlamaIndex", "AWS", "Git", "Docker"]
  },
  {
    image: exp2,
    title: "Software Engineer Intern",
    company: "Espire",
    description: "• Implemented UI/UX components with React.js, HTML, CSS, and JavaScript, creating dynamic and visually appealing user experiences. • Optimized SQL queries and managed MySQL databases, improving data retrieval speed by 20% and ensuring efficient storage solutions. • Deployed and managed applications on AWS, utilizing services such as EC2 and S3, ensuring high availability and scalability, and reducing deployment times by 35%.",
    technologies: ["React", "JavaScript", "HTML", "CSS","MySQL", "AWS", "Git", "Docker"]
  },
  {
    image: exp3,
    title: "Data Analyst Intern",
    company: "Eduvance",
    description: "• Executed customer segmentation in Python, categorizing repeat buyers to enhance targeted marketing efforts; boosted sales by 27% using advanced machine learning algorithms. • Analyzed sales data using Excel functions to create targeted discount strategies, leading to a 15% increase in customer retention. • Created and implemented an advanced Tableau inventory management dashboard, decreasing customer acquisition cost by 5%.",
    technologies: ["Python", "Pandas", "Excel", "Tableau", "Git"]
  }
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};
const ExperienceCard = ({ exp }) => {
  return (
    <ScrollReveal>
      <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
        <img src={exp.image} alt={exp.title} className='w-[200px] cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[200px]' />
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-semibold text-blue-400'>{exp.title} - {exp.company}</h2>
            <ul className='list-disc pl-5 text-gray-400 text-justify'>
              {exp.description.split("•").map((point, index) => (
                point.trim() && <li key={index}>{point.trim()}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-5">
            {exp.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};


const Experience = () => {
  return (
    <div id="experience" className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24'>
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">Experience</h1>
      </ScrollReveal>
      <div className='flex w-full max-w-[1000px] flex-col gap-16 text-white'>
        {experienceData.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
