import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Education from "./components/Education";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technical from "./components/Technical";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <main className="flex flex-col relative screen break-words min-h-screen items-center justify-between pt-14 pb-4 px-6 md:px-20 max-md:p-4 max-sm:pt-20 bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px] bg-white">
        <Navbar />
        <div className="flex flex-col justify-center items-center mt-24">
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/technical" element={<Technical />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
