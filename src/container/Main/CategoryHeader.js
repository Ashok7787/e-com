import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllCategory } from "../Dashboard/DashboardAction";
import { Link } from "react-router-dom";

function CategoryHeader(props) {
  const [stateChanged, setStateChanged] = useState(false)
  useEffect(() => {
    props.getAllCategory();
    if(stateChanged){
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
      <div className="flex flex-row ">
        <h1 className="ml-2 mr-2">Books</h1>
        {props.category.map((element, value, array) => (
          <div className="vl" >
            <Link to={`category/${element._id}`}>
              <h1 className="ml-2 mr-2" onClick={()=> handleReload()}>{element.category}</h1>
            </Link>
          </div>
        ))}
      </div>
      <hr style={{ borderColor: 'red' }} />
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
