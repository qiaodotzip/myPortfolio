import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contactImg.webp";
import { motion } from 'framer-motion';

class Contact extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    buttonText: 'Send',
    status: {}
  };

  encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({ "form-name": "contactForm", ...this.state })
    })
    .then(() => {
      this.setState({ status: { message: 'Success!', success: true }});
    })
    .catch(error => {
      this.setState({ status: { message: 'Error!', success: false }});
    });

    this.setState({ buttonText: "Sending..." });
  }

  render() {
    const { firstName, lastName, email, phone, message, buttonText, status } = this.state;

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
                <form method="POST" data-netlify="true" name="contactForm" onSubmit={this.handleSubmit}>
                  <input type="hidden" name="form-name" value="contactForm" />
                  <input type="hidden" name="bot-field" />
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="firstName" value={firstName} placeholder="First Name" onChange={this.handleChange} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="lastName" value={lastName} placeholder="Last Name" onChange={this.handleChange} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="email" value={email} placeholder="Email Address" onChange={this.handleChange} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="phone" value={phone} placeholder="Phone No." onChange={this.handleChange} />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={message} placeholder="Message" onChange={this.handleChange}></textarea>
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
    )
  }
}

export default Contact;
