import React, { Component } from "react";
import Joi from "joi-browser";
import { register } from "../../services/auth";

class Register extends Component {
  state = {
    account: { first_name: "", last_name: "", email: "", password: "" },
    errors: {},
  };
  schema = {
    first_name: Joi.string().required().label("First Name"),
    last_name: Joi.string().required().label("Last Name"),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required()
      .label("Email"),
    password: Joi.string().required().label("Password"),
  };
  validate = () => {
    const { error } = Joi.validate(this.state.account, this.schema, { abortEarly: false });
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

  handleSubmit = async () => {
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;

    try {
      const { account } = this.state;
      const response = await register(account.first_name, account.last_name, account.email, account.password);
      console.log(response);
      window.location = "/login";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.error("There is an error during login ");
      }
    }
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };
  render() {
    const { account, errors } = this.state;
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
            <h2 className="mb-5 text-lg font-medium text-gray-900 title-font">Register</h2>
            <input
              value={account.first_name}
              onChange={this.handleChange}
              id="first_name"
              name="first_name"
              className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
              placeholder="First Name"
              type="text"
            />
            {errors.first_name && <p className="text-xs italic text-red-500">{errors.first_name}</p>}

            <input
              value={account.last_name}
              onChange={this.handleChange}
              id="last_name"
              name="last_name"
              className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
              placeholder="Last Name"
              type="text"
            />
            {errors.last_name && <p className="text-xs italic text-red-500">{errors.last_name}</p>}

            <input
              value={account.email}
              onChange={this.handleChange}
              id="email"
              name="email"
              className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
              placeholder="Email"
              type="Email"
            />
            {errors.email && <p className="text-xs italic text-red-500">{errors.email}</p>}

            <input
              value={account.password}
              onChange={this.handleChange}
              id="password"
              name="password"
              className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
              placeholder="Password"
              type="password"
            />
            {errors.password && <p className="text-xs italic text-red-500">{errors.password}</p>}

            <button
              onClick={this.handleSubmit}
              className="px-8 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
            >
              Register
            </button>
            <p className="mt-3 text-xs text-gray-500">Literally you probably haven't heard of them jean shorts.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Register;
