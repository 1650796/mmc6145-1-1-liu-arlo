import { Link } from 'react-router-dom'
import styles from '../styles/button.module.css'


function Projectone() {
    return (
        <div className='projectOne'>
            <h3>Full Brand Identity Guide</h3>
            <p>
                Check out the brand identity guide I created.
            </p>
            
            <button className={styles.button}>
            <Link style={{color: "#151b31"}} to="/projectone">Project 1</Link>
            </button>
         </div>
    )
}

function Projecttwo() {
    return (
        <div className='projectTwo'>
            <h3>Full-Stack Application</h3>
            <p>
                Check out the full-stack application I built.
            </p>
            <button className={styles.button}>
            <Link style={{color: "#151b31"}} to="/projecttwo">Project 2</Link>
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