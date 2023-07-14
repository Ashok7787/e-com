import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SlideView from "./SlideView";
import { getAllCategory } from "./DashboardAction";
import { getBookList } from "../Category/CategoryAction";
import { Link } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import AllBook from "../book/AllBook";
import { Suspense } from "react";

function Dashboard(props) {
  useEffect(() => {
    props.getAllCategory();
  }, []);
  if (props.fetchingCategoryDetails) {
    return <h1>Loading...</h1>;
  }
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
      <div>
        <SlideView />
      </div>
      <Suspense fallback={<div> Please Wait... </div>}>
        <div>
          {props.category.map((item) => (
            <div>
              <div className="pt-10 pb-10 ml-10 flex justify-start">
                <p className="font-serif font-bold text-2xl">
                  <i>{item.category}</i>
                </p>
              </div>
              <div className="mr-20 ml-20">
                <AllBook item={item.category} />
              </div>
            </div>
          ))}
        </div>
      </Suspense>

      <footer></footer>
    </>
  );
}
const mapStateToProps = ({ dashboard, category }) => ({
  category: dashboard.category,
  fetchingCategoryDetails: category.fetchingCategoryDetails,
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
