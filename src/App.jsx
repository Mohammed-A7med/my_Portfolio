import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
