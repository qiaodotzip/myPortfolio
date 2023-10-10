import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import PMI1 from "../assets/img/PMI1.webp";
import PMI2 from "../assets/img/PMI2.webp";
import PMI3 from "../assets/img/PMI3.webp";
import PSA1 from "../assets/img/PSA1.webp";
import PSA2 from "../assets/img/PSA2.webp";
import PSA3 from "../assets/img/PSA3.webp";
import colorSharp2 from "../assets/img/color-sharp2.webp";
import { motion } from 'framer-motion';

export const Projects = () => {

  const PMI = [
    {
      title: "Generative AI Chatbot Interaction",
      description: "Made in Figma",
      imgUrl: PMI2,
    },
    {
      title: "User Interface (UI) & Experience (UX) Design",
      description: "Made in Figma",
      imgUrl: PMI1,
    },
    {
      title: "Personalized AI-Driven Advertising",
      description: "Made in Figma",
      imgUrl: PMI3,
    },
  ];

  const PSA = [
    {
      title: "UI/UX Interface",
      description: "Of our Main Feature",
      imgUrl: PSA3,
    },
    {
      title: "Presentation",
      description: "Proud to be the anchor presenter.",
      imgUrl: PSA1,
    },
    {
      title: "Working Together",
      description: "What does Neobytes even mean?",
      imgUrl: PSA2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
                <motion.div
                initial={{ y: 0}}
                transition={{ type: 'spring', stiffness: 40}}
                whileInView={{ y: -350}}
                >
                <div>
                <h2>Projects</h2>
                <p>Currently, most of my projects stem from my achievements. Personal projects are currently being perfected.</p>
                </div>
                </motion.div>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <motion.div
                  initial={{ y: -150}}
                  transition={{ type: 'spring', stiffness: 30}}
                  whileInView={{ y: -40}}
                  >
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Project 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Project 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  </motion.div>
                    <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  >
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                        <p style={{ marginTop: '20px', fontWeight: 700, fontSize: '25px' }}>
                        PMI SG Chapter Student Project Management Competition 2023, Top 8 Finalists 
                        </p>
                        <Row>
                        {
                          PMI.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                        <p style={{ marginTop: '20px' }}>We proposed an e-commerce platform to spotlight Singapore's local farmers. Key highlights include:</p>
                        <p>
                        <ul>
                          <li>Combining fresh produce with the power of Generative AI.</li>
                          <li>OpenAI-driven chatbot for enhanced customer support.</li>
                          <li>Backend optimizations to streamline orders and deliveries.</li>
                          <li>Focus on sustainability with tech-savvy solutions.</li>
                        </ul>
                        </p>
                        <p>
                          The finals will be held on 24th November.
                        </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <p style={{ marginTop: '20px', fontWeight: 700, fontSize: '25px' }}>
                            PSA Code Sprint Hackathon 2023, 3rd Runner Up
                        </p>
                        <p>
                        Within 3 days, we devised a dynamic cargo container rental platform. 
                        </p>
                        <Row>
                        {
                          PSA.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                        <p style={{ marginTop: '20px' }}>Within 3 days, we devised a dynamic cargo container rental platform:</p>
                        <p>
                        <ul>
                          <li>Utilized a data-driven algorithm.</li>
                          <li>Dynamically adjusted prices based on Market, Seasonal, Historical, and Base factors.</li>
                          <li>Real-time reflection of supply and demand.</li>
                          <li>AI-enhanced suggestions for users to tailor their rental plans.</li>
                          <li>Prioritizing options like cost-efficiency or eco-friendliness.</li>
                          <li>Innovation that streamlines container logistics and promotes eco-conscious decisions.</li>
                        </ul>
                        </p>
                        <p>
                          I designed the database as well as coded the back-end logic. Do note that the following code only contains my part.
                        </p>
                        <p>
                        <button><a href="https://gitfront.io/r/qiaodotzip/15Y9CC9LmCpk/PSAbackend2023/"><span>View Code</span></a></button>
                        </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <p style={{ marginTop: '20px', fontWeight: 700, fontSize: '25px' }}>
                            Web Portfolio
                        </p>
                        <p>You're looking at it right now! Made with HTML, CSS, React.js, and using animation libraries such as Framer and CSS Animation. Hosted on Netlify. 
                        </p>
                        <p>
                        <button><a href="https://github.com/qiaodotzip/portfolio"><span>View Code</span></a></button>
                        </p>
                    </Tab.Pane>
                  </Tab.Content>
                  </motion.div>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}