import React from "react";

function TemplateCard(props) {
  return (
    <div className="template-section">
      <h2>Select Resume Template</h2>

      <div className="template-container">
        {/* MODERN */}
        <div
          className={
            props.selectedTemplate === "modern"
              ? "template-card active"
              : "template-card"
          }>
          <h3>Modern Template</h3>

          <p>Modern stylish resume design.</p>

          <button onClick={() => props.setSelectedTemplate("modern")}>
            Select Modern
          </button>
        </div>

        {/* CLASSIC */}
        <div
          className={
            props.selectedTemplate === "classic"
              ? "template-card active"
              : "template-card"
          }>
          <h3>Classic Template</h3>

          <p>Simple clean professional layout.</p>

          <button onClick={() => props.setSelectedTemplate("classic")}>
            Select Classic
          </button>
        </div>

        {/* PROFESSIONAL */}
        <div
          className={
            props.selectedTemplate === "professional"
              ? "template-card active"
              : "template-card"
          }>
          <h3>Professional Template</h3>

          <p>Corporate ATS friendly resume style.</p>

          <button onClick={() => props.setSelectedTemplate("professional")}>
            Select Professional
          </button>
        </div>
      </div>
    </div>
  );
}

export default TemplateCard;
