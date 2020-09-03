import React, { Component } from "react";
import Joi from "joi-browser";
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
    errors: {},
  };

  schema = {
    first_name: Joi.string().required().label("First Name"),
    last_name: Joi.string().required().label("Last Name"),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required()
      .label("Email"),
    phone_no: Joi.number().integer().required().label("Phone No"),
  };
  validate = () => {
    const { error } = Joi.validate(this.state.phoneBook_data, this.schema, { abortEarly: false });
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
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
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const phoneBook_data = { ...this.state.phoneBook_data };
    phoneBook_data[input.name] = input.value;
    this.setState({ phoneBook_data, errors });
  };

  handleSubmit = async () => {
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;

    const user = JSON.parse(localStorage.getItem("user"));
    await setPhoneBook(user.id, this.state.phoneBook_data);
    const { data: phoneBook } = await getPhoneBookList(user.id);
    this.setState({ phoneBook });
    this.handleContactAdd();
  };

  render() {
    const { phoneBook, isContactAdded, phoneBook_data, errors } = this.state;
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
                  className={
                    this.validate()
                      ? "px-8 py-2 text-lg text-white bg-indigo-500 border-0 rounded  focus:outline-none hover:bg-indigo-600 opacity-50 cursor-not-allowed"
                      : "px-8 py-2 text-lg text-white bg-indigo-500 border-0 rounded  focus:outline-none hover:bg-indigo-600"
                  }
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
                    {errors.first_name && <p className="text-xs italic text-red-500">{errors.first_name}</p>}

                    <input
                      id="last_name"
                      name="last_name"
                      value={phoneBook_data.last_name}
                      onChange={this.handleChange}
                      className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
                      placeholder="Last Name"
                      type="text"
                    />
                    {errors.last_name && <p className="text-xs italic text-red-500">{errors.last_name}</p>}

                    <input
                      id="email"
                      name="email"
                      value={phoneBook_data.email}
                      onChange={this.handleChange}
                      className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
                      placeholder="Email"
                      type="email"
                    />
                    {errors.email && <p className="text-xs italic text-red-500">{errors.email}</p>}

                    <input
                      id="phone_no"
                      name="phone_no"
                      value={phoneBook_data.phone_no}
                      onChange={this.handleChange}
                      className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
                      placeholder="Phone no"
                      type="text"
                    />
                    {errors.phone_no && <p className="text-xs italic text-red-500">{errors.phone_no}</p>}
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
