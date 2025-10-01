import './App.css'
import Navbar from './components/Navbar'
import Projects from './components/projects'
import About from "./components/about"
import Skills from "./components/skills"
import Me from './components/me'
import Hackathon from './components/hackathon'
import Qualifications from './components/Qualification'
import Calendar from './components/calendar'
import Touch from './components/touch'
import Form from './components/form'
import Footer from './components/footer'

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Me />
      <Hackathon />
      <Qualifications />
      <Calendar />
      <Touch />
      <Form />
      <Footer />
    </>
  )
}

export default App
