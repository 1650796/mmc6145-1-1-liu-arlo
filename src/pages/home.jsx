import styles from '../styles/home.module.css'
import Project from '../components/project'
import Hero from '../components/hero'

export default function Home() {
  return (
    <main>
        <Hero />
        <h2>Projects</h2>
        <Project />
    </main>
  )
}