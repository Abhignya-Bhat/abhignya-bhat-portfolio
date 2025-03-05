import project1 from '/1.png'
import project2 from '/2.png'
import project3 from '/3.png'
import project4 from '/4.png'
import {motion} from "framer-motion"

const projectData = [
  { 
    image: project1,
    title: "Human Emotion Detection",
    repo: "https://github.com/Abhignya-Bhat/Multimodal_Emotion_Detection",
    description: 'Implemented a comprehensive solution that accurately predicts human emotions in real time from various modalities. Developed a web application employing Ensemble Learning on Deep Learning Models such as XCeptionNet, SVM, Time Distributed CNNs, LSTM, achieving a training accuracy of 85.3% and testing accuracy of 80.5% on FER2013 and RAVDESS datasets. The application features three modules for real-time emotion detection: text, speech, and video.',
    technologies: [ "Tensorflow", "Flask", "Java", "HTML", "CSS", "JavaScript"]
  },
  { 
    image: project2,
    title: "Web Trek: A Search Engine",
    repo: "https://github.com/Abhignya-Bhat/WebTrek-The-Search-Engine",
    description: 'Developed a search engine using Big Data technologies efficiently managing over 1 million web pages for tailored search results while ensuring up-to-date, relevant data with robust ranking algorithms leveraging NLP and vector space modeling.',
    technologies: [ "ELK", "Flask", "Python", "HTML", "CSS", "JavaScript" ]
  },
  { 
    image: project3,
    title: "Attack On Sequential Embedding-Driven Attentive Malware Classification",
    repo: "https://github.com/Abhignya-Bhat/ML_CyberSEC_Project",
    description: 'Developed a compact malware classification model utilizing sequential opcode-based embeddings and attention mechanisms, showcasing a high accuracy of 0.9908 and a low log loss score of 0.07 on the benchmark dataset "Microsoft BIG 15".',   
    technologies: [ "PyTorch", "Scikit-learn"]
  }, 
  { 
    image: project4,
    title: "First Order Image Animation in Real time",
    repo: "https://github.com/Abhignya-Bhat/First_Order_Image_Animation",
    description: 'A state-of-the-art image animation model that transfers motion from a video onto a still image with an L1 Loss of 0.060.',   
    technologies: [ "PyTorch", "Scikit-learn"]
  }
]

const ScrollReveal =({children})=>{
  return(
    <motion.div
    initial={{opacity: 0, y:100}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    transition={{duration:0.8}}>
      {children}
    </motion.div>
  )
}

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
    <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
      <img src={project.image} alt="" className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]' />
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-3'>
          <a href={project.repo} target="_blank" rel="noopener noreferrer" className='text-xl font-semibold text-blue-400 hover:underline'>
            {project.title}
          </a>
          <p className='text-gray-400'>{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-5">
          {
            project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))
          }
        </div>
      </div>
    </div>
    </ScrollReveal>
  )
}

const Projects = () => {
  return (
    <div id="projects" className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24'>
      <ScrollReveal>
      <h1 className="text-4xl font-light text-white md:text-6xl">Projects</h1>
      </ScrollReveal>
      <div className='flex w-full max-w-[1000px] flex-col gap-16 text-white'>
        {
          projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects
