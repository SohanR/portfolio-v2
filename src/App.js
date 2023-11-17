import './App.css';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';

function App() {
  return (
    <>
      <Header/> 
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Experience/>
      </main>
    </>
  );
}

export default App;
