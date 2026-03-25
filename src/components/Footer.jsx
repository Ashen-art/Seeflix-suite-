import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="f-content">
                <span className="f-c-title">Seeflix</span>
                <p>&copy; 2034 Seeflix. All rights reserved</p>
            </div>
            <ul className="f-nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/media">Media</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}