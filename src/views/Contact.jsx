import React from "react";
import "./contact.css";
import styles from "./ContactPage.module.css";

import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
/* EMAILJS */
import { useRef } from "react";
import emailjs from "emailjs-com";
/* SWEETALERT */
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pxdg5pd",
        "template_b987p97",
        form.current,
        "y9dMDRPPzkCyB623l"
      )
      .then(
        (result) => {
          Swal.fire({
            title: "Send!",
            text: "Message sent successfully!",
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "green",
            timer: "3000",
          });
        },
        (error) => {
          Swal.fire({
            title: "Error!",
            text: error.message,
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#d33",
            timer: "3000",
          });
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h2 className={styles.title}>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h6>Email</h6>
            <h6>marinenderson1@gmail.com</h6>
            <a
              href="mailto:marinenderson1@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h6>Messenger</h6>
            <h6>Enderson Marin</h6>
            <a
              href="https://m.me/enderson.marin.9"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h6>WhatsApp</h6>
            <h6>+573027729480</h6>
            <a
              href="https://web.whatsapp.com/send?phone=573027729480"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
