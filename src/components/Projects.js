import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import PMI1 from "../assets/img/PMI1.webp";
import PMI2 from "../assets/img/PMI2.webp";
import PMI3 from "../assets/img/PMI3.webp";
import PSA1 from "../assets/img/PSA1.webp";
import PSA2 from "../assets/img/PSA2.webp";
import PSA3 from "../assets/img/PSA3.webp";
import KISP1 from "../assets/img/KISP1.webp";
import KISP2 from "../assets/img/KISP2.webp";
import KISP3 from "../assets/img/KISP3.webp";
import colorSharp2 from "../assets/img/color-sharp2.webp";
import { motion } from 'framer-motion';

export const Projects = () => {

  const PMI = [
    {
      title: "3rd Runner-up",
      description: "Worth-it. Winners next year?",
      imgUrl: PMI2,
    },
    {
      title: "Presentation",
      description: "Fighting for my life during Q&A.",
      imgUrl: PMI1,
    },
    {
      title: "Project Presentation Board",
      description: "Digital Copy can be found on Figma!",
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

  const KISP = [
    {
      title: "Carbon Emission Report",
      description: "UI/UX Prototype on Figma",
      imgUrl: KISP1,
    },
    {
      title: "Home Page",
      description: "Highly recommend viewing the video!",
      imgUrl: KISP2,
    },
    {
      title: "Pathfinding + Eco-market place",
      description: "UI/UX Prototype on Figma",
      imgUrl: KISP3,
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
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Project 4</Nav.Link>
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
                        <button><a href="https://github.com/qiaodotzip/neobytes"><span>Source Code</span></a></button>
                        </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <p style={{ marginTop: '20px', fontWeight: 700, fontSize: '25px' }}>
                        PMI SG Chapter Student Project Management Competition 2023, 3rd Runner-up
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
                        <p style={{ marginTop: '20px' }}>Planning an IT Project combining sustainability and tech-savvy solutions with fresh produce and Generative AI. Board content can be viewed in the Figma link below. Key highlights include:</p>
                        <p>
                        <ul>
                        <li>Planning an AI Project, combining sustainability and tech-savvy solutions with fresh produce and Generative AI.</li>
                        <li>Hybrid Project Management Methodology: Planning and designing the project management lifecycle using a combined agile and waterfall approach.</li>
                        <li>AI Technology Evaluation and User-Flow Design: Evaluating AI technologies and designing user-flow.</li>
                        <li>Comprehensive Use of Project Management Tools: Utilizing tools like a risk register and Gantt chart, along with presenting a budget and ROI analysis.</li>
                        </ul>
                        </p>
                        <p>
                        <button><a href="https://www.figma.com/file/R4PgwiVYlFX102rtKQBFmd/PMI-2023-GRASS?type=design&node-id=0%3A1&mode=design&t=nFJcQBLwTcAu4niI-1"><span>View Figma</span></a></button>
                        </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <p style={{ marginTop: '20px', fontWeight: 700, fontSize: '25px' }}>
                        2nd Kumar Sustainability & Innovation Prize, Finalist
                        </p>
                        <p>
                        Verdefy is a comprehensive PaaS solution designed to aid SMEs in managing and reducing their carbon emissions. Demo Day is scheduled for March 2024.
                        </p>
                        <Row>
                        {
                          KISP.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                        <p style={{ marginTop: '20px' }}>Key Features of Verdefy:</p>
                        <p>
                        <ul>
                        <li>Enables businesses to calculate, track, and manage carbon emissions.</li>
                        <li>Incorporates blockchain-supported carbon credit trading.</li>
                        <li>Powered by advanced algorithms, data analytics, and AI for accuracy and efficiency.</li>
                        <li>Helps businesses adapt to carbon tax regulations and embrace eco-friendly practices.</li>
                        <li>Facilitates connections with eco-friendly suppliers and partners.</li>
                        <li>Empowers businesses to make data-driven, sustainable decisions.</li>
                        </ul>
                        </p>
                        <p>
                        As the Tech Lead, my role involved developing the AI and data analytics components, as well as designing the overall platform architecture. Submission video narrated and made by me.
                        </p>
                        <p>
                        <button><a href="https://youtu.be/SCVyogJ2Tdo"><span>View Video</span></a></button>
                        </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                        <p style={{ marginTop: '20px', fontWeight: 700, fontSize: '25px' }}>
                            Web Portfolio
                        </p>
                        <p>You're looking at it right now! Made with React.js, Framer Motion, CSS Animation and Bootstrap. Hosted on Netlify. 
                        </p>
                        <p>
                        <button><a href="https://github.com/qiaodotzip/myPortfolio"><span>View Code</span></a></button>
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