import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import { Post } from "../../lib/models/post.model";
import { getPost } from "../../lib/services/posts";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params as { slug: string | undefined };

  if (!slug) {
    return {
      props: {},
      redirect: { destination: "/blog" },
    };
  }

  const post = await getPost(slug);

  return {
    props: { post },
  };
};

type Props = {
  post: Post;
};

const Blog: NextPage<Props> = ({ post }) => {
  return (
    <main>
      <Head>
        <title>{post.title}</title>
      </Head>

      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </main>
  );
};

export default Blog;
