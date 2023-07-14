import React from "react";
import Book from "./Book";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { getAllCategory } from "../Dashboard/DashboardAction";
import { getBookList } from "../Category/CategoryAction";
import { useEffect } from "react";

function Allbook(props) {
  useEffect(() => {
    props.getAllCategory();
    props.getBookList();
  }, []);
  return (
    <>
      <div>
        <h1>Best Seller</h1>
        <Slide
          //slidesToScroll={5}
          slidesToShow={6}
          indicators={false}
        >
          {props.bookList.map((item) => (
            <div>
              <Book item={item} />
            </div>
          ))}
        </Slide>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Allbook);
