import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import About from "./components/About/about";
import Project from "./components/Projects/project";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Project />
    </div>
  );
}

export default App;
