import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import ProjectOne from './pages/projectOne'
import ProjectTwo from './pages/projecttwo'
//import './App.css'


export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projectOne" element={<ProjectOne />} />
        <Route path="/projecttwo" element={<ProjectTwo />} />
      </Routes>
      <Footer />
    </>
  )
}
