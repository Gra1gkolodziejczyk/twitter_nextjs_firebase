import React, { useState } from "react";
import News from "./News";
import { BiSearchAlt2 } from "react-icons/bi";

const Widgets = ({ resultNews, randomUserResults }) => {
  const [articleNum, setArticleNum] = useState(3);
  const [randomUserNum, setRandomUserNum] = useState(3);
  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
      <div className="sticky top-0 back flex items-center">
        <div className="flex justify-around pl-4 pr-4 items-center h-[50%] w-[70%] bg-gray-800 rounded-full border border-gray-500">
          <BiSearchAlt2 className="h-6 z-50 text-gray-500" />
          <input
            className="h-full w-[90%] text-white bg-gray-800 align-top"
            type="text"
            placeholder="Rechercher un tweet"
          />
        </div>
      </div>

      <div className="text-white space-y-3 bg-gray-800 rounded-xl pt-2 w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4">
          Qu&apos;est-ce qui c&apos;est passé dernierement ?
        </h4>
        {resultNews.slice(0, articleNum).map((article) => (
          <News key={article.title} article={article} />
        ))}
        <button
          onClick={() => setArticleNum(articleNum + 3)}
          className="text-blue-300 pl-4 pb-3 hover:text-blue-500"
        >
          Voir plus
        </button>
      </div>
      <div className="top-16 sticky text-white space-y-3 bg-gray-800 pt-2 rounded-xl w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4">Qui suivre</h4>
        {randomUserResults.slice(0, randomUserNum).map((ramdomUser) => (
          <div
            key={ramdomUser.login.username}
            className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-700"
          >
            <img
              src={ramdomUser.picture.thumbnail}
              alt="image"
              className="rounded-full"
            />
            <div className="truncate ml-4 leading-5">
              <h4 className="font-bold hover:underline text-[14px] truncate">
                {ramdomUser.login.username}
              </h4>
              <h5 className="text-[14px] text-gray-500 truncate">
                {ramdomUser.name.first + " " + ramdomUser.name.last}
              </h5>
            </div>
            <button className="ml-auto bg-blue-500 text-white rounded-full text-sm px-3.5 py-1.5 font-bold hover:bg-blue-600">
              Suivre
            </button>
          </div>
        ))}
        <button
          onClick={() => setRandomUserNum(randomUserNum + 3)}
          className="text-blue-300 pl-4 pb-3 hover:text-blue-500"
        >
          Voir plus
        </button>
      </div>
    </div>
  );
};

export default Widgets;
