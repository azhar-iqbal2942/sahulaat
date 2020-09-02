import React, { Component } from "react";
import { getPhoneBookList, setPhoneBook } from "./../services/offer";

class Team extends Component {
  state = {
    phoneBook: [],
    isContactAdded: false,
    phoneBook_data: {
      first_name: "",
      last_name: "",
      email: "",
      phone_no: "",
    },
  };

  async componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    const { data: phoneBook } = await getPhoneBookList(user.id);
    this.setState({ phoneBook });
  }

  handleContactAdd = () => {
    let isContactAdded = this.state.isContactAdded;
    isContactAdded ? (isContactAdded = false) : (isContactAdded = true);
    this.setState({ isContactAdded });
  };

  handleChange = ({ currentTarget: input }) => {
    const phoneBook_data = { ...this.state.phoneBook_data };
    phoneBook_data[input.name] = input.value;
    this.setState({ phoneBook_data });
  };

  handleSubmit = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    await setPhoneBook(user.id, this.state.phoneBook_data);
    const { data: phoneBook } = await getPhoneBookList(user.id);
    this.setState({ phoneBook });
    this.handleContactAdd();
  };

  render() {
    const { phoneBook, isContactAdded, phoneBook_data } = this.state;
    return (
      <div>
        <section className="text-gray-700 body-font">
          {isContactAdded ? (
            <h2 className="pt-6 text-2xl font-bold text-center ">Add Contact</h2>
          ) : (
            <h2 className="pt-6 text-2xl font-bold text-center ">Your Contacts</h2>
          )}
          <div className="flex flex-row justify-center mt-4">
            {isContactAdded ? (
              <div>
                <button
                  onClick={this.handleContactAdd}
                  className="px-4 py-2 mr-3 font-bold text-blue-500 bg-gray-200 rounded focus:outline-none "
                >
                  back
                </button>
                <button
                  onClick={this.handleSubmit}
                  className="px-4 py-2 font-bold text-white bg-blue-500 rounded focus:outline-none "
                >
                  Save
                </button>
              </div>
            ) : (
              <button
                onClick={this.handleContactAdd}
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded focus:outline-none "
              >
                Add Contact
              </button>
            )}
          </div>
          {isContactAdded ? (
            <form>
              <section className="text-gray-700 body-font">
                <div className="container flex flex-wrap items-center justify-center px-5 py-12 mx-auto">
                  <div className="flex flex-col w-full p-8 mt-10 rounded-lg lg:w-3/6 md:w-1/2 md:mt-0">
                    <input
                      id="first_name"
                      name="first_name"
                      value={phoneBook_data.first_name}
                      onChange={this.handleChange}
                      className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
                      placeholder="First Name"
                      type="text"
                    />

                    <input
                      id="last_name"
                      name="last_name"
                      value={phoneBook_data.last_name}
                      onChange={this.handleChange}
                      className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
                      placeholder="Last Name"
                      type="text"
                    />
                    <input
                      id="email"
                      name="email"
                      value={phoneBook_data.email}
                      onChange={this.handleChange}
                      className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
                      placeholder="Email"
                      type="email"
                    />
                    <input
                      id="phone_no"
                      name="phone_no"
                      value={phoneBook_data.phone_no}
                      onChange={this.handleChange}
                      className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
                      placeholder="Phone no"
                      type="text"
                    />
                  </div>
                </div>
              </section>
            </form>
          ) : (
            <div className="container flex flex-wrap px-5 py-8 mx-auto">
              {phoneBook &&
                phoneBook.map((phone) => (
                  <div key={phone.id} className="relative flex pt-6 pb-4 mx-auto sm:items-center md:w-2/3">
                    <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
                      <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-indigo-500 bg-indigo-100 rounded-full">
                        <img
                          className="w-20 h-20 rounded-full "
                          src="https://source.unsplash.com/1600x900/?nature,water"
                          alt=""
                        />
                      </div>
                      <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
                        <h2 className="mb-1 text-xl font-medium text-gray-900 title-font">{phone.name}</h2>
                        <p className="leading-relaxed">{phone.email}</p>
                        <p className="leading-relaxed">{phone.phone_no}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default Team;
