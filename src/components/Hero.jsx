import profile from '/profile.png'
import {motion} from "framer-motion" 
const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
        <div className="flex flex-col items-center justify-center gap-10 text-white">
            <motion.div
            initial={{y:-50, opacity:0}}
            animate={{y: 0, opacity:1}}
            transition={{duration: 0.8, delay: 0.2}}
            >
                <img src={profile} alt="" className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-transate-y-5 hover-scale-105 hover:shadow-indigo-600 md:w-[350px]"/>
            </motion.div>
            <motion.div
            initial={{y:50, opacity:0}}
            animate={{y: 0, opacity:1}}
            transition={{duration: 0.8, delay: 0.2}} className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
                <h1 className="inline-block bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light   leading-[1.4] md:text-7xl overflow-visible">Abhignya Bhat</h1>
                <h3 className="bg-gradient-to-r to-blue-500 from-pink-500 bg-clip-text text-transparent text-2xl  md:text-3xl">Software Engineer</h3>
                <p className="md:text-base text-pretty text-sm text-gray-400 text-justify">
                I’m Abhignya Bhat, a software engineer with a Master’s in Computer Engineering from NYU, specializing in full-stack development. With experience in React, JavaScript, Python, and Java, I build scalable, efficient, and secure applications. I have worked with cloud platforms like AWS and Azure and have a strong background in backend engineering, database optimization, and AI-driven applications. Passionate about problem-solving, I thrive in developing innovative solutions that enhance user experiences and system performance. Check out my work on GitHub or connect with me on LinkedIn.</p>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero