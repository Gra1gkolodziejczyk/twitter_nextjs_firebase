import { React, useState, useEffect } from "react";

import Feed from "../components/Feed/Feed";
import Head from "next/head";
import Sidebar from "../components/Sidebar/Sidebar";
import Widgets from "../components/Widgets/Widgets";
import { Player } from "@lottiefiles/react-lottie-player";

export async function getServerSideProps() {
  const resultNews = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/business/in.json"
  ).then((res) => res.json());
  const randomUserResults = await fetch(
    "https://randomuser.me/api/?results=30&inc=name,login,picture"
  ).then((res) => res.json());
  return {
    props: {
      resultNews,
      randomUserResults,
    },
  };
}

const Home = ({ resultNews, randomUserResults }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex">
      <Head>
        <title>Twitter</title>
      </Head>
      {loading ? (
        <div className="w-screen h-screen flex flex-col align-middle justify-center">
          <Player
            autoplay
            loop
            src="https://assets9.lottiefiles.com/packages/lf20_wGsXfA.json"
            style={{
              height: "400px",
              width: "400px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            speed={1}
          ></Player>
        </div>
      ) : (
        <main className="flex min-h-screen mx-auto">
          <Sidebar />
          <Feed />
          <Widgets
            resultNews={resultNews.articles}
            randomUserResults={randomUserResults.results}
          />
        </main>
      )}
    </div>
  );
};

export default Home;
