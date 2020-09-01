import React, { Component } from "react";
import { getServices, setOffer } from "./../../services/offer";
import Select from "react-select";

class OfferForm extends Component {
  state = {
    data: { author_id: "", title: "", description: "", price: "" },
    dropState: false,
    selectedOptions: [],
    selectedOption: null,
  };
  handleSelect = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  handleDropdown = () => {
    let dropState = this.state.dropState;
    dropState ? (dropState = false) : (dropState = true);
    this.setState({ dropState });
  };
  handleSubmit = async () => {
    try {
      const author = JSON.parse(localStorage.getItem("user"));
      await setOffer(this.state.data, this.state.selectedOption.value, author.id);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.error("Error while creating new offer");
      }
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };
  async componentDidMount() {
    const { data: services } = await getServices();
    const selectedOptions = services.map((d) => ({
      value: d.id,
      label: d.name,
    }));

    this.setState({ selectedOptions });
  }

  render() {
    const { data } = this.state;
    const { selectedOptions } = this.state;
    const { selectedOption } = this.state;
    return (
      <section className="text-gray-700 body-font">
        <div className="container flex flex-wrap items-center px-5 py-24 mx-auto">
          <div className="pr-0 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0">
            <h1 className="text-3xl font-medium text-gray-900 title-font">
              Slow-carb next level shoindcgoitch ethical authentic, poko scenester
            </h1>
            <p className="mt-4 leading-relaxed">
              Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan
              tousled etsy austin.
            </p>
          </div>
          <div className="flex flex-col w-full p-8 mt-10 bg-gray-200 rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
            <h2 className="mb-5 text-lg font-medium text-gray-900 title-font">Create New Offer</h2>

            <input
              value={data.title}
              onChange={this.handleChange}
              id="title"
              name="title"
              className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
              placeholder="Title"
              type="text"
            />
            <input
              value={data.description}
              onChange={this.handleChange}
              id="description"
              name="description"
              className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
              placeholder="Description"
              type="text"
            />
            <input
              value={data.price}
              onChange={this.handleChange}
              id="price"
              name="price"
              className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
              placeholder="Price"
              type="text"
            />
            <Select
              placeholder="Service"
              className="mb-4"
              value={selectedOption}
              onChange={this.handleSelect}
              options={selectedOptions}
            />

            <button
              onClick={this.handleSubmit}
              className="px-8 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
            >
              Create Offer
            </button>
            <p className="mt-3 text-xs text-gray-500">Literally you probably haven't heard of them jean shorts.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default OfferForm;
