import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCategoryDetailsById, getBookList } from "./CategoryAction";
import { useParams } from "react-router-dom";
import Book from "../book/Book";

function Category(props) {
  // Get ID from URL
  const params = useParams();
  const categoryName = props.categoryDetails.category;

  useEffect(() => {
    props.getCategoryDetailsById(params._id);
    props.getBookList();
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
                <Book item={item} />
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
