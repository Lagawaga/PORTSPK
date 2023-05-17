import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";

function About() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/Contact`;
    navigate(path);
  };
  const routeChange2 = () => {
    let path = `/Blog`;
    navigate(path);
  };
  return (
    <div className="about-wrapper" id="About">
      <div className="about-inner">
        <div className="about-inner-col">
          <div className="about-title-wrapper">
            <div className="about-title">Our Story</div>
          </div>
          <div className="about-text">
            <p>
              Our story starts at a hangout a few years back, we were a group of
              old colleagues catching up and the question came up - "how secure
              is the code we write ?", or how easy would it be for someone to
              use the code we wrote to get into our application.
            </p>
            <p>
              Everyday you hear all these horror stories on the news about
              various cyber attacks and you think to yourself "could this happen
              to me?". We ultimately began a journey to figure this out for
              ourselves, and in the process we discovered a new passion.
            </p>
            <p>
              Our goal today is to provide an affordable penetration testing and
              cyber security analysis service to smaller businesses all while
              passing on some of our knowledge. We pride ourselves on
              communicating things to our clients in a language they understand
              and can apply.
            </p>
          </div>
          <div className="buttons-container">
            <button className="button-arounder" onClick={routeChange}>
              Contact us
            </button>
            <button className="button-arounder" onClick={routeChange2}>
              Read our blog
            </button>
          </div>
        </div>

        <div className="about-pic-block">
          <img className="ottawapic-size" src="/ottawapic.jpg" alt="ottawa" />
        </div>
      </div>
    </div>
  );
}

export default About;
