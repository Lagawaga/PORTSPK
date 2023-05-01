import { useNavigate } from "react-router-dom";
import "./NotFound.css";

export function NotFound(props) {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };
  return (
    <div className="about-wrapper" id="About">
      <div className="about-inner">
        <div className="notfound-inner-col">
          <div className="about-title-wrapper">
            <div className="about-title">Error 404</div>
          </div>
          <div className="about-text">
            <p>This page does not exist.</p>
          </div>
        </div>

        <div className="notfound-inner-col notfound-pic-block">
          <div className="notfound-buttons-container">
            <button className="button-arounder" onClick={routeChange}>
              Take me home!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
