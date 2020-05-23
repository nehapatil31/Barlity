import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import auth from "../../services/authService";
import { register } from "../../services/userService";
import { USER_TYPES } from "../../constants/enum";

class Register extends Form {
  state = {
    data: {
      email: "",
      password: "",
      fullName: "",
      location: "",
      userType: ""
    },
    userType: [
      { _id: 1, name: "Customer" },
      { _id: 2, name: "Barber" }
    ],
    errors: {}
  };
  schema = {
    email: Joi.string()
      .required()
      .label("Email")
      .email(),
    password: Joi.string()
      .required()
      .label("Password")
      .min(5),
    fullName: Joi.string()
      .required()
      .label("Name"),
    location: Joi.string()
      .required()
      .label("Location"),
    userType: Joi.string()
      .required()
      .label("User Type")
  };
  doSubmit = async () => {
    try {
      const response = await register(this.state.data);
      auth.loginWithJwt(response.token);
      const userInfo = auth.getCurrentUser();
      if (userInfo.userType === USER_TYPES.BARBER) {
        window.location = "/barberdashboard";
      } else if (userInfo.userType === USER_TYPES.CUSTOMER) {
        window.location = "/dashboard";
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };
  render() {
    return (
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("fullName", "Name")}
          {this.renderInput("location", "Location")}
          {this.renderSelect("userType", "User Type", this.state.userType)}
          {this.renderSubmit("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
