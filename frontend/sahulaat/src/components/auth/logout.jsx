import { Component } from "react";
import { logout } from "../../services/auth";

class Logout extends Component {
  async componentDidMount() {
    try {
      await logout();
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.error("Error while logging out.");
      }
    }
  }
  render() {
    return null;
  }
}

export default Logout;
