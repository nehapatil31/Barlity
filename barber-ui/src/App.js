import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import WelcomePage from "./components/welcomePage/welcomePage";
import Login from "./components/login/login";
import Register from "./components/register/register";
import CustomerDashboard from "./components/cutomerDashboard/customerDashboard";
import BarberDashboard from "./components/barberDashboard/barberDashboard";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/welcome" component={WelcomePage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={CustomerDashboard} />
        <Route path="/barberdashboard" component={BarberDashboard} />
        <Redirect from="/" exact to="/welcome" />
        {/* <Route path="/register" component={RegisterForm} />
        <ProtectedRout path="/movies/:movieId" component={MovieForm} />
        <Route
          path="/movies"
          render={props => <Movies {...props} user={user} />}
        />
        <Route path="/customers" component={Customers} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/movies" />
        <Redirect to="/not-found" /> */}
      </Switch>
    </div>
  );
}

export default App;
