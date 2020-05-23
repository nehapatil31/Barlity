import React from "react";
import "./welcomePage.css";
import barberTools from "../../assets/barber-tools.jpg";

const WelcomePage = (props) => {
  const handleLoginBtn = () => {
    props.history.push("/login");
  };
  const handleRegisterBtn = () => {
    props.history.push("/register");
  };
  return (
    <React.Fragment>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${barberTools})` }}
      ></div>
      <div className="welcome">
        <h1 className="app-name">Barlity</h1>
        <p className="tag-name">Find barber in no time...</p>
        <div onClick={handleLoginBtn} className="btn login-btn">
          Login to proceed
        </div>
        <div onClick={handleRegisterBtn} className="btn login-btn">
          First Time? Register..
        </div>
      </div>
    </React.Fragment>
  );
};

export default WelcomePage;
