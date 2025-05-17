import React from "react";
import styles from "../Styles/ContactForm.module.css";
import { FaWhatsapp, FaClock } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";

const ContactForm = () => {
  return (
    <section className={styles.ContactSection}>
      <div className={`container ${styles.contactContainer}`}>
        <div className="row">
          <div className="col-md-5 ">
            <h1 className={styles.contactTitle}>Contact us</h1>

            <div className={styles.contactInfo}>
              <IoChatbubbleEllipses className={styles.icon} />
              <p className={styles.contactItem}>
                <span> +971 (4) 000 0000</span>
                <span>info@verabynaureen.com</span>
              </p>
            </div>
            <div className={styles.contactInfo}>
              <FaWhatsapp className={styles.icon} />
              <p className={styles.contactItem}>+971 (4) 000 0000</p>
            </div>
            <div className={styles.contactInfo}>
              <FaClock className={styles.icon} />
              <p className={styles.hoursTitle}>
                <strong>Opening Hours</strong>
                <p className={styles.hoursText}>
                  Monday - Friday: 9 am - 10 pm
                </p>
                <p className={styles.hoursText}>
                  Saturday & Sunday: 10 am - 10 pm
                </p>
              </p>
            </div>
          </div>
          <div className="col-md-7">
            <form className={styles.contactForm}>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className={`form-control ${styles.formInput}`}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    placeholder="Email"
                    className={`form-control ${styles.formInput}`}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className={`form-control ${styles.formInput}`}
                  />
                </div>
                <div className="col-md-6">
                  <select className={`form-control ${styles.formInput}`}>
                    <option value="">Select a treatment</option>
                  </select>
                </div>
                <div className="col-md-12">
                  <textarea
                    className={`form-control ${styles.formTextarea}`}
                    rows="4"
                    placeholder="Enquiry Description"
                  ></textarea>
                </div>
                <div className="col-md-12">
                  <button
                    type="submit"
                    className={`btn ${styles.submitButton}`}
                  >
                    SEND
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
