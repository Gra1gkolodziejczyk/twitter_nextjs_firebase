import Head from "next/head";
import Sidebar from "../components/Sidebar/Sidebar";
import Tweet from "../components/Tweet/Tweet";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Twitter</title>
      </Head>
      <main className="flex flex-row min-h-screen mx-auto">
        <Sidebar />
        <Tweet />
      </main>
    </div>
  );
};

export default Home;
