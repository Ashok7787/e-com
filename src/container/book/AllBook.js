import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { getBookList } from "../Category/CategoryAction";
import { useEffect } from "react";
import HomeBook from "./HomeBook";
import Book from "./Book";

function Allbook(props) {
  useEffect(() => {
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
  const category = props.item;
  const screenSize = props.screenSize;
  const categoryBook = props.bookList.filter(
    (item) => item.categotyName === category
  );
  if (props.fetchingBookListById) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {screenSize.width >= 768 ? (
        <div>
          <Slide
            //slidesToScroll={5}
            slidesToShow={6}
            indicators={false}
            autoplay={false}
          >
            {categoryBook.map((item) => (
              <div>
                <Book item={item} />
              </div>
            ))}
          </Slide>
        </div>
      ) : (
        <Slide
        slidesToScroll={1}
        slidesToShow={1}
        indicators={false}
        autoplay={false}
        arrows={true}
        responsive={[
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ]}
        >
          {categoryBook.map((item) => (
            <div>
              <Book item={item} />
            </div>
          ))}
        </Slide>
      )}
    </>
  );
}
const mapStateToProps = ({ category }) => ({
  fetchingBookListById: category.fetchingBookListById,
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
