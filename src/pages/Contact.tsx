import React from "react";
import Layout from "../components/layout/Layout";

const ContactForm: React.FC = () => {
  return (
      <Layout>
        <div style={styles.wrapper}>
          <div style={styles.container}>
            <h1 style={styles.heading}>Contact Us</h1>
            <form
                target="_blank"
                action="https://formsubmit.co/khalilim387@gmail.com"
                method="POST"
            >
              <div style={styles.formGroup}>
                <div style={styles.row}>
                  <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                      style={styles.input}
                  />
                  <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      style={styles.input}
                  />
                </div>
              </div>
              <div style={styles.formGroup}>
              <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={6}
                  style={styles.textarea}
              />
              </div>
              <button type="submit" style={styles.button}>
                Submit Form
              </button>
            </form>
          </div>
        </div>
      </Layout>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    paddingTop: "120px", // مسافة من الهيدر
    paddingBottom: "60px",
    backgroundColor: "#FFF7F1", // لون الخلفية
    minHeight: "100vh",
  },
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    background: "#fff",
    padding: "40px 30px",
    borderRadius: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    color: "#f97316",
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "28px",
    fontWeight: "700",
  },
  formGroup: {
    marginBottom: "20px",
  },
  row: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "1.5px solid #f97316",
    fontSize: "16px",
    outlineColor: "#f97316",
    transition: "border-color 0.3s",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1.5px solid #f97316",
    fontSize: "16px",
    outlineColor: "#f97316",
    transition: "border-color 0.3s",
  },
  button: {
    backgroundColor: "#f97316",
    color: "#fff",
    border: "none",
    padding: "15px",
    fontSize: "18px",
    borderRadius: "10px",
    width: "100%",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background-color 0.3s",
  },
};

export default ContactForm;
