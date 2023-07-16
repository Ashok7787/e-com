import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllCategory } from "../Dashboard/DashboardAction";
import { Link } from "react-router-dom";
import { Badge } from "antd";

function CategoryHeader(props) {
  const [stateChanged, setStateChanged] = useState(false);
  useEffect(() => {
    props.getAllCategory();
    if (stateChanged) {
      window.location.reload();
    }
  }, [stateChanged]);
  if (props.fetchingCategoryDetails) {
    return <h1>Loading...</h1>;
  }
  const handleReload = () => {
    setStateChanged(!stateChanged);
  };

  return (
    <>
      <div className="flex justify-center">
        <img src="https://www.bookswagon.com/images/dealicon.png" />
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row ">
          <h1 className="ml-2 mr-2">Books</h1>
          {props.category.map((element, value, array) => (
            <div className="vl">
              <Link to={`category/${element._id}`}>
                <h1 className="ml-2 mr-2" onClick={() => handleReload()}>
                  {element.category}
                </h1>
              </Link>
            </div>
          ))}
        </div>
        <div>
          <Badge count={0} showZero className=" bg-transparent">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </span>
          </Badge>
        </div>
      </div>

      <hr style={{ borderColor: "red" }} />
      <div className=" w-fit h-fit">
        <img src="https://www.bookswagon.com/images/promotionimages/web/1_alltimefavourite.jpg?v=1.6" />
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryHeader);
