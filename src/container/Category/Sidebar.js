import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllCategory } from "../Dashboard/DashboardAction";
import { Link } from "react-router-dom";
import { Badge } from "antd";

function Sidebar(props) {
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
      <div className="flex flex-col justify-start">
        {props.category.map((element, value, array) => (
          <div className="w-full h-10">
            <Link to={`category/${element._id}`}>
              <h1 className=" text-black text-xl hover:text-red-600" onClick={() => handleReload()}>
                {element.category}
              </h1>
            </Link>
          </div>
        ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
