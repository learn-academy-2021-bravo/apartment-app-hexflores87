import React, { Component } from "react";
import { Card, CardTitle, Col, CardText } from "reactstrap";
export class ApartmentShow extends Component {
  render() {
    console.log(this.props.apartments);
    let { apartment } = this.props;
    return (
      <>
        <h3>Apartment Info</h3>
        <Col sm="6">
          <Card body>
            <CardTitle>
              Information on apartment at address: {apartment.street}
            </CardTitle>
            <CardText>
              Apartment located at {apartment.city},{apartment.state}. Rent
              includes {apartment.price}. The apartment has {apartment.bedrooms}{" "}
              bedrooms and {apartment.bathrooms} bathrooms. Pets allowed?{" "}
              {apartment.pets}. If this interests you please contact{" "}
              {apartment.manager} at {apartment.manager_email}.{" "}
            </CardText>
          </Card>
        </Col>
      </>
    );
  }
}

export default ApartmentShow;
