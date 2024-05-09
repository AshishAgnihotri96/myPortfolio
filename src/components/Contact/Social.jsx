import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiTwotoneMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { CiPhone } from "react-icons/ci";
import "./Social.css";

const Social = () => {
  return (
    <Container style={{ padding: "30px" }}>
      <Row>
        <Col md={12} className="contact-social">
          <div className="contact-text">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and{" "}
              <span className="yellow">connect.</span>
            </p>
          </div>
          <ul className="contact-social-links">
            <li className="contact-icons">
              <a
                href="https://github.com/AshishAgnihotri96"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="contact-icons">
              <a
                href="https://www.linkedin.com/in/ashish-agnihotri-138762167/"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
        <Container
          style={{
            display: "flex",
            flexDirection: "row",

            alignItems: "center",
          }}
        >
          <a rel="noreferrer" className="icon-color  contact-social-icons">
            <AiTwotoneMail />
          </a>
          <h2 style={{ color: "wheat", marginLeft: "10px" }}>
            agnih96@gmail.com
          </h2>
        </Container>
        <Container
          style={{
            display: "flex",
            flexDirection: "row",

            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <a rel="noreferrer" className="icon-color  contact-social-icons">
            <CiPhone />
          </a>
          <h2 style={{ color: "wheat", marginLeft: "10px" }}>+91-8123192422</h2>
        </Container>
      </Row>
    </Container>
  );
};

export default Social;
