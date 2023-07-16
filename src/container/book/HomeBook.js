import { Badge, Card, Modal, Space } from "antd";
import React from "react";
import BookDetailsModal from "./BookDetailsModal";
import { useState } from "react";
import { Link } from "react-router-dom";
const { Meta } = Card;

function HomeBook(props) {
  const item = props.item;
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleIconHover = () => {
    setIsHovered(!isHovered);
  };
  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };
  const discount = item.price - item.discountPrice;
  const percentage = Math.round(discount / (item.price / 100));
  return (
    <>
      <Card
        className=" hover:cursor-pointer"
        onMouseEnter={handleIconHover}
        onMouseLeave={handleIconHover}
      >
        <div style={{ marginBottom: "-10%", display: "flex", justifyContent: "flex-end",overflow: "revert" }}>
          <div class="rounded-full bg-red-600 h-10 w-10 flex justify-center items-center">
            <p className="text-white text-sm font-semibold">
              {percentage || 0}%
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border border-red-600 py-6">
          <Link to={`bookDetails/${item._id}`}>
            <div className="image-container">
              <img src={`${item.image}`} alt="new" />
            </div>
          </Link>
        
        </div>
        {isHovered ? (
            <div style={{ marginTop: "-15%" }}>
              <button
                className=" w-full rounded border font-bold border-red-600 text-red-600 bg-white "
                onClick={openModal}
              >
                Quick View
              </button>
            </div>
          ) : null}
          <Modal
            centered
            footer={null}
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={700}
          >
            <BookDetailsModal item={item} />
          </Modal>
        <div className="flex flex-col justify-center items-center">
          <Space>{item.name}</Space>
          <Space>{item.authorName}</Space>
        </div>

        <div className="flex flex-row justify-center">
          <Space>
            <text className="text-red-600 text-lg font-semibold">
              &#x20B9;{item.discountPrice}
            </text>
          </Space>
          <Space>
            <text className="line-through text-lg ml-2">
              &#x20B9;{item.price}
            </text>
          </Space>
        </div>
      </Card>
    </>
  );
}

export default HomeBook;
