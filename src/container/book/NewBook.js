import { Badge, Card, Modal, Space } from "antd";
import React from "react";
import BookDetailsModal from "./BookDetailsModal";
import { useState } from "react";
import { Link } from "react-router-dom";
const { Meta } = Card;

function NewBook(props) {
    const categoryParams = props.categoryParams;
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
  const item = props.item;
  const discount = item.price - item.discountPrice;
  const percentage = Math.round(discount / (item.price / 100));
  return (
    <>
      <div
        className="rounded border p-2  m-1 hover:border-gray-400 hover:shadow-md hover:cursor-pointer"
        onMouseEnter={handleIconHover}
        onMouseLeave={handleIconHover}
      >
        <Link to={`bookDetails/${item._id}`}>
          <div
            style={{
              height: "250px",
              maxHeight: "260",
              // maxWidth: "200px",
              minWidth: "180",

              backgroundImage: `url(${item.image})`,
            }}
            className="grid justify-items-end"
          >
            <div class="rounded-full bg-red-600 h-10 w-10 flex justify-center items-center">
              <p className="text-white text-sm font-semibold">
                {percentage || 0}%
              </p>
            </div>
            {/* <img src={`${item.image}`} alt="new" /> */}
          </div>
        </Link>
        {isHovered ? (
          <div style={{ marginTop: "-15%" }}>
            <button
              className=" w-full rounded border border-red-600 text-red-600 bg-white self-end"
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
        <Meta title={item.name} />
        <Space>{item.authorName}</Space>
        <div className="flex flex-row justify-center">
          <Space>
            <p className="text-red-600 text-lg font-semibold">
              &#x20B9;{item.discountPrice}
            </p>
          </Space>
          <Space>
            <p className="line-through text-lg ml-2">&#x20B9;{item.price}</p>
          </Space>
        </div>
      </div>
    </>
  );
}

export default NewBook;
