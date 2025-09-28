import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Proyects from "./components/proyects";
import Experience from "./components/experience";
import CustomCursor from "./components/customcursor";
import Contact from "./components/contact";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <CustomCursor />
      <Hero />
      <About />
      <Skills />
      <Proyects />
      <Experience />
      <Contact />
    </>
  );
}


export default App;