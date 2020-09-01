import React, { Component } from "react";
import PhoneBookModal from "./phonebookModal";
import { setPhoneBook } from "../../services/offer";

class LeftBar extends Component {
  state = {
    isPhoneBookModal: false,

    isContactAdd: false,
    phoneBook_data: {
      first_name: "",
      last_name: "",
      email: "",
      phone_no: "",
    },
  };
  handleContactAdd = () => {
    let isContactAdd = this.state.isContactAdd;
    isContactAdd ? (isContactAdd = false) : (isContactAdd = true);
    this.setState({ isContactAdd });
  };
  handlePhoneBookModal = () => {
    let isPhoneBookModal = this.state.isPhoneBookModal;
    isPhoneBookModal ? (isPhoneBookModal = false) : (isPhoneBookModal = true);
    this.setState({ isPhoneBookModal });
  };

  handleChange = ({ currentTarget: input }) => {
    const phoneBook_data = { ...this.state.phoneBook_data };
    phoneBook_data[input.name] = input.value;
    this.setState({ phoneBook_data });
  };

  handleSave = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const { data } = await setPhoneBook(user.id, this.state.phoneBook_data);
    console.log(data);
  };

  render() {
    const user = this.props.data;
    const phoneBook = this.props.phonelist;
    const { isPhoneBookModal, isContactAdd, isEditModal } = this.state;

    return (
      <nav>
        <div className="max-w-sm mb-4 border border-gray-400 rounded-lg ">
          <div className="flex p-6 lg:flex-col">
            <div className="items-center justify-center w-2/6 lg:w-full">
              <img
                className="w-24 h-24 mx-auto rounded-full "
                src="https://source.unsplash.com/1600x900/?nature,water"
                alt=""
              />
            </div>
            <div className="w-4/6 p-4 lg:text-center lg:w-full">
              <h2 className="text-2xl font-bold text-gray-700 ">
                {user.first_name} {user.last_name}
              </h2>
              <p className="font-medium text-gray-600">{user.occupation}</p>
              <p className="font-medium text-gray-600">{user.email}</p>
              <div className="flex justify-center mt-2 space-x-3">
                <button
                  onClick={this.handlePhoneBookModal}
                  className="flex flex-row gap-2 px-2 py-2 font-semibold text-gray-700 bg-transparent border border-gray-400 rounded-lg focus:outline-none"
                >
                  Phonebook
                  <svg
                    width="1.4em"
                    height="1.4em"
                    viewBox="0 0 16 16"
                    className="pt-1 bi bi-card-list"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"
                    />
                    <circle cx="3.5" cy="5.5" r=".5" />
                    <circle cx="3.5" cy="8" r=".5" />
                    <circle cx="3.5" cy="10.5" r=".5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <section>
            <hr />
            <div className="p-4 text-left">
              <div className="flex mb-1">
                <b className="text-gray-700">Education:</b>
                <p className="pl-2 text-gray-600">{user.education}</p>
              </div>
              <div className="flex mb-1">
                <b className="text-gray-700">Skills:</b>
                <p className="pl-2 text-gray-600">{user.skills}</p>
              </div>
              <div className="flex mb-1">
                <b className="text-gray-700">Certification:</b>
                <p className="pl-2 text-gray-600">{user.certification}</p>
              </div>
            </div>
          </section>
          <PhoneBookModal
            handleContactAdd={this.handleContactAdd}
            isPhoneBookModal={isPhoneBookModal}
            isContactAdd={isContactAdd}
            phoneBook={phoneBook}
            handleModal={this.handlePhoneBookModal}
            onSave={this.handleSave}
            data={this.state.phoneBook_data}
            handleChange={this.handleChange}
          />
        </div>
      </nav>
    );
  }
}

export default LeftBar;
