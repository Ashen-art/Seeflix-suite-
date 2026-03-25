import "./contactform.css";

export default function ContactForm() {
  return (
    <form className="form-container">
      <div className="f-user-data">
        <div className="f-group">
          <label htmlFor="name" className="f-label">Name</label>
          <input type="text" id="name" name="name" className="f-input" placeholder="Enter your name" required />
        </div>

        <div className="f-group">
          <label htmlFor="email" className="f-label">Email</label>
          <input type="email" id="email" name="email" className="f-input" placeholder="Enter your email" required />
        </div>
      </div>

      <div className="f-group">
        <label htmlFor="message" className="f-label">Message</label>
        <textarea rows={8} id="message" name="message" className="f-input text-area" placeholder="Leave a message..." required />
      </div>

      <button type="submit" className="f-btn">Send Message</button>
    </form>
  );
}