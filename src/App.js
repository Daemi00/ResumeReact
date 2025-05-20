import "./App.css";
import "./fontawesome.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Goals from "./components/Goals";
import InternObjectives from "./components/InternObjectives";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <div className="port-container">
        <div className="left-column">
          <About />
          <Education />
        </div>
        <div className="right-column">
          <Goals />
          <InternObjectives />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
