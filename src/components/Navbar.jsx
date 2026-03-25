import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
    return (

        <>
        <div className="navbar">
            <h1 className="nav-title">Seeflix</h1>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/media">Media</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        </>
    )
}