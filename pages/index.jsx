import Feed from "../components/Feed/Feed"
import Head from "next/head"
import Sidebar from "../components/Sidebar/Sidebar"

const Home = () => {
  return (
    <div>
      <Head>
        <title>Twitter</title>
      </Head>
      <main className="flex min-h-screen max-w-7xl mx-auto">
      <Sidebar />
      <Feed />
      </main>
    </div>
  )
}

export default Home