import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

function Post(props) {
  const [like, setLike] = useState(false);
  const cookie = document.cookie;

  const handleDelete = () => {
    console.log("delete");
  };
  const handleLike = () => {
    console.log("delete");
  };
  const handleComment = () => {
    console.log("delete");
  };

  return (
    <div
      className={`bg-black font-manrope tracking-wide bg-opacity-20 w-full md:w-${props.width} rounded-2xl p-4 mt-4 md:mt-6 md:mx-auto text-slate-100 `}
    >
      <div className="w-full flex items-center">
        <img src={props.logo} alt="user" className="w-12 h-12 rounded-[50%]" />
        <div className="w-9/12 flex flex-col">
          <div className="md:flex items-center ml-4">
            <h4 className="mr-2 text-sm">{props.name}</h4>
            <p className="text-slate-400 md:text-sm text-xs font-manrope">
              @{props.username}
            </p>
          </div>
          <p className="text-slate-300 text-xs ml-4 mt-1">{props.bio}</p>
        </div>
        <div className="flex ml-auto items-center justify-end">
          {/* {linkDiv} */}
          {props.username === cookie && (
            <div
              onClick={handleDelete}
              className="m-1 rounded-full bg-purple-500 hover:bg-purple-700 p-2 transition-all duration-200 ease-out cursor-pointer h-max"
            >
              <BsThreeDotsVertical className="" />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col py-4">
        <p className="my-3 md:mb-2 md:mt-0 text-sm tracking-wide">
          {props.description}
        </p>
        {props.image && (
          <img
            src={props.image}
            alt="feed"
            className="rounded-xl max-h-[22rem]"
          />
        )}
      </div>
      <div className=" px-4 flex justify-between bg-black bg-opacity-10 py-2">
        <div className="flex items-center text-xs">
          <BiHeart className=" text-red-700" />
          <h5 className="text-slate-200 ml-1">{props.like}</h5>
        </div>
        <div className="flex items-center text-xs">
          <p>
            {props.commentCnt == null ? "0" : props.commentCnt}{" "}
            {props.commentCnt < 2 || props.commentCnt == null
              ? "comment"
              : "comments"}
          </p>
        </div>
      </div>
      {/* section where like, comment, share, repost button are present */}
      <div className="flex flex-col">
        <div className="flex mt-4 justify-around text-sm w-full">
          <div onClick={handleLike} className="flex cursor-pointer">
            {like ? (
              <FaHeart className="text-xl mr-2 text-red-600" />
            ) : (
              <FiHeart className="text-xl mr-2 text-white" />
            )}
            <p className="text-white">Like</p>
          </div>
          <div onClick={handleComment} className="flex cursor-pointer">
            <p className="text-white hover:text-blue-300 hover:underline">
              Comment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
