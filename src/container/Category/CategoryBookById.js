import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCategoryDetailsById } from "./CategoryAction";
import { useParams } from "react-router-dom";

function Category(props) {
  // Get ID from URL
  const params = useParams();

  useEffect(() => {
    props.getCategoryDetailsById(params._id);
  }, []);
  if (props.fetchingCategoryDetails) {
    return <h1>Loading..</h1>;
  }
  return <>
  <div>
    <h1>{props.categoryDetails.category}</h1>
  </div>
  </>;
}
const mapStateToProps = ({ category }) => ({
  categoryDetails: category.categoryDetails,
  fetchingCategoryDetails: category.fetchingCategoryDetails,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getCategoryDetailsById,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Category);
