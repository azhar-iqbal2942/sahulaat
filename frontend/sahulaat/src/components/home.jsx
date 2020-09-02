import React, { Component } from "react";
import { getServices } from "./../services/offer";

import Banner from "./common/banner";
import MainCard from "./card/home-card";
import Footer from "./common/footer";

class Home extends Component {
  state = {
    services: [],
  };
  async componentDidMount() {
    const { data: services } = await getServices();
    this.setState({ services });
  }
  render() {
    const { services } = this.state;

    return (
      <React.Fragment>
        <Banner />
        <MainCard data={services} />
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default Home;
