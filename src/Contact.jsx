import React from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
  };

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_65et7bg",
    "template_271nd7n",
    e.target,
    "9AnEBAiAjwHwnB1IG"
  )
  .then(() => {
    alert("Message sent successfully!");
    e.target.reset();
  })
  .catch((error) => {
  console.error("EmailJS Error:", error);
  alert("Error: " + error.text);
});


};

  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          
          <h1>We’re Here to Help</h1>
          <p>
            Have a question, suggestion, or need help with your order?
            Our team is always ready to help.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-container">

        {/* Left Side */}
        <div className="contact-info">

          <span className="small-title">GET IN TOUCH</span>

          <h2>Let's Talk About<br />
            <span>Your Shopping Experience</span>
          </h2>

          <p className="contact-description">
            We would love to hear from you. Contact us for any questions
            related to products, orders, delivery or support.
          </p>

          <div className="contact-box">
            <div className="contact-icon">📧</div>
            <div>
              <h3>Email Us</h3>
              <p>support@easydeal.com</p>
            </div>
          </div>

          <div className="contact-box">
            <div className="contact-icon">📞</div>
            <div>
              <h3>Call Us</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-box">
            <div className="contact-icon">📍</div>
            <div>
              <h3>Our Location</h3>
              <p>India</p>
            </div>
          </div>

        </div>

        {/* Right Side Form */}
        <div className="contact-form">

          <div className="form-header">
            
            <h2>Send Us a Message</h2>
            <p>
              Fill out the form below and we'll get back to you shortly.
            </p>
          </div>

          <form onSubmit={sendEmail}>

            <div className="input-row">
              <div className="input-group">
                <label>Your Name</label>
                <input
                  type="text"
                     name="name"
                     placeholder="Your Name"
                        required
                        />
              </div>

              <div className="input-group">
                <label>Email Address</label>
         <input
          type="email"
           name="email"
          placeholder="Your Email"
          required
            />
              </div>
            </div>

            <div className="input-group">
              <label>Subject</label>
              <input
               type="text"
            name="subject"
             placeholder="Subject"
                    required
                 />
            </div>

            <div className="input-group">
              <label>Your Message</label>
              <textarea
              name="message"
                placeholder="Write your message here..."
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="send-button">
              Send Message
              <span>→</span>
            </button>

          </form>

        </div>

      </section>

    </div>
  );
}

export default Contact;