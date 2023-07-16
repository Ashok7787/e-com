import CountBox from "../../components/CountBox";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBookDetails } from "../Category/CategoryAction";
import { useParams } from "react-router-dom";

function BookDetails(props) {
  const params = useParams();
  const item = props.bookDetails;
  useEffect(() => {
    props.getBookDetails(params._id);
  }, []);
  if (props.fetchingBookDetailsById) {
    return <h1>Loading..</h1>;
  }
  return (
    <>
      <div className="flex flex-row p-10 ml-20 max-[sm,md]:flex  max-[sm,md]:flex-col max-[sm,md]:ml-0   max-[sm,md]:p-0">
        <div className="max-sm:w-full max-md:w-full ">
          <img src={`${item.image}`} alt="new" />
        </div>
        <div className=" w-1/2 flex flex-col justify-start">
          <div>
            <p className="font-serif font-bold text-xl">{item.name}</p>
          </div>
          <div>
            <p className="font-serif font-bold text-xl">{item.authorName}</p>
          </div>
          <div>
            <p className="font-serif font-bold text-xl">{item.description}</p>
          </div>

          <div className="flex flex-row max-[sm,md]:flex-col">
            <button className=" w-full h-10 m-2 rounded text-white bg-red-600 text-xl self-end hover:bg-red-400">
              Buy Now
            </button>

            <button className=" w-full h-10 m-2 rounded border border-red-600 text-red-600 bg-white text-xl self-end">
              Add To Wishlist
            </button>
          </div>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 justify-items-start ml-20">
        <p className="font-serif font-bold text-2xl">
          <i>About the Book</i>
        </p>
        <p>
          THE PHENOMENAL INTERNATIONAL BESTSELLER - 1 MILLION COPIES
          SOLDTransform your life with tiny changes in behaviour - starting now.
          People think that when you want to change your life, you need to think
          big.
        </p>
      </div>
    </>
  );
}
const mapStateToProps = ({ category }) => ({
  bookDetails: category.bookDetails,
  fetchingBookDetailsById: category.fetchingBookDetailsById,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getBookDetails,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
