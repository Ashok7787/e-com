import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SlideView from "./SlideView";
import { getAllCategory } from "./DashboardAction";
import { Link } from "react-router-dom";
function Dashboard(props) {
  useEffect(() => {
    props.getAllCategory();
  }, []);
  console.log(props.category);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="flex flex-row">
        <h1 className="ml-2 mr-2">Books</h1>
        {props.category.map((element, value, array) => (
          <div className="vl">
            <Link to={`category/${element._id}`}>
              <h1 className="ml-2 mr-2">{element.category}</h1>
            </Link>
          </div>
        ))}
      </div>
      <hr />
      <SlideView />
      <footer></footer>
    </>
  );
}
const mapStateToProps = ({ dashboard }) => ({
  category: dashboard.category,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getAllCategory,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
