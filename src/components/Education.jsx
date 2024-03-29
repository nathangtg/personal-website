import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animation when component enters the viewport
      transition={{ duration: 0.5 }} // Animation duration
      className=""
    >
      <div
        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold 
        transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent
         bg-black text-white hover:bg-primary/80 gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
        Education
      </div>

      <div className="w-full h-fit flex mt-12">
        <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
          {" "}
          January 2023 - January 2025
        </div>
        <motion.div // Apply motion animation to this div
          initial={{ opacity: 0, x: 50 }} // Initial animation state
          animate={{ opacity: 1, x: 0 }} // Animation when component enters the viewport
          transition={{ duration: 0.5, delay: 0.2 }} // Animation duration and delay
          className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
        >
          <div className="text-2xl font-rubik max-sm:text-xl">
            Diploma in Information Technology, <br /> Sunway College
          </div>
          <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
            During my Diploma in Information Technology program at Sunway
            College, I am developing a robust foundation in the core principles
            of the field. This includes acquiring proficiency in programming
            languages, designing and managing databases, developing web
            applications, understanding computer network fundamentals, and
            exploring the inner workings of operating systems. The curriculum
            emphasizes systematic problem analysis and the design of tailored
            software solutions. Additionally, I am cultivating essential skills
            like problem-solving, effective technical communication, and
            adaptability in the dynamic landscape of information technology. The
            program offers the potential to specialize in areas such as mobile
            app development, data science and analytics, cybersecurity, or
            software engineering methodologies.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
