import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllCategory } from "../Dashboard/DashboardAction";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import { Card } from "antd";

function CategorySlide(props) {
  useEffect(() => {
    props.getAllCategory();
  }, []);
  if (props.fetchingCategoryDetails) {
    return <h1>Loading...</h1>;
  }
  console.log("catg",props.category);
  return (
    <>
      <hr style={{ borderColor: "gray", borderWidth: "1px" }} />
      <div>
        <Slide
          //slidesToScroll={5}
          slidesToShow={6}
          indicators={false}
          autoplay={false}
        >
          {props.category.map((element, value, array) => (
          <div className="vl">
            <Link to={`category/${element._id}`}>
              <h1 className="ml-2 mr-2">{element.category}</h1>
            </Link>
          </div>
        ))}
        </Slide>
      </div>
      <hr style={{ borderColor: "gray", borderWidth: "1px" }} />
    </>
  );
}

const mapStateToProps = ({ dashboard, category }) => ({
  category: dashboard.category,
  fetchingCategoryDetails: category.fetchingCategoryDetails,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getAllCategory,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CategorySlide);
