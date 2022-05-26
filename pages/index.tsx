import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>My Personal Website</h1>

        <div
          style={{
            display: "flex",
            flexFlow: "row nowrap",
            gap: "1rem",
            color: "dodgerblue",
          }}
        >
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/about"}>About us</Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
