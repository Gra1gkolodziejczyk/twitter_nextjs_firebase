import { BsStars } from "react-icons/bs";
import Input from "../Input/Input";
import Post from "../Post/Post";
import React from "react";

const Feed = () => {
  const posts = [
    {
      id: "1",
      name: "Graig Kolodziejczyk",
      username: "GraigCode",
      userImg:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      img: "https://pbs.twimg.com/media/FrnHITZWcAACaKG?format=jpg&name=small",
      text: "Nice job",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "Graig Kolodziejczyk",
      username: "GraigCode",
      userImg:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      img: "https://pbs.twimg.com/media/FsyDuv5XwAEMOep?format=jpg&name=large",
      text: "Nice job!!",
      timestamp: "2 days ago",
    },
    {
      id: "3",
      name: "Graig Kolodziejczyk",
      username: "GraigCode",
      userImg:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      img: "https://pbs.twimg.com/media/FsteoeCXgAIYGVE?format=jpg&name=small",
      text: "Nice job!!!!",
      timestamp: "2 minutes ago",
    },
  ];
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-700 xl:min-w-[576px] sm:ml-[73px] flew-grow max-w-xl">
      <div className="flex align-middle py-4 px-6 sticky top-0 z-50 justify-around border-b border-gray-700 backdrop-blur-md">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer sticky">
          Home
        </h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <BsStars className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
};

export default Feed;
