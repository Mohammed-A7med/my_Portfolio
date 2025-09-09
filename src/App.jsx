import "./App.css";
import Contact from "./components/Contact/Contact";
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
    </>
  );
}

export default App;
