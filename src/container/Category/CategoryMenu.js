import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllCategory } from "../Dashboard/DashboardAction";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function CategoryMenu(props) {
 
  const [stateChanged, setStateChanged] = useState(false);
  useEffect(() => {
    props.getAllCategory();
    if (stateChanged) {
      window.location.reload();
    }
  }, [stateChanged]);
  if (props.fetchingCategory) {
    return <h1>Loading...</h1>;
  }


  const handleClose = () => {
    props.setAnchorEl(null);
    setStateChanged(!stateChanged);
  };

  return (
    <div>
      
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={props.anchorEl}
        open={props.open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {props.category.map((element, value, array) => (
          <div className="w-full h-10">
            <Link to={`category/${element._id}`}>
              <MenuItem onClick={handleClose}>{element.category}</MenuItem>
            </Link>
          </div>
        ))}
      </Menu>
    </div>
  );
}
const mapStateToProps = ({ dashboard, category }) => ({
  category: dashboard.category,
  fetchingCategory: dashboard.fetchingCategory,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getAllCategory,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CategoryMenu);
