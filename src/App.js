import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import About from "./components/About/about";
import Project from "./components/Projects/project";
import Educ from "./components/Education/educ";
import Socials from "./components/Social/social";
import Top from "./components/backtotop";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Educ />
      <Socials />
      <Top />
    </>
  );
}

export default App;
