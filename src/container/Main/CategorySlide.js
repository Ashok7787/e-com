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

  return (
    <>
      <hr style={{ borderColor: "gray", borderWidth: "1px" }} />

      <div className="flex w-full justify-between overflow-x-scroll">
        {props.category.map((element, value, array) => (
          <div>
            <Link to={`category/${element._id}`}>
              <div className="flex flex-col">
                <div className="image-container1">
                  <img src={`${element.image}`} alt="new" />
                </div>
                <h1 className="ml-2 mr-2">{element.category}</h1>
              </div>
            </Link>
          </div>
        ))}
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
