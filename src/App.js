import React, { useState, useRef, useEffect } from "react";
import "./App.css";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import Header from "./components/Header";
import TemplateCard from "./components/TemplateCard";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import Footer from "./components/Footer";

function App() {
  // ================= DARK MODE =================
  const [darkMode, setDarkMode] = useState(false);

  // ================= TEMPLATE =================
  const [selectedTemplate, setSelectedTemplate] = useState("modern");

  // ================= RESUME SCORE =================
  const [resumeScore, setResumeScore] = useState(0);

  // ================= BASIC DETAILS =================
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // ================= LINKS =================
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [portfolio, setPortfolio] = useState("");

  // ================= EDUCATION & EXPERIENCE =================
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");

  // ================= SKILLS =================
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");

  // ================= PROJECTS =================
  const [projects, setProjects] = useState("");

  // ================= PROFILE IMAGE =================
  const [image, setImage] = useState("");

  // ================= RESUME REFERENCE =================
  const resumeRef = useRef();

  // ================= LOAD SAVED DATA =================
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("resumeData"));

    if (savedData) {
      setName(savedData.name || "");
      setEmail(savedData.email || "");
      setPhone(savedData.phone || "");

      setLinkedin(savedData.linkedin || "");
      setGithub(savedData.github || "");
      setPortfolio(savedData.portfolio || "");

      setEducation(savedData.education || "");
      setExperience(savedData.experience || "");

      setSkills(savedData.skills || []);

      setProjects(savedData.projects || "");

      setImage(savedData.image || "");

      setSelectedTemplate(savedData.selectedTemplate || "modern");

      setDarkMode(savedData.darkMode || false);
    }
  }, []);

  // ================= AUTO SAVE =================
  useEffect(() => {
    const resumeData = {
      name,
      email,
      phone,

      linkedin,
      github,
      portfolio,

      education,
      experience,

      skills,

      projects,

      image,

      selectedTemplate,

      darkMode,
    };

    localStorage.setItem("resumeData", JSON.stringify(resumeData));
  }, [
    name,
    email,
    phone,
    linkedin,
    github,
    portfolio,
    education,
    experience,
    skills,
    projects,
    image,
    selectedTemplate,
    darkMode,
  ]);

  // ================= RESUME SCORE =================
  useEffect(() => {
    let score = 0;

    if (name) score += 10;
    if (email) score += 10;
    if (phone) score += 10;
    if (education) score += 15;
    if (experience) score += 20;
    if (skills.length > 0) score += 15;
    if (projects) score += 10;
    if (linkedin) score += 5;
    if (github) score += 5;

    setResumeScore(score);
  }, [
    name,
    email,
    phone,
    education,
    experience,
    skills,
    projects,
    linkedin,
    github,
  ]);

  // ================= ADD SKILL =================
  const addSkill = () => {
    if (skillInput.trim() !== "") {
      setSkills([...skills, skillInput]);

      setSkillInput("");
    }
  };

  // ================= REMOVE SKILL =================
  const removeSkill = (indexToRemove) => {
    const updatedSkills = skills.filter((_, index) => index !== indexToRemove);

    setSkills(updatedSkills);
  };

  // ================= CLEAR RESUME =================
  const clearResume = () => {
    setName("");
    setEmail("");
    setPhone("");

    setLinkedin("");
    setGithub("");
    setPortfolio("");

    setEducation("");
    setExperience("");

    setSkills([]);
    setSkillInput("");

    setProjects("");

    setImage("");

    setSelectedTemplate("modern");

    setDarkMode(false);

    setResumeScore(0);

    localStorage.removeItem("resumeData");
  };

  // ================= IMAGE UPLOAD =================
  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);

      setImage(imageURL);
    }
  };

  // ================= DOWNLOAD PDF =================
  const downloadPDF = () => {
    const input = resumeRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");

      const imgWidth = 190;

      const pageHeight = 295;

      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);

      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;

        pdf.addPage();

        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);

        heightLeft -= pageHeight;
      }

      pdf.save("resume.pdf");
    });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* HEADER */}
      <Header />

      {/* TEMPLATE CARDS */}
      <TemplateCard
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
      />

      {/* DARK MODE BUTTON */}
      <div className="dark-mode-btn">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>
      </div>

      {/* RESUME SCORE */}
      <div className="score-box">
        <h2>Resume Score: {resumeScore}/100</h2>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${resumeScore}%` }}></div>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="container">
        {/* FORM SECTION */}
        <ResumeForm
          name={name}
          email={email}
          phone={phone}
          linkedin={linkedin}
          github={github}
          portfolio={portfolio}
          education={education}
          experience={experience}
          projects={projects}
          setName={setName}
          setEmail={setEmail}
          setPhone={setPhone}
          setLinkedin={setLinkedin}
          setGithub={setGithub}
          setPortfolio={setPortfolio}
          setEducation={setEducation}
          setExperience={setExperience}
          setProjects={setProjects}
          handleImageUpload={handleImageUpload}
          downloadPDF={downloadPDF}
          skillInput={skillInput}
          setSkillInput={setSkillInput}
          addSkill={addSkill}
          clearResume={clearResume}
        />

        {/* PREVIEW SECTION */}
        <ResumePreview
          resumeRef={resumeRef}
          image={image}
          name={name}
          email={email}
          phone={phone}
          linkedin={linkedin}
          github={github}
          portfolio={portfolio}
          education={education}
          experience={experience}
          skills={skills}
          projects={projects}
          removeSkill={removeSkill}
          selectedTemplate={selectedTemplate}
        />
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
