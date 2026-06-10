import React from "react";

function ResumePreview(props) {
  return (
    <div
      className={`preview-section ${
        props.selectedTemplate === "classic"
          ? "classic-template"
          : props.selectedTemplate === "professional"
          ? "professional-template"
          : "modern-template"
      }`}
      ref={props.resumeRef}>
      {/* PROFILE IMAGE */}
      {props.image && (
        <img src={props.image} alt="Profile" className="profile-img" />
      )}

      {/* NAME */}
      <h1>{props.name}</h1>

      {/* CONTACT DETAILS */}
      <p>
        <strong>Email:</strong> {props.email}
      </p>

      <p>
        <strong>Phone:</strong> {props.phone}
      </p>

      <p>
        <strong>LinkedIn:</strong> {props.linkedin}
      </p>

      <p>
        <strong>GitHub:</strong> {props.github}
      </p>

      <p>
        <strong>Portfolio:</strong> {props.portfolio}
      </p>

      {/* EDUCATION */}
      <h3>Education</h3>

      <p>{props.education}</p>

      {/* EXPERIENCE */}
      <h3>Work Experience</h3>

      <p>{props.experience}</p>

      {/* SKILLS */}
      <h3>Skills</h3>

      <div className="skills-container">
        {props.skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}

            <button
              className="remove-btn"
              onClick={() => props.removeSkill(index)}>
              ×
            </button>
          </span>
        ))}
      </div>

      {/* PROJECTS */}
      <h3>Projects</h3>

      <p>{props.projects}</p>
    </div>
  );
}

export default ResumePreview;
