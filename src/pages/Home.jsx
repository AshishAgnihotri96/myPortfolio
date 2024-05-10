import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../assets/about.png";
import Particle from "../components/Particle";
import About from "../components/Home/About";
import Type from "../components/Home/Type";
import Skillset from "./Skillset";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "../assets/Ashish-Agnihotri-Resume-fw17_0166.pdf";
const Home = ({ activeTab }) => {
  const aboutRef = useRef(null);
  const skillset = useRef(null);
  const projects = useRef(null);
  const home = useRef(null);
  const contactRef = useRef(null);
  const downloadRef = useRef(null);
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleDownload = () => {
    // Replace 'resume.pdf' with the path to your resume file
    const resumeUrl = Resume;

    downloadRef.current.href = resumeUrl;
    downloadRef.current.click();
    window.open(resumeUrl, "_blank");
  };
  // Scroll to the selected tab when the activeTab changes
  useEffect(() => {
    if (activeTab === "about") {
      scrollToRef(aboutRef);
    } else if (activeTab === "skillset") {
      scrollToRef(skillset);
    } else if (activeTab === "contacts") {
      scrollToRef(contactRef);
    } else if (activeTab === "projects") {
      scrollToRef(projects);
    } else if (activeTab === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (activeTab === "resume") {
      handleDownload();
    }
  }, [activeTab]);
  return (
    <Container>
      <section>
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> Ashish Kumar Agnihotri</strong>
                </h1>

                <div style={{ padding: 30, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Col>
            </Row>
          </Container>
        </Container>
        <a ref={downloadRef} href="#" style={{ display: "none" }} download></a>
        <section ref={aboutRef}>
          <About />
        </section>
        <section ref={skillset}>
          <Skillset />
        </section>
        <section ref={projects}>
          <Projects />
        </section>
        <section ref={contactRef}>
          <Contact />
        </section>
      </section>
    </Container>
  );
};

export default Home;
