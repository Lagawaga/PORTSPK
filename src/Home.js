import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/Services`;
    navigate(path);
  };
  return (
    <div className="home-wrapper">
      <div className="logo">
        <img className="logo-size" src="/logo.png" alt="image" />
      </div>
      <div className="home">
        <div className="home-title">
          <h1>Protect your brand</h1>
        </div>
        <p className="home-blurb">
          At PortSPK<sup>™</sup>, we specialize in providing comprehensive
          penetration testing services to help our clients identify and mitigate
          potential cybersecurity vulnerabilities.
        </p>
        <div class="buttons-container">
          <button className="button-arounder" onClick={routeChange}>
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
