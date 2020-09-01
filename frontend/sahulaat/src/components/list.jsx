import React, { Component } from "react";
import ListCard from "./card/list-card";
import ListGroup from "./common/listGroup";
import { getOfferList, getServices } from "../services/offer";
import SearchBox from "./common/searchBox";

class List extends Component {
  state = {
    offer: [],
    services: [],
    selectedService: parseInt(this.props.match.params.id) || null,
    searchQuery: "",
  };

  async componentDidMount() {
    const { data } = await getServices();
    const services = [{ name: "All Offers", id: "" }, ...data];

    const { data: offer } = await getOfferList();

    this.setState({ services, offer });
  }

  handleInput = ({ currentTarget: input }) => {
    let inputData = this.state.searchQuery;
    inputData = input.value;
    this.setState({ searchQuery: inputData, selectedService: null });
  };

  handleServiceSelect = (serviceID) => {
    this.setState({ selectedService: serviceID, searchQuery: "" });
  };
  getListData = () => {
    const { offer, selectedService, searchQuery } = this.state;

    let data = offer;

    if (searchQuery) {
      data = offer.filter((o) => o.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
    } else if (selectedService) {
      data = offer.filter((d) => d.service === selectedService);
    }
    return data;
  };

  render() {
    const { services } = this.state;
    const data = this.getListData();

    return (
      <div className="mx-10 my-8 lg:flex lg:flex-row">
        <div className="inline-flex flex-wrap mt-6 rounded-lg lg:w-2/12 lg:flex-col ">
          <ListGroup
            data={services}
            onItemSelect={this.handleServiceSelect}
            selectedService={this.state.selectedService}
          />
        </div>

        <div className="lg:w-10/12">
          <div className="mx-auto my-8 lg:w-11/12">
            <SearchBox value={this.state.searchQuery} handleChange={this.handleInput} />
          </div>
          {data && data.map((offer) => <ListCard key={offer.id} data={offer} />)}
        </div>
      </div>
    );
  }
}

export default List;
