import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCategoryDetailsById, getBookList } from "./CategoryAction";
import { useParams } from "react-router-dom";
import Book from "../book/Book";
import NewBook from "../book/NewBook";

function Category(props) {
  // Get ID from URL
  const params = useParams();
  const categoryName = props.categoryDetails.category;

  useEffect(() => {
    props.getCategoryDetailsById(params._id);
    props.getBookList();
    // This code for Avoiding  "ResizeObserver loop limit exceeded" this Error-------------------------
    window.addEventListener("error", (e) => {
      if (e.message === "ResizeObserver loop limit exceeded") {
        const resizeObserverErrDiv = document.getElementById(
          "webpack-dev-server-client-overlay-div"
        );
        const resizeObserverErr = document.getElementById(
          "webpack-dev-server-client-overlay"
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute("style", "display: none");
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute("style", "display: none");
        }
      }
    });
    //-------------------------------------------------------------------------------------------------------
  }, []);
  if (props.fetchingCategoryDetails) {
    return <h1>Loading..</h1>;
  }
  return (
    <>
      <div>
        <h1>{props.categoryDetails.category}</h1>
        <div className="grid grid-cols-5 gap-4">
          {props.bookList
            .filter((item) => item.categotyName === categoryName)
            .map((item) => (
              <div >
                <NewBook item={item} categoryParams={params} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
const mapStateToProps = ({ category }) => ({
  categoryDetails: category.categoryDetails,
  fetchingCategoryDetails: category.fetchingCategoryDetails,
  bookList: category.bookList,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getCategoryDetailsById,
      getBookList,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Category);
