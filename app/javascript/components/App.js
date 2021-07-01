import React from "react";
import Header from "./components/Header";
//import mockApartments from "./mockApartments.js";
import Home from "./pages/Home";
import ApartmentIndex from "./pages/ApartmentIndex";
import ApartmentShow from "./pages/ApartmentShow";
import ApartmentNew from "./pages/ApartmentNew";
import ApartmentEdit from "./pages/ApartmentEdit";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: [],
    };
  }
  componentDidMount() {
    this.apartmentIndex();
  }
  apartmentIndex = () => {
    fetch("http://localhost:3000/apartments")
      .then((response) => {
        return response.json();
      })
      .then((apartmentsArray) => {
        // set the state with the data from the backend into the empty array
        this.setState({ apartments: apartmentsArray });
        console.log(apartmentsArray);
      })
      .catch((errors) => {
        console.log("index errors:", errors);
      });
  };

  createNewApartment = (newapartment) => {
    console.log(newapartment);
  };
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    console.log(this.state.apartments);
    return (
      <>
        <Router>
          <Header
            sign_in_route={sign_in_route}
            sign_out_route={sign_out_route}
            logged_in={logged_in}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/apartmentshow/:id"
              render={(props) => {
                let id = props.match.params.id;
                let apartment = this.state.apartments.find(
                  (apartment) => apartment.id === +id
                );
                return <ApartmentShow apartment={apartment} />;
              }}
            />
            <Route
              path="/apartmentnew"
              render={(props) => (
                <ApartmenttNew createNewApt={this.createNewApt} />
              )}
            />
            <Route
              path="/apartmentindex"
              render={(props) => (
                <ApartmentIndex apartment={this.state.apartments} />
              )}
            />
            <Route
              exact
              path={"/apartmentedit/:id"}
              render={(props) => {
                let id = props.match.params.id;
                let apartment = this.state.apartments.find(
                  (apartment) => apartment.id === parseInt(id)
                );
                return (
                  <ApartmentEdit
                    apartment={apartment}
                    updateAparmentt={this.updateAparmentt}
                  />
                );
              }}
            />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
