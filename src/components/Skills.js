import python from "../assets/img/python.webp";
import js from "../assets/img/js.webp";
import java from "../assets/img/java.webp";
import react from "../assets/img/react.webp";
import htmlcss from "../assets/img/htmlcss.webp";
import mysql from "../assets/img/mysql.webp";
import php from "../assets/img/php.webp";
import node from "../assets/img/node-js.webp";
import cSharp from "../assets/img/c-sharp.webp";
import jquery from "../assets/img/jquery.webp";
import vue from "../assets/img/vuejs.webp";
import flask from "../assets/img/flask.webp";
import express from "../assets/img/express.svg";
import bootstrap from "../assets/img/bootstrap.webp";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from 'framer-motion';

export const Skills = () => {
    const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
    };

    return (
        <motion.section 
        initial={{ y: 0}}
        transition={{ type: 'spring', stiffness: 40}}
        whileInView={{ y: -350}}
        >
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 style={{paddingBottom: '30px'}}>Programming Languages</h2>
                        <div className="wrapper1">
                        <motion.Carousel 
                            initial={{ opacity: 0}}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            >
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={php} alt="Image" />
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                <img src={cSharp} alt="Image" />
                                <h5>C# {"(Basic)"}</h5>
                            </div>
                        </Carousel>
                        </motion.Carousel>
                        </div>
                        <h2 style={{paddingTop: '40px', paddingBottom: '30px'}}>Front-end Development</h2>
                        <div className="wrapper2">
                        <motion.Carousel 
                            initial={{ opacity: 0}}
                            whileInView={{ opacity: 1}}
                            transition={{ duration: 1 }}
                            >
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={htmlcss} alt="Image" />
                                <h5>HTML & CSS</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={jquery} alt="Image" />
                                <h5>jQuery</h5>
                            </div>
                            <div className="item">
                                <img src={vue} alt="Image" />
                                <h5>Vue {"(Basic)"}</h5>
                            </div>
                        </Carousel>
                        </motion.Carousel>
                        </div>
                        <h2 style={{paddingTop: '40px', paddingBottom: '30px'}}>Back-end Development</h2>
                        <div className="wrapper3">
                        <motion.Carousel 
                            initial={{ opacity: 0}}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            >
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={flask} alt="Image" />
                                <h5>Python Flask</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Image" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="Image" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={express} alt="Image" />
                                <h5>Express.js {"(Basic)"}</h5>
                            </div>
                        </Carousel>
                        </motion.Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </motion.section>
    )
}