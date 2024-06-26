import { Link } from 'react-router-dom'
import styles from '../styles/button.module.css'
import heroImg from '../assets/doubleexposure.png'

export default function Hero() {
    return (
    <div className='hero' style={{backgroundImage:`url(${heroImg})`}}>
        <h1>Arlo Liu</h1>
        <p>Does some stuff every now and then.</p>
        <button className={styles.button}>
        <Link style={{color: "#151b31"}} to="/about">More about me</Link>
        </button>
    </div>
    )
}