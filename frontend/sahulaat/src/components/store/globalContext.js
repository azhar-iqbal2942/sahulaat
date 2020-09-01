import React, { Component } from "react";

const SahulaatContext = React.createContext();

class GlobalStateProvider extends Component {
  state = {
    account: {},
    services: [],
    offers: [],
    comments: [],
  };
  render() {
    const { children } = this.props;
    return <SahulaatContext.Provider value={{}}>{children}</SahulaatContext.Provider>;
  }
}

export default SahulaatContext;
export { GlobalStateProvider };
