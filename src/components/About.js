import { Container, Row, Col } from "react-bootstrap"
import aboutImg from "../assets/img/me.webp";
import rp from "../assets/img/rp.webp";
import { motion } from 'framer-motion';

export const About = () => {
    return (
        <motion.section 
        initial={{ y: 0}}
        transition={{ type: 'spring', stiffness: 40}}
        whileInView={{ y: -350}}
        >
        <section className="about" id="about">
            <Container>
                <Row className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-center">
                    <Col xs={12} md={6} xl={5}>
                        <img className="me" src={aboutImg} alt="About Img"/>
                    </Col>
                    <Col xs={12} md={6} xl={7}>

                                <span className="tagline">ABOUT ME</span>
                                <p>I'm a cybersecurity student at Republic Polytechnic with a strong passion for full-stack development. My approach seamlessly integrates secure coding practices with innovative web solutions. I take pride in crafting digital experiences that are not only visually captivating but also engaging and secure.</p>
                                <img className="rp" src={rp} alt="RP Img"/>

                    </Col>
                </Row>
            </Container>
        </section>
        </motion.section>
    )
}

