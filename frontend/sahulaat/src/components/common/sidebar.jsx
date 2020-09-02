import React, { Component } from "react";

class LeftBar extends Component {
  render() {
    const user = this.props.data;

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
        </div>
      </nav>
    );
  }
}

export default LeftBar;
