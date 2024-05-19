import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <Link style={{margin: "12px"}} to="/">Home</Link>
            <Link style={{margin: "12px"}} to="/about">About</Link>
            <Link style={{margin: "12px"}} to="/contact">Contact</Link>
        </header>
    )
}