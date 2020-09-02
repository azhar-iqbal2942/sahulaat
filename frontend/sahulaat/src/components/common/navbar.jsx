import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getServices } from "./../../services/offer";

class Navbar extends Component {
  state = {
    services: [],
    isOpen: false,
    dropState: false,
    serviceMenuState: false,
  };
  async componentDidMount() {
    const { data: services } = await getServices();

    this.setState({ services });
  }
  handleMenu = () => {
    let isOpen = this.state.isOpen;
    isOpen ? (isOpen = false) : (isOpen = true);
    this.setState({ isOpen });
  };
  handleDropdown = () => {
    let dropState = this.state.dropState;
    dropState ? (dropState = false) : (dropState = true);
    this.setState({ dropState });
  };
  handleServiceDropdown = () => {
    let serviceState = this.state.serviceMenuState;
    serviceState ? (serviceState = false) : (serviceState = true);
    this.setState({ serviceMenuState: serviceState });
  };
  render() {
    const token = localStorage.getItem("token");
    const { services } = this.state;

    return (
      <React.Fragment>
        <nav className="bg-gray-800 ">
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* <!-- Mobile menu button--> */}
                <button
                  onClick={this.handleMenu}
                  className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900 focus:text-white"
                  aria-label="Main menu"
                  aria-expanded="false"
                >
                  {/* <!-- Icon when menu is closed. -->
                  <!-- Menu open: "hidden", Menu closed: "block" --> */}
                  <svg
                    className={this.state.isOpen ? "hidden" : "block h-6 w-6"}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  {/* <!-- Icon when menu is open. -->
                    <!-- Menu open: "block", Menu closed: "hidden" --> */}
                  <svg
                    className={this.state.isOpen ? "block bi bi-x h-6 w-6" : "hidden bi bi-x h-6 w-6 "}
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0">
                  <img
                    className="block w-auto h-8 lg:hidden"
                    src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg"
                    alt="Workflow logo"
                  />
                  <img
                    className="hidden w-auto h-8 lg:block"
                    src="https://tailwindui.com/img/logos/workflow-logo-on-dark.svg"
                    alt="Workflow logo"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex">
                    <Link
                      to="/"
                      className="px-3 py-2 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md hover:bg-gray-900 "
                    >
                      Home
                    </Link>
                    {/* Service Dropdown */}
                    <div className="relative inline-block text-left">
                      <div>
                        <span className="rounded-md shadow-sm">
                          <button
                            onClick={this.handleServiceDropdown}
                            type="button"
                            className="px-3 py-2 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md hover:bg-gray-900 focus:outline-none"
                            id="options-menu"
                            aria-haspopup="true"
                            aria-expanded="true"
                          >
                            Services
                          </button>
                        </span>
                      </div>

                      <div
                        className={
                          this.state.serviceMenuState
                            ? "absolute right-0 w-40 mt-4 origin-top-right z-10 rounded-md shadow-lg border border-gray-800"
                            : "hidden"
                        }
                      >
                        <div className="bg-white rounded-md shadow-xs ">
                          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            {services &&
                              services.map((service) => (
                                <Link
                                  to={`/offer/${service.id}`}
                                  onClick={this.handleServiceDropdown}
                                  key={service.id}
                                  className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                  role="menuitem"
                                >
                                  {service.name}
                                </Link>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* End Dropdown */}
                    <Link
                      to="/team"
                      className="px-3 py-2 ml-4 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-900 "
                    >
                      Team
                    </Link>
                    <Link
                      to="/about"
                      className="px-3 py-2 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md hover:bg-gray-900 "
                    >
                      About
                    </Link>
                    <Link
                      to="/contact"
                      className="px-3 py-2 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md hover:bg-gray-900 "
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {!token && (
                  <React.Fragment>
                    <Link
                      to="/register"
                      className="inline-flex items-center px-3 py-1 mt-4 mr-2 text-gray-300 bg-gray-700 rounded border-1 md:mt-0"
                    >
                      Register
                    </Link>
                    <Link
                      to="/login"
                      className="inline-flex items-center px-3 py-1 mt-4 text-gray-300 bg-indigo-500 rounded border-1 md:mt-0"
                    >
                      Login
                    </Link>
                  </React.Fragment>
                )}
                {/* <!-- Profile dropdown --> */}
                {token && (
                  <div className="relative ml-3">
                    <div>
                      <button
                        onClick={this.handleDropdown}
                        className="flex text-sm transition duration-150 ease-in-out border-2 border-transparent rounded-full focus:outline-none focus:border-white"
                        id="user-menu"
                        aria-label="User menu"
                        aria-haspopup="true"
                      >
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </button>
                    </div>

                    <div
                      className={
                        this.state.dropState
                          ? "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg z-10 "
                          : "hidden"
                      }
                    >
                      <div
                        className="py-1 bg-white rounded-md shadow-xs"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu"
                      >
                        <Link
                          to={`/profile`}
                          onClick={this.handleDropdown}
                          className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                          role="menuitem"
                        >
                          Your Profile
                        </Link>
                        <Link
                          to={`/create/offer`}
                          onClick={this.handleDropdown}
                          className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                          role="menuitem"
                        >
                          Create Offer
                        </Link>
                        <Link
                          to={`/setting`}
                          onClick={this.handleDropdown}
                          className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                          role="menuitem"
                        >
                          Setting
                        </Link>

                        <Link
                          to="/logout"
                          onClick={this.handleDropdown}
                          className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                          role="menuitem"
                        >
                          Sign out
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
                {/* End Dropdown */}
              </div>
            </div>
          </div>

          {/* <!--
    Mobile menu, toggle classNamees based on menu state.

    Menu open: "block", Menu closed: "hidden"
  --> */}
          <div className={this.state.isOpen ? "block" : "hidden "}>
            <div className="px-2 pt-2 pb-3">
              <Link
                onClick={this.handleMenu}
                to="/"
                className="block px-3 py-2 text-base font-medium text-white transition duration-150 ease-in-out rounded-md hover:bg-gray-900 "
              >
                Home
              </Link>

              <a
                href="#"
                className="block px-3 py-2 mt-1 text-base font-medium text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-900 "
              >
                Calendar
              </a>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
