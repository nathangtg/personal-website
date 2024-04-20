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
          January 2023-
          <br /> January 2025
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

      {/* <div className="w-full h-fit flex mt-12">
        <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
          {" Experience Date"}
        </div>
        <motion.div // Apply motion animation to this div
          initial={{ opacity: 0, x: 50 }} // Initial animation state
          animate={{ opacity: 1, x: 0 }} // Animation when component enters the viewport
          transition={{ duration: 0.5, delay: 0.2 }} // Animation duration and delay
          className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
        >
          <div className="text-2xl font-rubik max-sm:text-xl">
            {"Role title"} <br /> {"Company Name"}
          </div>
          <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
            {"Role description"}
          </p>
        </motion.div>
      </div> */}

      <div
        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold  mt-12
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
        Work Experience
      </div>

      <>
        {/* Head of Information Technology Department */}
        <div className="w-full h-fit flex mt-12">
          <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            March 2022- <br />
            May 2022
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
          >
            <div className="text-2xl font-rubik max-sm:text-xl">
              Head of Information Technology Department
              <br />
              SMA Santo Thomas 1 Medan
            </div>
            <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
              Developed website for S.E.F (Stosa English Festival), increasing
              event visibility and engagement. Utilized WIX website builder,
              prioritizing SEO to enhance event promotion and reach. Improved
              event reach by 40% through strategic SEO implementation. Lead the
              whole environment creation for the festival by implementing a
              centralized computing system from the school’s facility. Delegated
              tasks towards the department members to ensure the event flow went
              smoothly ranging from dividing the tasks and using AGILE method to
              discuss the requirements with the members.
            </p>
          </motion.div>
        </div>

        {/* Event Staff at Youth Break the Boundaries Foundation */}
        <div className="w-full h-fit flex mt-12">
          <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            January 2022- <br />
            February 2022
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
          >
            <div className="text-2xl font-rubik max-sm:text-xl">
              Event Staff
              <br />
              Youth Break the Boundaries Foundation
            </div>
            <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
              Selected as staff for Istanbul Youth Summit 2022 preparation,
              contributing to event coordination. Provided inputs to enhance
              event experience, ensuring memorability for attendees.
              Successfully reached target of over 40 nationalities collaborating
              on Covid-19 recovery solutions.
            </p>
          </motion.div>
        </div>

        {/* Website Development Team at Youth Break the Boundaries Foundation */}
        <div className="w-full h-fit flex mt-12">
          <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            October 2021-
            <br /> December 2021
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
          >
            <div className="text-2xl font-rubik max-sm:text-xl">
              Website Development Team
              <br />
              Youth Break the Boundaries Foundation
            </div>
            <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
              Helped in establishing the website for Istanbul Youth Summit 2022,
              which is now maintained and used for future events. Participated
              in gathering the design and user requirements through testing and
              questionnaires. Helped develop the website and design the website
              with the help of WordPress and its relevant plug-ins to increase
              interactivity.
            </p>
          </motion.div>
        </div>

        {/* Website Development Team at Modern Youth Model UN */}
        <div className="w-full h-fit flex mt-12">
          <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            August 2021- <br />
            September 2021
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
          >
            <div className="text-2xl font-rubik max-sm:text-xl">
              Website Development Team
              <br />
              Modern Youth Model UN
            </div>
            <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
              Developed website for Modern Youth International MUN, boosting
              organization`&apos;`s online presence during Covid-19 pandemic.
              Utilized WIX website builder to create user-friendly platform,
              resulting in a 40% increase in website traffic. Implemented SEO
              tools, resulting in over 600 participants engaging with the
              website since its inception.
            </p>
          </motion.div>
        </div>
      </>
    </motion.div>
  );
}
