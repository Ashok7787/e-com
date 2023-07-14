import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { getBookList } from "../Category/CategoryAction";
import { useEffect } from "react";
import HomeBook from "./HomeBook";

function Allbook(props) {
  useEffect(() => {
    props.getBookList();
    // This code for Avoiding  "ResizeObserver loop limit exceeded" this Error-------------------------
    window.addEventListener('error', e => {
      if (e.message === 'ResizeObserver loop limit exceeded') {
          const resizeObserverErrDiv = document.getElementById(
              'webpack-dev-server-client-overlay-div'
          );
          const resizeObserverErr = document.getElementById(
              'webpack-dev-server-client-overlay'
          );
          if (resizeObserverErr) {
              resizeObserverErr.setAttribute('style', 'display: none');
          }
          if (resizeObserverErrDiv) {
              resizeObserverErrDiv.setAttribute('style', 'display: none');
          }
      }
  });
  //-------------------------------------------------------------------------------------------------------
  }, []);
  const category = props.item;
  console.log("new",category);
  const categoryBook = props.bookList.filter(
    (item) => item.categotyName === category
  );
  if(props.fetchingBookListById) {
    return <h1>Loading...</h1>;
  }
 
  return (
    <>
      <div>
        <Slide
          //slidesToScroll={5}
          slidesToShow={6}
          indicators={false}
        >
          {categoryBook.map((item) => (
            <div>
              <HomeBook item={item} />
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
}
const mapStateToProps = ({category }) => ({
  fetchingBookListById:category.fetchingBookListById,
  bookList: category.bookList,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getBookList,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Allbook);
