import React from "react";
import "./Services.css";
import { useNavigate } from "react-router-dom";

function Services() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/Contact`;
    navigate(path);
  };
  const routeChange2 = () => {
    let path = `/About`;
    navigate(path);
  };
  return (
    <div className="services-wrapper" id="About">
      <div className="about-inner">
        <div className="about-title-wrapper">
          <div className="about-title">What we provide</div>
        </div>
        <div className="services-text-intro">
          <p>
            PortSPK<sup>™</sup> is a company that specializes in penetration
            testing, our main objective is to provide our clients with
            comprehensive testing services that help identify any
            vulnerabilities in their systems and networks. Our team of skilled
            cybersecurity experts work to simulate attacks and identify any weak
            points that could potentially be exploited by malicious actors.
          </p>
          <p>
            In addition to our pen testing services, we also offer ongoing
            security consulting and support to help our clients stay up-to-date
            with the latest security best practices and mitigate any potential
            risks. Our ultimate goal is to provide our clients with the peace of
            mind that comes with knowing that their systems and networks are
            secure and protected from any potential threats.
          </p>
          <div className="services-inner-col">
            <div className="services-title-wrapper">
              <div className="services-title-sub">What we use</div>
            </div>
            <p>
              To ensure the highest level of accuracy and thoroughness, we
              utilize a combination of manual and automated testing methods. Our
              team uses the latest tools and techniques to simulate a variety of
              attacks, such as phishing attempts, social engineering, and
              network intrusion attacks. We also perform thorough testing of any
              applications or software that our clients use.
            </p>
          </div>
          <div className="about-inner-col services-pic-block">
            <div className="about-content-inner-block">
              <img className="services-picture" src="/metasploit.png"></img>
            </div>
            <div className="about-content-inner-block">
              <img className="services-picture" src="/kali-linux2.png"></img>
            </div>
            <div className="about-content-inner-block">
              <img className="services-picture" src="/wireshark.png"></img>
            </div>
            <div className="about-content-inner-block">
              <img className="services-picture" src="/burpsuite.png"></img>
            </div>
            <div className="about-content-inner-block">
              <img className="services-picture" src="/johntheripper.png"></img>
            </div>
            <div className="about-content-inner-block">
              <img className="services-picture" src="/nmap.png"></img>
            </div>
          </div>
          <div className="services-text-outro">
            <div className="services-title-wrapper">
              <div className="services-title-sub">Our priorities</div>
            </div>
            <p>
              Our company prioritizes the confidentiality and security of our
              client's data throughout the entire testing process. We have
              strict policies and procedures in place to ensure that any
              sensitive data is handled with the utmost care and
              confidentiality. We provide detailed reports to our clients that
              outline the vulnerabilities that we discovered, along with
              recommendations for how to address them.
            </p>
            <div class="buttons-container">
              <button className="button-arounder" onClick={routeChange}>
                Contact us
              </button>
              <button className="button-arounder" onClick={routeChange2}>
                Learn more about us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
