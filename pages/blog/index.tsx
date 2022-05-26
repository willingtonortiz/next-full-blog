import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { PostItem } from "../../lib/models/post.model";
import { getPosts } from "../../lib/services/posts";

export const getServerSideProps: GetServerSideProps = async (_) => {
  const posts = await getPosts();

  return {
    props: { posts },
  };
};

type Props = {
  posts: PostItem[];
};

const Blog: NextPage<Props> = ({ posts }) => {
  return (
    <main>
      <Head>
        <title>Blog</title>
      </Head>

      <h1>Blog</h1>

      <ul
        style={{
          color: "dodgerblue",
        }}
      >
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Blog;
