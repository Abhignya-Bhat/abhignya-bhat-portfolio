import { BiLogoAws, BiLogoJava, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoPython, BiLogoTailwindCss, BiLogoTypescript, BiLogoDocker, BiLogoGit } from "react-icons/bi";
import { VscAzure } from "react-icons/vsc";
import { SiJunit5 } from "react-icons/si";
import { motion } from "framer-motion";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div id='tech' className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-4 md:gap-8">
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        {[
          { icon: <BiLogoJava />, label: "Java", color: "text-sky-500" },
          { icon: <BiLogoPython />, label: "Python", color: "text-sky-500" },
          { icon: <BiLogoJavascript />, label: "JavaScript", color: "text-orange-500" },
          { icon: <BiLogoTypescript />, label: "TypeScript", color: "text-sky-500" },
          { icon: <BiLogoTailwindCss />, label: "Tailwind CSS", color: "text-sky-500" },
          { icon: <BiLogoNodejs />, label: "Node.js", color: "text-green-500" },
          { icon: <BiLogoDocker />, label: "Docker", color: "text-blue-500" },
          { icon: <BiLogoGit />, label: "Git", color: "text-[#F1502F]" },
          { icon: <SiJunit5 />, label: "JUnit5", color: "text-[#F1502F]" },
          { icon: <BiLogoMongodb />, label: "MongoDB", color: "text-green-500" },
          { icon: <VscAzure />, label: "Azure", color: "text-sky-500" },
          { icon: <BiLogoAws />, label: "AWS", color: "text-white" }
        ].map(({ icon, label, color }, index) => (
          <motion.div
            key={index}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className={`cursor-pointer ${color} text-[80px] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]`}>
              {icon}
            </div>
            <h3 className="text-center font-light text-white mt-2">{label}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
