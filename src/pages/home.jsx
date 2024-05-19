import styles from '../styles/home.module.css'
import Project from '../components/project'

export default function Home() {
  return (
    <main>
        <h1>Welcome to my portfolio!</h1>
        <h2>Projects</h2>
        <Project />
    </main>
  )
}