import React from "react";
import CountBox from "../../components/CountBox";

function BookDetailsModal(props) {
  const item = props.item;
  return (
    <>
      <div className="flex flex-row p-10">
        <div className=" w-1/4 flex flex-col gap-4">
          <div>
            <img src={`${item.image}`} alt="new" />
          </div>
          <div className="w-full">
            <CountBox />
          </div>
          <div>
            <button className=" w-full rounded border border-red-600 text-red-600 bg-white text-xl self-end">
              Add To Cart
            </button>
          </div>
          <div>
            <button className=" w-full rounded border border-red-600 text-red-600 bg-white text-xl self-end">
              Add To Wishlist
            </button>
          </div>
        </div>
        <div className=" w-3/4 flex flex-col">
          <div className="ml-10 flex flex-col justify-start">
            <p className="font-serif font-bold text-xl">{item.name}</p>
            <p className="font-serif font-bold text-xl">{item.authorName}</p>
            <p className="font-serif font-bold text-xl">{item.description}</p>
          </div>
          <div className="ml-10 flex items-end">
            <button className=" w-full rounded border border-red-600 text-red-600 bg-white text-xl self-end">
              View Product Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDetailsModal;
