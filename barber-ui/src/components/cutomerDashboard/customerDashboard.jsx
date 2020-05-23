import React, { Component } from "react";
import { getBarbers } from "../../services/barberService";
import "./customerDashboard.css";

class CustomerDashboard extends Component {
  state = {
    barbers: []
  };

  async componentDidMount() {
    const { data: barbers } = await getBarbers();
    this.setState({ barbers });
    console.log(barbers);
  }
  render() {
    return (
      <div className="container">
        <h2 className="m-4">Barbers near you</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Location</th>
            </tr>
          </thead>

          <tbody>
            {this.state.barbers.map(barber => {
              return (
                <tr key={barber.userId}>
                  <th scope="row">{barber.userId}</th>
                  <td>{barber.name}</td>
                  <td>{barber.location}</td>
                </tr>
              );
            })}
          </tbody>
          {/* <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
            </tr>
          </tbody> */}
        </table>
      </div>
    );
  }
}

export default CustomerDashboard;
