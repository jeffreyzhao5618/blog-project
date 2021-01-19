import React from "react";
import resume from "../../assets/resume-2020-fall.pdf";

function Portfolio() {
  return (
    <div className="card preview-post mb-3">
      <div className="card-body">
        <p className="card-title primary" href="#">
          Portfolio
        </p>
        <p className="card-text">
          A little empty right now but hopefully I will be able to populate this
          section with my future projects!
        </p>
        <a
          href={resume}
          className="underline mt-3 d-inline-block standard"
          download
        >
          Download my resume
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
