import { Card, Space } from "antd";
import React from "react";
const { Meta } = Card;

function HomeBook(props) {
  const item = props.item;
  console.log("single", item);
  return (
    <>
      <Card>
        <div
          style={{
            borderWidth: "1px",
            borderColor: "red",
            height: "300px",
            width: "200px",
            padding:"10px"
          }}
        >
          <img src={`${item.image}`} alt="new" />
        </div>
        <Meta title={item.name} />
        <Space>{item.authorName}</Space>
        <div className="flex flex-row justify-center">
          <Space> <text className="text-red-600 text-lg font-semibold">&#x20B9;{item.discountPrice}</text></Space>
          <Space>
            <text className="line-through text-lg ml-2">&#x20B9;{item.price}</text>
          </Space>
        </div>
      </Card>
    </>
  );
}

export default HomeBook;
