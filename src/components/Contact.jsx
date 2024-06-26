import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_3h6alg3";
    const templateId = "template_ktqgg51";
    const userId = "ykpNB2LNWaszrUPyz";

    // emailjs.send(serviceId,templateId,{
    //   to_name: e.target.name.value,
    //   from_name: e.target.SenderEmail.value,
    //   message: e.target.message.value,
    //   });

    emailjs
      .send(
        serviceId,
        templateId,
        {
          to_name: e.target.name.value,
          from_name: e.target.SenderEmail.value,
          message: e.target.message.value,
        },
        userId
      )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error occurred while sending email:", error.text);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animation when component enters the viewport
      transition={{ duration: 0.5 }} // Animation duration
      className="w-[100%]"
    >
      <form
        className="border border-blue-300 rounded-xl backdrop-blur-md"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col space-y-1.5 p-6 border rounded-sm ">
          <h3 className="text-2xl font-semibold leading-none tracking-tight icon_underline">
            Send me a mail or enquiry.
          </h3>
          <p className="text-sm text-muted-foreground">
            Once you submit, you will be redirected to the homepage.
          </p>
        </div>
        <div className="p-6 pt-0">
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <label
              htmlFor="name"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Enter your name"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Email
            </label>
            <input
              type="email"
              name="SenderEmail"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Enter your email"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <label
              htmlFor="message"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Your Message
            </label>
            <textarea
              name="message"
              required
              className="resize-none flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Your message here..."
            ></textarea>
          </div>
        </div>
        <div className="flex items-center p-6 pt-0">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }} // Scale animation on hover
            whileTap={{ scale: 0.95 }} // Scale animation on tap
            className="bg-blue-700 text-white active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 w-full"
          >
            Submit
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}
