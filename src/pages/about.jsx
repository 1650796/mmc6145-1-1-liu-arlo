import styles from '../styles/button.module.css'
import { Link } from 'react-router-dom'


export default function About() {
  return (
    <main>
        <h1>About Me</h1>
        <article>
        <p>Hi, my name is Arlo. </p>

        <p>I'm a student at the University of Florida working on my Masters in Mass Communications, with a specialization in Web Design. My interests and skills lie more in the design side of web design, but I can code a little something here and there.</p>
        <br></br>
        <button className={styles.button}>
          <Link style={{color: "#151b31"}} to="/">My work</Link>
        </button>
        </article>
    </main>
  )
}