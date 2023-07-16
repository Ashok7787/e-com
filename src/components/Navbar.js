import React, { useState } from "react";
import logonav from "../Assets/Images/logonav.png";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Input, Button, Dropdown, message, Space, Divider } from "antd";
import { Link } from "react-router-dom";
const { Search } = Input;
const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};
const items = [
  {
    label: "New to BooksWagon? Sign up",
    key: "1",
    // icon: <UserOutlined />,
    danger: true,
  },
  {
    label: "Your Account",
    key: "2",
  },
  {
    label: "Personal Settings",
    key: "3",
  },
  {
    label: "Your Orders",
    key: "4",
    // danger: true,
    // disabled: true,
  },
  {
    label: "Your Wishlist",
    key: "5",
  },
  {
    label: "Your Gift Certificate",
    key: "6",
  },
  {
    label: "Your Addresses",
    key: "7",
  },
  {
    label: "Change Password",
    key: "8",
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  const menuStyle = {
    boxShadow: "none",
  };
  const handleIconHover = () => {
    setIsHovered(!isHovered);
  };
  const onSearch = (value) => console.log(value);
  return (
    <>
    <div style={{position:"fixed", zIndex: "9999",width: "100%",top:0}}>
    <nav className="w-full p-5 bg-slate-100 h-25 border-black flex flex-row justify-between">
        <div className="w-1/2 flex flex-row justify-start">
          <div className="w-1/3">
            <Link to={"/"}>
              <img src={logonav} alt="Logo" height={50} width={50} />
            </Link>
          </div>
          <div className="w-2/3">
            <Search
              placeholder="input search text"
              className=" bg-red-500 border-0 rounded-md m-0 p-0"
              onSearch={onSearch}
              enterButton
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-row justify-end">
          <div
            className="flex flex-row"
            onMouseEnter={handleIconHover}
            onMouseLeave={handleIconHover}
          >
            <Dropdown
              menu={{
                items,
              }}
              dropdownRender={(menu) => (
                <div className="shadow-sm shadow-black p-2 bg-white">
                  <Space
                    style={{
                      padding: 8,
                      backgroundColor: "white",
                    }}
                  >
                    <Link to={"/signin"}>
                      <Button className="bg-red-500 w-fit">Log In</Button>
                    </Link>
                  </Space>
                  {React.cloneElement(menu, {
                    style: menuStyle,
                  })}
                  <Divider
                    style={{
                      margin: 0,
                    }}
                  />
                </div>
              )}
            >
              <div className="flex flex-row">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 stroke-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <a href="/">
                  <span>My Account</span>
                </a>
              </div>
            </Dropdown>

            {isHovered ? (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 stroke-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            ) : (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 stroke-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            )}
          </div>
        </div>
        <div className="vl"></div>
        <div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </span>
        </div>
      </nav>
    </div>
      
    </>
  );
}

export default Navbar;
