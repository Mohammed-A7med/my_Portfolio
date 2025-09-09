import { useEffect } from "react";

import "./App.css";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import emailjs from "@emailjs/browser";

function App() {
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
