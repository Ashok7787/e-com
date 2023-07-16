import React from "react";
import { Row, Col } from "antd";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = (props) => {
  const screenSize = props.screenSize;
  return (
    <footer className="mb-0">
         <div className="grid justify-items-stretch mx-10">
        <div className="grid grid-cols-4 ">
          <div>
            <p className="text-red-600 text-lg font-semibold">Company</p>
            <div className="grid grid-cols-1">
              <a href="#"> About Us </a>
              <a href="#">Career</a>
              <a href="#"> Blog </a>
              <a href="#">Contact Us</a>
            </div>
          </div>
          <div>
            <p className="text-red-600 text-lg font-semibold"> Policies </p>
            <div className="grid grid-cols-1">
              <a href="#">Privacy Policies</a>
              <a href="#">Terms of Use</a>
              <a href="#">Secure Shopping</a>
              <a href="#">Copyright Policy</a>
            </div>
          </div>
          <div>
            <p className="text-red-600 text-lg font-semibold">Help </p>
            <div className="grid grid-cols-1">
              <a href="#">Payment </a>
              <a href="#">Shipping</a>
              <a href="#">Return </a>
              <a href="#">FAQ </a>
            </div>
          </div>
          <div>
            <p className="text-red-600 text-lg font-semibold">Misc </p>
            <div className="grid grid-cols-1">
              <a href="#">Affiliate </a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      
      </div>
      <Row justify="center">
        <Col>
          <a href="https://www.facebook.com">
            <FaFacebookSquare size={24} />
          </a>
        </Col>
        <Col>
          <a href="https://www.twitter.com">
            <FaTwitterSquare size={24} />
          </a>
        </Col>
        <Col>
          <a href="https://www.instagram.com">
            <FaInstagramSquare size={24} />
          </a>
        </Col>
      </Row>
      <div className="flex justify-center">
      <text className="text-black text-lg font-semibold">
          Copyright © 2023 . BookCarrier.com. All Rights Reserved
        </text>
      </div>
     
    </footer>
  );
};

export default Footer;
