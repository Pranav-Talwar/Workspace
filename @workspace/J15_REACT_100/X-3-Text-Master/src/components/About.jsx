import React from "react";

export default function About(props) {
  return (
    <div className="container" style={{ color: props.mode === "dark" ? "white" : "black", backgroundColor: props.mode === "dark" ? "black" : "white" }}>
      <h1 className="my-3">About TextMaster</h1>
      <div className="accordion" id="accordionExample" style={{ color: props.mode === "dark" ? "white" : "black", backgroundColor: props.mode === "dark" ? "black" : "white" }}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{ color: props.mode === "dark" ? "white" : "black", backgroundColor: props.mode === "dark" ? "black" : "white" }}
            >
              What is TextMaster?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{ color: props.mode === "dark" ? "white" : "black", backgroundColor: props.mode === "dark" ? "black" : "white" }}>
              <strong>TextMaster</strong> is a powerful tool designed to help
              you analyze and manipulate text with ease. Whether you're counting
              words, changing text case, or removing extra spaces, TextMaster
              provides all the utilities you need.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{ color: props.mode === "dark" ? "white" : "black", backgroundColor: props.mode === "dark" ? "black" : "white" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Why Use TextMaster?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{ color: props.mode === "dark" ? "white" : "black", backgroundColor: props.mode === "dark" ? "black" : "white" }}>
              <strong>Why TextMaster?</strong> TextMaster is quick, intuitive,
              and easy to use. It's the ideal tool for writers, students, and
              developers who need to format or analyze text efficiently without
              any complex setup.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{ color: props.mode === "dark" ? "white" : "black", backgroundColor: props.mode === "dark" ? "black" : "white" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Features of TextMaster
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{ color: props.mode === "dark" ? "white" : "black", backgroundColor: props.mode === "dark" ? "black" : "white" }}>
              <ul>
                <li>Word and character count</li>
                <li>Convert text to uppercase or lowercase</li>
                <li>Remove extra spaces from text</li>
                <li>Copy text to clipboard</li>
                <li>Preview the text in real time</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
