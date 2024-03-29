import { motion } from "framer-motion";

export default function Technical() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-[100%]"
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
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
          <path d="M9 18h6"></path>
          <path d="M10 22h4"></path>
        </svg>
        Technical Skills
      </div>

      <div className="w-full h-fit flex mt-12">
        <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base">
          Languages
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point"
        >
          <div className="text-2xl font-rubik max-sm:text-xl">
            Python, Java, JavaScript, HTML, CSS, PHP, Dart
          </div>
        </motion.div>
      </div>

      <div className="w-full h-fit flex mt-12">
        <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base">
          Frameworks
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point"
        >
          <div className="text-2xl font-rubik max-sm:text-xl">
            React, Node.js, Laravel, Bootstrap, Tailwind CSS, Flutter, Vue JS,
            Angular
          </div>
        </motion.div>
      </div>

      <div className="w-full h-fit flex mt-12">
        <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base">
          Machine Learning
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point"
        >
          <div className="text-2xl font-rubik max-sm:text-xl">
            TensorFlow, Scikit-learn, NumPy, Panda, Gemini API, GPT API
          </div>
        </motion.div>
      </div>

      <div className="w-full h-fit flex mt-12">
        <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base">
          Tools
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point"
        >
          <div className="text-2xl font-rubik max-sm:text-xl">
            Git, GitHub, Visual Studio Code, Figma, IntelliJ
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
