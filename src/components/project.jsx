import { Link } from 'react-router-dom'
import styles from '../styles/button.module.css'

function Projectone() {
    return (
        <div className='projectOne'>
            <h3>Full Brand Identity Guide</h3>
            <p>
                Check out my brand identity guide.
            </p>
            
            <button className={styles.button}>
            <Link style={{margin: "5px"}} to="/projectone">Project 1</Link>
            </button>
         </div>
    )
}

function Projecttwo() {
    return (
        <div className='projectTwo'>
            <h3>Full-stack Application</h3>
            <p>
                I am just a poor little meow meow.
            </p>
            <button className={styles.button}>
            <Link style={{margin: "5px"}} to="/projecttwo">Project 2</Link>
            </button>
         </div>
    )
}

export default function Project() {
    return (
        <section>
         <Projectone />
         <Projecttwo />
        </section>
    )
}