import React, { Component } from "react";
import { getOfferDetail, getCommentList, setComment } from "../services/offer";
import Comment from "./common/comment";
import { Link } from "react-router-dom";
// import UserContext from "./context/userContext";

class Detail extends Component {
  state = {
    comment: "",
    user: JSON.parse(localStorage.getItem("user")) || "",
    offerDetail: { author: {} },
    comments: [],
  };
  // static contextType = UserContext;
  handleChange = ({ currentTarget: input }) => {
    let comment = this.state.comment;
    comment = input.value;
    this.setState({ comment });
  };
  handleSubmit = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    await setComment(this.state.comment, user.id, this.state.offerDetail.id);
    const { data: comments } = await getCommentList(this.props.match.params.id);
    this.setState({ comments, comment: "" });
  };
  async componentDidMount() {
    const { data: offerDetail } = await getOfferDetail(this.props.match.params.id);
    const { data: comments } = await getCommentList(this.props.match.params.id);

    this.setState({ offerDetail, comments });
  }
  render() {
    const { offerDetail, comments } = this.state;
    let user = offerDetail.author;
    console.log(this.props);

    return (
      <React.Fragment>
        <div className="grid grid-cols-4 gap-2 mx-16 my-12 ">
          <div className="col-span-4 sm:flex lg:flex-none lg:col-span-3 ">
            <div>
              <h1 className="text-3xl font-semibold text-gray-800">{offerDetail.title}</h1>
              <div className="w-5/6 mt-6 lg:max-w-lg lg:w-full md:w-1/2">
                <img
                  className="object-cover object-center rounded "
                  alt="hero"
                  src="https://source.unsplash.com/user/erondu/720x600"
                />
              </div>
              <div className="mt-3">
                <h3 className="text-xl font-semibold text-gray-800">About </h3>
                <p className="text-gray-600">{offerDetail.description}</p>
              </div>
            </div>
          </div>
          {/* Side bar  */}
          <div className="col-span-4 lg:col-span-1">
            <div className="container flex items-center flex-shrink p-6 border-2 rounded-lg lg:flex-col">
              <div className="w-1/4 lg:w-full ">
                <img
                  className="w-16 h-16 mx-auto rounded-full lg:mx-auto lg:w-24 lg:h-24"
                  src="https://source.unsplash.com/user/erondu/720x600"
                  alt=""
                />
              </div>
              <div className="w-3/4 ml-6 lg:w-full lg:mt-3 lg:text-center">
                <h2 className="text-lg">{user.first_name + " " + user.last_name}</h2>
                <div className="text-blue-500">{user.occupation}</div>
                <div className="text-gray-600">{user.email}</div>
                <div className="text-gray-600">{user.phone_no}</div>
              </div>
            </div>
          </div>
          {/* End sidebar */}
        </div>
        <div>
          {/* Comments Section */}
          <section className="mx-16 mb-12">
            <header>
              <h1 className="my-4 text-xl font-bold text-gray-800">Post a Comment</h1>
            </header>
            <section>
              {!this.state.user && (
                <div className="flex flex-row">
                  <h2 className="text-xl font-semibold text-gray-600">Please Login to add Comment</h2>
                  <Link to={{ pathname: "/login", state: { from: this.props.location } }}>
                    <h2 className="ml-2 text-xl font-semibold text-blue-600">Login</h2>
                  </Link>
                </div>
              )}
              {this.state.user && (
                <div className="flex flex-col lg:flex-row">
                  <textarea
                    id="comment"
                    name="comment"
                    onChange={this.handleChange}
                    value={this.state.comment}
                    className="w-full h-32 px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded resize-none focus:outline-none focus:border-indigo-500 lg:w-6/12"
                    placeholder="Message"
                  />
                  <button
                    onClick={this.handleSubmit}
                    className="w-full px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600 lg:w-1/12 lg:p-0 lg:h-32 lg:ml-2"
                  >
                    Post
                  </button>
                </div>
              )}
            </section>
            <section>
              <Comment comments={comments} />
            </section>
          </section>

          {/* End Comment */}
        </div>
      </React.Fragment>
    );
  }
}

export default Detail;
