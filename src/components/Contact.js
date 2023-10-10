import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contactImg.webp";
import { motion } from 'framer-motion';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '', 
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = (e) => {
    setButtonText("Sending...");
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
                <img src={contactImg} alt="Contact Us"/>
          </Col>
          <Col size={12} md={6}>
              <motion.Div
                initial={{ opacity: 0, y: '-200px' }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                >
                <h2>Get In Touch</h2>
                <form method="POST" onSubmit={handleSubmit} name="contactForm" netlify>
                <input type="hidden" name="form-name" value="contactForm" />
                <input type="hidden" name="bot-field" />
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="firstName" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="lastName" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="phone" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
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
                </motion.Div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}