import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./container/Auth/SignIn";
import "./App.css";
import NotFound from "./container/Auth/NotFound";
import MainApp from "./container/Main/MainApp";
import { connect } from "react-redux";
import Dashboard from "./container/Dashboard/Dashboard";
import CategoryBookById from "./container/Category/CategoryBookById";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainApp />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/category/:_id" element={<CategoryBookById />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  fetchingUserDetails: user.fetchingUserDetails,
});
export default connect(mapStateToProps)(App);
