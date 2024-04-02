// Resume.js
import React from "react";
import Resume from "../assets/Ashish_Agnihotri_resume.pdf"
const Resume2 = () => {
  const handleDownload = () => {
    // Replace 'resume.pdf' with the path to your resume file
    const resumeUrl =
      "https://raw.githubusercontent.com/AshishAgnihotri96/updatedResume/master/Ashish-Agnihotri-Resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <div>
      <h2>Resume</h2>
      <a href={Resume} download target="_blank">
        Download Resume
      </a>
    </div>
  );
};

export default Resume2;
