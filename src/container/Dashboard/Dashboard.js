import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SlideView from "./SlideView";
import { getAllCategory } from "./DashboardAction";
import { getBookList } from "../Category/CategoryAction";
import { Link } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import AllBook from "../book/AllBook";

function Dashboard(props) {
  useEffect(() => {
    props.getAllCategory();
  }, []);

  let categoryname;
  return (
    <>
      <div className="flex flex-row ">
        <h1 className="ml-2 mr-2">Books</h1>
        {props.category.map((element, value, array) => (
          <div className="vl">
            <Link to={`category/${element._id}`}>
              <h1 className="ml-2 mr-2">{element.category}</h1>
            </Link>
          </div>
        ))}
      </div>
      <hr style={{ color: "red" }} />
      <div className="m-5">
        <SlideView />
      </div>
      <div className="m-5">
        <AllBook />
      </div>

      <footer></footer>
    </>
  );
}
const mapStateToProps = ({ dashboard, category }) => ({
  category: dashboard.category,
  bookList: category.bookList,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getAllCategory,
      getBookList,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
