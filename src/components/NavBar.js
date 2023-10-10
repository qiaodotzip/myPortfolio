import { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from '../assets/img/resumeLogo.webp';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import { motion, useScroll, useSpring } from "framer-motion"

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress)

    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }

      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }

    const handleNavLinkClick = (e, sectionId, adjustment = 0) => {
      e.preventDefault();
      const section = document.querySelector(sectionId);
      if (section) {
        const offsetTop = section.offsetTop;
        window.scrollTo({
          top: offsetTop - adjustment,
          behavior: 'smooth',
        });
      }
    };    

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
          <motion.div style={{ scaleX }} className="progressBar"/>
          <Container>
            <Navbar.Brand href="#home">
            <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                img src={logo} 
                alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>

                <Nav.Link 
                href="#about" 
                className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} 
                onClick={(e) => {
                  handleNavLinkClick(e, '#about', 400);
                  onUpdateActiveLink('about');
                }}>
                About
              </Nav.Link>

              <Nav.Link 
                href="#skills" 
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
                onClick={(e) => {
                  handleNavLinkClick(e, '#skills', 460);
                  onUpdateActiveLink('skills');
                }}>
                Skills
              </Nav.Link>

              <Nav.Link 
                href="#projects" 
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                onClick={(e) => {
                  handleNavLinkClick(e, '#projects', -50);
                  onUpdateActiveLink('projects');
                }}>
                Projects
              </Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/poh-qiao-hui-stefanie-a289b5238/"><img src={navIcon1} alt="Linkedin" /></a>
                  <a href="https://github.com/qiaodotzip"><img src={navIcon2} alt="Github" /></a>
                </div>
                <button className="vvd" onClick={() => { onUpdateActiveLink('connect'); window.location.href="#connect"; }}><span>Let's Connect</span></button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );  
}