import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/common/navbar";
import Home from "./components/home";
import List from "./components/list";
import Detail from "./components/detail";
import Profile from "./components/profile";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Logout from "./components/auth/logout";
import OfferForm from "./components/form/offerForm";
import Setting from "./components/setting";
import Footer from "./components/common/footer";
import "./style/tailwind/tailwind.output.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Switch>
          <Route path="/setting" component={Setting} />
          <Route path="/create/offer" component={OfferForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/offer/detail/:id" component={Detail} />
          <Route path="/offer/:id" component={List} />
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
