import ContactForm from "../components/ContactForm";
import "./contact.css";

export default function Contact() {
    return (
        <>
        <div className="contact-container" style={
            {
                height: "100vh",
            }
        }>
            <div className="c-overlay" />
            <div className="c-content">
                <div className="c-info">
                    <h3 className="c-info-title">Our socials</h3>
                    <ul className="c-socials">
                        <li> 
                            <div className="c-s-name">
                                <div className="c-s-dot" />
                                <span>Instagram</span>
                            </div> 
                            <a href="#">@Seeflix/</a>
                        </li>
                        <li> 
                            <div className="c-s-name">
                                <div className="c-s-dot" />
                                <span>Facebook</span>
                            </div> 
                            <a href="#">@Seeflix/</a>
                        </li>
                        <li> 
                            <div className="c-s-name">
                                <div className="c-s-dot" />
                                <span>LinkeInd</span>
                            </div> 
                            <a href="#">@Seeflix/</a>
                        </li>
                    </ul>
                </div>
                <div className="c-form">
                    <ContactForm />
                </div>
            </div>
        </div>
        </>
    )
}