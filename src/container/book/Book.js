import { Card, Space } from "antd";
import React from "react";
const { Meta } = Card;

function Book(props) {
  const item = props.item;
  console.log("single",item);
  return (
    <>
    <div className="shadow-black shadow-sm">
      
        <div
          style={{
           // borderWidth: "1px",
          //  borderColor: "red",
            height: "170px",
            width: "100px",
          }}
        >
          <img src={`${item.image}`} alt="new" />
        </div>
        <Meta title={item.name} />
        <Space>{item.authorName}</Space>
        <div className="flex flex-row">
          <Space>{item.discountPrice}</Space>
          <Space>
            <text className="line-through">{item.price}</text>
          </Space>
        </div>
     
      </div>
    </>
  );
}

export default Book;
