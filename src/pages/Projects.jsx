import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

import project from "../assets/passwordGenerator.png";
import lift from "../assets/inkshop.png";

import kickstart from "../assets/movieApp.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="The Ink Shop"
              description="The Printers Website is a modern and user-friendly platform designed for users to explore various types of printers and make purchases conveniently. Whether you're a home user, student, or business professional, our website offers a wide range of printers to suit your needs."
              ghLink="https://github.com/AshishAgnihotri96/theinkshop.git"
              demoLink="https://theinkshop.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Password Generator"
              description="The Password Generator is a web application that allows users to generate secure passwords with customizable options. It provides a convenient way to create strong passwords for various online accounts, enhancing security and protecting user data."
              ghLink="https://github.com/AshishAgnihotri96/passwordGenerator.git"
              demoLink="https://fervent-volhard-f2991a.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Movie App"
              description="The Movie Search and Watch App is a web application that allows users to search for movies, view details, and stream them online. With a vast database of movies, users can discover new releases, browse by genre, and enjoy their favorite films from the comfort of their home."
              ghLink="https://github.com/AshishAgnihotri96/moviesApp.git"
              demoLink="https://entertainmenthub.netlify.app/"
            />

            
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
