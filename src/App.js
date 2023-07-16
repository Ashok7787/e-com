import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./container/Auth/SignIn";
import "./App.css";
import NotFound from "./container/Auth/NotFound";
import MainApp from "./container/Main/MainApp";
import { connect } from "react-redux";
import Dashboard from "./container/Dashboard/Dashboard";
import CategoryBookById from "./container/Category/CategoryBookById";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookDetails from "./container/book/BookDetails";
import CategoryHeader from "./container/Main/CategoryHeader";
import CategoryIdBookId from "./container/book/CategoryIdBookId";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CategoryHeader />
      {/* <Router> */}
      <Routes>
        <Route exact path="/" element={<MainApp />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/category/:_id" element={<CategoryBookById />} />
        <Route exact path="/bookDetails/:_id" element={<BookDetails />} />
        <Route exact path="/category/:_id/bookDetails/:_id" element={<CategoryIdBookId />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </Router> */}
      <Footer />
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  fetchingUserDetails: user.fetchingUserDetails,
});
export default connect(mapStateToProps)(App);
