import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Header from './components/header';
import Hero from './components/hero';
import Resume from './components/resume';
import Skills from './components/skills';

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <main id="main">
          <About />
          <Resume />
          <Skills />
          <Contact />
        </main>
    </div>
  );
}

export default App;
