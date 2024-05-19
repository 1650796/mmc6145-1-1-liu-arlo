import styles from '../styles/button.module.css'
import { Link } from 'react-router-dom'


export default function About() {
  return (
    <main>
        <h1>About Me</h1>
        <article>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptate fugiat voluptatibus dolor facere asperiores iure quae fuga, maiores ipsum perspiciatis omnis, repellat, commodi nulla qui amet in consectetur vero. Sapiente quia rem molestiae possimus expedita ratione dolore, delectus blanditiis, soluta, dolor libero quis? Aperiam, incidunt nulla quo pariatur iusto sapiente quam quaerat ab voluptatum perspiciatis impedit excepturi mollitia doloremque. 
        <br></br> 
        <br></br>
        Quas cupiditate cumque corrupti, quos accusantium minima, saepe omnis sit sint, aliquid corporis assumenda culpa ratione. Odio distinctio exercitationem nemo, tempora aliquid necessitatibus debitis error, dolorum, veritatis reprehenderit reiciendis. Odio.</p>
        <br></br>
        <button className={styles.button}>
          <Link style={{margin: "5px"}} to="/">My work</Link>
        </button>
        </article>
    </main>
  )
}