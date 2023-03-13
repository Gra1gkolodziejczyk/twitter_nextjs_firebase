import Head from "next/head"
import Sidebar from "../components/Sidebar/Sidebar"

const Home = () => {
  return (
    <div>
      <Head>
        <title>Twitter</title>
      </Head>
      <main className="flex min-h-screen mx-auto">
      <Sidebar />
      </main>
    </div>
  )
}

export default Home