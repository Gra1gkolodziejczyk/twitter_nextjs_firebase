import { BsTrash3 } from "react-icons/bs";
import { BiShareAlt, BiMessageAlt } from 'react-icons/bi';

import { AiOutlineHeart } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoMdStats } from "react-icons/io";
import React from "react";

const Post = ({ post }) => {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-700">
      <img src={post.userImg} className="h-11 w-11 rounded-full mr-4" />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {post.name}
            </h4>
            <span className="text-sm sm:text-[15px]">@{post.username} - </span>
            <span className="text-sm sm:text-[15px] hover:underline">
              {post.timestamp}
            </span>
          </div>
          <FiMoreHorizontal className="h-10 hoverEffect w-10 hover:bg-gray-700 hover:text-sky-500 p-2 " />
        </div>
        <p className="text-gray-800 text-[15px sm:text-[16px] mb-2 text-white">
          {post.text}
        </p>
        <img src={post.img} className="rounded-2xl mr-2" />
        <div className="flex justify-between text-gray-500 p-2">
          <BiMessageAlt className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-gray-700" />
          <BsTrash3 className="h-9 w-9 hoverEffect p-2 hover:text-red-500 hover:bg-gray-700" />
          <AiOutlineHeart className="h-9 w-9 hoverEffect p-2 hover:text-red-500 hover:bg-gray-700" />
          <BiShareAlt className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-gray-700" />
          <IoMdStats className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default Post;
