import React, { Component } from "react";
import { Card, CardTitle, Col } from "reactstrap";
import { NavLink } from "react-router-dom";

class ApartmentIndex extends Component {
  render() {
    let { apartment } = this.props;
    return (
      <>
        <h3>Apartments Available</h3>
        <Col>
          {apartment.map((apartment) => {
            return (
              <Card body key={apartment.id}>
                <CardTitle>
                  <NavLink to={`/apartmentshow/${apartment.id}`}>
                    <h4>{apartment.street}</h4>
                  </NavLink>
                </CardTitle>
              </Card>
            );
          })}
        </Col>
      </>
    );
  }
}

export default ApartmentIndex;
