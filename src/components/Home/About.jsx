import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/profileP.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            
              Greetings! A passionate web developer known for crafting engaging
              and user-centric digital experiences. With a background in
              computer science and a keen eye for design, the journey in the
              world of web development began with a curiosity to blend
              technology with creativity. Over the years, diverse projects have
              been undertaken, each presenting unique challenges and
              opportunities for growth. From front-end development using modern
              frameworks like React and to back-end development with Node.js and
              MongoDB, thriving on the dynamic nature of web development. The
              goal is to continue exploring innovative solutions, collaborating
              with like-minded individuals, and contributing to projects that
              make a positive impact in the digital realm. Let's embark on this
              journey together, turning ideas into reality one line of code at a
              time.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                style={{ maxHeight: "350px", maxWidth: "350px" }}
                src={LaptopImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and{" "}
              <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AshishAgnihotri96"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ashish-agnihotri-138762167/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
