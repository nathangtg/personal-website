export default function Technical() {
  return (
    <div className="w-[100%]">
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
        <div className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point">
          <div className="text-2xl font-rubik max-sm:text-xl">
            Python, Java, JavaScript, HTML, CSS, PHP, Dart
          </div>
        </div>
      </div>

      <div className="w-full h-fit flex mt-12">
        <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base">
          Frameworks
        </div>
        <div className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point">
          <div className="text-2xl font-rubik max-sm:text-xl">
            React, Node.js, Laravel, Bootstrap, Tailwind CSS, Flutter, Vue JS,
            Angular
          </div>
        </div>
      </div>

      <div className="w-full h-fit flex mt-12">
        <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base">
          Machine Learning
        </div>
        <div className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point">
          <div className="text-2xl font-rubik max-sm:text-xl">
            TensorFlow, Scikit-learn, NumPy, Panda, Gemini API, GPT API
          </div>
        </div>
      </div>

      <div className="w-full h-fit flex mt-12">
        <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base">
          Tools
        </div>
        <div className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point">
          <div className="text-2xl font-rubik max-sm:text-xl">
            Git, GitHub, Visual Studio Code, Figma, IntelliJ
          </div>
        </div>
      </div>
    </div>
  );
}
