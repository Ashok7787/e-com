import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import { useState } from "react";
import { useEffect } from "react";

function MainApp(props) {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  return (
    <>
      <div>
       
        <div className=" w-fit h-fit">
          <img src="https://www.bookswagon.com/images/promotionimages/web/1_alltimefavourite.jpg?v=1.6" />
        </div>
        <Dashboard screenSize={screenSize} />
      </div>
    </>
  );
}

export default MainApp;
