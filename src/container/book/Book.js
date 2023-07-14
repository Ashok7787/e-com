import { Card, Modal, Space } from "antd";
import React from "react";
import BookDetailsModal from "./BookDetailsModal";
import { useState } from "react";
const { Meta } = Card;

function Book(props) {
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
 
  return (
    <>
      <Card className="rounded border  m-1 hover:border-gray-400 hover:shadow-md hover:cursor-pointer"  onMouseEnter={handleIconHover}
            onMouseLeave={handleIconHover}>
        <div
          style={{
            height: "250px",
            maxHeight: "260",
            // maxWidth: "200px",
            minWidth: "180",
            padding: "10px",
            backgroundImage: `url(${item.image})`,
          }}
        >
          {/* <img src={`${item.image}`} alt="new" /> */}
        </div>
        {isHovered ? (
        <div style={{ marginTop: "-15%" }}>
          
          <button className=" w-full rounded border border-red-600 text-red-600 bg-white self-end" onClick={openModal}>
            Quick View
          </button>
         
        </div>):null}
        <Modal
             centered
             footer={null}
             open={open}
             onOk={() => setOpen(false)}
             onCancel={() => setOpen(false)}
             width={700}
          >
            <BookDetailsModal item={item}/>
          </Modal>
        <Meta title={item.name} />
        <Space>{item.authorName}</Space>
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

export default Book;
