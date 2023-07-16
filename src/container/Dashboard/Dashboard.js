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
import TrendingBook from "../book/TrendingBook";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Slider from "./Slider";
import CategorySlide from "../Main/CategorySlide";

function Dashboard(props) {
  const screenSize = props.screenSize;
  useEffect(() => {
    props.getAllCategory();
  }, []);
  if (props.fetchingCategoryDetails) {
    return <h1>Loading...</h1>;
  }
  if (props.fetchingBookListById) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div className="flex flex-row ">
        {/* <h1 className="ml-2 mr-2">Books</h1>
        {props.category.map((element, value, array) => (
          <div className="vl">
            <Link to={`category/${element._id}`}>
              <h1 className="ml-2 mr-2">{element.category}</h1>
            </Link>
          </div>
        ))} */}
      </div>
      {screenSize.width >= 768 ?
      <div>
        <SlideView />
      </div>:null}
      <div className="mx-20 my-10 max-[sm,md]:mx-5">
        <CategorySlide screenSize={screenSize} />
      </div>
      
      <div className="mx-20 max-[sm,md]:mx-5">
        <div className="px-10 max-[sm,md]:mt-10">
          <p className="font-serif font-bold text-2xl">
            <i>Now Trending</i>
          </p>
        </div>

        <TrendingBook screenSize={screenSize}/>
      </div>
      <div className="my-10 px-10 ">
        <Slider />
      </div>
      
      {/* <Suspense fallback={<div> Please Wait... </div>}> */}
        <div>
          {props.category.map((item) => (
            <div>
              <div className="py-10 ml-10 flex justify-start max-[sm,md]:ml-5 max-[sm,md]:mr-5">
                <p className="font-serif font-bold text-2xl">
                  <i>{item.category}</i>
                </p>
              </div>
              <div className="mx-20 max-[sm,md]:mx-5 ">
                <AllBook item={item.category} screenSize={screenSize}/>
              </div>
            </div>
          ))}
        </div>
      {/* </Suspense> */}
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
