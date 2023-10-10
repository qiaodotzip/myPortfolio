import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contactImg.webp";
import { motion } from 'framer-motion';

export const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const { firstName, lastName, email, phone, message } = formDetails;

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contactForm", ...formDetails })
    })
    .then(() => setStatus({ message: 'Success!', success: true }))
    .catch(error => setStatus({ message: 'Error!', success: false }));
  };

    return (
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <img src={contactImg} alt="Contact Us"/>
            </Col>
            <Col size={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: '-200px' }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h2>Get In Touch</h2>
                <form method="POST" data-netlify="true" name="contactForm" onSubmit={handleSubmit}>
                  <input type="hidden" name="form-name" value="contactForm" />
                  <input type="hidden" name="bot-field" />
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="firstName" value={firstName} placeholder="First Name" onChange={handleChange} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="lastName" value={lastName} placeholder="Last Name" onChange={handleChange} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="email" value={email} placeholder="Email Address" onChange={handleChange} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="phone" value={phone} placeholder="Phone No." onChange={handleChange} />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={message} placeholder="Message" onChange={handleChange}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

