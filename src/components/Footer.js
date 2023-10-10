import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/resumeLogo.webp";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';

export const Footer = () =>{
    return (
        <footer className="footer">
        <Container>
            <Row className="align-item-center">
                <Col sm={6} className="footerIcon mb-4">
                <img src={logo} alt="Logo" />
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon" id="footerIcon">
                        <a href="https://www.linkedin.com/in/poh-qiao-hui-stefanie-a289b5238/"><img src={navIcon1} /></a>
                        <a href="https://github.com/qiaodotzip"><img src={navIcon2} alt="Github" /></a>
                    </div>
                    <p><a href="https://www.flaticon.com">Icons created by Freepik - Flaticon</a></p>
                    <p><a href="https://playgroundai.com/">Images created through Playground AI</a></p>
                    <p><a href="https://www.youtube.com/watch?v=hYv6BM2fWd8&t=42s&ab_channel=webdecoded">Portfolio Inspired by webdecodded</a></p>
                </Col>
            </Row>
        </Container>
        </footer>
    )
}