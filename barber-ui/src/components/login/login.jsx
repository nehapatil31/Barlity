import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import auth from "../../services/authService";
import { USER_TYPES } from "../../constants/enum";

class Login extends Form {
  state = {
    data: {
      email: "",
      password: ""
    },
    errors: {}
  };
  schema = {
    email: Joi.string()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Password")
  };
  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.email, data.password);

      console.log(auth.getCurrentUser());
      const userInfo = auth.getCurrentUser();
      if (userInfo.userType === USER_TYPES.BARBER) {
        window.location = "/barberdashboard";
      } else if (userInfo.userType === USER_TYPES.CUSTOMER) {
        window.location = "/dashboard";
      }
      //window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        errors.password = ex.response.data;
        this.setState({ errors });
      }
    }
  };
  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderSubmit("Login")}
        </form>
      </div>
    );
  }
}

export default Login;
