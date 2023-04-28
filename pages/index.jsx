import Feed from "../components/Feed/Feed";
import Head from "next/head";
import Sidebar from "../components/Sidebar/Sidebar";
import Widgets from "../components/Widgets/Widgets";
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
  return (
    <div className="flex">
      <Head>
        <title>Twitter</title>
      </Head>
      <main className="flex min-h-screen mx-auto">
        <Sidebar />
        <Feed />
        <Widgets
          resultNews={resultNews.articles}
          randomUserResults={randomUserResults.results}
        />
      </main>
    </div>
  );
};

export default Home;
