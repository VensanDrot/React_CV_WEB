import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { SiUpwork } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_og5vi8r", "template_xinjc19", form.current, "3OkQuXhinIkzbt8Tf");
    emailjs.sendForm("service_og5vi8r", "template_9u6f198", form.current, "3OkQuXhinIkzbt8Tf").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact-icon" />
            <h4>Email:</h4>
            <h5>vensandrot@gmail.com</h5>
            <a href="mailto:vensandrot@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <FaLinkedinIn className="contact-icon" />
            <h4>LinkedIn:</h4>
            <h5>@vensandrot</h5>
            <a href="https://www.linkedin.com/in/vensandrot/" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <SiUpwork className="contact-icon" />
            <h4>UpWork:</h4>
            <h5>Vensan Drot</h5>
            <a href="https://www.upwork.com/freelancers/~013d38b18a0d01544c" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Message" rows="7" required></textarea>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
