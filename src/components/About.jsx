export default function About() {
  return (
    <div className="h-fit">
      <div
        className="sm:justify-center inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold 
        transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
     bg-black text-white hover:bg-primary/80 gap-2 self-center max-sm:gap-1 max-sm:px-2 max-sm:py-0.5 max-sm:text-xs"
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
          <circle cx="12" cy="8" r="5"></circle>
          <path d="M20 21a8 8 0 1 0-16 0"></path>
        </svg>
        <p>About Me</p>
      </div>

      <div>
        <h1 className="font-poppins text-primary font-bold text-4xl name_underline max-sm:text-2xl sm:text-center md:text-start lg:text-start">
          an Information Technology student <br />
          based in Malaysia
        </h1>
        <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
          As a student pursuing a diploma in Information Technology at Sunway
          College, I have took upon on a journey of self-discovery and
          professional growth. Initially, I have been faced with uncertainties
          about whether this field truly resonates with my interests. However,
          through hard-work and dedication, I have come to appreciate the
          nuances and challenges inherent in the technology landscape. My
          college years have been marked by a gradual but profound realization
          of my passion for IT. Rather than being filled with unwavering
          certainty, my passion and interest to this field has evolved through
          hands-on experience and a genuine curiosity about its potential
          applications.
        </p>
      </div>

      <div className="py-8">
        <div className="flex">
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
            className="h-11 w-11"
          >
            <path d="m5 8 6 6"></path>
            <path d="m4 14 6-6 2-3"></path>
            <path d="M2 5h12"></path>
            <path d="M7 2h1"></path>
            <path d="m22 22-5-10-5 10"></path>
            <path d="M14 18h6"></path>
          </svg>
          <h1 className="font-poppins text-primary font-bold text-4xl name_underline max-sm:text-2xl sm:text-center md:text-start lg:text-start">
            Languages <br />
          </h1>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start inline-flex">
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
              className="h-3 w-3"
            >
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            <p className="font-poppins text-2xl w-full text-primary max-sm:text-xl inline-flex">
              <span className="text-blue-500 text-2xl font-bold">ID</span>
              <span className="pl-4">Bahasa Indonesia</span>
            </p>
          </div>
          <div className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start inline-flex">
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
              className="h-3 w-3"
            >
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            <p className="font-poppins text-2xl w-full text-primary max-sm:text-xl inline-flex">
              <span className="text-blue-500 text-2xl font-bold">EN</span>
              <span className="pl-4">English</span>
            </p>
          </div>
          <div className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start inline-flex">
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
              className="h-3 w-3"
            >
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            <p className="font-poppins text-2xl w-full text-primary max-sm:text-xl inline-flex">
              <span className="text-blue-500 text-2xl font-bold">MY</span>
              <span className="pl-4">Malay Language</span>
            </p>
          </div>
        </div>
      </div>

      <div className="py-8">
        <div className="flex">
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
            className="h-8 w-8"
          >
            <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
            <path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17"></path>
            <path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
          <h1 className="pl-2 font-poppins text-primary font-bold text-4xl name_underline max-sm:text-2xl sm:text-center md:text-start lg:text-start">
            Nationality
          </h1>
        </div>

        <div className="flex">
          <div className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start inline-flex">
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
              className="h-3 w-3"
            >
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            <p className="font-poppins text-2xl w-full text-primary max-sm:text-xl inline-flex">
              <span className="text-blue-500 text-2xl font-bold">ID</span>
              <span className="pl-4">Indonesian</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
