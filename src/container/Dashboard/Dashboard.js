import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SlideView from "./SlideView";

function dashboard(props) {
  useEffect(() => {
    
  }, []);
  return (
    <>
      <header>       
        <Navbar />
      </header>
     <SlideView />
      <footer>
        
      </footer>
    </>
  );
}
const mapStateToProps = ({ auth, order }) => ({
 
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(dashboard);

