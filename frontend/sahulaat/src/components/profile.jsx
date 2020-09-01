import React, { Component } from "react";
import LeftBar from "./common/sidebar";
import { getUserOfferList, getuserDetail, getPhoneBookList } from "./../services/offer";
// import UserContext from "./context/userContext";

class Profile extends Component {
  state = {
    userOffer: [],
    userDetail: {},
    phonebook: [],
  };
  async componentDidMount() {
    const { data: userOffer } = await getUserOfferList(1);
    const { data: userDetail } = await getuserDetail(1);
    const { data: phonebook } = await getPhoneBookList();
    this.setState({ userOffer, userDetail, phonebook });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }
  // static contextType = UserContext;
  render() {
    const { userOffer } = this.state;
    const { userDetail } = this.state;
    // console.log("Render", this.context);

    return (
      <div className="flex flex-col mt-12 lg:flex-row">
        <div className="w-full mx-12 lg:w-4/12">
          <LeftBar data={userDetail} phonelist={this.state.phonebook} />
        </div>
        <div className="w-full lg:w-8/12 ">
          <section>
            {userOffer &&
              userOffer.map((offer) => (
                <div key={offer.id}>
                  <div className="max-w-sm mx-auto mb-4 ml-0 mr-6 shadow-xl lg:max-w-full lg:flex">
                    <div
                      className="flex-none h-48 overflow-hidden text-center bg-cover rounded-t lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
                      style={{ backgroundImage: "url(https://source.unsplash.com/1600x900/?nature,water)" }}
                      title="Thumbnail"
                    />
                    <div className="flex flex-col justify-between w-full p-4 leading-normal bg-white border-b border-l border-r border-gray-400 rounded-b lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r">
                      <div className="mb-8">
                        <div className="mb-2 text-xl font-bold text-gray-700">{offer.title}</div>
                        <p className="text-base text-gray-700">{offer.description}</p>
                      </div>
                      <div className="flex items-center">
                        <img
                          className="w-10 h-10 mr-4 rounded-full"
                          src="https://source.unsplash.com/1600x900/?human"
                          title="Avator"
                          alt="Avatar"
                        />
                        <div className="text-sm">
                          <p className="leading-none text-gray-900">Azhar Iqbal</p>
                          <p className="text-gray-600">Aug 18</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </section>
        </div>
      </div>
    );
  }
}

export default Profile;
