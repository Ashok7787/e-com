import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./container/Auth/SignIn";
import "./App.css";
import NotFound from "./container/Auth/NotFound";
import MainApp from "./container/Main/MainApp";
import { connect } from "react-redux";
import Dashboard from "./container/Dashboard/Dashboard";
import CategoryBookById from "./container/Category/CategoryBookById";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookDetails from "./container/book/BookDetails";
import CategoryHeader from "./container/Main/CategoryHeader";
import CategoryIdBookId from "./container/book/CategoryIdBookId";
import { Layout, Space } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import Sidebar from "./container/Category/Sidebar";
const { Header, Sider, Content } = Layout;

const siderStyle = {
  textAlign: "center",
  //lineHeight: "120px",
  width: "15%",
  height: "50vw",
  color: "#fff",
  backgroundColor: "white",
};

function App(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension(){
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
  }
  useEffect(() => {
    const updateDimension = () => {
        setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);


    return(() => {
        window.removeEventListener('resize', updateDimension);
    })
}, [screenSize])

  return (
    <Layout>
      <div>
        <Navbar collapsed={collapsed} setCollapsed={setCollapsed} screenSize={screenSize}/>

        {screenSize.width >= 768 ? 
          <div className="mt-24">
            <CategoryHeader collapsed={collapsed} setCollapsed={setCollapsed} />
          </div>
         : null}

        <Layout hasSider>
          {collapsed ? <Sider style={siderStyle} onMouseLeave={() => setCollapsed(!collapsed)}><Sidebar /></Sider> : null}
          <Content className=" w-full">
            <Routes>
              <Route exact path="/" element={<MainApp />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/signin" element={<SignIn />} />
              <Route
                exact
                path="/category/:_id"
                element={<CategoryBookById />}
              />
              <Route exact path="/bookDetails/:_id" element={<BookDetails />} />
              <Route
                exact
                path="/category/:_id/bookDetails/:_id"
                element={<CategoryIdBookId />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Content>
        </Layout>
        <Footer screenSize={screenSize} />
      </div>
    </Layout>
  );
}

const mapStateToProps = ({ user }) => ({
  fetchingUserDetails: user.fetchingUserDetails,
});
export default connect(mapStateToProps)(App);
