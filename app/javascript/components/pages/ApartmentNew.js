import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Redirect } from "react-router-dom";

class ApartmentNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        street: "",
        city: "",
        state: "",
        manager: "",
        email: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
      },
      success: false,
    };
  }
  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createNewApartment(this.state.form);
    this.setState({ success: true });
  };
  render() {
    return (
      <>
        <h3>Start Your San Diego Apartment Search!</h3>
        <Form id="form">
          <FormGroup>
            <Label for="name">Street</Label>
            <Input
              type="string"
              name="street"
              onChange={this.handleChange}
              value={this.state.form.street}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="string"
              name="city"
              onChange={this.handleChange}
              value={this.state.form.city}
            />
          </FormGroup>
          <FormGroup>
            <Label for="state">State</Label>
            <Input
              type="string"
              name="state"
              onChange={this.handleChange}
              value={this.state.form.state}
            />
          </FormGroup>
          <FormGroup>
            <Label for="price">Price</Label>
            <Input
              type="string"
              name="price"
              onChange={this.handleChange}
              value={this.state.form.price}
            />
          </FormGroup>
          <FormGroup>
            <Label for="bedrooms">Bedrooms</Label>
            <Input
              type="integer"
              name="bedrooms"
              onChange={this.handleChange}
              value={this.state.form.bedrooms}
            />
          </FormGroup>
          <FormGroup>
            <Label for="bathrooms">Bathrooms</Label>
            <Input
              type="integer"
              name="bathrooms"
              onChange={this.handleChange}
              value={this.state.form.bathrooms}
            />
          </FormGroup>
          <FormGroup>
            <Label for="pets">Pets Allowed?</Label>
            <Input
              type="string"
              name="pets"
              onChange={this.handleChange}
              value={this.state.form.pets}
            />
          </FormGroup>
          <FormGroup>
            <Label for="manager">Manager Name</Label>
            <Input
              type="string"
              name="manager"
              onChange={this.handleChange}
              value={this.state.form.manager}
            />
          </FormGroup>
          <FormGroup>
            <Label for="manager_email">Manager Email</Label>
            <Input
              type="string"
              name="manager_email"
              onChange={this.handleChange}
              value={this.state.form.manager_email}
            />
          </FormGroup>
          <br />
          <Button
            id="new-button"
            name="submit"
            color="seconadry"
            onClick={this.handleSubmit}
          >
            Create a New Apartment profile
          </Button>
        </Form>
        {this.state.success && <Redirect to="/apartmentindex" />}
      </>
    );
  }
}

export default ApartmentNew;
