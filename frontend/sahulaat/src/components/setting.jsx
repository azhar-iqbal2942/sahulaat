import React, { Component } from "react";
import { getuserDetail, updateUserProfile } from "../services/offer";

class Setting extends Component {
  state = {
    currentUser: {
      first_name: "",
      last_name: "",
      email: "",
      phone_no: "",
      skills: "",
      education: "",
      certification: "",
      occupation: "",
      description: "",
    },
  };
  async componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    const { data: User } = await getuserDetail(user.id);
    this.setState({ currentUser: this.mapToViewModel(User) });
  }

  mapToViewModel(user) {
    return {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone_no: user.phone_no,
      skills: user.skills,
      education: user.education,
      certification: user.certification,
      occupation: user.occupation,
      description: user.description,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentUser !== this.state.currentUser) {
      console.log("State has been changed");
    }
  }

  handleChange = ({ currentTarget: input }) => {
    const currentUser = { ...this.state.currentUser };
    currentUser[input.name] = input.value;
    this.setState({ currentUser });
  };

  handleUpdate = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const { data: response } = await updateUserProfile(user.id, this.state.currentUser);
    console.log(response);
  };

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <form>
          <section className="text-gray-700 body-font">
            <div className="container flex flex-wrap items-center justify-center px-5 py-12 mx-auto">
              <div className="flex flex-col w-full p-8 mt-10 rounded-lg lg:w-3/6 md:w-1/2 md:mt-0">
                <h2 className="mb-5 text-2xl font-bold text-gray-600 title-font">Personal Info</h2>

                <input
                  id="first_name"
                  name="first_name"
                  value={currentUser.first_name}
                  onChange={this.handleChange}
                  className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
                  placeholder="First Name"
                  type="text"
                />

                <input
                  id="last_name"
                  name="last_name"
                  value={currentUser.last_name}
                  onChange={this.handleChange}
                  className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
                  placeholder="Last Name"
                  type="text"
                />
                <input
                  id="email"
                  name="email"
                  value={currentUser.email}
                  onChange={this.handleChange}
                  className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
                  placeholder="Email"
                  type="email"
                />
                <input
                  id="phone_no"
                  name="phone_no"
                  value={currentUser.phone_no}
                  onChange={this.handleChange}
                  className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
                  placeholder="Phone no"
                  type="text"
                />
                <h2 className="mb-5 text-2xl font-bold text-gray-600 title-font">Technical Info</h2>
                <input
                  id="skills"
                  name="skills"
                  value={currentUser.skills}
                  onChange={this.handleChange}
                  className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
                  placeholder="Skills"
                  type="text"
                />
                <input
                  id="education"
                  name="education"
                  value={currentUser.education}
                  onChange={this.handleChange}
                  className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
                  placeholder="Education"
                  type="text"
                />
                <input
                  id="certification"
                  name="certification"
                  value={currentUser.certification}
                  onChange={this.handleChange}
                  className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
                  placeholder="Certification"
                  type="text"
                />
                <input
                  id="occupation"
                  name="occupation"
                  value={currentUser.occupation}
                  onChange={this.handleChange}
                  className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
                  placeholder="Occupation"
                  type="text"
                />
                <textarea
                  id="description"
                  name="description"
                  value={currentUser.description}
                  onChange={this.handleChange}
                  className="h-32 px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
                  placeholder="Description"
                  type="text"
                />

                <button
                  onClick={this.handleUpdate}
                  className="px-8 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
                >
                  Update Profile
                </button>
              </div>
            </div>
          </section>
        </form>
      </div>
    );
  }
}

export default Setting;
