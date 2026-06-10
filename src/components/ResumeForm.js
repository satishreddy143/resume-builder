import React from "react";

function ResumeForm(props) {
  return (
    <div className="form-section">
      <h2>Resume Form</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={props.email}
        onChange={(e) => props.setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Phone Number"
        value={props.phone}
        onChange={(e) => props.setPhone(e.target.value)}
      />

      <input
        type="text"
        placeholder="LinkedIn URL"
        value={props.linkedin}
        onChange={(e) => props.setLinkedin(e.target.value)}
      />

      <input
        type="text"
        placeholder="GitHub URL"
        value={props.github}
        onChange={(e) => props.setGithub(e.target.value)}
      />

      <input
        type="text"
        placeholder="Portfolio URL"
        value={props.portfolio}
        onChange={(e) => props.setPortfolio(e.target.value)}
      />

      <textarea
        placeholder="Enter Education"
        value={props.education}
        onChange={(e) => props.setEducation(e.target.value)}></textarea>

      <textarea
        placeholder="Enter Work Experience"
        value={props.experience}
        onChange={(e) => props.setExperience(e.target.value)}></textarea>

      <div className="skill-box">
        <input
          type="text"
          placeholder="Enter Skill"
          value={props.skillInput}
          onChange={(e) => props.setSkillInput(e.target.value)}
        />

        <button onClick={props.addSkill}>Add Skill</button>
      </div>

      <textarea
        placeholder="Enter Projects"
        value={props.projects}
        onChange={(e) => props.setProjects(e.target.value)}></textarea>

      <input type="file" accept="image/*" onChange={props.handleImageUpload} />

      <button onClick={props.downloadPDF}>Download PDF</button>

      <button className="clear-btn" onClick={props.clearResume}>
        Clear Resume
      </button>
    </div>
  );
}

export default ResumeForm;
